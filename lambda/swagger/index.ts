/** @format */
import 'source-map-support/register'
import express from 'express'
import serverlessExpress from '@vendia/serverless-express'
import swaggerUi from 'swagger-ui-express'
import { Handler } from 'aws-lambda'

const app = express()

const url = 'https://petstore.swagger.io/v2/swagger.json'

export const handler: Handler = async (event, context, callback) => {
  const resource = event.resource
  const path = event.path

  app.use('/', swaggerUi.serve, swaggerUi.setup({ url }))
  const handler = serverlessExpress({ app })
  return await handler(event, context, callback)
}
