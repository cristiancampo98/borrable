import Vue from 'vue'

Vue.mixin({
  methods: {
    showAlert({
      title = '',
      message = '',
      type = 'error', // success, info, warn, error
      duration = 3500, // Delay in milliseconds to close the message automatically
    }) {
      this.$toast.add({
        severity: type,
        summary: title,
        detail: message,
        life: duration,
      })
    },
  },
})
