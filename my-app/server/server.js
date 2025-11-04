import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import studentRoutes from "./routes/students.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/students", studentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
