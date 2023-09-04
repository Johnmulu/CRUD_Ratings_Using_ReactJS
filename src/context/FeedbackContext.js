import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';

export const FeedbackContext = createContext(); 

export const FeedbackProvider = ({children})=> {
  const [feedback, setFeedback]= useState([
    {
      id: 1,
      rating: 10,
      text: 'Nice feedback for this amazing job.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Nice feedback for this amazing job.',
    },
    {
      id: 3,
      rating: 8,
      text: 'Nice feedback for this amazing job.',
    }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState(
    {
      item: {},
      edit: false
    }
  );

  const deleteFeedback = (id)=>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=>item.id !== id ))
    } 
  }

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback])
  }
  const updateFeedback = (id, updItem)=>{
    setFeedback(feedback.map((item)=>(item.id===id ? {...item,...updItem} : item)))
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return <FeedbackContext.Provider value={{feedback, deleteFeedback,addFeedback, editFeedback,feedbackEdit,updateFeedback}}>
    {children}
  </FeedbackContext.Provider>
}