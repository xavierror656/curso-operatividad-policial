"""
Genera los archivos de práctica del curso (datos 100 % sintéticos, semilla fija).

  python datos/generar.py

Salida en public/datos/:
  incidentes_practica_depurado.csv  928 registros, el archivo que usan los Días 2 y 3
  incidentes_practica_sucio.csv     1,058 registros: los 928 anteriores más 130 con errores sembrados

Los totales por tipo de delito, distrito, hora y día de la semana coinciden con las gráficas
del Día 2. Los nombres de colonia son inventados a propósito («Colonia Demo»): no existe
ninguna colonia ni hecho real en estos archivos.
"""
import csv
import datetime as dt
import os
import random

random.seed(2026)
raiz = os.path.join(os.path.dirname(__file__), '..', 'public', 'datos')
os.makedirs(raiz, exist_ok=True)

delitos = {'Violencia familiar': 241, 'Robo a transeúnte': 214, 'Robo de vehículo': 167, 'Daño en propiedad': 132, 'Lesiones': 98, 'Robo a comercio': 76}
distritos = {'Cuauhtémoc': 214, 'Universidad': 199, 'Aldama': 198, 'Babícora': 121, 'Delicias': 109, 'Chihuahua': 87}
horas = [30, 24, 19, 15, 12, 10, 13, 22, 31, 35, 38, 40, 42, 41, 40, 44, 48, 55, 60, 66, 70, 76, 58, 39]
dias = {0: 118, 1: 112, 2: 115, 3: 121, 4: 142, 5: 171, 6: 149}  # 0 = lunes
TOTAL = 928
assert sum(delitos.values()) == sum(distritos.values()) == sum(horas) == sum(dias.values()) == TOTAL

# Cada distrito tiene su sector y sus colonias de práctica
sector_de = {'Cuauhtémoc': 1, 'Universidad': 2, 'Aldama': 3, 'Babícora': 4, 'Delicias': 5, 'Chihuahua': 6}
colonias_de = {d: [f'Colonia Demo {s}{c}' for c in 'ABCD'] for d, s in sector_de.items()}
# Rectángulo aproximado del municipio para los puntos de práctica
LAT = (31.60, 31.80)
LON = (-106.55, -106.30)

def lista(cuentas):
    xs = [k for k, n in cuentas.items() for _ in range(n)]
    random.shuffle(xs)
    return xs

l_delito = lista(delitos)
l_distrito = lista(distritos)
l_hora = lista({h: n for h, n in enumerate(horas)})
l_dia = lista(dias)
marzo = [dt.date(2026, 3, d) for d in range(1, 32)]

def fecha_de(dow):
    return random.choice([f for f in marzo if f.weekday() == dow])

limpios = []
for i in range(TOTAL):
    dist = l_distrito[i]
    f = fecha_de(l_dia[i])
    limpios.append({
        'folio': f'S-{i + 1:05d}',
        'fecha_evento': f.strftime('%d/%m/%Y'),
        'hora': f'{l_hora[i]:02d}:{random.randint(0, 59):02d}',
        'delito': l_delito[i],
        'colonia': random.choice(colonias_de[dist]),
        'distrito': dist,
        'sector': sector_de[dist],
        'latitud': round(random.uniform(*LAT), 5),
        'longitud': round(random.uniform(*LON), 5),
    })

columnas = list(limpios[0].keys())

def escribir(nombre, filas):
    with open(os.path.join(raiz, nombre), 'w', newline='', encoding='utf-8') as f:
        w = csv.DictWriter(f, fieldnames=columnas)
        w.writeheader()
        w.writerows(filas)

# ---- Errores sembrados: 38 fechas inválidas, 21 coordenadas fuera del municipio,
#      54 colonias sin coincidencia y 17 duplicados (130 registros en total)
def base(n):
    r = dict(random.choice(limpios))
    r['folio'] = f'S-{TOTAL + n:05d}'
    return r

malos = []
n = 1
for _ in range(38):
    r = base(n); n += 1
    r['fecha_evento'] = random.choice(['31/02/2026', '15/13/2026', '30/02/2026', '12/11/2027', '00/03/2026'])
    malos.append(r)
for k in range(21):
    r = base(n); n += 1
    if k % 2 == 0:
        r['latitud'], r['longitud'] = r['longitud'], r['latitud']  # invertidas
    else:
        r['latitud'], r['longitud'] = round(random.uniform(29.0, 29.5), 5), round(random.uniform(-104.5, -104.0), 5)  # fuera del municipio
    malos.append(r)
variantes = [lambda s: s.upper(), lambda s: s.lower() + ' ', lambda s: s.replace('Colonia', 'Col.'), lambda s: s.replace(' Demo', '')]
for _ in range(54):
    r = base(n); n += 1
    r['colonia'] = random.choice(variantes)(r['colonia'])
    malos.append(r)
for _ in range(17):
    r = dict(random.choice(limpios))  # mismo folio y mismos datos: doble captura
    malos.append(r)
assert len(malos) == 130

sucio = limpios + malos
random.shuffle(sucio)
escribir('incidentes_practica_depurado.csv', limpios)
escribir('incidentes_practica_sucio.csv', sucio)
print(f'depurado: {len(limpios)} registros · sucio: {len(sucio)} registros')
