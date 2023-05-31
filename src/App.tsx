import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ROUTES } from "./utils/enum"

const Dashboard = lazy(() => import('./routes/Dashboard/Dashboard'));
const Layout = lazy(() => import('./modules/Layout/Layout'));
const Auth = lazy(() => import('./routes/Auth/Auth'));
const DataStructured = lazy(() => import('./routes/DataStructured/DataStructured'));

function App() {


  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            <Route path={`/${ROUTES.LOGIN}`} element={<Auth />} />
            <Route path={`/${ROUTES.REGISTRATION}`} element={<Auth />} />
            <Route path={`/${ROUTES.DATASTRUCTURED}`} element={<Layout><DataStructured /></Layout>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
