import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const APP_PORT = Number(process.env.APP_PORT) || 5000;

app.listen(APP_PORT, "0.0.0.0", async () => {

    console.log(`Server is running on port ${APP_PORT}`);

})