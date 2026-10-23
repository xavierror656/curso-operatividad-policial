"""Empaqueta de forma reproducible los datos disponibles para el curso.

Ejecutar desde cualquier directorio con ``python datos/empaquetar_practica.py``.
Los GeoJSON se leen de ``public/datos/capas-sspm`` sin alterar sus bytes.
Las rutas de los archivos dentro de cada ZIP son planas.
"""

from __future__ import annotations

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo


DATOS = Path(__file__).resolve().parent.parent / "public" / "datos"
CAPAS = DATOS / "capas-sspm"
CSV = (
    "incidentes_practica_sucio.csv",
    "incidentes_practica_depurado.csv",
)
GEOJSON = (
    "colonias.geojson",
    "cuadrantes.geojson",
    "distritos.geojson",
    "juarez-distritos.geojson",
    "municipios.geojson",
    "sectores.geojson",
)
GITIGNORE = ".gitignore"
LEEME_NOMBRE = "LEEME-practica.txt"


def leeme(incluye_csv: bool) -> str:
    encabezado = (
        "PAQUETE COMPLETO DE DATOS · CURSO DE OPERATIVIDAD POLICIAL"
        if incluye_csv else "CAPAS GEOJSON · CURSO DE OPERATIVIDAD POLICIAL"
    )
    uso_csv = (
        """
CSV SINTÉTICOS (solo paquete completo)
------------------------------------
incidentes_practica_sucio.csv: Día 1, depuración de 1,058 registros ficticios.
incidentes_practica_depurado.csv: Días 2 y 3, 928 registros ficticios.
En QGIS, cargue el CSV depurado como texto delimitado: X = longitud,
Y = latitud, SRC de la geometría = EPSG:4326.

Los valores «Colonia Demo ...» de la columna colonia del CSV son inventados.
NO se unen por nombre con las colonias reales del GeoJSON. Las coordenadas
ficticias del CSV tampoco se generaron para corresponder a esos polígonos.
No atribuya esos puntos a una colonia, sector o cuadrante real.
"""
        if incluye_csv else """
El paquete completo de práctica, disponible por separado, añade dos CSV
SINTÉTICOS. Sus valores «Colonia Demo ...» no se unen por nombre con estas
colonias reales ni representan sucesos reales.
"""
    )
    return f"""{encabezado}

CAPAS DEL REPOSITORIO SSPM
--------------------------
colonias.geojson: 1,126 objetos de colonias (Polygon y MultiPolygon).
cuadrantes.geojson: 22 cuadrantes.
distritos.geojson: siete distritos.
juarez-distritos.geojson: siete distritos en otra capa.
municipios.geojson: un municipio.
sectores.geojson: 172 sectores.

Estas seis capas conservan los nombres, límites y atributos originales de
los archivos fuente, incluidos los campos de conteo de colonias. No se ha
certificado aquí su vigencia para decisiones operativas. Use solo las capas
que necesite para la práctica y confirme los límites con la institución.

Los GeoJSON están en CRS84: longitud/latitud en WGS 84, que QGIS abre como
EPSG:4326. Para cargarlos, arrastre los archivos .geojson al lienzo de QGIS.
El archivo .gitignore viene de la carpeta fuente: NO es una capa y NO se abre
en QGIS; puede ignorarlo al hacer la práctica.

Dos objetos presentan geometría inválida por autointersección de un anillo:
ID_COLO 759 en colonias.geojson y VALLE en juarez-distritos.geojson. QGIS
abre ambas capas, pero esas geometrías pueden fallar en geoprocesamiento
avanzado. Las capas no han sido corregidas ni simplificadas.
{uso_csv}
"""


def info(nombre: str) -> ZipInfo:
    # Fecha y permisos constantes para producir los mismos bytes en cada run.
    entrada = ZipInfo(nombre, date_time=(1980, 1, 1, 0, 0, 0))
    entrada.compress_type = ZIP_DEFLATED
    entrada.create_system = 3
    entrada.external_attr = 0o644 << 16
    return entrada


def crear(nombre_zip: str, incluye_csv: bool) -> None:
    entradas = [
        *((nombre, DATOS / nombre) for nombre in CSV if incluye_csv),
        *((nombre, CAPAS / nombre) for nombre in GEOJSON),
        (GITIGNORE, CAPAS / GITIGNORE),
    ]
    faltantes = [nombre for nombre, ruta in entradas if not ruta.is_file()]
    if faltantes:
        raise FileNotFoundError(f"Faltan datos para {nombre_zip}: {', '.join(faltantes)}")

    destino = DATOS / nombre_zip
    with ZipFile(destino, "w", compression=ZIP_DEFLATED, compresslevel=9) as paquete:
        for nombre, ruta in entradas:
            paquete.writestr(info(nombre), ruta.read_bytes(), compress_type=ZIP_DEFLATED, compresslevel=9)
        paquete.writestr(info(LEEME_NOMBRE), leeme(incluye_csv).encode("utf-8"), compress_type=ZIP_DEFLATED, compresslevel=9)
    print(f"{destino}: {len(entradas) + 1} archivos")


def main() -> None:
    crear("paquete_capas_geojson.zip", incluye_csv=False)
    crear("paquete_practica_completo.zip", incluye_csv=True)


if __name__ == "__main__":
    main()
