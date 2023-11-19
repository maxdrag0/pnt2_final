<template>
  <!-- NAVEGACION -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/">
          <img id="baston" src="../assets/images/baston.png" alt="Botón de Inicio" />
        </router-link>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li>
            <a>
              <router-link to="/UserProfile">
                <img id="perfil" src="../assets/images/perfil.png" alt="Botón de PERFIL" />
              </router-link>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mi Perfil
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/UserProfile">Mis Datos</router-link>
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable">Mis Solicitudes</a>
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable">Certificaciones</a>
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable">Solicitudes Completadas</a>
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable">Mis Retos</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Componentes!
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/UserProfile">UserProfile</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/User">User</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/Solicitudes">Solicitudes</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/CrearSolicitud">CrearSolicitud</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- PERFIL -->

  <body>
    <section class="perfil">
      <div v-if="userProfile">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="../assets/images/perfil.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ userProfile.userName }}</h5>
            <p class="card-text">{{ userProfile.userDescription }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Tipo de usuario: {{ userProfile.userType }}
            </li>
            <li class="list-group-item">Ciudad: {{ userProfile.userCity }}</li>
            <li class="list-group-item">Valoracion:</li>
          </ul>
          <div class="card-body">
            <router-link to="/CrearSolicitud" class="card-link">Crear solicitud</router-link>
            <router-link to="/Solicitudes" class="card-link">Ver solicitudes</router-link>
          </div>
        </div>

        <div class="tabla-solicitudes-aceptadas">
          <h1>SOLICITUDES ACEPTADAS PENDIENTES</h1>
          <div class="tablaSolicitudes">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Ciudad</th>
                  <th scope="col">Tipo de solicitud</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="solicitudes in solicitudes">
                  <th scope="row">
                    <router-link class="nav-link" :to="'/persona/' + entidad.id">{{ entidad.id }}</router-link>
                  </th>
                  <td>
                    {{ solicitud.direccion }}
                  </td>
                  <td>
                    {{ solicitud.ciudad }}
                  </td>
                  <td>
                    {{ solicitud.tipoSolicitud }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h5>Cargando perfil...</h5>
      </div>
    </section>
    <!-- vista previa perfil -->
  </body>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, onErrorCaptured } from "vue";
import { useRoute } from 'vue-router';

// Dentro de tu setup
const route = useRoute();


const mostrarPerfil = ref("true");
const solicitudes = ref([]);

const solicitudesAceptadas = ref([]);

onMounted(async () => {
  try {
    const userId = route.params.userId;
    const response = await axios.get(`https://6525d5d667cfb1e59ce7b745.mockapi.io/solicitudes?estado=aceptada&usuarioId=${userId}`);
    solicitudesAceptadas.value = response.data;
  } catch (error) {
    console.error("Error al cargar solicitudes aceptadas:", error);
  }
});

onMounted(() => {
  solicitudes.value = [];
  let urlGet = "xxx";

  fetch(urlGet)
    .then((response) => {
      if (response.status === 200) {
        return response.json(); // Convierte la respuesta a JSON
      } else {
        throw new Error("No se pudo obtener la información");
      }
    })
    .then((data) => {
      solicitudes.value = data; //Obtengo el results que es donde esta mi vector que quiero trabajar
    })
    .catch((error) => {
      console.error(error);
    });
});

const userProfile = ref(null);

const fetchUserProfile = async () => {
  const userId = $route.params.userId;
  try {
    const response = await axios.get(
      `https://6525d5d667cfb1e59ce7b745.mockapi.io/${userId}`
    );
    userProfile.value = response.data;
  } catch (error) {
    console.error("Hubo un error al obtener el perfil del usuario:", error);
  }
};

onMounted(fetchUserProfile);

onErrorCaptured((error) => {
  console.error("Error capturado:", error);
});
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.perfil {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  margin-top: 20px;
}

#disable {
  color: grey;
}
</style>
