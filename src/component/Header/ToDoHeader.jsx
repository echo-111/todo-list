import React from 'react';
import styled from 'styled-components';

const StyledToDoHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    color: white;
    height: 10vh;
    width: 100%;
`;

const StyledIcon = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 3vh;
    font-weight: 600;
`;

function ToDoHeader( props ) {
    const { handleOpenInput } = props;

    return (
        <StyledToDoHeader>
            <h1>My To-do List</h1>
            <StyledIcon
                className='icon'
                onClick={ handleOpenInput }
            >+</StyledIcon>  
        </StyledToDoHeader>
    )
}

export default ToDoHeader

