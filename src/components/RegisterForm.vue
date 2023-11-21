<template>
  <header>
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
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#ancianos">Anciano</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#voluntarios">VoluntARio</a>
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
  </header>

  <body>
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
          <p v-if="errors.apellido" class="text-danger">
            {{ errors.apellido }}
          </p>
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
          <p v-if="errors.password" class="text-danger">
            {{ errors.password }}
          </p>
        </div>

        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
          <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" />
          <p v-if="errors.confirmPassword" class="text-danger">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
    </div>
  </body>
</template>

<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();

const nombre = ref("");
const apellido = ref("");
const email = ref("");
const tipoUsuario = ref("");
const password = ref("");
const confirmPassword = ref("");
const errors = ref({});

const validateForm = () => {
  errors.value = {};

  if (!nombre.value) {
    errors.value.nombre = "El nombre es requerido.";
  }

  if (!apellido.value) {
    errors.value.apellido = "El apellido es requerido.";
  }

  if (!email.value) {
    errors.value.email = "El email es requerido.";
  }

  if (!password.value) {
    errors.value.password = "La contraseña es requerida.";
  } else if (password.value !== confirmPassword.value) {
    errors.value.confirmPassword = "Las contraseñas no coinciden.";
  }

  if (Object.keys(errors.value).length === 0) {
    submitRequest();
  }
};

const submitRequest = async () => {
  try {
    const response = await axios.post(
      "https://6552a4cf5c69a779032a3b33.mockapi.io/voluntar/usuario",
      {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        tipoUsuario: tipoUsuario.value,
        password: password.value,
      }
    );

    if (response.status === 201) {
      // Verifica que el usuario fue creado correctamente
      alert("Usuario creado exitosamente");
      router.push("/User");
      $router.push({ name: "User", params: { userId: response.data.id } });
    }
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
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
  height: 110vh;
  padding-top: 150px;
}

.container-register form {
  width: 400px;
  padding: 30px;
  background: rgb(183, 119, 243);
  margin: auto;
  text-align: left;
  border-radius: 8px;
  box-shadow: 10px 9px rgb(67, 34, 97);
  margin-bottom: 10%;
  margin-top: 4%;
}
</style>
