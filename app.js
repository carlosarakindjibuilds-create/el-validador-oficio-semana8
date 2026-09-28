// Estado global de la aplicación (Dragon Stack v8.0)
let estadoApp = {
    usuario: "Doña Mari",
    edad: 54,
    proyecto: "El Validador del Oficio",
    estatus_sistema: "SEGURO",
    brecha_seguridad: {
        detectada: false,
        tipo_ataque: "NINGUNO",
        timestamp_bloqueo: null
    },
    metricas_logistica: {
        incidentes_viales_evitados: 0,
        intentos_fraude_bloqueos: 0
    },
    ultima_entrada_usuario: ""
};

// Función para renderizar el bloque de auditoría JSON en pantalla
function actualizarInspeccionJSON() {
    document.getElementById('jsonBlock').textContent = JSON.stringify({
        "dragon_stack_version": "v8.1.0-security",
        "piso_seguridad_supabase": "RLS_ON_AUTH_ACTIVE",
        "estado_actual_sistema": estadoApp
    }, null, 2);
}

// Inicialización de la pantalla al cargar la app
window.onload = function() {
    actualizarInspeccionJSON();
};

// Simulación técnica del trayecto en el mapa
function simularViajeLogistico() {
    const vehiculo = document.getElementById('vehiculoSimulado');
    const feedback = document.getElementById('feedbackVoz');
    
    feedback.innerHTML = "<b>Simulación logística:</b> Avanzando por la ruta de entrega...";
    vehiculo.style.left = "45%";
    
    setTimeout(() => {
        if (!estadoApp.brecha_seguridad.detectada) {
            vehiculo.style.left = "85%";
            feedback.innerHTML = "<b>Destino alcanzado:</b> Mercancía entregada con éxito.";
        }
    }, 2000);
}

// REQUERIMIENTO: Sanitización obligatoria contra inyecciones de código en formularios (Piso de Seguridad)
function validarTextoInput(elemento) {
    // Expresión regular que remueve caracteres peligrosos sospechosos de inyección a base de datos o prompt
    let limpio = elemento.value.replace(/[<>'"/;()]/g, "");
    if (elemento.value !== limpio) {
        elemento.value = limpio;
        document.getElementById('feedbackVoz').innerHTML = "<span style='color: #ef4444;'><b>Seguridad:</b> Caracteres prohibidos removidos del formulario.</span>";
    }
    estadoApp.ultima_entrada_usuario = limpio;
    actualizarInspeccionJSON();
}

// REQUERIMIENTO: Simulación de Ataque de Ingeniería Social / Extorsión (Para la defensa en pantalla)
function inyectarAtaqueSocial() {
    const escudo = document.getElementById('escudoSeguridad');
    const feedback = document.getElementById('feedbackVoz');
    
    estadoApp.estatus_sistema = "PELIGRO - BRECHA DETECTADA";
    estadoApp.brecha_seguridad.detectada = true;
    estadoApp.brecha_seguridad.tipo_ataque = "Ingeniería Social (Extorsión Telefónica)";
    estadoApp.brecha_seguridad.timestamp_bloqueo = new Date().toISOString();
    estadoApp.metricas_logistica.intentos_fraude_bloqueos += 1;
    
    // Desplegar bloqueo masivo en pantalla para el usuario
    escudo.style.display = "flex";
    feedback.innerHTML = "<span style='color: #f87171;'><b>¡BRECHA DETECTADA!</b> Llamada sospechosa bloqueada.</span>";
    
    actualizarInspeccionJSON();
}

// Restaurar escudo a modo seguro
function restaurarSistema() {
    document.getElementById('escudoSeguridad').style.display = "none";
    document.getElementById('vehiculoSimulado').style.styleLeft = "15%";
    document.getElementById('feedbackVoz').innerHTML = "Sistema reiniciado. Escudo activo.";
    
    estadoApp.estatus_sistema = "SEGURO";
    estadoApp.brecha_seguridad.detectada = false;
    estadoApp.brecha_seguridad.tipo_ataque = "NINGUNO";
    estadoApp.brecha_seguridad.timestamp_bloqueo = null;
    
    actualizarInspeccionJSON();
}

// REQUERIMIENTO: Reconocedor de Voz Contextual (Filtro Antifraude)
function activarEscudoVoz() {
    const feedback = document.getElementById('feedbackVoz');
    feedback.innerHTML = "🎙️ Escudo escuchando... Di algo como 'me están pidiendo dinero' para probar la IA.";
    
    // Si el navegador soporta el reconocimiento nativo de voz, lo usamos
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'es-MX';
        
        recognition.onresult = function(event) {
            const textoEscuchado = event.results[0][0].transcript.toLowerCase();
            feedback.innerHTML = `<b>Escuchado:</b> "${textoEscuchado}"`;
            estadoApp.ultima_entrada_usuario = textoEscuchado;
            
            // Palabras clave de peligro o extorsión urbana
            if (textoEscuchado.includes("dinero") || textoEscuchado.includes("patrón") || textoEscuchado.includes("amenaza") || textoEscuchado.includes("tarjeta")) {
                setTimeout(() => { inyectarAtaqueSocial(); }, 500);
            } else {
                actualizarInspeccionJSON();
            }
        };
        recognition.start();
    } else {
        // Alternativa de simulación si el navegador o dispositivo no tiene micro activo
        setTimeout(() => {
            feedback.innerHTML = "<b>Simulación de voz:</b> Doña Mari dice 'Me están marcando números raros pidiendo dinero'...";
            setTimeout(() => { inyectarAtaqueSocial(); }, 1500);
        }, 1000);
    }
}
