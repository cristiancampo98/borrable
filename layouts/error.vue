<template>
  <div id="content-error">
    <img v-if="error.statusCode === 404" src="/img/ic_error.svg" />
    <h2 v-if="error.statusCode === 404">Oops!, error 404 not found</h2>
    <h2 v-else>Oops!, ocurrió un error</h2>
    <p v-if="error.statusCode === 404">
      Lo sentimos, estamos trabajando para mejorar. Si no encuentras lo que
      deseas te invitamos a volver al inicio.
    </p>
    <NuxtLink id="button-back" to="/">Inicio</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: undefined,
      required: true,
    },
  },
}
</script>
