# FuelTrack Bolivia ⛽

## Simulador de Abastecimiento de Carburantes

### Descripción del Proyecto

FuelTrack Bolivia es una aplicación web desarrollada para simular y analizar el comportamiento de las reservas de combustible en un sistema de abastecimiento. El proyecto permite estimar la duración de una reserva de carburantes considerando el consumo diario, el reabastecimiento y un nivel crítico de seguridad.

La aplicación fue desarrollada utilizando tecnologías web estándar (HTML5, CSS3 y JavaScript) y busca representar una situación real relacionada con la gestión eficiente de recursos energéticos.

---

## Contexto del Problema

El combustible es un recurso esencial para el funcionamiento de vehículos, maquinaria, industrias y servicios de transporte. Una mala planificación del consumo puede provocar situaciones de desabastecimiento que afectan la continuidad de las operaciones.

Por esta razón, es importante contar con herramientas que permitan anticipar escenarios críticos y tomar decisiones oportunas sobre el reabastecimiento.

FuelTrack Bolivia simula el comportamiento diario de una reserva de combustible para identificar cuándo se alcanzará un nivel crítico y cuánto tiempo podrá mantenerse el sistema en funcionamiento.

---

## Objetivo

Desarrollar una aplicación web interactiva capaz de:

* Registrar una cantidad inicial de combustible.
* Considerar el consumo diario estimado.
* Considerar el reabastecimiento diario.
* Definir un nivel crítico de reserva.
* Simular la evolución de la reserva día a día.
* Determinar cuándo se alcanza una situación crítica.
* Mostrar resultados de forma clara y visual.

---

## Algoritmo Utilizado

El sistema utiliza una simulación iterativa basada en ciclos.

### Entradas

* Reserva inicial de combustible.
* Consumo diario.
* Reabastecimiento diario.
* Nivel crítico de reserva.

### Proceso

1. Se registra la cantidad inicial de combustible.
2. Cada día se descuenta el consumo diario.
3. Se añade el reabastecimiento correspondiente.
4. Se calcula la nueva reserva disponible.
5. Se verifica si la reserva ha alcanzado el nivel crítico.
6. Se almacena la información para mostrarla en una tabla de simulación.
7. El proceso continúa hasta alcanzar el nivel crítico o finalizar la simulación.

### Salidas

* Días de duración de la reserva.
* Estado de la reserva.
* Consumo mensual.
* Consumo anual.
* Fecha estimada de agotamiento.
* Tabla detallada de seguimiento.
* Mensajes de alerta.

---

## Funcionalidades Principales

### Simulador

Permite ingresar los datos necesarios para realizar la simulación del consumo de combustible.

### Dashboard de Resultados

Muestra indicadores relevantes:

* Reserva inicial.
* Consumo diario.
* Días estimados de duración.
* Estado actual del sistema.

### Barra de Combustible

Representa visualmente el nivel de reserva restante.

### Tabla de Simulación

Presenta información diaria sobre:

* Día de simulación.
* Fecha simulada.
* Consumo diario.
* Reabastecimiento.
* Reserva restante.
* Estado de la reserva.

### Casos de Estudio

Incluye escenarios predefinidos para analizar distintos comportamientos:

* Operación normal.
* Consumo elevado.
* Situación crítica.

---

## Tecnologías Utilizadas

### HTML5

Utilizado para estructurar el contenido de la aplicación mediante etiquetas semánticas.

### CSS3

Responsable del diseño visual, la adaptación a dispositivos móviles y las animaciones de la interfaz.

### JavaScript

Implementa la lógica del simulador, los cálculos y la interacción dinámica con el usuario mediante manipulación del DOM.

---

## Estructura del Proyecto

```text
proyecto-web-crisis/

├── index.html
├── README.md
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── img/
    ├── gasolineria.webp
    ├── gasolineriabanner.avif
    └── icono.png
```

## Características Destacadas

* Diseño moderno y responsive.
* Interfaz intuitiva.
* Validación de datos.
* Simulación en tiempo real.
* Tabla detallada de seguimiento.
* Casos de estudio interactivos.
* Indicadores visuales.
* Barra de combustible dinámica.
* Adaptación para computadoras, tablets y teléfonos móviles.

---

## Conclusiones

La simulación permite comprender cómo influyen el consumo y el reabastecimiento en la disponibilidad de combustible. Gracias a la visualización de escenarios y al monitoreo del nivel crítico, es posible anticipar problemas de abastecimiento y tomar decisiones más informadas.

Este proyecto demuestra la aplicación práctica de HTML5, CSS3 y JavaScript para resolver un problema real mediante una interfaz web interactiva y orientada al usuario.

---

## Autor

Diego Alex

Programación Web I

Universidad Mayor de San Andrés (UMSA)

2026
