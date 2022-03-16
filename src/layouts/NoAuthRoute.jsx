import React from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { apiAuth } from '@/services/api/Auth'

function NoAuthRoute({ children }) {
  const { data: { user: currentUser } = {} } = apiAuth.endpoints.getMyProfile.useQueryState()

  if (currentUser) {
    toast.error('You are already logged in!')
    return <Navigate to="/" />
  }

  return children
}

export default NoAuthRoute
