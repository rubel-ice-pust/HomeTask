import React from 'react'

export const openModal = id => {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
};

export const hideModal = id => {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
};

const Modal = ({ children, id }) => {
   
  return (
    <div id={id} 
    className=' hidden fixed top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-70 z-10 overflow-hidden overflow-y-auto'>
        <div className='max-w-full max-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded p-5 z-20 bg-[#374151]'>
         {children}
         <button onClick={()=> hideModal(id)} className='w-7 h-7 bg-[#1f2937] flex items-center justify-center absolute top-4 right-5 rounded text-2xl text-white z-40'>&times;</button>
        </div>

    </div>
  )
}

export default Modal