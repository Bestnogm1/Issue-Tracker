import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Tickets from "./contexts/TicketsContexts/TicketsContext";
import ApiTesting from "./contexts/FakeApiTesting/FakeApiTesting";
import UserContexts from "./contexts/UserContexts/UserContexts";
import ProfileContexts from "./contexts/ProfileContexts/ProfileContexts";
import CreateTicketModelContexts from "./contexts/CreateTicketModelContexts/CreateTicketModelContexts";

ReactDOM.render(
  <React.StrictMode>
    <CreateTicketModelContexts>
      <ProfileContexts>
        <ApiTesting>
          <UserContexts>
            <Tickets>
              <BrowserRouter>
                <ChakraProvider>
                  <App />
                </ChakraProvider>
              </BrowserRouter>
            </Tickets>
          </UserContexts>
        </ApiTesting>
      </ProfileContexts>
    </CreateTicketModelContexts>
  </React.StrictMode>,
  document.getElementById("root")
);
