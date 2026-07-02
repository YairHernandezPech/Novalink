<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row w-100 justify-content-center">
      <div class="col-md-5 col-lg-4">
        <div class="text-center mb-4">
          <a class="navbar-brand fw-bold fs-2 text-success" href="#">NOVALINK</a>
        </div>

        <div class="card border-0 shadow-lg p-4 rounded-4">
          <div class="card-body">
            <h3 class="fw-bold mb-4">Iniciar Sesión</h3>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label class="form-label text-muted">Correo electrónico</label>
                <input
                  type="email"
                  class="form-control form-control-lg rounded-3"
                  placeholder="nombre@empresa.com"
                  v-model="form.email"
                  required
                >
              </div>

              <div class="mb-3">
                <label class="form-label text-muted">Contraseña</label>
                <input
                  type="password"
                  class="form-control form-control-lg rounded-3"
                  placeholder="••••••••"
                  v-model="form.password"
                  required
                >
              </div>

              <button
                type="submit"
                class="btn btn-success btn-lg w-100 rounded-3 mb-3"
                :disabled="loading"
              >
                {{ loading ? 'Ingresando...' : 'Ingresar' }}
              </button>
            </form>

            <div class="text-center mt-3">
              <span class="text-muted">¿Aún no tienes cuenta? </span>
              <a href="#" class="text-success fw-bold text-decoration-none">Regístrate aquí</a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-4">
          <p class="text-muted small">© 2026 WhatsCRM</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../api';

  export default {
    name: "Login",
    data(){
      return {
        form: {
          email: '',
          password: ''
        },
        loading: false
      };
    },
    mounted() {
      // Aquí puedes agregar lógica para verificar si el usuario ya está autenticado
    },
    methods: {
      async login() {
        this.loading = true;
        try {
          const response = await api.post('/login', this.form);
          sessionStorage.setItem('token', response.data.token);
          this.$router.push('/dashboard'); // Redirige al dashboard después del login
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        } finally {
          this.loading = false;
        }
      }
    }

  }

</script>



<style>
.card {
  transition: .3s;
}

.form-control:focus {
  border-color: #198754; /* Color success de bootstrap */
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);

}
</style>