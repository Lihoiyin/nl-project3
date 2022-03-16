import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { useGetMyProfileQuery } from '@/services/api/Auth'

import LayoutsNavbar from '@/layouts/Navbar'
import Loading from '@/components/Loading'

function App() {
  const { isLoading } = useGetMyProfileQuery()

  return (
    <>
      <LayoutsNavbar />
      { isLoading ? <Loading /> : <Outlet />}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
