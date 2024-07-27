import { Todo } from '../App'
import TodoElement from './TodoElement'

type TodoListProps = { todos: Todo[] }

export default function TodoList({ todos }: TodoListProps) {
    return (
        <div>
            <ul>
                {todos.map((todoObject) => {
                    return <TodoElement todo={todoObject} key={todoObject.id} />
                })}
            </ul>
        </div>
    )
}
