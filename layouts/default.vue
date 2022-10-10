<template>
  <div>
    <LandingSectionHome />
    <LandingSectionAbout />
    <div class="tw-pt-16">
      <h1
        class="tw-font-gilroy-bold tw-text-[#393941] tw-text-5xl tw-text-center"
      >
        Recomendados
      </h1>
      <h3
        class="tw-font-gilroy-semibold tw-text-[#98989e] tw-text-4xl tw-text-center"
      >
        Empieza hoy
      </h3>
      <div class="tw-px-[492px]">
        <LandingList
          :items="itemsList"
          color-text="tw-text-[#b0b0b7] hover:tw-text-[#474753] tw-decoration-[#F09E2E]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  data: () => ({
    itemsList: [
      {
        name: 'Cuerpo',
        path: '/#1',
      },
      {
        name: 'Mente',
        path: '/#2',
      },
      {
        name: 'Acción',
        path: '/#3',
      },
      {
        name: 'Emoción',
        path: '/#4',
      },
    ],
    actualPage: '',
    showLogout: false,
  }),
}
</script>
