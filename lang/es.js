export default {
  index: {
    goTo: 'Probar validaciones login',
    form: {
      pos: {
        label: 'Nombre del punto de venta',
        placeholder: 'Punto de venta',
      },
      quantity: {
        placeholder: 'Cantidad de elementos',
      },
      email: {
        label: 'Correo electrónico',
      },
    },
  },
  rule: {
    validation: {
      require: 'El dato es requerido para continuar',
      length: {
        min: 'Debe contener al menos {data} carácteres',
        max: 'No puede contener más de {data} carácteres',
      },
    },
    pos: 'El {data} del punto de venta es necesario',
  },
  store: {
    apiServices: {
      sessionExpired:
        'Su sesión ha expirado, por favor inicie sesión nuevamente',
      loginRequired: 'Debe ingresar sus credenciales para continuar',
      timeOut:
        'Ha tardado demasiado en responder. Intente nuevamente más tarde',
      notFound:
        'No se encontró la url solicitada. Intente nuevamente más tarde',
      generalError:
        'Ocurrió un error en el servidor. Intente nuevamente más tarde',
    },
  },
}
