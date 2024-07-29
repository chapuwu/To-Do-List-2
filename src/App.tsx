import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import AddItems from './components/AddItems'

export type Todo = {
    id: number
    todo: string
    checked: boolean
    createdAt: string
    updatedAt: string
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        async function data() {
            const response = await fetch('http://localhost:3001/todos')
            setTodos(await response.json())
        }

        data()
    }, [])

    return (
        <>
            <div className='bg-slate-700 h-screen w-screen flex mb-2 flex-col items-center'>
                <h1 className='text-white font-sans'>To do List</h1>
                <AddItems setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </>
    )
}

export default App
