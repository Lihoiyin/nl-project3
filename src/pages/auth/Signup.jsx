import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useSignupMutation } from '@/services/api/Auth'

import FormsAuthSignup from '@/forms/auth/Signup'

function PagesAuthSignup() {
  const navigate = useNavigate()
  const [login] = useSignupMutation()

  const customSignup = (data) => login(data).then((resp) => {
    if (resp.data) navigate('/my/todos')
  })

  return (
    <div id="pages-auth-signup" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Signup</h1>

          <FormsAuthSignup
            onSubmit={customSignup}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthSignup
