import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {TodoGetData, TodoUpdateMutation} from "./TodoMutate";
import {MdComment} from "react-icons/md";

const Container = styled.div`
  position: fixed;
  //display: flex;
  top: 200px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  flex-direction: column;
  width: 685px;
  height: 512px;
  padding: 18px;
  background-color: white;
  border-radius: 8px;
  z-index: 2000;

  .exit-wrapper {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 32px;
    width: 32px;
    height: 32px;
    line-height: 26px;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Canvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 53;
`;

const Wrapper = styled.div`
  background-color: transparent;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6495ed;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #6495ed;
  }

  &:active {
    color: rgba(100, 149, 237, 0.49);
  }

  //display: none;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-bottom: 0px;
`;

const MemoInput = styled.input`
  padding-left: 12px;
  padding-top: 72px;
  padding-bottom: 72px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  text-align: left;
  box-sizing: border-box;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 5px;
  align-items: center;
  justify-content: right;
  color: black;
  background: #e0dddd;
  outline: 1px solid #e0dddd;
  border-radius: 4px;
  border-color: #e0dddd;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: #5e5b5b;
  }

  &:active {
    color: #343131;
  }
`

const BasicModal = (props) => {
   const [modalOpen, setModalOpen] = useState(false);
   const {isLoading, data} = TodoGetData();
   const [inputValue, setInputValue] = useState({title: props.title, done: props.done, memo: props.memo, info:props.info});
   const {mutate: updateTodo, isSuccess, isLoading2, isError, error} = TodoUpdateMutation();

   const handleClickUpdateButton = () => {
      console.log('input', inputValue)
      updateTodo({id: props.id, inputValue})
   }


   useEffect(() => {
      if(isSuccess){
         disableModal();
      }
   }, [isSuccess])

   const onInput = (e) => {
      const {name, value} = e.target
      setInputValue({
         ...inputValue,
         [name]: value
      })
      setInputValue((prev)=>(
         {...prev, info:props.info}
      ))
      // setInputValue(e.target.name, e.target.value)
      console.log(e.target.name, e.target.value)
      console.log(inputValue)
      console.log(props.id)
   }
   const disableModal = () => {
      setModalOpen(!modalOpen);
      console.log("눌림");
      console.log(modalOpen);
   };
   if (isLoading) return <h2>로딩중...</h2>
   return (
      <>
         <Detail onClick={disableModal}>
            <MdComment/>
         </Detail>
         {modalOpen &&
            <div>
               <Container>
                  <div className="exit-wrapper" onClick={disableModal}>
                     &times;
                  </div>
                  <Wrapper>상세페이지</Wrapper>
                  {/*   <Change onClick={()=>console.log(props.id)}>*/}
                  {/*   <MdCreate/>*/}
                  {/*</Change>*/}
                  <h3>TITLE</h3>
                  <Input name="title" value={inputValue.title} onChange={onInput}/>
                  <h3>DONE</h3>
                  <Input name="done" value={inputValue.done} onChange={onInput}/>
                  <h3>MEMO</h3>
                  <MemoInput name="memo" value={inputValue.memo} onChange={onInput}/>
                  <Button onClick={() => {
                     handleClickUpdateButton()
                  }}>
                     완료
                  </Button>
               </Container>
               <Canvas onClick={disableModal}/>
            </div>
         }
      </>
   )
}

export default BasicModal;