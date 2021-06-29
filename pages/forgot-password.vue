<template>
  <main id="forgot-password-view" class="container">
    <section id="section-form">
      <LoginForgotPassword
        v-if="showView === 'forgotPassword'"
        @changeView="changeView"
      />
      <LoginValidateCode
        v-if="showView === 'validateCode'"
        :data="data"
        @changeView="changeView"
      />
      <LoginChangePassword v-if="showView === 'changePassword'" />
    </section>

    <GeneralLanguage />
  </main>
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    title: '',
    showView: 'forgotPassword',
    data: '',
  }),
  head() {
    return {
      title: this.title,
      meta: [{ charset: 'utf-8' }],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.title = this.$t('title.forgotPassword')
    })
  },
  methods: {
    changeView(_data) {
      this.showView = _data.view
      this.data = _data.additional
    },
  },
}
</script>
