import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()



export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] =useState([
        {
            id: 1,
            rating: 2,
            text: 'This is a feeback writteen by a user 1',
          },
          {
            id: 2,
            rating: 9,
            text: 'This is a feeback writteen by a user 2',
          },
          {
            id: 3,
            rating: 6,
            text: 'This is a feeback writteen by a user 3',
          },

    ])
    const [feedbackEdit,setFeedbackEdit] = useState({
        data:{},
        edit:false
    })
    
    //funtion to add new feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id=uuidv4()
        //console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    //function to edit feedback state
    const editFeedback = (data) =>{
        if(window.confirm("Are you sure you want to edit this feedback")){
            setFeedbackEdit({
                data,
                edit:true
            })
        }
    }
  
    //function to update edited feedback
    const updateFeedback = ( id , updItem) =>{
            //console.log(id,updItem);
            setFeedback(feedback.map((item)=> item.id === id ? {...item,...updItem} : item) )
    }   

    //function to delete feedback
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete this data?')){
        setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    return (
        <FeedbackContext.Provider value={{
            feedback, //feedback of data
            feedbackEdit, //exporting this state for form component
            addFeedback, //funtion to add new feedback from the feedbackForm component
            editFeedback, //function to get the value from the state to edit the feedback
            updateFeedback, //function to update the feedback
            deleteFeedback //function to delete the feedback provided to feedbackForm component
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext