import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import  Landing  from './Landing'
import  Home  from './Home'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/Landing" element={<Landing />} />
      </Route>
    )
  )


return (
<div>
  <div className="App">
    <RouterProvider router={router} />
  </div>
</div>
  );

}


const Root = () => {
  return(
    <>
    <div>
      <Link to="/"> Home </Link>
      <Link to="/Landing">Landing</Link>
    </div>
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default App;