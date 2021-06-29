<template>
  <div id="login-view" class="container">
    <section id="section-form">
      <LoginContent />
    </section>

    <GeneralLanguage />
  </div>
</template>

<script>
export default {
  layout: 'login',
  transition: 'initial-transition',
  data: () => ({
    title: '',
  }),
  head() {
    return {
      title: this.title,
      meta: [{ charset: 'utf-8' }],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.title = this.$t('title.login')
    })
  },
}
</script>
