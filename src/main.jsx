import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import {theme} from "../src/utils/theme"
import {router} from "../src/routers"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
