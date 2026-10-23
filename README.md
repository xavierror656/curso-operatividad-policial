# Curso 3 · Herramientas tecnológicas orientadas a la operatividad policial

Sitio del curso (Astro + FlyonUI) con diapositivas de los tres días, material del participante, práctica, cuestionarios y cierre. Se publica en GitHub Pages y funciona sin conexión.

## Comandos

| Comando | Qué hace |
| :-- | :-- |
| `npm ci` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run verificar` | Revisa tiempos, cuestionario, temario y datos de práctica |
| `npm run build` | Genera `dist/` y el modo sin conexión |
| `python datos/generar.py` | Regenera los datos sintéticos de `public/datos/` |

## Dónde cambiar cada cosa

- **Día en que va el grupo** (línea de avance de la portada): `diaActual` en `src/data/curso.ts`.
- **Diapositivas**: `src/data/dia-1.ts`, `dia-2.ts`, `dia-3.ts`. Cada una lleva bloque, hora, layout y notas del instructor.
- **Cuestionario**: `src/data/cuestionario.ts` (reactivos, clave y explicaciones). Si cambia el número de reactivos, actualice `cortas` en `src/pages/cuestionario/resultados.astro`.
- **Cuestionarios por día**: `src/data/cuestionarios-practica.ts` (repasos de QGIS del Día 2 y Metabase del Día 3).
- **Casos, escenarios, hoja de verificación, encuesta y versiones**: `src/data/recursos.ts`.
- **Datos de práctica**: `datos/generar.py` (semilla fija).

## Política de datos

El sitio es público. **No debe contener datos reales** de la Secretaría: nombres, domicilios, folios, coordenadas de eventos ni cifras operativas. Todo ejemplo es ficticio o sintético. El sitio no envía nada a servidores ni usa analítica; vea `/privacidad/`. Lleva `noindex` para no aparecer en buscadores.

## Pendientes de confirmar con la Secretaría y Grupo Karsam

- Cómo se cubre el resto del programa de 37 horas (las diapositivas cubren tres sesiones de 4 horas).
- Regla de asistencia (80 %), rúbrica del producto final y protocolo de incidente (`/instructor/`).
- Responsable y aviso de privacidad integral.
- Si las notas del instructor y los resultados pueden ser públicos.
- Prompts de Metabase: se dejaron para una segunda etapa.
