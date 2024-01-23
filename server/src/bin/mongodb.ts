import process from 'node:process'
import mongoose from 'mongoose'

export async function setup() {
  try {
    await mongoose.connect(process.env.DATABASE_URI || '')
  }
  catch (error) {
    console.error(`connection error:${error}`)
  }
}

const mdb = mongoose.connection
mdb.on('error', (error) => {
  console.error(error)
})
mdb.once('connected', () => {
  // eslint-disable-next-line no-console
  console.log(`🍃 MongoDB connected for ${process.env.DATABASE_URI}`)
})
