import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import IndexRouter from "./routes";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <IndexRouter />
  </QueryClientProvider>,
  document.getElementById("root")
);
