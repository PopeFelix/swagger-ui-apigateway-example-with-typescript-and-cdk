/** @format */
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import path from 'path'

export class SwaggerSketchStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const api = new cdk.aws_apigateway.RestApi(this, 'swagger-sketch', {
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowCredentials: true,
        allowOrigins: cdk.aws_apigateway.Cors.ALL_ORIGINS,
        allowMethods: cdk.aws_apigateway.Cors.ALL_METHODS,
      },
    })
    const swaggerLambda = new cdk.aws_lambda_nodejs.NodejsFunction(
      this,
      'swagger',
      {
        entry: path.join(__dirname, '../lambda/swagger/index.ts'),
        bundling: {
          nodeModules: ['swagger-ui-express', 'express'],
          sourceMap: true,
        },
      }
    )

    const swagger = api.root.addResource('swagger')
    new cdk.aws_apigateway.ProxyResource(this, 'swaggerProxyResource', {
      parent: swagger,
      anyMethod: true,
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowCredentials: true,
        allowOrigins: cdk.aws_apigateway.Cors.ALL_ORIGINS,
        allowMethods: cdk.aws_apigateway.Cors.ALL_METHODS,
      },
      defaultIntegration: new cdk.aws_apigateway.LambdaIntegration(
        swaggerLambda
      ),
    })
  }
}
