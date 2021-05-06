export default {
  application: 'Nombre del Backoffice',
  title: {
    login: 'Iniciar sesión',
    forgotPassword: 'Recuperar contraseña',
  },
  form: {
    email: {
      label: 'Correo electrónico',
      placeholder: 'Correo electrónico',
    },
    password: {
      label: 'Contraseña',
      placeholder: 'Contraseña',
      tooltip:
        'La contraseña debe contener al menos una minúscula, una mayúscula, un número y un símbolo',
    },
  },
  button: {
    login: 'Iniciar sesión',
    forgotPassword: '¿Olvidaste tu contraseña?',
  },
  rule: {
    validation: {
      require: 'El dato es requerido para continuar',
      length: {
        min: 'Debe contener al menos {data} carácteres',
        max: 'No puede contener más de {data} carácteres',
      },
      email: 'Debe ser una dirección de correo válida',
      password: {
        valid: 'La contraseña debe ser válida',
      },
    },
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
