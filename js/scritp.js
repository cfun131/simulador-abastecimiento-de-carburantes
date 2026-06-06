function calcular() {
    let reservaInicial =
        Number(document.getElementById("reservaInicial").value);

    let consumoDiario =
        Number(document.getElementById("consumoDiario").value);

    let reabastecimiento =
        Number(document.getElementById("reabastecimiento").value);

    let nivelCritico =
        Number(document.getElementById("nivelCritico").value);

    if (
        reservaInicial <= 0 ||
        consumoDiario <= 0 ||
        nivelCritico <= 0
    ) {
        alert("Complete correctamente todos los campos.");
        return;
    }

    let reserva = reservaInicial;

    let dias = 0;

    let tabla = "";

    while (reserva > 0 && dias < 365) {
        dias++;

        reserva =
            reserva +
            reabastecimiento -
            consumoDiario;

        let estado = "";
        let clase = "";

        if (reserva <= nivelCritico) {
            estado = "🔴 Crítico";
            clase = "critico";
        }
        else if (reserva <= nivelCritico * 2) {
            estado = "🟡 Advertencia";
            clase = "advertencia";
        }
        else {
            estado = "🟢 Normal";
            clase = "normal";
        }

        tabla += `
        <tr>
            <td>${dias}</td>
            <td>${consumoDiario} L</td>
            <td>${reabastecimiento} L</td>
            <td>${Math.max(reserva, 0).toFixed(0)} L</td>
            <td class="${clase}">
                ${estado}
            </td>
        </tr>
        `;

        if (reserva <= nivelCritico) {
            break;
        }
    }

    document
        .getElementById("tablaResultados")
        .innerHTML = tabla;

    let consumoMensual =
        consumoDiario * 30;

    let consumoAnual =
        consumoDiario * 365;

    document
        .getElementById("consumoMensual")
        .textContent =
        consumoMensual.toLocaleString() + " L";

    document
        .getElementById("consumoAnual")
        .textContent =
        consumoAnual.toLocaleString() + " L";

    document
        .getElementById("cardReserva")
        .textContent =
        reservaInicial.toLocaleString() + " L";

    document
        .getElementById("cardConsumo")
        .textContent =
        consumoDiario.toLocaleString() + " L";

    document
        .getElementById("cardDias")
        .textContent =
        dias;

    let estadoFinal = "";

    if (reserva <= nivelCritico) {
        estadoFinal = "CRÍTICO";
    }
    else {
        estadoFinal = "NORMAL";
    }

    document
        .getElementById("cardEstado")
        .textContent =
        estadoFinal;

    let porcentaje =
        (reserva / reservaInicial) * 100;

    if (porcentaje < 0) {
        porcentaje = 0;
    }

    document
        .getElementById("fuelBar")
        .style.width =
        porcentaje + "%";

    let mensaje = "";

    if (reserva <= nivelCritico) {
        mensaje = `
        <h3 class="critico">
            ⚠ Zona Crítica Alcanzada
        </h3>

        <p>
            La reserva llegará al nivel de seguridad
            establecido (${nivelCritico} litros)
            en aproximadamente
            <strong>${dias} días</strong>.
        </p>

        <br>

        <p>
            A partir de este punto existe riesgo de
            desabastecimiento si no se incrementa
            el reabastecimiento.
        </p>
        `;
    }
    else {
        mensaje = `
        <h3 class="normal">
            Operación Normal
        </h3>

        <p>
            La reserva se mantiene por encima del
            nivel de seguridad establecido.
        </p>
        `;
    }

    document
        .getElementById("resultadoTexto")
        .innerHTML =
        mensaje;
}

function limpiarFormulario() {
    document
        .getElementById("reservaInicial")
        .value = "";

    document
        .getElementById("consumoDiario")
        .value = "";

    document
        .getElementById("reabastecimiento")
        .value = "";

    document
        .getElementById("nivelCritico")
        .value = "";

    document
        .getElementById("tablaResultados")
        .innerHTML = "";

    document
        .getElementById("resultadoTexto")
        .innerHTML =
        "Ingrese datos para comenzar.";

    document
        .getElementById("cardReserva")
        .textContent = "0 L";

    document
        .getElementById("cardConsumo")
        .textContent = "0 L";

    document
        .getElementById("cardDias")
        .textContent = "0";

    document
        .getElementById("cardEstado")
        .textContent = "---";

    document
        .getElementById("consumoMensual")
        .textContent = "0 L";

    document
        .getElementById("consumoAnual")
        .textContent = "0 L";

    document
        .getElementById("fuelBar")
        .style.width = "100%";
}

/* =====================
   CASOS DE ESTUDIO
===================== */

function caso1() {
    document.getElementById("reservaInicial").value = 10000;
    document.getElementById("consumoDiario").value = 1200;
    document.getElementById("reabastecimiento").value = 300;
    document.getElementById("nivelCritico").value = 2000;
}

function caso2() {
    document.getElementById("reservaInicial").value = 10000;
    document.getElementById("consumoDiario").value = 2000;
    document.getElementById("reabastecimiento").value = 300;
    document.getElementById("nivelCritico").value = 2000;
}

function caso3() {
    document.getElementById("reservaInicial").value = 5000;
    document.getElementById("consumoDiario").value = 1800;
    document.getElementById("reabastecimiento").value = 0;
    document.getElementById("nivelCritico").value = 2000;
}