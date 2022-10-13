const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev) {
      server.use(
        "/api",
        createProxyMiddleware({
          target: `http://localhost:${process.env.PORT}`,
          changeOrigin: true,
        })
      );
    }
    if (!dev) {
      server.use(
        "/api",
        createProxyMiddleware({
          target: `${process.env.PROD_PORT}`,
          changeOrigin: true,
        })
      );
    }
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) {
        throw err;
      }
      console.log(`${process.env.PROD}`);
    });
  })
  .catch((err) => {
    console.log("error", err);
  });
