import { Dispatch, SetStateAction } from 'react'
import { Todo } from '../App'
import TodoElement from './TodoElement'

type TodoListProps = { todos: Todo[]; setTodos: Dispatch<SetStateAction<Todo[]>> }

export default function TodoList({ todos, setTodos }: TodoListProps) {
    return (
        <div>
            <ul>
                {todos.map((todoObject) => {
                    return <TodoElement todo={todoObject} key={todoObject.id} setTodos={setTodos} />
                })}
            </ul>
        </div>
    )
}
