<template>
    <!-- NAVEGACION -->
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
          <li>
            <a>
              <router-link to="/User">
                <img
                  id="perfil"
                  src="../assets/images/perfil.png"
                  alt="Botón de PERFIL"
                />
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
              Mi Perfil
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Mis Datos</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Certificaciones</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/Solicitudes"
                  >Mis Solicitudes</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Solicitudes Completadas</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/UserProfile"
                  >Mis Retos</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    <!-- FIN NAVEGACION -->
</template>

<script setup>

</script>

<style>

</style>