<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link to="/">
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
                Ingresa!
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/RegisterForm"
                    >Registrate</router-link
                  >
                </li>
                <li>
                  <a class="dropdown-item" @click="formularioFalse()"
                    >Inicia sesion</a
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
                  <a class="dropdown-item" href="#ancianos">Anciano</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#voluntarios">VoluntARio</a>
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
                Componentes!
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/UserProfile"
                    >UserProfile</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/User"
                    >User</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/Solicitudes"
                    >Solicitudes</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/CrearSolicitud"
                    >CrearSolicitud</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="titulo">
      <h1>Bienvenido a VoluntAR</h1>
      <p>
        Conectamos a voluntarios con ancianos que necesitan asistencia en sus
        tareas diarias.
      </p>
    </div>
  </header>

  <main>
    <section class="container">
      <section class="container-img">
        <img
          src="/src/assets/images/abuelos-voluntarios.jpg"
          alt="imagen-abuelos"
        />
      </section>

      <section class="container-comienzo">
        <h2>Inicia sesión o regístrate para comenzar</h2>

        <section class="container-comienzo-registro" v-if="formulario">
          <form @submit.prevent="handleSubmit">
            <legend>Registrate</legend>

            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                aria-describedby="Nombre"
                required
                placeholder="Juan"
                v-model="nombre"
              />
            </div>

            <div class="mb-3">
              <label for="Apellido" class="form-label">Apellido</label>
              <input
                type="text "
                class="form-control"
                id="Apellido"
                required
                placeholder="Perez"
                v-model="apellido"
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Mail</label>
              <input
                type="email"
                class="form-control"
                id="email"
                required
                placeholder="juanperez@gmail.com"
                v-model="mail"
              />
            </div>

            <router-link to="/RegisterForm"
              ><button
              @click="emitirDatosUsuario"
              type="submit"
              class="btn btn-primary">
                Registrate!
              </button></router-link
            >
            <button
              @click="cambiarFormulario()"
              type="submit"
              class="btn btn-primary"
            >
              Inicia sesion!
            </button>
          </form>
        </section>

        <section class="container-comienzo-inicio" v-else>
          <form>
            <legend>Inicia sesion</legend>
            <div class="mb-3">
              <label for="email" class="form-label">Mail</label>
              <input type="email" class="form-control" id="email" required />
            </div>

            <div class="mb-3">
              <label for="contraseña" class="form-label">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="contraseña"
                required
              />
            </div>

            <button
              @click="cambiarFormulario()"
              type="submit"
              class="btn btn-primary"
            >
              Registrate!
            </button>
            <router-link to="/UserProfile"
              ><button type="submit" class="btn btn-primary">
                Inicia sesion!
              </button></router-link
            >
          </form>
        </section>
      </section>
    </section>
  </main>

  <section>
    <!-- //Seccion sobre nosotros -->
    <div class="titulo" id="ancianos">
      <h1>Sobre nosotros</h1>
      <h2>MAYORES</h2>
    </div>
    <p>
      Conectamos a voluntarios con ancianos que necesitan asistencia en sus
      tareas diarias.
    </p>
    <div class="titulo" id="voluntarios">
      <h1>Sobre nosotros</h1>
      <h2>VOLUNTARIOS</h2>
    </div>
    <p>
      Conectamos a voluntarios con ancianos que necesitan asistencia en sus
      tareas diarias.
    </p>
  </section>

  <footer>
    <h5>Contactanos y decinos como mejorar!</h5>
    <a
      href="//wa.me/5491157962522/?text=Hola%20Maxi%20que%20buen%20trabajo%20hicieron!"
      targnpet="_blank"
    >
      <img
        id="whatsapp"
        src="../assets/images/wsp.png"
        alt="Botón de Whatsapp"
      />
    </a>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const formulario = ref(true);
const usuario = ref({
  nombre: "",
  apellido: "",
  mail: "",
});

const cambiarFormulario = () => {
  formulario.value = !formulario.value;
};
const formularioFalse = () => {
  formulario.value = false;
};

const emitirDatosUsuario = () => {
  emit('copiarDatos', usuario.value);
};

</script>

<style>
h3 {
  padding-top: 100px;
}

p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

#baston {
  width: 40px;
  height: 40px;
}

#whatsapp {
  width: 40px;
  height: 40px;
}

.titulo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(183, 119, 243);
  margin-bottom: 10px;
}

.main {
  flex: 1;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10%;
}

.container-img {
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 600px;
  height: auto;
}

.container-comienzo {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border: 1px solid #000;
  padding: 10px;
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

.form-control::placeholder {
  color: rgba(165, 164, 164, 0.774);
}

button:first-child {
  margin-right: 10px;
  color: white;
  background-color: rgba(12, 9, 9, 0.774);
  border-color: white;
}

button:last-child {
  margin-left: 10px;
}
</style>
