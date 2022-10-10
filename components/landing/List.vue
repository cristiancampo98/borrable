<template>
  <ul class="tw-flex tw-justify-between tw-space-x-12 tw-py-4">
    <li v-for="(item, index) in items" :key="index">
      <nuxt-link
        class="hover:tw-underline tw-underline-offset-8 tw-decoration-4 tw-text-[13px] tw-font-gilroy-semibold"
        :class="colorText"
        :to="item.path"
        >{{ item.name }}</nuxt-link
      >
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [
        {
          name: 'Route name',
          path: '/#',
        },
      ],
    },
    colorText: {
      type: String,
      default: 'tw-text-[#F7F7FA]',
    },
  },
}
</script>
