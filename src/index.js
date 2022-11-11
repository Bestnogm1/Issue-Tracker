import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Tickets from "./contexts/TicketsContexts/TicketsContext";
import ApiTesting from "./contexts/FakeApiTesting/FakeApiTesting";

ReactDOM.render(
  <React.StrictMode>
    <ApiTesting>
      <Tickets>
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </Tickets>
    </ApiTesting>
  </React.StrictMode>,
  document.getElementById("root")
);
