<template>
  <form @submit.prevent="$emit('accept')">
    <h2 v-if="title !== ''">{{ title }}</h2>
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
  },
}
</script>
