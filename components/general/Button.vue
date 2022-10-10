<template>
  <Button
    class="default"
    :class="classButton"
    :type="type === 'submit' ? type : 'button'"
    :label="label"
    @click="buttonClick"
  />
</template>

<script>
export default {
  props: {
    classButton: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: '',
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    buttonClick() {
      if (this.type === 'redirect') {
        this.$router.push(this.localePath({ path: this.url }))
      }
      if (this.type === 'delete') {
        this.$emit('click-delete')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.default {
  @apply tw-rounded-full;
}
.bg-white {
  @apply tw-bg-white;
  @apply tw-border-white;
  @apply tw-text-black hover:tw-text-black;
}
.h-44 {
  @apply tw-h-11;
}
.h-55 {
  @apply tw-h-[50px];
}
.text-xs {
  @apply tw-text-[13px];
}
.gilroy-bold {
  @apply tw-font-gilroy-bold #{!important};
}
.gilroy-semibold {
  @apply tw-font-gilroy-semibold #{!important};
}
</style>
