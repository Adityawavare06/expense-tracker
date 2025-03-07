 import React from 'react'
 import { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import PieChart from './pieChart';
 import { GlobalContext } from '../../content';
ChartJS.register(ArcElement, Tooltip, Legend);
 export default function Display() {

  
   const {  userName,value} = useContext(GlobalContext);
   return (
     
    
    <div  className='flex flex-row  h-3/4  '
    > 
    <div   className= ' w-1/2   p-10 text-center bg-slate-500 text-white'>
      <div className='font-semibold   m-5 p-10'> Balance is $ { userName-value ||0} </div>
      <div className='pt-3 mt-5'> ${userName ||0} </div>
      <div className='mb-5'>  Total income</div>
      <div className='pt-3 mt-5'>  ${value||0} </div>
      <div className='mb-5'>  Total expense </div>
   </div>


<PieChart/>

    </div>
    
  




  
   )
 }
 