<template>
  <div class="container">
    <h1>Hola mundo</h1>

    <form @submit.prevent="greet">
      <InputText v-model="text" type="text" />
      <Button type="submit" label="Submit" />
    </form>

    <div>
      <span @click="$router.push(localePath({ path: 'auth-service' }))">{{
        $t('index.goTo')
      }}</span>
      <br />
      <nuxt-link :to="localePath('auth-service')">{{
        $t('index.goTo')
      }}</nuxt-link>
    </div>

    <div v-for="locale in availableLocales" :key="locale.code">
      <img :src="locale.image" height="50" width="50" />
      <nuxt-link :to="switchLocalePath(locale.code)"
        >{{ locale.name }}<br
      /></nuxt-link>
    </div>

    <Button type="submit" label="Mostrar alert" @click="showTestAlert" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    greet() {
      this.$toast.add({ severity: 'info', summary: 'Hello ' + this.text })
    },
    showTestAlert() {
      this.showAlert({
        type: 'success',
        message: 'Mensaje de prueba',
      })
    },
  },
}
</script>
