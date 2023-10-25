<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/">
          <img id="baston" src="../assets/images/baston.png" alt="Botón de Inicio" />
        </router-link>
      </a>

    </div>
  </nav>

  <div>
    <!-- PERFIL -->
    <div v-if="userProfile">
      <div class="card profile-card">
        <!-- Contenido de la tarjeta del perfil aquí -->
      </div>
    </div>

    <!-- Secciones agregadas con contenido ejemplar -->

    <!-- Mis Datos -->
    <section id="mis-datos">
      <h2>Mis Datos</h2>
      <!-- Tabla o contenido de ejemplo para Mis Datos -->

    </section>

    <!-- Certificaciones -->
    <section id="certificaciones">
      <h2>Certificaciones</h2>
      <table class="volunteer-table">
        <thead>
          <tr>
            <th>Nombre de Certificación</th>
            <th>Fecha</th>
            <th>Institución</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Certificación de Primeros Auxilios</td>
            <td>01/02/2023</td>
            <td>CRUZ ROJA</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Mis Solicitudes -->
    <section id="mis-solicitudes">
      <h2>Mis Solicitudes</h2>
      <table class="volunteer-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Actividad Solicitada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/10/2023</td>
            <td>Asistencia para ir de compras</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Mis Retos -->
    <section id="mis-retos">
      <h2>Mis Retos</h2>
      <p>Lista o contenido que represente los retos o metas del usuario.</p>

    </section>

    <!-- Solicitudes Completadas (sin cambios) -->
    <section id="solicitudes-completadas">
      <h2>Solicitudes Completadas</h2>
      <table class="volunteer-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Actividad</th>
            <th>Persona Ayudada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10/10/2023</td>
            <td>Acompañamiento a consulta médica</td>
            <td>Señor Rodriguez</td>
          </tr>
          <tr>
            <td>05/10/2023</td>
            <td>Compras de supermercado</td>
            <td>Señora Perez</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, onErrorCaptured } from "vue";

const userProfile = ref(null);

const fetchUserProfile = async () => {
  const userId = $route.params.userId;
  try {
    const response = await axios.get(`https://6525d5d667cfb1e59ce7b745.mockapi.io/${userId}`);
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
.profile-card {
  margin-top: 20px;
  width: 18rem;
}

.volunteer-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.volunteer-table th,
.volunteer-table td {
  padding: 10px;
  border: 1px solid rgb(183, 119, 243);
  /* Nuevo color para las bordes */
}

.volunteer-table th {
  background: rgb(183, 119, 243);
  /* Nuevo color para el encabezado */
  color: white;
}

.volunteer-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.card {
  margin-top: 20px;
}
</style>
