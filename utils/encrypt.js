const crypto = require('crypto')

const secretKey = process.env.SECRET_KEY
export const iv = crypto.randomBytes(16)

const getC = () => crypto.createCipheriv('aes-256-ctr', secretKey, iv)

const getD = () => crypto.createDecipheriv('aes-256-ctr', secretKey, iv)

export const enc = (str) => {
  const ci = getC()

  return Buffer.concat([ci.update(str), ci.final()]).toString('hex')
}

export const dec = (str) => {
  const di = getD()

  return Buffer.concat([
    di.update(Buffer.from(str, 'hex')),
    di.final(),
  ]).toString()
}
