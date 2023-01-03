import { Outlet } from "@remix-run/react";

export default function Index() {
    return (
      <div>
         Layout Route, layout html shared with all children
         layoutRoute/todov1/list
         layoutRoute/todov1/add
         layoutRoute/todov2
         layoutRoute/todov1  - it has an index.tsx, 
         <Outlet/>
      </div>
    );
  }

  // if Outlet is not added the only HTML seen on all their children routes is this one, 
  