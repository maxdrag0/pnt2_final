<template>
  <!-- NAVEGACION -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/Home">
          <img
            id="baston"
            src="../assets/images/baston.png"
            alt="Botón de Inicio"
          />
        </router-link>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li>
            <a>
              <router-link to="/User">
                <img
                  id="perfil"
                  src="../assets/images/perfil.png"
                  alt="Botón de PERFIL"
                />
              </router-link>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mi Perfil
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Mis Datos</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Certificaciones</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/Solicitudes"
                  >Mis Solicitudes</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Solicitudes Completadas</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Mis Retos</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- PERFIL -->
    <!-- <h2>Perfil de {{ userType }}</h2>
    <form @submit.prevent="updateProfile">
      <label for="name">Nombre:</label>
      <input v-model="profile.name" type="text" id="name" required />

      <label for="address">Dirección:</label>
      <input v-model="profile.address" type="text" id="address" required />

      <button type="submit">Actualizar Perfil</button>
    </form> -->
    <!-- TARJETA -->
    <body>
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="../assets/images/perfil.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ userName }}</h5>
            <p class="card-text">
              {{ userDescription }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Tipo de usuario: {{ userType }}</li>
            <li class="list-group-item">Ciudad: {{ userCity }}</li>
            <li class="list-group-item">Valoracion:</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Crear solicitud</a>
            <a href="#" class="card-link">Ver solicitudes</a>
          </div>
        </div>
    </body>
</template>

<script>
export default {
  props: {
    userName: String,
    userDescription: String, 
    userType: String, // 'Voluntario' o 'Anciano'
    userCity: String,
  },
  data() {
    return {
      profile: {
        name: "",
        address: "",
      },
    };
  },
  methods: {
    updateProfile() {
      // Lógica para actualizar el perfil en el backend
    },
  },
  created() {
    // Lógica para obtener la información del perfil desde el backend
    // y asignarla a 'this.profile'.
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  margin-top: 20px;
  width: 18rem;
  display: inline-block;
  vertical-align: middle;
}
/* Tus estilos aquí */
</style>
