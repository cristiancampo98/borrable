import { required } from 'vuelidate/lib/validators'

const require = [
  v => !!v || 'El dato es necesario'
]

const email = [
  v =>
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
      v
    ) || 'El email debe ser válido',
  v => v == 'ejemplo' || 'Debe contener XXX'
]

export const generateValidation = (name, rules) => {
  const validations = {}

  rules.forEach(element => {
    validations[element.name] = {...element.name}
  });

  return { [name]: validations }
}
