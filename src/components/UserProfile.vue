<template>
    <div>
        <h2>Perfil de {{ userType }}</h2>
        <form @submit.prevent="updateProfile">
            <label for="name">Nombre:</label>
            <input v-model="profile.name" type="text" id="name" required />

            <label for="address">Dirección:</label>
            <input v-model="profile.address" type="text" id="address" required />



            <button type="submit">Actualizar Perfil</button>
        </form>
    </div>
</template>
  
<script>
export default {
    props: {
        userType: String // 'Voluntario' o 'Anciano'
    },
    data() {
        return {
            profile: {
                name: '',
                address: '',

            }
        };
    },
    methods: {
        updateProfile() {
            // Lógica para actualizar el perfil en el backend
        }
    },
    created() {
        // Lógica para obtener la información del perfil desde el backend
        // y asignarla a 'this.profile'.
    }
};
</script>
  
<style scoped>
/* Tus estilos aquí */
</style>
  