import { useState,useContext,useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [errMessage,seterrMessage] = useState('')
    const [btnDisabled,setbtnDisabled] = useState(true)
    const {addFeedback, feedbackEdit, updateFeedback} = useContext (FeedbackContext)
    
    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setbtnDisabled(false)
            setText(feedbackEdit.data.text)
            setRating(feedbackEdit.data.Rating)
        }
    },[feedbackEdit])

    const handletextChange = (e) =>{
        if(text===''){
         seterrMessage(null);
         setbtnDisabled(true);
        }else if(text!=='' && text.trim().length <= 10){
            seterrMessage('The text should be at least 10 character long');
            setbtnDisabled(true)
        }else{
            seterrMessage(null);
            setbtnDisabled(false);
        }
        setText(e.target.value)

    }
    //inserting new object from the form
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(text.trim().length > 10){
            const newFeedback={
                text,rating
            }
            if(feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.data.id,newFeedback)
            }else{
                addFeedback(newFeedback)
            }
    }
}

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h3>Please leave your rating!!!</h3>
            <RatingSelect select={(rating)=>setRating(rating)}></RatingSelect>
            <div className='input-group'>
                <input type="text" placeholder='Write a Review here' onChange={handletextChange} value={text}/>
                <Button version="secondary" type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
        <div className="msg">
            {errMessage}
        </div>       
        </form>
    </Card>
  )
}

export default FeedbackForm
