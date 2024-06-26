import { PORT } from "./configs";
import express from "express";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json())

app.use('/auth', authRoutes)

try {
  app.listen(PORT, () => {
    console.log(`> server is running at http://localhost:${PORT}/`);
  });
} catch (error) {
  console.log("error: ", error.message);
}
