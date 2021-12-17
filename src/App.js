import React, { useState, useCallback, useEffect } from 'react';
import ToDoHeader from './component/Header';
import styled from 'styled-components';
import OpenInput from './component/OpenInput';
import ToDoList from './component/ToDoList';
import CheckModal from './component/Modal/CheckModal';
import EditModal from './component/Modal/EditModal';

const StyledApp = styled.div`
  position: relative;
  justify-content: center;
  height: 100vh;
`;


function App() {
  const [ isShow, setIsShow ]= useState(false);
  const [ toDoList, setToDoList ] = useState([]);
  const [ isShowCheckModal, setIsShowCheckModal ] = useState(false);
  const [ isShowEditModal, setIsShowEditModal ] = useState(false);
  const [ currentToDo, setCurrentToDo ] = useState({})

  useEffect (() => {
    const todoData = JSON.parse(localStorage.getItem('todoData'));
    setToDoList(todoData);
  }, []);

  useEffect (() => {
    localStorage.setItem('todoData', JSON.stringify(toDoList));
  },[toDoList]);

  const addToDo = useCallback((value) => {
    const newToDoItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    }

    setToDoList((toDoList) => [...toDoList, newToDoItem]);
    setIsShow(false);
  },[])

  const completedToDo = useCallback((id) => {
    setToDoList(toDoList.map((item) => {
      if (item.id === id ){
        item.completed = !item.completed;
      }
      return item;
    }));
  },[toDoList])

  const removeToDo = useCallback((id) => {

    setToDoList(toDoList.filter(item => item.id !== id))
  },[toDoList])

  const openCheckModal = useCallback ((id) => {
    setCurrentToDo(()=> toDoList.filter(item => item.id === id)[0]);
    setIsShowCheckModal(true);
  },[toDoList])

  const openEditModal = useCallback ((id) => {
    setCurrentToDo(()=> toDoList.filter(item => item.id === id)[0]);
    setIsShowEditModal(true);
  },[toDoList])

  const submitEdit = useCallback ((newToDo, id) => {
    const tmp = toDoList.map((item)=> {
      if (item.id === id) {
        return newToDo;
      }
      return item;
    })

    setToDoList(tmp);
    setIsShowEditModal(false);
  },[toDoList])

  return (
    <StyledApp className="App">
      <ToDoHeader 
        handleOpenInput = {() => setIsShow(!isShow)}
      />
      <OpenInput  
        isShow={ isShow }
        addToDo = { addToDo }
      />
      <ToDoList 
        toDoItems={ toDoList }
        openCheckModal = {openCheckModal}
        openEditModal = { openEditModal }
        completedToDo = { completedToDo }
        removeToDo = { removeToDo }
      />
      <CheckModal
        isShowCheckModal = { isShowCheckModal }
        closeModal = { ()=> setIsShowCheckModal(false) }
        toDo={ currentToDo }
      />
      <EditModal  
        isShowEditModal = { isShowEditModal }
        submitEdit = {submitEdit}
        toDo = { currentToDo }
      />
    </StyledApp>
  );
}

export default App;
