import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../content";

export default function InputModal  ({ isOpen, onClose }){
  const {  userName ,setUserName ,setValue    ,value} = useContext(GlobalContext);

  if (!isOpen) return null; // Don't render the modal if it's closed

  const handleSubmit = (e) => {
    e.preventDefault();
 
// Close the modal after submission
  }; 
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Add Income/Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="income" className="block text-sm font-medium text-gray-700">Income</label>
            <input
              type="number"
              id="income"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              placeholder="Enter income amount"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expense" className="block text-sm font-medium text-gray-700">Expense</label>
            <input
              type="number"
              id="expense"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="Enter expense amount"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <button
              type="submit"    
              onClick={onClose}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button> 
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-6 py-2 rounded-lg"
            >
              Close 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};




