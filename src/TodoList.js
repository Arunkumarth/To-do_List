import { useSelector, useDispatch } from "react-redux";
import {  toggleTodo } from "./todoSlice";
import './App.css';
import 'antd/dist/reset.css';
import { Tabs, Checkbox } from 'antd';

const TodoList = () => {
    const { TabPane } = Tabs;

    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    // const [check,setcheck] = useState(false);



    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));

    };

    return (
        <div className="App">

            <div>
                <Tabs size="large" defaultActiveKey="1">
                    <TabPane tab="ALL" key="1"  >
                        <div >
                            {todos.map((todo) => (
                                <li key={todo.id} className='list'>
                                    <Checkbox
                                     checked={todo.completed} 
                                        className='listitems'
                                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                                        onChange={() => handleToggleTodo(todo.id)}
                                    >

                                        {todo.title}
                                    </Checkbox>

                                </li>
                            ))}

                        </div>
                    </TabPane>
                    <TabPane tab="ACTIVE" key="2">
                        <div>
                            {todos.map((todo) => {
                                if (!todo.completed)
                                    return (
                                        <li key={todo.id} className='list'>
                                            <Checkbox
                                             checked={todo.completed} 
                                                className='listitems'
                                                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                                                onChange={() => handleToggleTodo(todo.id)}
                                            >
                                                {todo.title}
                                            </Checkbox>
                                        </li>

                                    )

                            })}

                        </div>

                    </TabPane>
                    <TabPane tab="COMPLETED" key="3">
                        <div >
                        {todos.map((todo) => {
                                if (todo.completed)
                                    return (
                                        <li key={todo.id} className='list'>
                                            <Checkbox
                                                 checked={todo.completed} 
                                                className='listitems'
                                                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                                                onChange={() => handleToggleTodo(todo.id)}
                                            >
                                                {todo.title}
                                            </Checkbox>
                                        </li>

                                    )

                            })}


                        </div>
                    </TabPane>
                </Tabs>


            </div>

        </div>

    );
};

export default TodoList;
