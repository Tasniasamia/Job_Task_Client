import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Task_List from './Component/Task_List/Task_List';
import Add_Task from './Component/Add_New_Task/Add_Task';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/AddTask",
        element:<Add_Task></Add_Task>
        
      },{
        path:"/TaskList",
        element:<Task_List></Task_List>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);