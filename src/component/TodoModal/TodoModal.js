import React, {useEffect, useState} from "react";
import {MdComment} from "react-icons/md";
import {Button, Canvas, Container, Detail, Input, MemoInput, Wrapper} from "./style";
import {useGetDataQuery} from "../../hooks/useGetDataQuery";
import {useUpdateMutation} from "../../hooks/useUpdateMutation";

const BasicModal = (props) => {
   console.log(props,'props');
   const [modalOpen, setModalOpen] = useState(false);
   const {isLoading, data} = useGetDataQuery();
   const [inputValue, setInputValue] = useState({title: props.title, done: props.done, memo: props.memo, info:props.info});
   const {mutate: updateTodo, isSuccess, isLoading2, isError, error} = useUpdateMutation();

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