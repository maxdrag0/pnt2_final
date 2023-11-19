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
                <a class="dropdown-item" aria-disabled="true" id="disable">Mis Solicitudes</a>
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
                <router-link class="dropdown-item" to="/UserProfile"
                  >UserProfile</router-link
                >
              </li>
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
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="../assets/images/perfil.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Maximiliano</h5>
        <p class="card-text">Voluntario amante de ancianos</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Tipo de usuario: VOLUNTARIO</li>
        <li class="list-group-item">Ciudad: CASTELAR</li>
        <li class="list-group-item">Valoracion:</li>
      </ul>
      <div class="card-body">
        <router-link to="/CrearSolicitud" class="card-link"
          >Crear solicitud</router-link
        >
        <router-link to="/Solicitudes" class="card-link"
          >Ver solicitudes</router-link
        >
      </div>
    </div>
    <div class="tabla-solicitudes-aceptadas">
          <h1>SOLICITUDES ACEPTADAS PENDIENTES</h1>
          <div class="tablaSolicitudes">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Ciudad</th>
                  <th scope="col">Tipo de solicitud</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Calle Falsa 123</td>
                    <td>Castelar</td>
                    <td>Farmacia</td>
                    <td>
                        <img id="pregunta" src="../assets/images/pregunta.png" alt="ver Solicitud" />
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  </body>
</template>

<script setup>
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.perfil {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.card {
  margin-top: 20px;
}

#disable {
  color: grey;
}

h1{
  text-align: center;
}

.tabla-solicitudes-aceptadas{
  margin-left: 15%;
  margin-right: 15%;
}
</style>
