<template>
  <div
    class="general-input-text form-group p-field"
    :class="{ 'form-group--error': $v.value.$error }"
  >
    <label v-if="label !== ''" class="form__label" :for="name">{{
      label
    }}</label>

    <InputText
      :id="name"
      v-tooltip.bottom="tooltip"
      :value="value"
      :name="name"
      :type="type"
      :class="{ form__input: true, 'p-invalid': $v.value.$error }"
      :placeholder="placeholder"
      @input="sendInfo($event)"
      @keyup.enter.prevent="sendForm"
    />

    <div v-if="$v.value.$error">
      <div
        v-for="(item, index) in Object.keys(validation.message)"
        :key="index"
      >
        <small
          v-if="!$v.value[item]"
          :class="{ error: true, 'p-error': $v.value.$error }"
          >{{
            $t(
              validation.message[item].key,
              validation.message[item].additional
            )
          }}</small
        >
      </div>
    </div>
  </div>
</template>

<script>
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
    tooltip: {
      type: String,
      required: false,
      default: '',
    },
  },
  validations() {
    const validation = { value: this.validation.validations }
    return validation
  },
  watch: {
    validate(_new, _old) {
      if (_new) this.submit()
    },
  },
  mounted() {
    this.$v.value.$reset()
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
    sendForm() {
      this.submit()

      this.$emit('submit')
    },
  },
}
</script>

<style lang="scss">
.general-input-text {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 7px;
  }
}
</style>
