/**
 * @format
 */
import 'source-map-support/register'
import swaggerUi from 'swagger-ui-express'
import { APIGatewayClient, GetExportCommand } from '@aws-sdk/client-api-gateway'
import Log from '@dazn/lambda-powertools-logger'
import { Handler } from 'aws-lambda'
import serverless from 'serverless-http'
import { getExpressApp } from './lib/express-app'

interface Gateway {
  apiId: string
  stage: string
}

const apiGw = new APIGatewayClient({})

const getSwaggerDocument = async ({
  apiId,
  stage,
}: Gateway): Promise<swaggerUi.JsonObject> => {
  const params = {
    // Using openapi spec 3 _not_ swagger
    // Todo: This should be a param
    exportType: 'oas30',
    restApiId: apiId,
    stageName: stage,
    accepts: 'application/json',
  }

  const results = await apiGw.send(new GetExportCommand(params))
  if (results.body) {
    const str = Buffer.from(results.body).toString()
    return JSON.parse(str)
  } else {
    throw new Error('Empty body in export result')
  }
}

export const handler: Handler = async (event, context) => {
  Log.debug('Got event', event)
  const swaggerDoc = await getSwaggerDocument(event.requestContext)
  Log.debug('Got Swagger doc', { swaggerDoc })
  const app = getExpressApp(swaggerDoc)
  return serverless(app)(event, context)
}
