# INSTRUCCIONES DE CONTEXTO GENERAL: ESCUDO LOGÍSTICO ANTIFRAUDE

## Propósito del Proyecto
Este repositorio contiene la implementación frontend interactiva de "El Validador del Oficio" adaptada para la Semana 8. Su objetivo es simular un Escudo de Seguridad contra Ingeniería Social y Extorsión por Voz para proteger a Doña Mari (usuaria sintética de 54 años) mientras realiza sus rutas logísticas.

## Directrices para el Agente de IA
1. **Sanitización Obligatoria:** Cualquier modificación en los formularios debe procesarse a través de filtros de limpieza de texto para evitar inyecciones.
2. **Defensa Activa:** Si el flujo de audio o texto incluye indicadores de coacción económica ("dinero", "amenaza"), el sistema debe activar el bloqueo de pantalla rojo de emergencia de forma prioritaria.
3. **Persistencia:** Mantener la arquitectura basada en el Dragon Stack local.
