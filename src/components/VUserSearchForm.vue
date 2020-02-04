<script>
  export default {
    name: 'UserSearchForm',
    data() {
      return {
        username: ''
      }
    }
  }
</script>

<template>
  <form @submit.prevent="$emit('submitted', username)">
    <label>
      <input type="text" v-model="username"/>
    </label>
    <button type="submit">Enviar</button>
  </form>
</template>
