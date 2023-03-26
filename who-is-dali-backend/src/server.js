import express from 'express'
import {routes} from "./routes/index.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});