import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  const contentType = response.headers.get("content-type");

  if (contentType?.toLowerCase() === "text/html") {
    response.headers.set("content-type", "text/html; charset=utf-8");
  }

  return response;
});
