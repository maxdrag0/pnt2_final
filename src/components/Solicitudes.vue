<template>
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

  <div class="tablaSolicitudes">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">ID Usuario</th>
          <th scope="col">Direccion</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Tipo de solicitud</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <th scope="col">25</th>
          <td>Calle Falsa 123</td>
          <td>Castelar</td>
          <td>Farmacia</td>
          <td>
            <button @click="aceptarSolicitud(solicitud.id)">
              Aceptar
            </button>
            <button @click="seleccionarSolicitud(solicitud)">
              <img id="pregunta" src="../assets/images/pregunta.png" alt="ver Solicitud" />
            </button>
          </td>
        </tr>
        <tr v-for="solicitud in solicitudes">
          <th scope="row">
            <router-link class="nav-link" :to="'/persona/' + solicitud.id">{{
              solicitud.id
            }}</router-link>
          </th>
          <td>
            {{ solicitud.idUsuario }}
          </td>
          <td>
            {{ solicitud.direccion }}
          </td>
          <td>
            {{ solicitud.ciudad }}
          </td>
          <td>
            {{ solicitud.tipoSolicitud }}
            <!-- COMO ELEGIR TIPO DE SOLICITUD EN BASE AL NUMERO -->
          </td>
          <td>
            <button @click="aceptarSolicitud(solicitud.id)">
              Aceptar
            </button>
            <button @click="seleccionarSolicitud(solicitud)">
              <img id="pregunta" src="../assets/images/pregunta.png" alt="ver Solicitud" />
            </button>


          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-if="solicitudSeleccionada">
    <h2>Detalles de la Solicitud</h2>
    <p>ID: {{ solicitudSeleccionada.id }}</p>
    <p>ID Usuario: {{ solicitudSeleccionada.idUsuario }}</p>
    <p>Dirección: {{ solicitudSeleccionada.direccion }}</p>
    <p>Ciudad: {{ solicitudSeleccionada.ciudad }}</p>
    <p>Tipo de Solicitud: {{ solicitudSeleccionada.tipoSolicitud }}</p>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const solicitudes = ref([]);
const solicitudSeleccionada = ref(null);




const seleccionarSolicitud = (solicitud) => {
  solicitudSeleccionada.value = solicitud;
};

// La siguiente funcón const es para intentar sacar
// la solicitud del listado general y moverla a las solicitudes pendientes
// del usuario una vez que la misma fue aceptada



const aceptarSolicitud = async (solicitudId) => {
  try {
    const response = await axios.put(`https://6525d5d667cfb1e59ce7b745.mockapi.io/solicitud/${solicitudId}`, {
      estado: 'aceptada' // Asegúrate de que este campo coincida con tu modelo de datos
    });

    if (response.status === 200) {
      alert("Solicitud aceptada con éxito");
      // Eliminar la solicitud aceptada de la lista de solicitudes
      solicitudes.value = solicitudes.value.filter(s => s.id !== solicitudId);
      // Puedes emitir un evento o realizar otra acción para actualizar la vista del usuario
    }
  } catch (error) {
    console.error("Error al aceptar la solicitud:", error);
  }
};


onMounted(() => {
  solicitudes.value = [];
  let urlGet = "https://6552a4cf5c69a779032a3b33.mockapi.io/voluntar/solicitud";

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

//const verSolicitud = () => { };

</script>

<style>
#perfil {
  width: 40px;
  height: 40px;
  margin-right: 4px;
}

#pregunta {
  width: 20px;
  height: 20px;
}

#aceptar {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}

#disable {
  color: grey;
}

.tablaSolicitudes {
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
