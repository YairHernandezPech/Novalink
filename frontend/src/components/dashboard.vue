<template>
    <div class="container-fluid min-vh-100">

        <div class="row min-vh-100">

            <!-- Lado izquierdo -->
            <div
                class="col-lg-5 d-flex flex-column justify-content-center bg-success text-white p-5"
            >

                <h1 class="display-4 fw-bold mb-4">
                    WhatsApp Dashboard
                </h1>

                <p class="fs-5 opacity-75 mb-5">
                    Crea nuevas sesiones de WhatsApp para administrar
                    tus empresas, enviar mensajes y mantener todas tus
                    conexiones activas desde un solo lugar.
                </p>

                <div class="mt-4">

                    <div class="d-flex align-items-center mb-4">
                        <div class="bg-white text-success rounded-circle px-3 py-2 fw-bold me-3">
                            ✓
                        </div>

                        <div>
                            Crea sesiones ilimitadas
                        </div>
                    </div>

                    <div class="d-flex align-items-center mb-4">
                        <div class="bg-white text-success rounded-circle px-3 py-2 fw-bold me-3">
                            ✓
                        </div>

                        <div>
                            Escanea el código QR
                        </div>
                    </div>

                    <div class="d-flex align-items-center">
                        <div class="bg-white text-success rounded-circle px-3 py-2 fw-bold me-3">
                            ✓
                        </div>

                        <div>
                            Administra tus conexiones
                        </div>
                    </div>

                </div>

            </div>

            <!-- Lado derecho -->
            <div
                class="col-lg-7 d-flex align-items-center justify-content-center bg-light"
            >

                <div style="max-width:600px;width:100%;" class="p-5">

                    <h2 class="fw-bold mb-2">
                        Nueva sesión
                    </h2>

                    <p class="text-muted mb-5">
                        Completa la información para generar un nuevo código QR.
                    </p>

                    <div class="mb-4">

                        <label class="form-label fw-semibold">
                            Nombre de la sesión
                        </label>

                        <input
                            v-model="registroActual.nombre"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Ej. Ventas"
                        >

                    </div>

                    <div class="mb-4">

                        <label class="form-label fw-semibold">
                            Número de WhatsApp
                        </label>

                        <input
                            v-model="registroActual.telefono"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="521999999999"
                        >

                        <div class="form-text">
                            Incluye el código del país.
                        </div>

                    </div>

                    <div class="mb-5">

                        <label class="form-label fw-semibold">
                            Nombre visible
                        </label>

                        <input
                            v-model="registroActual.nombre_whatsapp"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Mi Empresa"
                        >

                    </div>

                    <button
                        class="btn btn-success btn-lg w-100"
                        @click="createWhatsAppSession"
                    >
                        Crear sesión
                    </button>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import api from "../api";

export default {
    name: "Dashboard",

    data() {
        return {
            registroActual: {
                nombre: "",
                telefono: "",
                nombre_whatsapp: ""
            }
        };
    },
    mounted() {
        //obtenemos el token del sessionStorage
        const token = sessionStorage.getItem("token");

    },
    methods: {
        async createWhatsAppSession() {
            try {
                console.log(this.registroActual);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>