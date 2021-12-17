import React from 'react';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';

const StyledToDoList = styled.ul`
    padding: 10px;
    justify-content: center;
`;

function ToDoList(props) {
    const { toDoItems, openCheckModal, openEditModal, completedToDo, removeToDo } = props;

    return (
        <StyledToDoList>
            { toDoItems.map((item, index) => 
                <ToDoItem 
                    key={index} 
                    toDo={item} 
                    openCheckModal= {openCheckModal}
                    openEditModal= {openEditModal}
                    completedToDo= {completedToDo}
                    removeToDo = {removeToDo}
                />) }
        </StyledToDoList>
    )
}

export default ToDoList
