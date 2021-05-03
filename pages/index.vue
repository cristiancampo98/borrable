<template>
  <div class="container">
    <h1>Hola mundo</h1>

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

    <GeneralForm title="Este es un formulario" @accept="acceptForm">
      <GeneralInput
        v-for="(input, index) in form"
        :key="index"
        v-model="input.value"
        :label="input.label"
        :placeholder="input.placeholder"
        :name="input.name"
        :type="input.type"
        :validate="validateInput"
        @setStatus="changeSubmit"
      />

      <Button type="submit" label="Enviar" />
    </GeneralForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      submitStatus: null,
      validateInput: false,
      form: [
        {
          label: 'Nombre del punto de venta',
          placeholder: 'Punto de venta',
          name: 'pos',
          value: '',
        },
        {
          placeholder: 'Cantidad de elementos',
          name: 'quantity',
          value: '',
          type: 'number',
        },
        {
          label: 'Correo electrónico',
          name: 'email',
          value: '',
          type: 'email',
        },
      ],
      error: [],
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
    acceptForm() {
      this.error = []
      this.validateInput = true
      const self = this
      setTimeout(() => {
        self.validateInput = false

        self.validateForm()
      }, 500)
    },
    changeSubmit(_data) {
      this.error.push(_data)
    },
    validateForm() {
      if (this.error.length > 0) {
        this.showAlert({
          type: 'error',
          message: 'Debes llenar el campo vacío',
        })
      } else {
        const form = {}

        this.form.forEach((r) => {
          form[r.name] = r.value
        })

        this.showAlert({
          type: 'success',
          message: 'Formulario enviado',
        })
      }
    },
  },
}
</script>
