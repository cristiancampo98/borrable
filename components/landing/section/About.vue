<template>
  <div
    class="tw-bg-landing-about-us tw-bg-cover tw-bg-no-repeat tw-h-screen tw-py-24 tw-bg-bottom"
  >
    <h1
      class="tw-text-center tw-text-5xl tw-font-gilroy-bold tw-text-[#F7F7FA]"
    >
      Sobre nosotros
    </h1>
    <div class="tw-flex tw-justify-center">
      <p
        class="tw-font-gilroy-regular tw-text-[#F7F7FA] tw-text-sm tw-text-center tw-w-[630px] tw-mt-3"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </p>
    </div>
    <div class="tw-flex tw-justify-center tw-space-x-14 tw-mt-16">
      <section v-for="(item, index) in itemsFeatureCard" :key="index">
        <LandingFeatureCard
          :bg-card="item.bgCard"
          :bg-img="item.bgImg"
          :color-title="item.colorTitle"
          :color-text="item.colorText"
          :title="item.title"
          :text="item.text"
          :image="item.image"
        />
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemsFeatureCard: [
        {
          bgCard: 'tw-bg-[#474753]',
          bgImg: 'tw-bg-[#cde9f0]',
          colorTitle: 'tw-text-[#F7F7FA]',
          colorText: 'tw-text-[#F7F7FA]',
          title: 'Mente',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
          image: '/ic_mind.png',
        },
        {
          bgCard: 'tw-bg-[#fae9d3]',
          bgImg: 'tw-bg-[#f8d9af]',
          colorTitle: 'tw-text-[#F09E2E]',
          colorText: 'tw-text-[#F09E2E]',
          title: 'Cuerpo',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
          image: '/ic_body.png',
        },
        {
          bgCard: 'tw-bg-[#474753]',
          bgImg: 'tw-bg-[#f2d4d2]',
          colorTitle: 'tw-text-[#F7F7FA]',
          colorText: 'tw-text-[#F7F7FA]',
          title: 'Emoción',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
          image: '/ic_emotion.png',
        },
        {
          bgCard: 'tw-bg-[#474753]',
          bgImg: 'tw-bg-[#e2dbe7]',
          colorTitle: 'tw-text-[#F7F7FA]',
          colorText: 'tw-text-[#F7F7FA]',
          title: 'Acción',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
          image: '/ic_action.png',
        },
      ],
    }
  },
}
</script>
