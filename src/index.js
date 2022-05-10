import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  HistoryProvider,
  LikeProvider,
  SidebarProvider,
  VideoCatgoryProvider,
  WatchLaterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
          <VideoCatgoryProvider>
            <WatchLaterProvider>
              <LikeProvider>
                <HistoryProvider>
                  <App />
                </HistoryProvider>
              </LikeProvider>
            </WatchLaterProvider>
          </VideoCatgoryProvider>
        </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
