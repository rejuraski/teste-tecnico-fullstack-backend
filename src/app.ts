import express from "express";
import "reflect-metadata";
import clientRoutes from "./routes/client.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();
app.use(express.json());
app.use("/client", clientRoutes);
app.use("/contact", contactRoutes);

export default app;
