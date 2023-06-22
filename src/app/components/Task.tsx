import React from 'react'
import { TaskType } from './ToDoList'
import Icon from '@mdi/react';
import { mdiDelete, mdiSquareEditOutline } from '@mdi/js';


const Task: React.FC<TaskType> = ({name, status, deadline}) => {
  return (
    <div className='task'>
        <p>{name}</p>
        <div>
            <Icon className='edit-icon' path={mdiSquareEditOutline} size={1} />
            <Icon className='trash-icon' path={mdiDelete} size={1}/>
        </div>
    </div>
    
  )
}

export default Task