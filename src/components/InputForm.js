import React, { useEffect, useState } from 'react'
import {FaChevronDown} from 'react-icons/fa'
import TodoList from './TodoList'
import ErrMsg from './Message/ErrMsg'
import SuccessMsg from './Message/SuccessMsg'
import { useDispatch,useSelector } from 'react-redux'
import { addTodos } from '../reduxStore/TodoSlice'
import { type } from '@testing-library/user-event/dist/type'

const InputForm = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const  [todoValue, setTodoValue] = useState("")
    const [errMsg, setErrMsg] =useState("")
    const [showErr, setShowErr] = useState(false)
    const [category, setCategory] = useState("")
    const [currentTodo, setCurrentTodo] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    const [showSuccess,setShowSuccess] = useState ("false")
    const todosList = todos.todos.map((ele,i) => (
        <TodoList key={i} todoValue={ele}/>
    ))
    const options = [
        {
            _id: 1000,
            title: "categories"
        },

        {
            _id: 1001,
            title: "personal" 
        },

        {
            _id: 1002,
            title: "business"
        },

        {
            _id: 1003,
            title: "others"
        }
    ]

    const handleTodo=(e)=>{
        e.preventDefault();
        if (todoValue === ""){
            setErrMsg("Please add your todo")
            setShowErr(true)
            setShowSuccess(false)
            // console.log(ErrMsg)
        }else if(category === ""){
            setErrMsg("Select a category")
            setShowErr(true)
            setShowSuccess(false)
        }else if(category === "categories"){
            setErrMsg("select a valid category")
            setShowErr(true)
            setShowSuccess(false)
        }
        else{
            dispatch(
                {
                    type:"ADD_TODO",payload : {
                    _id:Math.random(),
                    todo:todoValue,
                    category

                }
                }
            )
            // console.log(todoValue)
            setCurrentTodo(todoValue)
            setTodoValue("")
            setSuccessMsg("Todo added successfully")
            setShowSuccess(true)
            setShowErr(false)
           
        }
    }

    useEffect (()=>{
        const timer = setTimeout(()=>{
            showErr && setShowErr(false)
            showSuccess && setShowSuccess(false)
        },2000)
        return ()=>clearTimeout(timer)
    },[showErr, showSuccess])
  return (
    <div className='w-full bg-slate-900 gap-4 flex flex-col'>
        <div className='flex flex-row h-12 gap-4'>
            <input onChange={(e) =>setTodoValue(e.target.value)} value={todoValue} type="text" placeholder='Enter your Todo' className='w-[80%] h-full bg-slate-900 border-[1px] border-gray-400 py-2 
                px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none
                 focus-visible:border-orange-600 hover:border-white' 
            />

            <div className='w-[20%] h-full relative'>
                <select onChange={(e) =>setCategory(e.target.value)} className='bg-slate-900 h-full w-full text-center capitalize outline-none cursor-pointer appearance-none rounded-md border-[1px] border-gray-400 focus-visible:border-orange-600 hover:border-white px-1'>
                    {
                        options.map((item)=>(
                            <option key={item._id}>{item.title}</option>
                        ))
                    }
                </select>
                <span className='absolute right-3 top-4'>
                    <FaChevronDown/>
                </span>
            </div>
        </div>
        <button onClick={handleTodo} className='h-10 rounded-md uppercase border-[1px] hover:border-gray-200 font-semibold border-gray-400 tracking-wider hover:text-orange-600 duration-300'>
            Add Todo 
        </button>

        <div className='flex flex-col gap-4'>
            <ul className='grid divide-y max-h-[200px] overflow-y-auto grid-cols-1 gap-4 border border-gray-600 shadow-blue-600 shadow-md  p-4 mt-6'>
                {todosList}
            </ul>
        </div>
        {
            showErr && <ErrMsg errMsg={errMsg}/>
        }

        {
            showSuccess && <SuccessMsg successMsg = {successMsg}/>
        }
    </div>
  )
}

export default InputForm