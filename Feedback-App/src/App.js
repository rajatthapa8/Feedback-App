import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import './index.css'
import FeedbackForm from './components/FeedbackForm';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  
  
return (
    <FeedbackProvider>
      <Header></Header>
      <div className='container'>
      <FeedbackForm/>
      <FeedbackList />
      </div>
      <div className="App">
        
      </div>
    </FeedbackProvider>
  );
}

export default App;
