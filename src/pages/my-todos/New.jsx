import React from 'react'

import { useMyTodos } from '@/contexts/MyTodos'

import FormsTodosChange from '@/forms/todos/Change'

function PagesMyTodosNew() {
  const { createMyTodo } = useMyTodos()

  return (
    <div id="pages-my-todos-new" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Create A New Todo</h1>

          <FormsTodosChange
            onSubmit={createMyTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesMyTodosNew
