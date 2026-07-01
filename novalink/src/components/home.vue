<template>
<div class="container">
    <nav class="navbar navbar-expand-lg py-4">
        <a class="navbar-brand fw-bold fs-3 text-success" href="#">
            NOVALINK
        </a>
        <div class="ms-auto">
            <button class="btn btn-outline-success me-2">Iniciar Sesión</button>
            <button class="btn btn-success">Registrarse</button>
        </div>
    </nav>

</div>
<section class="hero">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <span class="badge bg-success mb-3">
                    Plataforma CRM + API
                </span>
                <h1 class="display-4 fw-bold">
                    Conecta tu empresa con
                    <span class="text-success">
                        WhatsApp
                    </span>

                </h1>
                <p class="lead mt-4">
                    Plataforma CRM para administrar conversaciones,
                    agentes y clientes.
                    Además ofrecemos una API REST para que los
                    desarrolladores integren WhatsApp en cualquier
                    sistema.
                </p>
                <div class="mt-5">
                    <button class="btn btn-success btn-lg me-3">Comenzar Prueba Gratis</button>
                    <button class="btn btn-outline-dark btn-lg">Ver API</button>
                </div>
            </div>
            <div class="col-lg-6 text-center">
                <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=900" class="img-fluid rounded-4 shadow-lg">
            </div>
        </div>
    </div>
</section>
<section class="py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Todo lo que necesitas</h2>
            <p class="text-muted">Una plataforma completa para empresas y desarrolladores.</p>
        </div>
        <div class="row g-4">
            <div class="col-md-4" v-for="item in features" :key="item.title">
                <div class="card h-100 border-0 shadow-sm">
                    <div class="card-body p-4">
                        <i :class="item.icon" class="display-5 text-success"></i>
                        <h4 class="mt-3">{{ item.title }}</h4>
                        <p class="text-muted">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="fw-bold">API REST para desarrolladores</h2>
                <p class="mt-3">
                    Integra WhatsApp en tu ERP, CRM, Ecommerce,
                    aplicaciones móviles o sistemas internos.
                </p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">✔ Envío de mensajes</li>
                    <li class="list-group-item">✔ Recepción en tiempo real</li>
                    <li class="list-group-item">✔ Webhooks</li>
                    <li class="list-group-item">✔ Archivos multimedia</li>
                    <li class="list-group-item">✔ Múltiples sesiones</li>
                </ul>
            </div>
            <div class="col-lg-6">
                <pre class="bg-dark text-success rounded p-4">
                POST /api/messages

                {
                    "phone":"5219999999999",
                    "message":"Hola Mundo"
                }
                </pre>
            </div>
        </div>
    </div>
</section>
<footer class="py-4 text-center">© 2026 WhatsCRM</footer>
</template>

<script>
const features = [{
        icon: "bi bi-whatsapp",
        title: "CRM para WhatsApp",
        description: "Gestiona conversaciones, contactos, etiquetas, campañas y múltiples agentes desde un solo lugar."
    },
    {
        icon: "bi bi-code-slash",
        title: "API para Desarrolladores",
        description: "Integra WhatsApp con tus aplicaciones mediante una API REST sencilla y rápida."
    },
    {
        icon: "bi bi-lightning-charge",
        title: "Automatización",
        description: "Crea bots, respuestas automáticas, webhooks y flujos personalizados."
    }
]
</script>

<style scoped>
.hero {
    padding: 100px 0;
}
.hero h1 {
    line-height: 1.2;
}

.card {
    border-radius: 20px;
    transition: .3s;
}
.card:hover {
    transform: translateY(-10px);
}
pre {
    border-radius: 20px;
    font-size: 15px;
}
footer {
    background: #f8f9fa;
}
</style>
