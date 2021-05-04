<template>
  <div
    class="form-group p-field"
    :class="{ 'form-group--error': $v.value.$error }"
  >
    <label v-if="label !== ''" class="form__label" :for="name">{{
      label
    }}</label>

    <InputText
      :id="name"
      :value="value"
      :name="name"
      :type="type"
      :class="{ form__input: true, 'p-invalid': $v.value.$error }"
      :placeholder="placeholder"
      @input="sendInfo($event)"
    />

    <div v-for="(item, index) in Object.keys(validation.message)" :key="index">
      <small
        v-if="!$v.value[item]"
        :id="name"
        :class="{ error: true, 'p-error': $v.value.$error }"
        >{{
          $t(validation.message[item].key, validation.message[item].additional)
        }}</small
      >
    </div>
  </div>
</template>

<script>
// import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'Input',
  props: {
    value: {
      type: String || Number,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    validate: {
      type: Boolean,
      required: true,
    },
    validation: {
      type: Object,
      required: true,
    },
  },
  validations() {
    const validation = { value: this.validation.validations }
    console.log('Registra validaciones', validation)
    return validation
  },
  watch: {
    validate(_new, _old) {
      console.log('Ingresa 2')
      if (_new) this.submit()
    },
  },
  mounted() {
    console.log('Componente creado', this.$v)
  },
  methods: {
    submit() {
      console.log('Ingresa 3')
      console.log('V:', this.$v)
      this.$v.$touch()

      console.log('Ingresa 4')
      if (this.$v.$invalid) {
        console.log('Ingresa 5')
        this.$emit('setStatus', this.name)
      }
    },
    sendInfo(_value) {
      this.$emit('input', _value)
    },
  },
}
</script>
