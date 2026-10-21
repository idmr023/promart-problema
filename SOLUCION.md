# Solución Integrada de Conversión en Tienda — Promart La Campiña

## Objetivo
Incrementar la conversión de visitas de 33.34% a ≥35.00% en la ventana crítica de permanencia (~20 min), especialmente domingos 16:00–19:00, sin aumentar afluencia ni contrataciones, rescatando ~56 tickets/día (+S/1.72M en 8 meses).

## Diagnóstico clave
- Tráfico ene–ago 2026: +813,000 visitas; ~271,000 tickets; conversión 33.34% vs meta 35.0%.
- Pico: sábado ~136k y domingo ~143k visitas; conversión dominical 16:00–19:00 cae a 28.7%–30.7%.
- Permanencia promedio: 19–21 min; fricciones de 3–5 min detonan abandono.

## Solución: 8 factores integrados (tecnología ligera + operación en piso)

| # | Factor | Solución | Impacto esperado |
|---|---|---|---|
| 1 | Asesoría | Asesor Promart por WhatsApp (QR en góndola, IA identifica producto/pasillo/estante en 15s) + botón físico con turno visible en corte/pintura | Valida compra técnica, reduce ansiedad y deambule |
| 2 | Dotación en horas punta | Protocolo "Escuadrón Volante Dominical" 15:30–19:30: supervisores/admin/reponedores con chalecos como facilitadores de pasillo | Duplica presencia sin nuevas contrataciones |
| 3 | Tipo de visita | Kits "Grab & Go" en cabeceras (Fuga de Inodoro, Instalación de Repisa, Retoque de Pintura) | Compra resuelta en ~60s |
| 4 | Experiencia | Torres de canastas intermedias + climatización dinámica desde 16:00 | Elimina fatiga y retiene indecisos |
| 5 | Cajas | "Yape & Sal": 2 anfitriones con Smart POS, hasta 4 artículos, cobro en ~20s, boleta por WhatsApp, carril express | Rescata compras de urgencia/impulso |
| 6 | Servicios | Turno digital "Sigue Comprando" para corte/tintometría: tótem + SMS/WhatsApp; cliente sigue comprando | Convierte espera en tiempo productivo |
| 7 | Orientación | "Modo Tienda" por QR (zero-app, mapa pasillo/estante) + rótulos aéreos por color (gasfitería, electricidad, herramientas) | Búsqueda de 7–8 min a ~2 min |
| 8 | Disponibilidad | Auditoría "Góndola Llena a las 14:00": top 50 SKUs al 100% en góndola baja; veto de altillos/montacargas 16:00–19:00 | Producto visible y accesible |

## Arquitectura tecnológica (sin fricción de descarga)
- **Canal único:** WhatsApp oficial + web ligera por QR (zero-app).
- **IA de producto:** reconocimiento visual de pieza/foto → SKU, especificación, pasillo/estante.
- **Smart POS móvil:** cobro sin contacto (Yape, Plin, tarjeta) y boleta electrónica.
- **Tótem de servicios:** registro de turno virtual y notificación SMS/WhatsApp.
- **Dashboard de control:** conversión por franja, tickets rescatados, tiempos de caja, disponibilidad top 50.

## Operación en piso
- Escuadrón Volante Dominical activo solo en la ventana crítica.
- Reposición preventiva a las 14:00; pasillos despejados 16:00–19:00.
- Climatización preventiva desde 16:00 para reducir estrés térmico.

## KPIs y verificación
| KPI | Base | Meta | Verificación |
|---|---|---|---|
| Conversión general | 33.34% | ≥35.00% | POS + contador de ingresos |
| Conversión domingo 16:00–19:00 | 28.7%–30.7% | ≥33.50% | Corte horario POS |
| Tickets adicionales diarios | 0 | +56 | Cierre diario La Campiña |
| Tiempo en cajas pico | 6–9 min | ≤2 min | Muestreo de fila + tickets Yape & Sal |
| Disponibilidad top 50 a las 16:00 | Variable | ≥98% góndola baja | Checklist auditoría 14:00 |

## Plan de piloto (6 semanas)
1. Semana 1–2: instalación de QR, señalética, canastas, tótem y Smart POS; capacitación.
2. Semana 3–4: activación de Escuadrón Volante y auditoría góndola; medición base vs intervención.
3. Semana 5–6: ajuste de flujos, validación de KPIs y preparación de despliegue nacional.

## Equipo (7 roles)
Líder/Storytelling; Analista de datos; Diseño digital/asesoría; Checkout/kits; Operaciones/logística; Modelado financiero/ROI; Piloto/escalabilidad.

## Resultado esperado
Recuperar la conversión dentro de los ~20 min de permanencia, rescatando ~56 tickets/día y +S/1.72M, con tecnología ligera y mejor uso del personal existente.
</content>