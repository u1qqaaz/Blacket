await import("dotenv/config");
import express from "express";

const app = express();

await Promise.all([
    (await import("./handlers/configuration.js")).default(),
    (await import("./handlers/sessions.js")).default(app),
    (await import("./handlers/database.js")).default(),
    (await import("./handlers/middlewares.js")).default(app),
    (await import("./handlers/endpoints.js")).default(app),
    (await import("./handlers/frontend.js")).default(app)
]);

console.info("Starting server...");
app.listen(global.config.port, () => console.log(`Listening on port ${global.config.port}`));