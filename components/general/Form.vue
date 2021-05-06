<template>
  <form ref="form" method="post" @submit.prevent="$emit('accept')">
    <h2 v-show="title !== ''">{{ title }}</h2>
    <h3 v-show="subtitle !== ''">{{ subtitle }}</h3>
    <div>
      <slot />
    </div>
    <div v-show="actions && actions.length > 0">
      <GeneralButton
        v-for="(item, index) in actions"
        :key="index"
        :color="item.color"
      />
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
    actions: {
      type: Array,
      required: false,
      default: null,
    },
  },
}
</script>
