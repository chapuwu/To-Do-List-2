import { useState, Dispatch, SetStateAction, useEffect } from 'react'
import { Todo } from '../App'

type AddItemsProp = { setTodos: Dispatch<SetStateAction<Todo[]>> }

export default function AddItems({ setTodos }: AddItemsProp) {
    const [todoInput, setTodoInput] = useState('')

    async function addItem() {
        const response = await fetch('http://localhost:3001/todos', {
            method: 'POST',
            body: JSON.stringify({ todoText: todoInput }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.status !== 200) {
            alert('error')
        } else {
            const itemAdded = await response.json()
            setTodos((prev) => [...prev, itemAdded])
        }
    }

    useEffect(() => {
        console.log(JSON.stringify({ todo: todoInput }))
    }, [todoInput])

    return (
        <form>
            <input type='text' onChange={(e) => setTodoInput(e.target.value)} value={todoInput} />
            <button
                onClick={(e) => {
                    e.preventDefault()
                    addItem()
                }}>
                Add Item
            </button>
        </form>
    )
}
