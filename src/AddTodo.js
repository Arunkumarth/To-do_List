import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "./todoSlice";
import './App.css';
import 'antd/dist/reset.css';
import { Input, Button} from 'antd';

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAddTodo = () => {
        const id = nanoid();
        dispatch(addTodo({ id, title }));
        setTitle("");
        
    };

    return (

        <div className="App">
            <div className='addbox' >

                <Input type="text" size="large" placeholder="New task..." value={title} onChange={handleTitleChange} />
                <Button colorBgContainer="#69b1ff" size="large" type='primary' style={{ background: " #73C2FB" }} onClick={handleAddTodo}>ADD</Button>
            </div>
        </div>
    );

}

export default AddTodo;
