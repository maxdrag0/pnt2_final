<template>
    <div class="user-form">
        <label for="email">Email:</label>
        <input v-model="user.email" type="email" id="email" required />

        <label for="password">Password:</label>
        <input v-model="user.password" type="password" id="password" required />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { user } = defineProps(['user']);
</script>

<style scoped>
.user-form {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
}
</style>
