
import {React, useState} from "react"
import Header from "./components/Header"
function Todo(){

    const [item, setItem] = useState("")
    const [todo, setTodo] = useState([])

    const addItem = (e) => {
        e.preventDefault()
        console.log(item)
        if(item !== null){
            setTodo([...todo, item])
        }
            // setTodo([...todo, item])
        
    
    }

    // const deleteItem = (index) => {
    //     const updatedTodo = [...todo];
    //     updatedTodo.splice(index, 1);
    //     setTodo(updatedTodo);
    //   };


   
    return <div>
        <Header />


            <form className="text-center">
                <input value={item} onChange={(event) => {setItem(event.target.value)}} className="px-5 border border-blue-500 m-4 h-10  w-80 focus:border" type="text" placeholder="Enter item" />
                <button className="bg-orange-500 p-2 text-white rounded" onClick={addItem}>Add item</button>
            </form>

            <div className="mx-64 text-center ">
                {
                    todo.map((task, index) => (
                        <p  className="bg-orange-400 text-white p-2 mx-60 rounded mt-2"> {task} </p>
                    ))
                }
            </div>

        
        </div>
}

export default Todo