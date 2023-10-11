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

  <div class="presentacion">
    <div class="titulo">
      <h1>Bienvenido a VoluntAR</h1>
    </div>
    <p>
      Conectamos a voluntarios con ancianos que necesitan asistencia en sus tareas
      diarias.
    </p>
  </div>

  <div class="container">
    <div class="container-img">
      <img src="/src/assets/images/abuelos-voluntarios.jpg" alt="imagen-abuelos" />
    </div>

    <div class="container-comienzo">
      <h2>Inicia sesión o regístrate para comenzar</h2>

      <div class="container-comienzo-registro">
        <form>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="nombre" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div class="mb-3">
            <label for="Apellido" class="form-label">Apellido</label>
            <input type="Apellido" class="form-control" id="Apellido" />
          </div>

          <div class="mb-3">
            <label for="mail" class="form-label">Mail</label>
            <input type="mail" class="form-control" id="mail" />
          </div>

          <router-link to="/RegisterForm"><button type="submit" class="btn btn-primary">
              Registrate!
            </button></router-link>
          <button @click="cambiarFormulario()" type="submit" class="btn btn-primary">
            Inicia sesion!
          </button>
        </form>
      </div>

      <div class="container-comienzo-inicio">
        <form>
          <div class="mb-3">
            <label for="mail" class="form-label">Mail</label>
            <input type="mail" class="form-control" id="mail" />
          </div>

          <div class="mb-3">
            <label for="mail" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="mail" />
          </div>

          <button @click="cambiarFormulario()" type="submit" class="btn btn-primary">
            Registrate!
          </button>
          <router-link to="/User"><button type="submit" class="btn btn-primary">
              Inicia sesion!
            </button></router-link>
        </form>
      </div>

    </div>
  </div>

  <H1>SOLICITUDES</H1>
  <solicitudes></solicitudes>
  <H1>INICIO DE SESION</H1>
  <login-form></login-form>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import Solicitudes from '../components/Solicitudes.vue';
import User from '../components/User.vue';
import { onMounted, ref } from "vue";

let formulario = (false)

const cambiarFormulario = () => {
  formulario.value = !formulario.value
}

export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleSubmit() {
      // Lógica de envío de formulario
    },
  },
  components: {
    LoginForm,
    RegisterForm,
    Solicitudes,
    User
  },
};
</script>

<style>
#baston {
  width: 40px;
  /* Establece el ancho de la imagen */
  height: 40px;
}

.presentacion {
  display: flex;
  flex-direction: column;
  /* Alinea el contenido verticalmente */
  justify-content: center;
  /* Centra verticalmente */
  align-items: center;
  /* Centra horizontalmente */
  height: 100%;
  /* Asegura que ocupe el 100% de la altura de la ventana */
  background-color: rgb(183, 119, 243);
  margin-bottom: 10px;
}

.container {
  display: flex;
  justify-content: space-between;
  /* Añade espacio entre los divs */
  margin-bottom: 10%;
}

.container-img {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


img {
  width: 600px;
  /* Establece el ancho de la imagen */
  height: 300px;
}

.container-comienzo {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  /* Fondo gris claro */
  border: 1px solid #000;
  /* Borde sólido de 2 píxeles en color negro */
  padding: 10px;
  /* Agrega espacio interno para el contenido */
}

.container-comienzo form {
  width: 400px;
  padding: 30px;
  background: rgb(183, 119, 243);
  margin: auto;
  text-align: left;
  border-radius: 8px;
  box-shadow: 10px 9px rgb(67, 34, 97);
  margin-bottom: 3%;
  margin-top: 0%;
}

button:first-child {
  margin-right: 10px;
  color: white;
  background-color: rgba(12, 9, 9, 0.774);
  border-color: white;
  /* Añade margen a la derecha del primer botón */
}

button:last-child {
  margin-left: 10px;
  /* Añade margen a la izquierda del segundo botón */
}
</style>
