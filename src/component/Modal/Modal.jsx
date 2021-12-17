import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 250px;
    height: 300px;
`;

const StyledInner = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 6px;
`;

const StyledModalTitle = styled.h2`
    margin: 0;
    width:100%;
    height: 20%;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 2.2;
`;

const ModalContent = styled.div`
    height: 73%;
    padding: 1vh;
    background: white;
    font-weight: 500;
`;

function Modal(props) {
    const {isShowModal, modalTitle, children } = props;

    return (
        <>
            {
                isShowModal
                ?
                (
                    <StyledModal className='modal'>
                        <StyledInner  className='inner'>
                            <StyledModalTitle className='modal-header'>{modalTitle}</StyledModalTitle>
                            <ModalContent className='modal-content'>
                                {children}
                            </ModalContent>
                        </StyledInner >
                    </StyledModal>
                )
                :
                ''
            }            
        </>
    )
}

export default Modal
