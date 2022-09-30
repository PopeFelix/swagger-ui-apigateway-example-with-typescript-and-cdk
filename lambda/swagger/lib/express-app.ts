import "source-map-support/register";
import { JsonObject } from "swagger-ui-express";
import { v4 as uuid } from "uuid";
import session from "express-session";
import swaggerUi from "swagger-ui-express";
import express from "express";

const sessionSecret = uuid();
export const getExpressApp = (
  swaggerDoc: JsonObject /* okta: OktaEnvironment */
) => {
  console.log('Swagger Doc', { swaggerDoc })
  const app = express();

  // Needed to address https://github.com/scottie1984/swagger-ui-express/issues/218#issuecomment-724762049
  app.use(
    session({
      secret: sessionSecret,
      resave: true,
      saveUninitialized: false,
    })
  );

  app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc)
  );
  return app;
};
