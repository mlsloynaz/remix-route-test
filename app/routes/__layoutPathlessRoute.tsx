import { Outlet } from "@remix-run/react";

export default function Index() {
    return (
      <div>
        Pathless Layout Route, layout html shared with all children
        todov1/list
        todov1/add
        todov2
        todov1  - it has an index.tsx, 
         <Outlet/>
      </div>
    );
  }

  // if Outlet is not added the only HTML seen on all their children routes is this one, 
  