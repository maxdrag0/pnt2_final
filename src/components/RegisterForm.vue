<template>
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
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Registrate
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/RegisterForm"
                  >ARciano</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/RegisterForm"
                  >VoluntAR</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/LoginForm"
                  >ARciano</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/LoginForm"
                  >VoluntAR</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-comienzo-componente">
    <form @submit.prevent="submitRequest">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="nombre"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div class="mb-3">
        <label for="Apellido" class="form-label">Apellido</label>
        <input type="Apellido" class="form-control" id="Apellido" />
      </div>

      <div class="mb-3">
        <label for="mail" class="form-label">Mail</label>
        <input type="mail" class="form-control" id="mail" />
      </div>

      <div class="mb-3">
        <label for="tipoUsuario" class="form-label">Tipo usuario</label>
        <select v-model="selectedTipoUsuario" class="form-control" id="tipo">
          <option v-for="tipo in tipoUsuario" :value="tipo">{{ tipo }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="mail" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="tipo" />
      </div>
      <div class="mb-3">
        <label for="mail" class="form-label">Repetir contraseña</label>
        <input type="password" class="form-control" id="tipo" />
      </div>
      <button type="submit">Enviar Solicitud</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

const tipoUsuario = ref(["Voluntario", "Anciano"]);
const selectedTipoUsuario = ref("");

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitRequest() {
      try {
        const response = await axios.post(
          "https://6525d5d667cfb1e59ce7b745.mockapi.io/users",
          {
            email: this.email,
            password: this.password,
          }
        );
        if (response.data) {
          // Acciones en caso de éxito
          this.$router.push("/login");
        }
      } catch (error) {
        console.error("Ocurrio un error al enviar el request:", error);
        // Manejar el error
      }
    },
  },
};
</script>

<style>
.container-comienzo-componente form {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  /* Borde sólido de 2 píxeles en color negro */
  padding: 10px;
  /* Agrega espacio interno para el contenido */
  width: 400px;
  background: rgb(183, 119, 243);
  margin: auto;
  text-align: left;
  border-radius: 8px;
  box-shadow: 10px 50px rgb(67, 34, 97);
  margin-bottom: 3%;
  margin-top: 0%;
} /* Agrega aquí tus estilos si es necesario */
</style>
