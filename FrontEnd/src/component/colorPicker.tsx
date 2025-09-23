
const colorOptions = [
  { value: '#0033FF', label: 'Blue' },
  { value: '#E7180B', label: 'Red' },
  { value: '#31C950', label: 'Green' },
  { value: '#F4320B', label: 'Orange' },
  { value: '#A732FB', label: 'Purple' },
  { value: '#F6339A', label: 'Pink' }, 
 
];



export const SelectColor  = () => {
  return<div className='grid grid-cols-3 content-center bg-neutral-900 rounded-2xl p-5 w-[60%]'>
    {
      colorOptions.map((item,index)=>{
       return<div key={index} style={{backgroundColor:item.value}} className={` grid mb-3 text-white justify-center m-2  rounded-2xl hover:cursor-pointer hover:scale-105 transition  items-center py-10 font-semibold `}>{item.label}</div>
     })
    }
  </div>
};

