import { Dispatch, SetStateAction } from 'react'
import { Todo } from '../App'
import TodoElement from './TodoElement'

type TodoListProps = { todos: Todo[]; setTodos: Dispatch<SetStateAction<Todo[]>> }

export default function TodoList({ todos, setTodos }: TodoListProps) {
    return (
        <div className='w-full h-full flex justify-center'>
            <ul className='bg-green-600 w-1/3 h-full flex-col flex items-center rounded-lg'>
                {todos.map((todoObject) => {
                    return <TodoElement todo={todoObject} key={todoObject.id} setTodos={setTodos} />
                })}
            </ul>
        </div>
    )
}
