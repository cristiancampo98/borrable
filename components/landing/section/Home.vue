<template>
  <div class="tw-bg-landing-home tw-bg-cover tw-bg-no-repeat tw-h-screen">
    <div
      class="tw-flex tw-justify-between tw-items-center tw-px-[132px] tw-pt-3"
    >
      <div>
        <LandingLogo />
      </div>
      <div><LandingList :items="itemsList" /></div>
      <div>
        <GeneralButton
          :label="$t('title.login')"
          class-button="h-44 text-xs gilroy-bold"
        />
      </div>
    </div>
    <div class="tw-w-[770px] tw-px-32 tw-mt-32">
      <h1
        class="tw-text-8xl tw-font-bold tw-uppercase tw-font-gilroy-bold tw-text-[#F7F7FA]"
      >
        {{ $t('components.landing.section.home.title') }}
      </h1>
      <h1
        class="tw-text-[28px] tw-font-bold tw-mt-8 tw-font-gilroy-bold tw-text-[#F7F7FA]"
      >
        {{ $t('components.landing.section.home.subtitle') }}
      </h1>
      <p
        class="tw-text-lg tw-w-[526px] tw-mt-5 tw-font-gilroy-regular tw-text-[#FCFCFC]"
      >
        {{ $t('components.landing.section.home.description') }}
      </p>
      <div class="tw-flex tw-justify-between tw-mt-6">
        <GeneralButton
          :label="$t('title.registerAsInstructor')"
          class-button="h-50 text-xs bg-white gilroy-semibold"
        />
        <GeneralButton
          :label="$t('title.registerAsStudent')"
          class-button="h-50 text-xs bg-white gilroy-semibold"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemsList: [
        {
          name: this.$t('components.landing.section.home.home'),
          path: '/#',
        },
        {
          name: this.$t('components.landing.section.home.about'),
          path: '/#',
        },
        {
          name: this.$t('components.landing.section.home.recommended'),
          path: '/#',
        },
        {
          name: this.$t('components.landing.section.home.testimonials'),
          path: '/#',
        },
      ],
    }
  },
}
</script>
