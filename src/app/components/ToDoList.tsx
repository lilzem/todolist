import React, { ChangeEvent } from 'react'
import Task from './Task';

export type TaskType = {
    name : string;
    status : 'completed' | 'in process' | 'failed',
    deadline : number; 
}

const ToDoList: React.FC = () => {
    const [list, setList] = React.useState<TaskType[]>([{
        name : "first task",
        status : "in process",
        deadline : 10
    }]);
    
    const inputRef = React.useRef<HTMLInputElement>(null);

    const [value, setValue] = React.useState('');

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const addTask = () => {
        setList([...list, {name: value, status: 'completed', deadline: 10}])
    }
    return (
        <div className='list'>
            <input
            className='main-input' 
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            type="text" />
            <button className='main-button' onClick={addTask}>Add Task</button>
            <div>{list.map((task: TaskType) => (<Task {...task}/>))}</div>
        </div>
    )
}

export default ToDoList