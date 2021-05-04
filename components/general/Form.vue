<template>
  <form @submit.prevent="$emit('accept')">
    <h2 v-if="title !== ''">{{ title }}</h2>
    <h3 v-if="subtitle !== ''">{{ subtitle }}</h3>
    <div>
      <slot />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
