<template>
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
          <li>
            <a>
              <router-link to="/UserProfile">
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
            <img
                  id="perfil"
                  src="../assets/images/perfil.png"
                  alt="Botón de PERFIL"
                />
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/User"
                  >Mis Datos</router-link
                >
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable"
                  >Mis Solicitudes</a
                >
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable"
                  >Certificaciones</a
                >
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable"
                  >Solicitudes Completadas</a
                >
              </li>
              <li>
                <a class="dropdown-item" aria-disabled="true" id="disable"
                  >Mis Retos</a
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
              Componentes!
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/User">User</router-link>
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
  <body>
    <div v-if="cargando" class="loading-container">
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
    </div>
    <div v-else>

<!-- TARJETA DE USUARIO -->
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/images/kine.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{ usuario.nombre + " " + usuario.apellido }}</h5>
          <p class="card-text">Amante de brindar ayuda</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Tipo de usuario: VOLUNTARIO</li>
          <li class="list-group-item">Ciudad: CASTELAR</li>
          <li class="list-group-item">Valoracion:</li>
        </ul>
        <div class="card-body">
          <button>
            <router-link to="/CrearSolicitud" class="card-link"
              >Crear solicitud</router-link
            >
          </button>
          <button>
            <router-link to="/Solicitudes" class="card-link"
              >Ver solicitudes</router-link
            >
          </button>
        </div>
      </div>

<!-- TABLA DE SOLICITUDES -->
      <div class="tabla-solicitudes-aceptadas">
        <h1>SOLICITUDES ACEPTADAS PENDIENTES</h1>
        <div class="tablaSolicitudes">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Asunto</th>
                <th scope="col">Direccion</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Tipo de solicitud</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="solicitud in solicitudes">
                <th scope="row">
                  <router-link
                    class="nav-link"
                    :to="'/persona/' + solicitud.id"
                    >{{ solicitud.id }}</router-link
                  >
                </th>
                <td>
                  {{ solicitud.asunto }}
                </td>
                <td>
                  {{ solicitud.direccion }}
                </td>
                <td>
                  {{ solicitud.ciudad }}
                </td>
                <td>
                  {{ solicitud.tipoSolicitud }}
                </td>
                <td>
                  <img
                    @click="terminarSolicitud(solicitud)"
                    id="terminada"
                    src="../assets/images/terminada.png"
                    alt="ver Solicitud"
                  />
                  <img
                    @click="seleccionarSolicitud(solicitud)"
                    id="pregunta"
                    src="../assets/images/pregunta.png"
                    alt="ver Solicitud"
                  />
                  <img
                    @click="eliminarSolicitud(solicitud)"
                    id="eliminar"
                    src="../assets/images/cruz.png"
                    alt="cancelar solicitud"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";

const usuario = ref({});
const solicitudSeleccionada = ref(null);
const solicitudes = ref([]);
const cargando = ref(true);

const seleccionarSolicitud = (solicitud) => {
  solicitudSeleccionada.value = solicitud;

  // Mostrar detalles en un modal personalizado
  if (solicitudSeleccionada.value) {
    const { id, asunto, direccion, ciudad, tipoSolicitud, descripcion } =
      solicitudSeleccionada.value;

    Swal.fire({
      title: "Detalles de la Solicitud",
      html: `
        <p>ID: ${id}</p>
        <p>Asunto: ${asunto}</p>
        <p>Dirección: ${direccion}</p>
        <p>Ciudad: ${ciudad}</p>
        <p>Tipo de Solicitud: ${tipoSolicitud}</p>
        <p>Descripción: ${descripcion}</p>
      `,
      confirmButtonText: "Aceptar",
      showCancelButton: false,
    }).then(async (result) => {
      if (result.value) {
      }
    });
  }
};

const terminarSolicitud = (solicitud) => {
  fetch(
    `https://655c16b6ab37729791a9cfba.mockapi.io/voluntar/solicitudAceptada/${solicitud.id}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((solicitud) => {
      Swal.fire({
        title: "Solicitud terminada!",
        html: `
        `,
        confirmButtonText: "Aceptar",
        showCancelButton: false,
      }).then(async (result) => {
        if (result.value) {
          window.location.reload();
        }
      });
    })
    .catch((error) => {
      alert("Error en eliminar la solicitud");
    });
};

const eliminarSolicitud = (solicitud) => {
  fetch(
    `https://655c16b6ab37729791a9cfba.mockapi.io/voluntar/solicitudAceptada/${solicitud.id}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((solicitud) => {
      fetch("https://6552a4cf5c69a779032a3b33.mockapi.io/voluntar/solicitud", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(solicitud),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((task) => {
        })
        .catch((error) => {
        });
        Swal.fire({
        title: "Solicitud cancelada!",
        html: `
        `,
        confirmButtonText: "Aceptar",
        showCancelButton: false,
      }).then(async (result) => {
        if (result.value) {
          window.location.reload();
        }
      });
      // alert("Solicitud cancelada!");
      // window.location.reload();
    })
    .catch((error) => {
      alert("Error en eliminar la solicitud");
    });
};

onMounted(async () => {
  // USUARIO
  // const numeroIngresado = prompt("Por favor, ingrese un número:");

  // if (numeroIngresado !== null) {
  //   const numero = parseInt(numeroIngresado, 10);

  //   if (!isNaN(numero)) {
      setTimeout(async () => {
        const urlUsuario = `https://6552a4cf5c69a779032a3b33.mockapi.io/voluntar/usuario/10`;

        try {
          // Realiza la solicitud para cargar el usuario
          const responseUsuario = await fetch(urlUsuario);

          if (responseUsuario.ok) {
            const usuarioCargado = await responseUsuario.json();
            usuario.value = usuarioCargado; // Asigna el usuario a la variable usuario
            console.log('Usuario cargado:', usuarioCargado);
          } else {
            console.error('No se pudo cargar el usuario');
          }
        } catch (error) {
          console.error('Error al cargar el usuario', error);
        }

        // SOLICITUDES
        solicitudes.value = [];
        const urlSolicitudes =
          'https://655c16b6ab37729791a9cfba.mockapi.io/voluntar/solicitudAceptada';

        try {
          const responseSolicitudes = await fetch(urlSolicitudes);

          if (responseSolicitudes.ok) {
            const data = await responseSolicitudes.json();
            solicitudes.value = data;
            console.log('Solicitudes cargadas:', data);
          } else {
            console.error('No se pudieron cargar las solicitudes');
          }
        } catch (error) {
          console.error('Error al cargar las solicitudes', error);
        }

        cargando.value = false;
      }, 1500);
    }
  //   else {
  //     alert("Por favor, ingrese un número válido.");
  //   }
  // } else {
  //   alert("Operación cancelada por el usuario.");
  // }
);

</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h5{
  display: flex;
  justify-content: center;
  align-items: center;
}
.perfil {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semi-transparente */
  z-index: 9999;
}
.spinner-grow {
  margin: 5px;
}

.card {
  margin-top: 20px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 20xp;
}

#disable {
  color: grey;
}

h1 {
  text-align: center;
}

.tabla-solicitudes-aceptadas {
  margin-top: 20px;
  margin-left: 15%;
  margin-right: 15%;
}

#eliminar, #terminada, #pregunta{
  margin-left: 10%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transition: transform 0.3s ease;
  cursor:pointer;
}

#terminada:hover,
#pregunta:hover,
#eliminar:hover {
  transform: scale(1.5);
}
</style>
