import { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {
  return {
    statusCode: 200,
    body: 'OK!',
    headers: {
      'content-type': 'text/plain'
    }
  }
}