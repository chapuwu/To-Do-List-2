import { Todo } from '../App'

type TodoElementProp = { todo: Todo }

export default function TodoElement({ todo }: TodoElementProp) {
    return <li>{todo.todo}</li>
}
