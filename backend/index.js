const express = require("express");
const cors = require("cors");
const supertokens = require("supertokens-node");

const {
  middleware,
  errorHandler,
} = require("supertokens-node/framework/express");

const {
  getWebsiteDomain,
  SuperTokensConfig,
} = require("./src/config/supertokens");

const connect = require("./src/config/database");
const userRoutes = require("./src/routes/user.routes");
const serverless = require("serverless-http");

supertokens.init(SuperTokensConfig);

const app = express();

app.use(
  cors({
    origin: getWebsiteDomain(),
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

// This exposes all the APIs from SuperTokens to the client.
app.use(middleware());

// Use the note routes, with SuperTokens session protection
app.use("/api/user", userRoutes);

// In case of session related errors, this error handler
// returns 401 to the client.
app.use(errorHandler());

connect().then(() => {
  console.log("\x1b[33m%s\x1b[0m", "Connected to the database");
});

module.exports.handler = serverless(app);
