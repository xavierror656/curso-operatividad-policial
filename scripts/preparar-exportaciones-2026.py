"""Prepara CSV de SSPM de enero a octubre de 2026 fuera de public/."""

import csv
from datetime import date, datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "03 Materiales de sesion" / "Exportaciones SSPM 2.0 - 2026-10-21"
DEST = SOURCE / "2026 acumulado - CENTRO"
DOWNLOADS = Path.home() / "Downloads"
START = date(2026, 1, 1)
END = date(2026, 10, 21)

VIEWS = (
    ("ubicaciones_20261021_190827.csv", "ubicaciones-centro-2026.csv"),
    ("clasificacion-hechos_20261021_190951.csv", "clasificacion-hechos-centro-2026.csv"),
)


def event_date(value: str, fmt: str) -> date | None:
    try:
        return datetime.strptime(value.strip(), fmt).date()
    except ValueError:
        return None


def write_csv(path: Path, fields: list[str], rows: list[dict[str, str]]) -> None:
    if not rows:
        raise ValueError(f"Sin filas para {path.name}")
    with path.open("w", encoding="utf-8", newline="") as output:
        writer = csv.DictWriter(output, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)
    print(f"{path.name}: {len(rows)} filas")


def main() -> None:
    DEST.mkdir(exist_ok=True)
    for source_name, output_name in VIEWS:
        with (SOURCE / source_name).open("r", encoding="utf-8-sig", newline="") as source:
            reader = csv.DictReader(source)
            if reader.fieldnames is None:
                raise ValueError(f"CSV sin encabezados: {source_name}")
            rows = [
                row for row in reader
                if row.get("distrito", "").strip().upper() == "CENTRO"
                and (day := event_date(row.get("fecha_evento", ""), "%Y-%m-%d")) is not None
                and START <= day <= END
            ]
            fields = reader.fieldnames
        write_csv(DEST / output_name, fields, rows)

    consolidated: list[dict[str, str]] = []
    fields: list[str] | None = None
    for month in range(1, 11):
        name = f"consolidados-2026-{month:02d}.csv"
        with (DOWNLOADS / name).open("r", encoding="utf-8-sig", newline="") as source:
            reader = csv.DictReader(source)
            if reader.fieldnames is None or (fields is not None and reader.fieldnames != fields):
                raise ValueError(f"Encabezados faltantes o distintos: {name}")
            fields = reader.fieldnames
            rows = list(reader)
        if not rows:
            raise ValueError(f"Sin filas: {name}")
        for row in rows:
            day = event_date(row.get("Fecha", ""), "%d/%m/%Y")
            if row.get("Distrito", "").strip().upper() != "CENTRO" or day is None or not START <= day <= END or day.month != month:
                raise ValueError(f"Fila fuera del alcance esperado en {name}")
        consolidated.extend(rows)

    folios = [row["Folio"] for row in consolidated]
    if len(set(folios)) != len(folios):
        raise ValueError("Hay folios repetidos entre meses; revisar antes de unir.")
    assert fields is not None
    write_csv(DEST / "consolidados-centro-2026.csv", fields, consolidated)


if __name__ == "__main__":
    main()
