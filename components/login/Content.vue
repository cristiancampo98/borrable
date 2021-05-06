<template>
  <GeneralForm
    v-if="form.length > 0"
    :title="$t('application')"
    :subtitle="$t('title.login')"
    :actions="actionsForm"
    @accept="acceptForm"
  >
    <GeneralInput
      v-for="(input, index) in form"
      :key="index"
      v-model="input.value"
      :label="input.label"
      :placeholder="input.placeholder"
      :tooltip="input.tooltip"
      :name="input.name"
      :type="input.type"
      :validate="validateInput"
      :validation="input.validations"
      @setStatus="changeSubmit"
    />

    <Button type="submit" :label="$t('button.login')" />
    <span @click="$emit('open-forgot')">{{ $t('button.forgotPassword') }}</span>
  </GeneralForm>
  <div v-else></div>
</template>

<script>
import { generateValidation } from '~/utils/validation'

export default {
  data: () => ({
    form: [],
    error: [],
    validateInput: false,
    actionsForm: [],
  }),
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    async init() {
      this.form = [
        {
          label: this.$t('form.email.label'),
          palceholder: this.$t('form.email.placeholder'),
          name: 'email',
          value: '',
          type: 'email',
          validations: await generateValidation([
            { name: 'require' },
            { name: 'email' },
          ]),
        },
        {
          label: this.$t('form.password.label'),
          palceholder: this.$t('form.password.placeholder'),
          tooltip: this.$t('form.password.tooltip'),
          name: 'password',
          value: '',
          type: 'password',
          validations: await generateValidation([
            { name: 'require' },
            { name: 'password' },
          ]),
        },
      ]

      this.actionsForm = [
        {
          text: 'Ejemplo',
          type: 'send',
        },
        {
          text: 'Cancelar',
          type: 'cancel',
          action: 'back',
          color: 'blue-500',
        },
      ]
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
    changeSubmit(_data) {
      this.error.push(_data)
    },
    submitForm() {
      this.acceptForm()
    },
  },
}
</script>
