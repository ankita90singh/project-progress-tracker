import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Navigate, Route, Routes , useLocation } from "react-router-dom";
import Login from "./pages/login";

import {Toaster} from "sonner";
import Dashboard from "./pages/dashboard";
import Tasks from "./pages/tasks";
import TasksDetails from "./pages/tasksDetails";
import Trash from "./pages/trash";
import Users from "./pages/users";


function Layout() {
 const user = ""

 const location = useLocation()

 return user ? (
  <div className=" w-full h-screen flex-col md:flex-row">
    <div className="w-1/5 h-screen bg-white sticky top:0 hidden md:block " >
      {/* {sidebar} */}

    </div>
    {/* {mobileSidebar} */}
    <div className=" flex-1 overflow-y-auto"> 
    {/* {Navbar} */}
    </div>

    <Outlet>
      <div className="p-4 2xl:px-10"></div>
    </Outlet>
  </div>
 ):(
  <Navigate to = "/log-in" state={{from: location }} replace />
 )
}

function App() {
 

  return (
    <main className='w-full min-h-screen bg-zinc-100 '> 
    <Routes>
      <Route element= {<Layout />}>
        <Route path= "/" element= { < Navigate to="/dashboard" />} />
        <Route path= "/dashboard" element= {<Dashboard />} />
        <Route path= "/Tasks" element= {<Tasks />} />
        <Route path= "/completed /:status" element= {<Tasks/>} />
        <Route path= "/in-progress /:status" element= {<Tasks/>} />
        <Route path= "/ToDo /:status" element= {<Tasks/>} />
        <Route path= "/Team" element= {<Users />} />
        <Route path= "/trashed" element= {<Trash />} />
        <Route path= "/task/:id" element= {<TasksDetails />} />
        
        

        </Route> 
        <Route path= "/log-in" element= {<Login />} />
    </Routes>
    <Toaster richColors />
    </main>
  )
}

export default App
