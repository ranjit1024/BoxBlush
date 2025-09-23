
const colorOptions = [
  { value: '#0033FF', label: 'Blue' },
  { value: '#E7180B', label: 'Red' },
  { value: '#31C950', label: 'Green' },
  { value: '#F4320B', label: 'Orange' },
  { value: '#A732FB', label: 'Purple' },
  { value: '#F6339A', label: 'Pink' }, 
 
];



export const SelectColor  = () => {
  return<div className="w-[60%] bg-neutral-900 py-5 px-2 rounded-2xl text-white">
    <h1 className="text-center text-4xl font-bold mb-4 text-yellow-400">Select Color</h1>
  <div className='grid grid-cols-3 content-center bg-neutral-900 rounded-2xl  w-[100%]'>
  
    {
      colorOptions.map((item,index)=>{
       return<div key={index} style={{backgroundColor:item.value}} className={` grid mb-3 text-white justify-center m-2  rounded-2xl hover:cursor-pointer hover:scale-105 transition  items-center py-10 font-semibold `}>{item.label}</div>
     })
    }
  </div>
  </div>
};

