import { useState, Dispatch, SetStateAction } from 'react'
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

    return (
        <div className='w-full h-8 flex justify-center'>
            <form className='w-1/3 flex justify-evenly'>
                <div className='bg-white w-1/2 flex justify-center rounded-lg'>
                    <input
                        type='text'
                        onChange={(e) => setTodoInput(e.target.value)}
                        value={todoInput}
                        className='outline-none'
                    />
                </div>
                <div className='bg-green-700 w-1/6 h-7 flex justify-center'>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            if (todoInput === '' || todoInput.trim() === '') {
                                alert('no puede existir una tarea sin nada')
                            } else {
                                addItem()
                                setTodoInput('')
                            }
                        }}
                        className='text-white'>
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    )
}
