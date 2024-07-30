import { Dispatch, SetStateAction } from 'react'
import { Todo } from '../App'

type TodoElementProps = { todo: Todo; setTodos: Dispatch<SetStateAction<Todo[]>> }

export default function TodoElement({ todo, setTodos }: TodoElementProps) {
    async function deleteTodo() {
        const response = await fetch('http://localhost:3001/todos', {
            method: 'DELETE',
            body: JSON.stringify({ id: todo.id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.status !== 200) {
            alert('error')
        } else {
            setTodos((todos) => todos.filter((element) => element.id !== todo.id))
        }
    }

    async function toogleTodo() {
        const response = await fetch('http://localhost:3001/todos', {
            method: 'PUT',
            body: JSON.stringify({ id: todo.id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.status !== 200) {
            alert('error')
        } else {
            setTodos((todos) =>
                todos.map((element) => {
                    if (element.id === todo.id) {
                        return { ...element, checked: !todo.checked }
                    } else {
                        return element
                    }
                }),
            )
        }
    }

    return (
        <li className={`flex gap-2 ${todo.checked ? 'line-through' : ''}`}>
            {todo.todo}
            <button onClick={() => deleteTodo()} className='bg-red-600'>
                X
            </button>
            <input type='checkbox' onChange={() => toogleTodo()} checked={todo.checked} />
        </li>
    )
}
