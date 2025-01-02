import { render } from "preact";
import "shared/styles/index.scss";
import { App } from "./app.tsx";

render(<App />, document.getElementById("app")!);
