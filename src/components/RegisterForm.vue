<template>
  <div>
    <nav class="navbar">
      <router-link to="/">
        <img id="baston" src="../assets/images/baston.png" alt="Botón de Inicio" />
      </router-link>
    </nav>

    <div class="container-register">
      <form @submit.prevent="validateForm">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input v-model="nombre" type="text" class="form-control" id="nombre" />
          <p v-if="errors.nombre" class="text-danger">{{ errors.nombre }}</p>
        </div>

        <div class="mb-3">
          <label for="apellido" class="form-label">Apellido</label>
          <input v-model="apellido" type="text" class="form-control" id="apellido" />
          <p v-if="errors.apellido" class="text-danger">{{ errors.apellido }}</p>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" type="email" class="form-control" id="email" />
          <p v-if="errors.email" class="text-danger">{{ errors.email }}</p>
        </div>

        <div class="mb-3">
          <label for="tipoUsuario" class="form-label">Tipo Usuario</label>
          <select v-model="tipoUsuario" id="tipoUsuario" class="form-control">
            <option>Voluntario</option>
            <option>Anciano</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input v-model="password" type="password" class="form-control" id="password" />
          <p v-if="errors.password" class="text-danger">{{ errors.password }}</p>
        </div>

        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
          <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" />
          <p v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}</p>
        </div>

        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      email: '',
      tipoUsuario: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.nombre) {
        this.errors.nombre = 'El nombre es requerido.';
      }

      if (!this.apellido) {
        this.errors.apellido = 'El apellido es requerido.';
      }

      if (!this.email) {
        this.errors.email = 'El email es requerido.';
      }

      if (!this.password) {
        this.errors.password = 'La contraseña es requerida.';
      } else if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = 'Las contraseñas no coinciden.';
      }

      if (Object.keys(this.errors).length === 0) {
        this.submitRequest();
      }
    },
    async submitRequest() {
      try {
        const response = await axios.post('https://6525d5d667cfb1e59ce7b745.mockapi.io/:endpoint', {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          tipoUsuario: this.tipoUsuario,
          password: this.password,
        });

        if (response.status === 201) { // Verifica que el usuario fue creado correctamente
          this.$router.push({ name: 'UserProfile', params: { userId: response.data.id } });
        }
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
    },
  },
};
</script>

<style>
.navbar {
  background-color: #b377f3;
  padding: 10px;
  text-align: left;
}

#baston {
  width: 50px;
  height: auto;
}

.container-register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 100px;
}
</style>
