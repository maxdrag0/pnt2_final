<template>
  <div>
    <!-- NAVEGACION -->
    <!-- Aquí iría tu código de navegación si lo necesitas -->

    <!-- PERFIL -->
    <div v-if="userProfile">

      <body>
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="../assets/images/perfil.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ userProfile.userName }}</h5>
            <p class="card-text">{{ userProfile.userDescription }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Tipo de usuario: {{ userProfile.userType }}</li>
            <li class="list-group-item">Ciudad: {{ userProfile.userCity }}</li>
            <li class="list-group-item">Valoracion:</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Crear solicitud</a>
            <a href="#" class="card-link">Ver solicitudes</a>
          </div>
        </div>
      </body>
    </div>
    <div v-else>
      Cargando perfil...
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userProfile: null,
    };
  },
  methods: {
    async fetchUserProfile() {
      const userId = this.$route.params.userId;
      try {
        const response = await axios.get(`https://6525d5d667cfb1e59ce7b745.mockapi.io/:endpoint${userId}`);
        this.userProfile = response.data;
      } catch (error) {
        console.error('Hubo un error al obtener el perfil del usuario:', error);
      }
    },
  },
  created() {
    this.fetchUserProfile();
  },
};
</script>

<style scoped>
/* Tus estilos aquí */
.body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin-top: 20px;
}
</style>
