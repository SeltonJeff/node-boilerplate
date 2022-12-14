import env from "./env";
import App from "./app";

class Server {
  public readonly app = App;

  constructor() {
    this.startServer();
  }

  private startServer() {
    this.app.listen(env.APP_PORT, () =>
      console.log("App running at: ", `http://localhost:${env.APP_PORT}`)
    );
  }
}

new Server();
