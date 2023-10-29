<template>
  <div>
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
            <!-- ... (tu código de navegación aquí) ... -->
          </ul>
        </div>
      </div>
    </nav>

    <form @submit.prevent="handleSubmit">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
      <button type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await axios.post('https://6525d5d667cfb1e59ce7b745.mockapi.io/users', {
      email: email.value
    });

    if (response.status === 201) {
      router.push('/dashboard');
    } else {
      console.error('Algo salió mal:', response);
    }
  } catch (error) {
    console.error('Ocurrió un error', error);
  }
};
</script>

<style scoped>
/* Aquí puedes añadir tu CSS si necesitas personalizar estilos */
</style>
