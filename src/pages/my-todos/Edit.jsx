import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import { useGetMyTodoQuery, useUpdateMyTodoMutation } from '@/services/api/MyTodos'

import FormsTodosChange from '@/forms/todos/Change'

function PagesMyTodosEdit() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [updateMyTodo] = useUpdateMyTodoMutation()
  const { data: { todo: myTodo } = {}, isLoading, error } = useGetMyTodoQuery(id)

  if (error) return <h1 className="text-center">Todo {id} Not Found</h1>

  const customUpdateMyTodo = (data) => updateMyTodo(data).then((resp) => {
    if (resp.data) navigate(`/my/todos/${resp.data.todo.id}`)
  })

  return (
    <div id="pages-my-todos-edit" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">{ myTodo?.id ? `Edit Todo ${myTodo.id}` : <Skeleton className="w-50" />}</h1>

          {
            isLoading ? (
              <Skeleton count={5} height={40} />
            ) : (
              <FormsTodosChange
                onSubmit={customUpdateMyTodo}
                initialValues={myTodo}
              />
            )
          }

        </div>
      </div>
    </div>
  )
}

export default PagesMyTodosEdit
