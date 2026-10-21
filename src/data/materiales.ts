/**
 * Páginas del sitio que acompañan a las diapositivas. Una diapositiva las cita por su clave
 * en `material` y aparecen como enlaces en el pie, en el panel «Material» de la presentación
 * y en el material del participante.
 */
export const materiales = {
  cuestionario: { label: 'Cuestionario', path: '/cuestionario/', icon: 'icon-[tabler--bulb]' },
  'regla-de-oro': { label: '¿Se puede pegar?', path: '/practica/regla-de-oro/', icon: 'icon-[tabler--shield-question]' },
  prompts: { label: 'Prompts para IA', path: '/practica/prompts/', icon: 'icon-[tabler--message-chatbot]' },
  'prompts-eda': { label: 'Prompts de EDA', path: '/practica/prompts/#eda', icon: 'icon-[tabler--message-chatbot]' },
  'prompts-limpieza': { label: 'Prompts de limpieza', path: '/practica/prompts/#limpieza', icon: 'icon-[tabler--message-chatbot]' },
  'prompts-graficas': { label: 'Prompts de gráficas', path: '/practica/prompts/#graficas', icon: 'icon-[tabler--message-chatbot]' },
  'detecta-errores': { label: 'Detecte las capturas inconsistentes', path: '/practica/detecta-errores/', icon: 'icon-[tabler--zoom-exclamation]' },
  escenarios: { label: 'Escenarios de decisión', path: '/practica/escenarios/', icon: 'icon-[tabler--route]' },
  casos: { label: 'Casos para analizar', path: '/practica/casos/', icon: 'icon-[tabler--file-description]' },
  'hoja-ia': { label: 'Verificación · IA', path: '/practica/hoja-de-verificacion/#ia', icon: 'icon-[tabler--checklist]' },
  'hoja-depurado': { label: 'Verificación · Archivo', path: '/practica/hoja-de-verificacion/#depurado', icon: 'icon-[tabler--checklist]' },
  'hoja-tablero': { label: 'Verificación · Tablero', path: '/practica/hoja-de-verificacion/#tablero', icon: 'icon-[tabler--checklist]' },
  'hoja-mapa': { label: 'Verificación · Mapa', path: '/practica/hoja-de-verificacion/#mapa', icon: 'icon-[tabler--checklist]' },
  'hoja-entrega': { label: 'Verificación · Entrega', path: '/practica/hoja-de-verificacion/#entrega', icon: 'icon-[tabler--checklist]' },
  datos: { label: 'Datos de práctica', path: '/datos/', icon: 'icon-[tabler--database]' },
  cierre: { label: 'Cierre del curso', path: '/cierre/', icon: 'icon-[tabler--flag-check]' },
} satisfies Record<string, { label: string; path: string; icon: string }>

export type MaterialId = keyof typeof materiales

/** Materiales que cita un conjunto de diapositivas, sin repetir y con la primera diapositiva donde aparecen. */
export const materialesDe = (slides: { material?: MaterialId[] }[]) => {
  const vistos = new Map<MaterialId, number>()
  slides.forEach((s, i) => s.material?.forEach((m) => vistos.has(m) || vistos.set(m, i)))
  return [...vistos].map(([id, slide]) => ({ id, slide, ...materiales[id] }))
}
