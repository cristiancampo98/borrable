import { required, minLength, maxLength } from 'vuelidate/lib/validators'

const rules = {
  require: { required },
  name: { minLength: minLength(4), maxLength: maxLength(20) },
  email: { maxLengthE: maxLength(50) },
}

const messages = {
  require: { required: { key: 'rule.validation.require', additional: {} } },
  name: {
    minLength: { key: 'rule.validation.length.min', additional: { data: 4 } },
    maxLength: { key: 'rule.validation.length.max', additional: { data: 20 } },
  },
  email: {
    maxLengthE: { key: 'rule.validation.length.max', additional: { data: 50 } },
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
