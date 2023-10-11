<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/Home">
          <img id="baston" src="../assets/images/baston.png" alt="Botón de Inicio" />
        </router-link>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inicia sesion
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/LoginForm">ARciano</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/LoginForm">VoluntAR</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Registrate
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/RegisterForm">ARciano</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/RegisterForm">VoluntAR</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input type="email" v-model="email" required />
    <button type="submit">Ingresar</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('https://6525d5d667cfb1e59ce7b745.mockapi.io/users', {
          email: this.email
        });
        if (response.data) {

          this.$router.push('/dashboard');
        }
      } catch (error) {
        console.error('Ocurrio un error', error);

      }
    },
  },
};
</script>
