<template>
  <Button
    class="p-mr-2 p-mb-2"
    type="submit"
    :style="`backgroundColor: var(--${color})`"
    :label="$t('button.login')"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      default: 'primary-color',
    },
  },
}
</script>
