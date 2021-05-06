<template>
  <main id="login-view" class="container">
    <section id="section-logo">
      <img
        src="https://miro.medium.com/fit/c/344/344/1*ag7HY-sKUeJWA-PewBt9Mw.png"
        alt="Logo Backoffice"
        class="slide-in-elliptic-top-fwd"
      />
    </section>
    <section>
      <LoginContent v-if="showLogin" @open-forgot="showLogin = false" />
      <div v-else>Forgot Password</div>
    </section>

    <GeneralLanguage />
    <div v-show="openModal">Modal de confirmación para "Forgot Password"</div>
  </main>
</template>

<script>
export default {
  data: () => ({
    showLogin: true,
    openModal: false,
  }),
}
</script>
