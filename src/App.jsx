import './App.css'
import Modal from './assets/Components/Flex_Modal/Modal'
import {openModal} from './assets/Components/Flex_Modal/Modal';

function App() {

  return (
    <>

     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className='text-[2.5rem] text-center text-white mb-5 font-semibold'>Home Task</h1>
      <button onClick={()=>openModal('logIn')} className='bg-[#1c64f2] py-2 px-4 rounded text-xl text-white mr-4'>Open To login 
      </button>
     
     <button onClick={()=>openModal('stdn')} className='bg-[#1c64f2] py-2 px-4 rounded text-xl text-white mr-4'>Open To Add Task</button>
     </div>
     <Modal id='logIn'>
       <h1 className='text-2xl font-semibold mb-7 text-white'>Login</h1>
       <form className='w-[450px]'>
        <div className='mb-5'>
          <input 
          className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='email' placeholder='Enter Your Email'/>
          </div>

          <div className='mb-5'>
          <input 
          className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='password' placeholder='password'/>
          </div>
          <button className='w-full text-white py-2 px-4 rounded text-[16px] bg-[#1c64f2]'>
            Login to your account.

          </button>
       </form>
     </Modal>

<Modal id='stdn'>
<h1 className='text-2xl font-semibold mb-7 text-white'>Add a Task
</h1>
<form className='w-[1024px]'>
 <div className='mb-5 flex items-center justify-between gap-5'>
   <input 
   className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='text' placeholder='Bangla'
   />
   <input 
   className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='text' placeholder='English'
   />
   </div>


 <div className='mb-5 flex items-center justify-between gap-5'>
   <input 
   className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='text' placeholder='Math'
   />
   <input 
   className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='text' placeholder='ICT'
   />
   </div>

   <div className='mb-5 flex items-center justify-between gap-5'>
   <input 
   className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='text' placeholder='Chemistry'
   />
   <input 
   className='w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none' type='text' placeholder='physics'
   />
   </div>

   <button className='w-full text-white py-2 px-4 rounded text-[16px] bg-[#1c64f2]'>
    Confirm Task
   </button>
</form>
</Modal>

      
    </>
  );
}

export default App;
