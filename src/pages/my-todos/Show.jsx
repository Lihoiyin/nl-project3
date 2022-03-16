import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'

import { useDeleteMyTodoMutation, useGetMyTodoQuery } from '@/services/api/MyTodos'

function PagesMyTodosShow() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [deleteMyTodo] = useDeleteMyTodoMutation()
  const { data: { todo: myTodo } = {}, isLoading, error } = useGetMyTodoQuery(id)

  if (error) return <h1 className="text-center">Todo {id} Not Found</h1>

  const customDeleteMyTodo = (data) => deleteMyTodo(data).then(() => {
    navigate('/my/todos')
  })

  return (
    <div id="pages-my-todos-show" className="container">
      <div className="text-center">
        <div className="btn-group">
          {
            isLoading ? (
              <Skeleton width={150} height={40} />
            ) : (
              <>
                <Link className="btn btn-primary" to={`/my/todos/${myTodo.id}/edit`}>Edit</Link>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => {
                    // eslint-disable-next-line
                    window.confirm('Are you sure you want to delete this todo?') && customDeleteMyTodo(myTodo)
                  }}
                >Delete</button>
              </>
            )
          }
        </div>

        <h1>{myTodo?.id ? `Todo ${myTodo.id}` : <Skeleton className="w-50" />}</h1>
        <h2>{myTodo?.title || <Skeleton className="w-50" />}</h2>
        <h3>{myTodo?.createdAt ? moment(myTodo.createdAt).format('YYYY/MM/DD') : <Skeleton className="w-50" />}</h3>
      </div>

      {
        (myTodo?.TodoItems?.length > 0 || isLoading) && (
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <ul className="list-group text-center">
                {
                  isLoading ? (
                    Array(5).fill(null).map((temp, i) => (
                      <li key={i} className="list-group-item">
                        <Skeleton />
                      </li>
                    ))
                  ) : (
                    myTodo.TodoItems.map((item) => (
                      <li key={item.id} className="list-group-item">
                        <span className={`${item.checked && 'text-secondary'}`}>{item.name}</span>
                      </li>
                    ))
                  )
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PagesMyTodosShow
