<template>
  <div>
    <InputText v-if="type" v-model="value" type="text" />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
  data: () => ({
    value: '',
  }),
}
</script>
