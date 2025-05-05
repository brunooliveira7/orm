import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { routes } from "./routes";

const PORT = 3334;
const app = express();

app.use(express.json());
app.use(routes);

//middleware de erro
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  response.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
