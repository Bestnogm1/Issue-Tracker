import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Tickets from "./contexts/TicketsContexts/TicketsContext";
import UserContexts from "./contexts/UserContexts/UserContexts";
import ProfileContexts from "./contexts/ProfileContexts/ProfileContexts";
import CreateTicketModelContexts from "./contexts/CreateTicketModelContexts/CreateTicketModelContexts";
import CreateCommentsContexts from "./contexts/CommentsContexts/CommentsContexts";

ReactDOM.render(
  <React.StrictMode>
    <UserContexts>
      <CreateTicketModelContexts>
        <ProfileContexts>
          <CreateCommentsContexts>
            <Tickets>
              <BrowserRouter>
                <ChakraProvider>
                  <App />
                </ChakraProvider>
              </BrowserRouter>
            </Tickets>
          </CreateCommentsContexts>
        </ProfileContexts>
      </CreateTicketModelContexts>
    </UserContexts>
  </React.StrictMode>,

  document.getElementById("root")
);
