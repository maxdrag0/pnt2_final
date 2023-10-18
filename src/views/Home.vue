<template>
  <div class="home-container">
    <img src="../assets/images/abuelos-voluntarios.jpg" alt="Imagen de fondo" class="background-image" />

    <div class="overlay"></div>

    <div class="content">
      <h1>Bienvenido a VoluntAR</h1>
      <p>Conectamos a voluntarios con ancianos que necesitan asistencia en sus tareas diarias.</p>
      <div class="buttons">
        <router-link to="/register" class="btn btn-primary">Regístrate</router-link>
        <router-link to="/login" class="btn btn-secondary">Inicia Sesión</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.background-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.buttons {
  margin-top: 20px;
}

.btn-primary {
  background-color: #3498db;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.btn-secondary {
  background-color: #2c3e50;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  color: white;
  cursor: pointer;
  text-decoration: none;
}
</style>
