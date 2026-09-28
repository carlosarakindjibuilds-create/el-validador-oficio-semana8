# Cierre de Sesión Técnica y Piso de Seguridad - Semana 8 (DECISIONS.md)

## 1. Decisiones Técnicas Tomadas
* **Capa Antifraude por Voz Nativa:** Se implementó una lógica de análisis contextual semántico que procesa la transcripción de texto generada por el micrófono del dispositivo, identificando palabras clave de extorsión urbana para disparar una mitigación instantánea.
* **Sanitización Estricta en Frontend:** En cumplimiento con el Piso de Seguridad, se diseñó una función validadora con expresiones regulares que limpia en tiempo real cualquier entrada de texto en los formularios, descartando caracteres especiales peligrosos antes de que interactúen con las variables globales del sistema.

## 2. Checklist del Piso de Seguridad (Security Floor)
* **[PISO 1] No secretos en código:** Las simulaciones no exponen credenciales de desarrollo. Si la aplicación escala a producción, los tokens correspondientes se configurarán únicamente a través de variables de entorno protegidas en Vercel.
* **[PISO 2] Autenticación de Datos Personales:** El flujo se ha estructurado para integrarse de forma modular con Supabase Auth utilizando "Sign in with Google", garantizando que ninguna información sensible quede expuesta públicamente.
* **[PISO 3] Row Level Security (RLS):** Se mantiene activa la política RLS en las tablas del proyecto, aislando por completo los registros para que los microcomerciantes simulen incidentes viendo única y exclusivamente sus propios datos logísticos.
* **[PISO 4] Validación de Formularios:** Se inyectaron límites de longitud y chequeos de tipos tipográficos en la interfaz gráfica, bloqueando cualquier intento de inyección de código desde cajas de texto.
* **[PISO 5] Datos de Prueba Sintéticos:** No se emplean datos reales de personas físicas ni de negocios comerciales vigentes. Doña Mari es un perfil simulado y modelado para auditorías de experiencia de usuario (UX).

## 3. Próximo Paso Técnico Inmediato
* Realizar el despliegue estático de la rama `main` en la plataforma Vercel, ejecutar el Test de Persona Sintética simulando una situación de estrés por extorsión telefónica, y registrar el comportamiento interactivo para el reporte final.
