import app from "./app.js";
import { config } from "dotenv";
import {env} from "process";

config();

const PORT = env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
