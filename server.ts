import app from "./src/app";
import { envConfig } from "./src/config/config";

function startServer() {
  const port = envConfig.port || 4000;

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3000`);
  });
}

startServer();
