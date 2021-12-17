import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const StyledInput = styled.input`
    font-size: 2vh;
    width: 60%;
    margin: 0 10px;
    padding: 5px;
    border-radius: 6px;
    
`;

const StyledAdd = styled.button`
    font-size: 2vh;
    padding: 5px;
    background-color: black;
    color: white;
    font-weight: 700;
    border-radius: 6px;
`;

function OpenInput( props) {
    const { isShow, addToDo  } = props;
    const inputRef = useRef();

    const submitInput = () => {
        const inputValue = inputRef.current.value.trim();

        if (inputValue.length === 0){
            return;
        }
        
        addToDo(inputValue)
        inputRef.current.value = "";
    }

    return (
        <>
            { isShow 
                ?
                (
                <StyledForm className='inputToDo'>
                    <StyledInput
                        type="text"
                        placeholder='Add new to-do'
                        ref={ inputRef }
                    />
                    <StyledAdd
                        onClick={ submitInput }

                    >Add</StyledAdd>

                </StyledForm>
            )
            :
            ''
            } 
            
        </>
    )
}

export default OpenInput
