import React from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { apiAuth } from '@/services/api/Auth'

function AuthRoute({ children }) {
  const { data: { user: currentUser } = {} } = apiAuth.endpoints.getMyProfile.useQueryState()

  if (!currentUser) {
    toast.error('You need to login first!')
    return <Navigate to="/auth/login" />
  }

  return children
}

export default AuthRoute
