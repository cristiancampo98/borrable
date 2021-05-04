export default {
  index: {
    goTo: 'Prova le convalide di accesso',
    form: {
      pos: {
        label: 'Italiani :v',
        placeholder: 'ccc',
      },
      quantity: {
        placeholder: 'come',
      },
      email: {
        label: 'va',
      },
    },
  },
  rule: {
    validation: {
      require: 'Requerido en italiano',
      length: {
        min: 'Mínimo {data}',
        max: 'Máximo {data}',
      },
    },
  },
  store: {
    apiServices: {
      sessionExpired:
        'Su sesión ha expirado, por favor inicie sesión nuevamente',
      loginRequired: 'Debe ingresar sus credenciales para continuar',
      timeOut:
        'Avete impiegato troppo tempo per rispondere. Si prega di riprovare più tardi',
      notFound:
        "L'url richiesto non è stato trovato. Si prega di riprovare più tardi",
      generalError:
        'Si è verificato un errore del server. Si prega di riprovare più tardi',
    },
  },
}
