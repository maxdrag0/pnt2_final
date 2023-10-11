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
                    <li>
                        <a>
                            <router-link to="/User">
                                <img id="perfil" src="../assets/images/perfil.png" alt="Botón de PERFIL" />
                            </router-link>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Mi Perfil
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/RegisterForm">Mis Datos</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/RegisterForm">Certificaciones</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/RegisterForm">Mis Solicitudes</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/RegisterForm">Solicitudes Completadas</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/RegisterForm">Mis Retos</router-link>
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
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Tipo de solicitud</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Maximiliano</td>
                    <td>Drago</td>
                    <td>Castelar</td>
                    <td>Farmacia</td>
                    <td>
                        <img id="aceptar" src="../assets/images/aceptar.png" alt="aceptarSolicitud" />
                        <img id="pregunta" src="../assets/images/pregunta.png" alt="ver Solicitud" />
                    </td>
                </tr>
                <tr v-for="solicitudes in solicitudes">
                    <th scope="row">
                        <router-link class="nav-link" :to="'/persona/' + entidad.id">{{
                            entidad.id
                        }}</router-link>
                    </th>
                    <td>
                        {{ solicitud.nombre }}
                    </td>
                    <td>
                        {{ solicitud.apellido }}
                    </td>
                    <td>
                        {{ solicitud.ciudad }}
                    </td>
                    <td>
                        {{ solicitud.tipoSolicitud }}
                    </td>
                    <td>
                        <img id="aceptar" src="../assets/images/aceptar.png" alt="aceptarSolicitud" />
                        <img id="pregunta" src="../assets/images/pregunta.png" alt="ver Solicitud" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
const solicitudes = ref([]);

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

const verSolicitud = () => { };
const aceptarSolicitud = () => { };
</script>
  
<style>
#perfil {
    width: 40px;
    /* Establece el ancho de la imagen */
    height: 40px;
    margin-right: 4px;
}

#pregunta {
    width: 20px;
    /* Establece el ancho de la imagen */
    height: 20px;
}

#aceptar {
    width: 20px;
    /* Establece el ancho de la imagen */
    height: 20px;
    margin-right: 4px;
}
</style>
  