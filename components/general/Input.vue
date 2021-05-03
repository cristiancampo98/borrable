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
    <small v-if="!$v.value.required" :id="name" class="error"
      >Field is required</small
    >
    <small v-if="!$v.value.minLength" :id="name" class="error"
      >Name must have at least
      {{ $v.value.$params.minLength.min }} letters.</small
    >
  </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

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
  },
  validations: {
    value: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
  watch: {
    validate(_new, _old) {
      if (_new) this.submit()
    },
  },
  methods: {
    submit() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.$emit('setStatus', this.name)
      }
    },
    sendInfo(_value) {
      this.$emit('input', _value)
    },
  },
}
</script>
