<template>
  <img :class="propClass" src="/img_logo_xhaman_white_menu.png" alt="Logo" />
</template>
<script>
export default {
  props: {
    propClass: {
      type: String,
      default: 'tw-w-full',
    },
  },
}
</script>
