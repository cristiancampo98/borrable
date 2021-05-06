import { required, maxLength, email } from 'vuelidate/lib/validators'

const rules = {
  require: { required },
  email: { max: maxLength(50), email },
  password: {
    password(value) {
      const containsUppercase = /[A-Z]/.test(value)
      const containsLowercase = /[a-z]/.test(value)
      const containsNumber = /[0-9]/.test(value)
      const containsSpecial = /[#?!@$%^&*-]/.test(value)
      return (
        containsUppercase &&
        containsLowercase &&
        containsNumber &&
        containsSpecial
      )
    },
  },
}

const messages = {
  require: { required: { key: 'rule.validation.require', additional: {} } },
  email: {
    max: { key: 'rule.validation.length.max', additional: { data: 50 } },
    email: { key: 'rule.validation.email', additional: {} },
  },
  password: {
    password: { key: 'rule.validation.password.valid', additional: {} },
  },
}

export const generateValidation = (_rules) => {
  const validation = {}
  _rules.forEach((element) => {
    validation[element.name] = rules[element.name]
  })

  const validations = {}
  const messagesResponse = {}

  Object.keys(validation).forEach((key, index) => {
    const values = rules[key]
    const message = messages[key]

    const valueKeys = Object.keys(values)
    const messageKeys = Object.keys(message)

    valueKeys.forEach((valKey) => {
      validations[valKey] = values[valKey]
    })

    if (_rules[index].message && _rules[index].message.length > 0) {
      _rules[index].message.forEach((valKey) => {
        messagesResponse[valKey] = {
          key: valKey.key,
          additional: valKey.additional,
        }
      })
    } else {
      messageKeys.forEach((valKey) => {
        messagesResponse[valKey] = message[valKey]
      })
    }
  })

  return { validations, message: messagesResponse }
}
