import React from 'react';
import Modal from '../';
import styled from 'styled-components';
import {formatDateTime} from '../../../libs/utils'

const StyledCloseModal = styled.button`
    background-color: black;
    width: 60%;
    color: white;
    font-size: 2vh;
    font-weight:600;
    padding:0.5vh;
    margin: 1vh 5vh;
`;
const StyledContentContainer = styled.div`
    height:80%;
    overflow:scroll;
`;

const StyledCheckContent = styled.p`
    word-break: break-all;
`;

function CheckModal(props) {
    const { isShowCheckModal, toDo, closeModal } = props;
    return (
        <Modal
            isShowModal = { isShowCheckModal }
            modalTitle = "To Do"
        >
            <StyledContentContainer>
                <StyledCheckContent>Time:   {formatDateTime(toDo.id) }</StyledCheckContent>
                <StyledCheckContent>To-Do:   {toDo.content}</StyledCheckContent>
                <StyledCheckContent>State:   {toDo.completed ? 'Completed' : 'Still working on it' }</StyledCheckContent>
            </StyledContentContainer>
            <StyledCloseModal
                onClick={ closeModal }
            >OK!</StyledCloseModal>
            
        </Modal>
    )
}

export default CheckModal
