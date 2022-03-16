import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useLoginMutation } from '@/services/api/Auth'

import FormsAuthLogin from '@/forms/auth/Login'

function PagesAuthLogin() {
  const navigate = useNavigate()
  const [login] = useLoginMutation()

  const customLogin = (data) => login(data).then((resp) => {
    if (resp.data) navigate('/my/todos')
  })

  return (
    <div id="pages-auth-login" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Login</h1>

          <FormsAuthLogin
            onSubmit={customLogin}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthLogin
