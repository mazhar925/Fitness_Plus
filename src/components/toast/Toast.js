import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

function App(){
    const notify = () => toast("Congratulations! You have done Well.");

    return (
      <div className='toast'>
        <button onClick={notify} className='toast-btn'>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
export default App;