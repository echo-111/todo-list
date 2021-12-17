import React from 'react';
import styled from 'styled-components';

const ToDoCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    border-bottom: solid #8080803d 1px;
    font-size: 2vh;
`;

const ToDoChecked = styled.input`
    font-size: 2vh;
`;

const ToDoContent = styled.span`
    width:50vh;
    overflow: hidden;
    margin: 0 1vh;
`;


function ToDoItem(props) {
    const { toDo, openCheckModal, openEditModal, completedToDo, removeToDo } = props;

    return (
        <ToDoCard>
            <ToDoChecked 
                type='checkbox'
                checked= { toDo.completed }
                onChange={() => completedToDo(toDo.id)}
            />
            <ToDoContent
                style={{'textDecoration': toDo.completed ? 'line-through':'none'}}
            >
                { toDo.content }
            </ToDoContent>
            <div>
                <button
                    onClick={ ()=> openCheckModal(toDo.id)}
                >🔍️</button>
                <button
                   onClick={ () => openEditModal(toDo.id)}
                >✒️</button>
                <button
                    onClick={() => removeToDo(toDo.id)}
                >🗑</button>
            </div>
            
        </ToDoCard>
    )
}

export default ToDoItem
