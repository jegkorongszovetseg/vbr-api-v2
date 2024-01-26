import process from 'node:process'
import JWT from 'jsonwebtoken'

const tokenSecret: string = process.env.ACCESS_TOKEN_SECRET || ''

export function signToken(userId: string, userRole: string) {
  return new Promise((resolve, reject) => {
    const payload = {
      userRole,
    }
    const options = {
      expiresIn: '1h',
      issuer: process.env.JWT_TOKEN_ISSUER,
      audience: userId,
    }
    return JWT.sign(payload, tokenSecret, options, (err, token) => {
      return err ? reject(err) : resolve(token)
    })
  })
}

export function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    return JWT.verify(token, '', (err, payload) => {
      return err ? reject(err) : resolve(payload)
    })
  })
}
