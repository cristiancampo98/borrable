<template>
  <div class="container">
    <h1>Hola mundo</h1>

    <Toast />
    <form @submit.prevent="greet">
      <InputText v-model="text" type="text" />
      <Button type="submit" label="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
    }
  },
  methods: {
    greet() {
      this.$toast.add({ severity: 'info', summary: 'Hello ' + this.text })
    },
  },
}
</script>
