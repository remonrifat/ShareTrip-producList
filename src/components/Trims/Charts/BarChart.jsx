import React from 'react'

const BarChart = ({data}) => {

    const maxSalesValue = Math.max(...data.map((d) => d.salesValue));
    const maxSalesVolume = Math.max(...data.map((d) => d.salesVolume));
    const rulerSteps = 5;

  return (
    <div className='flex flex-row gap-2 items-between h-[55vh] p-10 '>
      {/* Ruler */}
      <div className="flex flex-col justify-between h-[39.5vh] pr-4 border-r border-secondary-500 text-right  mb-0">
          {[...Array(rulerSteps + 1)].map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="text-xs">
                {(maxSalesValue / rulerSteps) * (rulerSteps - index)}
              </span>
            </div>
          ))}
        </div>
      {
        data.map((d, i)=>
          <div key={i} className='flex flex-col gap-0 bottom-0 border-r border-secondary-100'> 
           <div className='flex flex-row gap-0 mb-0 h-[55vh] relative'> 
             <div className='flex flex-col gap-2 '>
              <div className=' -rotate-90 text-[12px]'>{d.salesValue}</div>
              <div className={`bg-primary-500 mb-0 absolute bottom-0`} style={{height: `${(d.salesValue / maxSalesValue) * 100}%`, width:10}}  title={`Sales Value: ${d.salesValue}`}></div>              
             </div>
             <div className='flex flex-col gap-2'>
               <div className='-rotate-90 text-[12px]'>{d.salesVolume}</div>
               <div className={`bg-secondary-500 mb-0 absolute bottom-0`} style={{height: `${(d.salesVolume / maxSalesVolume) * 100}%`, width:10}}  title={`Sales Vol: ${d.salesVolume}`}></div>               
             </div>       
           </div>
            <span className="my-5 text-[12px] -rotate-90">{d.month}</span>
           </div>
        )
      }

    </div>
  )
}

export default BarChart