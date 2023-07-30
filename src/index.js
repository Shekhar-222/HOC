import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HigherOrder } from "./HigherOrder";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HigherOrder />
  </StrictMode>
);
