import React from 'react'
import { useState } from 'react';


import InputModal from '../Add-transaction';

export default function NAvbar() {

 
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (

    <div className=' flex flex-row justify-around m-3 ' >
    <div className=' text-center text-blue-500  text-2xl font-bold py-2 '>
      Expense tracker

    </div>
    <button type="button"  onClick={openModal} className="text-gray-900 hover:text-white border border-gray-800
     hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 
    text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600
     dark:focus:ring-gray-800">Add transition 
     </button>
    { <InputModal isOpen={isModalOpen} onClose={closeModal} />}
     
     
</div>
    
  )
}
