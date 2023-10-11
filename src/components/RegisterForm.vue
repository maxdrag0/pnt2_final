<template>
    <form @submit.prevent="submitRequest">
        <div>
            <h1>Register</h1>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="email" required />
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Enviar Solicitud</button>
    </form>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async submitRequest() {
            try {
                const response = await axios.post('https://6525d5d667cfb1e59ce7b745.mockapi.io/users', {
                    email: this.email,
                    password: this.password
                });
                if (response.data) {
                    // Acciones en caso de éxito
                    this.$router.push('/login');
                }
            } catch (error) {
                console.error('Ocurrio un error al enviar el request:', error);
                // Manejar el error
            }
        },
    },
};
</script>
  
<style>
/* Agrega aquí tus estilos si es necesario */
</style>
  