import React, { useRef } from 'react'
import Modal from '../';
import styled from 'styled-components';
import {formatDateTime} from '../../../libs/utils'

const StyledEditContainer = styled.div`
    height:80%;
    overflow:scroll;
`;

const StyledSaveEdit = styled.button`
    background-color: black;
    width: 60%;
    color: white;
    font-size: 2vh;
    font-weight:600;
    padding:0.5vh;
    margin: 1vh 5vh;
`;

const EditContent = styled.textarea`
    resize:none;
    width: 222px;
    height: 65px;
`;

function EditModal(props) {
    const { isShowEditModal, toDo, submitEdit } = props;
    const inputRef = useRef();
    const checkRef = useRef();

    const formatNewToDo = () => {
        const val= inputRef.current.value.trim(),
              valLen = val.lenth;

        if ( valLen === 0 ) {
            inputRef.current.vale = toDo.content;
            return;
        }
        
        const newToDo = {
            id: new Date().getTime(),
            content: val,
            completed: checkRef.current.checked,
        }

        submitEdit( newToDo, toDo.id)
    }

    return (
        <Modal
            isShowModal = { isShowEditModal }
            modalTitle = "Edit To Do"
        >
            <StyledEditContainer>
                <p>Time:   {formatDateTime(toDo.id)}</p>
                <p>
                    <EditContent
                        ref={ inputRef }
                        defaultValue={ toDo.content }
                    ></EditContent>
                </p>
                <p>
                    State:  
                    <input
                        type="checkbox"
                        defaultChecked={ toDo.completed ? true : false }
                        ref = {checkRef}
                    />
                </p>
            </StyledEditContainer>
            <StyledSaveEdit
                onClick={ formatNewToDo }
            >Save</StyledSaveEdit>
        </Modal>
    )
}

export default EditModal
