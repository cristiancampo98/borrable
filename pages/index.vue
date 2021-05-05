<template>
  <div class="container">
    <main class="container">
      <section>
        <img
          src="https://miro.medium.com/fit/c/344/344/1*ag7HY-sKUeJWA-PewBt9Mw.png"
          alt="Logo Backoffice"
        />
      </section>
      <section>
        <div>Login</div>
        <div>Forgot Password</div>
      </section>

      <GeneralLanguage />
      <div>Modal de confirmación para "Forgot Password"</div>
    </main>
    <GeneralForm
      v-if="form.length > 0"
      title="Este es un formulario"
      subtitle="Ejemplo de subtítulo"
      @accept="acceptForm"
    >
      <GeneralInput
        v-for="(input, index) in form"
        :key="index"
        v-model="input.value"
        :label="input.label"
        :placeholder="input.placeholder"
        :name="input.name"
        :type="input.type"
        :validate="validateInput"
        :validation="input.validations"
        @setStatus="changeSubmit"
      />

      <Button type="submit" label="Enviar" />
    </GeneralForm>
  </div>
</template>

<script>
import { generateValidation } from '~/utils/validation'

export default {
  data() {
    return {
      text: null,
      submitStatus: null,
      validateInput: false,
      form: [],
      error: [],
      validations: {},
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    async init() {
      this.form = [
        {
          label: this.$t('index.form.pos.label'),
          placeholder: this.$t('index.form.pos.placeholder'),
          name: 'pos',
          value: '',
          validations: await generateValidation([
            {
              name: 'require',
              message: [{ key: 'rule.pos', additional: { data: 'nombre' } }],
            },
            { name: 'name' },
          ]),
        },
        {
          placeholder: this.$t('index.form.quantity.placeholder'),
          name: 'quantity',
          value: '',
          type: 'number',
          validations: await generateValidation([{ name: 'require' }]),
        },
        {
          label: this.$t('index.form.email.label'),
          name: 'email',
          value: '',
          type: 'email',
          validations: await generateValidation([
            { name: 'require' },
            { name: 'email' },
          ]),
        },
      ]
    },
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
