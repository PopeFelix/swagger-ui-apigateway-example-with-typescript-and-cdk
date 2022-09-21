/** @format */
import { Context } from 'aws-lambda'
import { handler } from '../lambda/swagger'
import fs from 'fs'
import path from 'path'

const buf = fs.readFileSync(path.join(__dirname, './swagger.json'))

const event = {
  resource: '/swagger/{proxy+}',
  path: '/swagger/swagger-ui.css',
  httpMethod: 'GET',
  headers: {
    Accept: 'text/css,*/*;q=0.1',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.5',
    'cache-control': 'max-age=0',
    'CloudFront-Forwarded-Proto': 'https',
    'CloudFront-Is-Desktop-Viewer': 'true',
    'CloudFront-Is-Mobile-Viewer': 'false',
    'CloudFront-Is-SmartTV-Viewer': 'false',
    'CloudFront-Is-Tablet-Viewer': 'false',
    'CloudFront-Viewer-ASN': '16591',
    'CloudFront-Viewer-Country': 'US',
    dnt: '1',
    Host: 'bvr5583e2e.execute-api.us-east-1.amazonaws.com',
    'If-None-Match': 'W/"c1f-F2xZTJLKhCo1XhlvmwRwwX3nXPs"',
    Referer:
      'https://bvr5583e2e.execute-api.us-east-1.amazonaws.com/prod/swagger/get',
    'sec-fetch-dest': 'style',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:91.0) Gecko/20100101 Firefox/91.0',
    Via: '2.0 12da75dd0294ffd6ebbfbc19f6a9b0f4.cloudfront.net (CloudFront)',
    'X-Amz-Cf-Id': 'KZ5Q7s5DG91akvsackkcZXy62pi9fzPvVmMR2SHKyX55iOXxhXslTA==',
    'X-Amzn-Trace-Id': 'Root=1-632b466c-3c6a521b46aa3caa6e91f815',
    'X-Forwarded-For': '136.32.141.192, 15.158.11.49',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https',
  },
  multiValueHeaders: {
    Accept: ['text/css,*/*;q=0.1'],
    'Accept-Encoding': ['gzip, deflate, br'],
    'Accept-Language': ['en-US,en;q=0.5'],
    'cache-control': ['max-age=0'],
    'CloudFront-Forwarded-Proto': ['https'],
    'CloudFront-Is-Desktop-Viewer': ['true'],
    'CloudFront-Is-Mobile-Viewer': ['false'],
    'CloudFront-Is-SmartTV-Viewer': ['false'],
    'CloudFront-Is-Tablet-Viewer': ['false'],
    'CloudFront-Viewer-ASN': ['16591'],
    'CloudFront-Viewer-Country': ['US'],
    dnt: ['1'],
    Host: ['bvr5583e2e.execute-api.us-east-1.amazonaws.com'],
    'If-None-Match': ['W/"c1f-F2xZTJLKhCo1XhlvmwRwwX3nXPs"'],
    Referer: [
      'https://bvr5583e2e.execute-api.us-east-1.amazonaws.com/prod/swagger/get',
    ],
    'sec-fetch-dest': ['style'],
    'sec-fetch-mode': ['no-cors'],
    'sec-fetch-site': ['same-origin'],
    'sec-gpc': ['1'],
    'User-Agent': [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:91.0) Gecko/20100101 Firefox/91.0',
    ],
    Via: ['2.0 12da75dd0294ffd6ebbfbc19f6a9b0f4.cloudfront.net (CloudFront)'],
    'X-Amz-Cf-Id': ['KZ5Q7s5DG91akvsackkcZXy62pi9fzPvVmMR2SHKyX55iOXxhXslTA=='],
    'X-Amzn-Trace-Id': ['Root=1-632b466c-3c6a521b46aa3caa6e91f815'],
    'X-Forwarded-For': ['136.32.141.192, 15.158.11.49'],
    'X-Forwarded-Port': ['443'],
    'X-Forwarded-Proto': ['https'],
  },
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: {
    proxy: 'swagger-ui.css',
  },
  stageVariables: null,
  requestContext: {
    resourceId: 'wehf9v',
    resourcePath: '/swagger/{proxy+}',
    httpMethod: 'GET',
    extendedRequestId: 'Y0fw8E1soAMFrIQ=',
    requestTime: '21/Sep/2022:17:14:20 +0000',
    path: '/prod/swagger/swagger-ui.css',
    accountId: '337089113773',
    protocol: 'HTTP/1.1',
    stage: 'prod',
    domainPrefix: 'bvr5583e2e',
    requestTimeEpoch: 1663780460215,
    requestId: 'eddd5846-b89e-4112-9bda-e78e21b131d0',
    identity: {
      cognitoIdentityPoolId: null,
      accountId: null,
      cognitoIdentityId: null,
      caller: null,
      sourceIp: '136.32.141.192',
      principalOrgId: null,
      accessKey: null,
      cognitoAuthenticationType: null,
      cognitoAuthenticationProvider: null,
      userArn: null,
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:91.0) Gecko/20100101 Firefox/91.0',
      user: null,
    },
    domainName: 'bvr5583e2e.execute-api.us-east-1.amazonaws.com',
    apiId: 'bvr5583e2e',
  },
  body: null,
  isBase64Encoded: false,
}

describe('swagger sketch', () => {
  it('does the thing', async () => {
    //const event = testEvent({path: `/${endpoint}/swagger-ui-init.js`})

    const context = {
      callbackWaitsForEmptyEventLoop: true,
      functionVersion: '$LATEST',
      functionName: 'NebulaSwaggerSimpler',
      memoryLimitInMB: '128',
      logGroupName: '/aws/lambda/NebulaSwaggerSimpler',
      logStreamName: '2022/09/20/[$LATEST]4311182b9ffa4a6d861997ed5c557f8e',
      invokedFunctionArn:
        'arn:aws:lambda:us-east-1:337089113773:function:NebulaSwaggerSimpler',
      awsRequestId: '06ec3c32-87cd-4521-8085-abd2fdb09795',
    }
    const res = await handler(event, context as Context, () => {})
    console.debug('Result', { res })
    expect(1).toBe(1)
  })
})
