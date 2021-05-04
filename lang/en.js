export default {
  index: {
    goTo: 'Test login validations',
    form: {
      pos: {
        label: 'POS Name',
        placeholder: 'Point of sale',
      },
      quantity: {
        placeholder: 'Quantity',
      },
      email: {
        label: 'Email',
      },
    },
  },
  rule: {
    validation: {
      require: 'Is required',
      length: {
        min: 'Min {data} carácteres',
        max: 'Max {data} carácteres',
      },
    },
  },
  store: {
    apiServices: {
      sessionExpired:
        'Su sesión ha expirado, por favor inicie sesión nuevamente',
      loginRequired: 'Debe ingresar sus credenciales para continuar',
      timeOut: 'You have taken too long to respond. Please try again later',
      notFound: 'The requested url was not found. Please try again later',
      generalError: 'A server error occurred. Please try again later',
    },
  },
}
