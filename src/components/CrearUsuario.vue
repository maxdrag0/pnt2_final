<template>
    <!-- NAVEGACION -->
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
                                <router-link class="dropdown-item" to="/UserProfile">Mis Datos</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/UserProfile">Certificaciones</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/Solicitudes">Mis Solicitudes</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/UserProfile">Solicitudes Completadas</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/UserProfile">Mis Retos</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- FIN NAVEGACION -->

    <div class="container-comienzo-componente">
        <form @submit.prevent="crearUsuario">
            <div class="mb-3">
                <label for="nombreUsuario" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombreUsuario" v-model="nombreUsuario" />
            </div>
            <div class="mb-3">
                <label for="emailUsuario" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailUsuario" v-model="emailUsuario" />
            </div>
            <div class="mb-3">
                <label for="passwordUsuario" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="passwordUsuario" v-model="passwordUsuario" />
            </div>
            <!-- Agrega aquí más campos si los necesitas -->
            <button type="submit">Crear Usuario</button>
        </form>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const nombreUsuario = ref("");
const emailUsuario = ref("");
const passwordUsuario = ref("");

const crearUsuario = async () => {
    try {
        const response = await axios.post(
            "YOUR_API_ENDPOINT_HERE",
            {
                nombre: nombreUsuario.value,
                email: emailUsuario.value,
                password: passwordUsuario.value,
            }
        );
        if (response.data) {
            // Acciones en caso de éxito
            this.$router.push("/algunaRuta");
        }
    } catch (error) {
        console.error("Ocurrió un error al crear el usuario:", error);
    }
};
</script>

<style>
/* Los mismos estilos que tus otros formularios */
</style>