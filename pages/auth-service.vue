<template>
  <div>
    Hola Mundo! -> Auth
    <div class="mb-4">{{ response }}</div>
    <br />
    <div v-if="error">
      <p v-if="error.message" class="mt-3">
        Mensaje de error: {{ error.message }}
      </p>
      <br />
      <div>Error: {{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    response: {},
    error: {},
  }),
  mounted() {
    this.$nextTick(() => {
      this.getAny()
    })
  },
  methods: {
    getAny() {
      this.$nuxt.$loading.start()
      this.error = {}

      this.$store
        .dispatch('apiServices', {
          type: 'get',
          form: {
            url: `/onboarding/get-profile`,
          },
        })
        .then((result) => {
          if (result.status === true) {
            if (result.code === 100) {
              this.response = result
            } else {
              this.error = result
            }
          } else {
            this.error = result
          }

          this.$nuxt.$loading.finish()
          if (Object.keys(this.error).length > 0) {
            this.showAlert({
              message: this.error.message,
            })
          }
        })
    },
  },
}
</script>
