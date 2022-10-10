<template>
  <div
    class="tw-rounded-tl-3xl tw-rounded-br-3xl tw-w-[200px] tw-shadow-md"
    :class="bgCard"
  >
    <div
      class="tw-rounded-tl-3xl tw-rounded-br-3xl tw-h-[173px] tw-flex tw-place-items-center tw-justify-center"
      :class="bgImg"
    >
      <img :src="image" alt="Image" class="" />
    </div>
    <div class="tw-px-6 tw-pt-8 tw-pb-10">
      <h1
        class="tw-font-gilroy-bold tw-text-2xl tw-text-center"
        :class="colorTitle"
      >
        {{ title }}
      </h1>
      <p
        class="tw-text-center tw-font-gilroy-semibold tw-text-sm tw-mt-8"
        :class="colorText"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bgCard: {
      type: String,
      default: 'tw-bg-white',
    },
    bgImg: {
      type: String,
      default: 'tw-bg-green-500/20',
    },
    colorTitle: {
      type: String,
      default: 'tw-text-black',
    },
    colorText: {
      type: String,
      default: 'tw-text-black',
    },
    title: {
      type: String,
      default: 'Title',
    },
    text: {
      type: String,
      default: 'Text',
    },
    image: {
      type: String,
      default: '/ic_mind.svg',
    },
  },
}
</script>
