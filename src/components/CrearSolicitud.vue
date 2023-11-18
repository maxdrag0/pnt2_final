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
                <router-link class="dropdown-item" to="/RegisterForm">Mis Solicitudes</router-link>
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
  <!-- FIN NAVEGACION -->

  <div class="container-comienzo-componente">
    <form @submit.prevent="submitSolicitud">
      <div class="mb-3">
        <label for="asunto" class="form-label">Asunto</label>
        <input type="text" class="form-control" id="asunto" v-model="asunto" />
      </div>
      <div class="mb-3">
        <label for="idUsuario" class="form-label">ID Usuario</label>
        <input type="number" class="form-control" id="idUsuario" v-model="idUsuario" @input="validateIdUsuario" />
      </div>
      <div class="mb-3">
        <label for="tipoSolicitud" class="form-label">Tipo de Solicitud</label>
        <select v-model="tipoSolicitud" id="tipoSolicitud" class="form-control">
          <option>Especialista</option>
          <option>Farmacia</option>
          <option>Supermercado</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="direccion" class="form-label">Direccion</label>
        <input type="text" class="form-control" id="direccion" v-model="direccion" />
      </div>
      <div class="mb-3">
        <label for="ciudad" class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="ciudad" v-model="ciudad" />
      </div>
      <div class="mb-3">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea class="form-control" id="descripcion" v-model="descripcion"></textarea>
      </div>
      <!-- Agrega aquí más campos si los necesitas -->
      <button type="submit">Crear Solicitud</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const asunto = ref('');
const idUsuario = ref('');
const tipoSolicitud = ref('');
const direccion = ref('');
const ciudad = ref('');
const descripcion = ref('');

const validateIdUsuario = () => {
  if (idUsuario.value !== '' && (!Number.isInteger(Number(idUsuario.value)) || idUsuario.value < 0)) {
    alert("Por favor, ingresa un número entero positivo en el campo ID Usuario.");
    idUsuario.value = '';
  }
};

const submitSolicitud = async () => {
  if (!asunto.value || !idUsuario.value || !tipoSolicitud.value || !direccion.value || !ciudad.value || !descripcion.value) {
    alert("Todos los campos son obligatorios. Por favor, completa todos los campos.");
    return;
  }
  try {
    const response = await axios.post(
      "https://6552a4cf5c69a779032a3b33.mockapi.io/voluntar/solicitud",
      {
        asunto: asunto.value,
        idUsuario: idUsuario.value,
        tipoSolicitud: tipoSolicitud.value,
        direccion: direccion.value,
        ciudad: ciudad.value,
        descripcion: descripcion.value,
      }
    );
    if (response.data) {
      alert("Solicitud creada exitosamente");
      //NUEVO
      router.push('/Solicitudes');
      //FIN NUEVO
      // $router.push({ path: "/Solicitudes" });
      $router.push({ name: 'Solicitud', params: { solicitudId: response.data.id } });

    }
  } catch (error) {
    console.error("Ocurrió un error al enviar la solicitud:", error);
  }
};
</script>

<style>
#disable {
  color: grey;
}

.container-comienzo-componente {
  background-color: rgb(212, 165, 255);
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
}
</style>