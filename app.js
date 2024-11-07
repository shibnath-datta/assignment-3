import express from 'express';

import router from "./routes/api.js";

import { PORT } from "./app/config/config.js";




const app = express();


// Set API Routes
app.use("/api", router);





// Run Your Express Back End Project

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
})
