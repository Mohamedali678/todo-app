
import {React, useState} from "react"
import Header from "./components/Header"
import { useRef } from "react";
function Todo(){

    const [item, setItem] = useState("")
    const [image, setImage] = useState(null);
    const [todo, setTodo] = useState([])

    const imageRef = useRef()

    const addItem = (e) => {
        e.preventDefault()
        console.log(item)
        if(item && image){
            const newData = {item, image}
            setTodo([...todo, newData])
            setItem("")
            imageRef.current.value = ""
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
                <input type="file" onChange={(e)=> setImage(e.target.files[0])} ref={imageRef} />
                <button className="bg-orange-500 p-2 text-white rounded" onClick={addItem}>Post</button>
            </form>

            <div className="mx-64 text-center ">
                {
                    todo.map((task, index) => (
                        <>
                        <p  className="text-black text-start p-2  rounded mt-2"> {task.item} </p>
                        <img className="rounded" width="600px" src={URL.createObjectURL(task.image)} />
                         </>
                    ))
                }
            </div>

        
        </div>
}

export default Todo