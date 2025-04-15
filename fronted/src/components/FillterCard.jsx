import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fillterData = [
  {
    fillterType: "Location",
    array: ["Ahmedabad", "Banglore", "Pune", "Hydrabad", "Mumbai"]
  },
  {
    fillterType: "Industry",
    array: ["Fronted Dev", "Backend Developer", "Fullstack Developer"]
  },
  {
    fillterType: "Job Type",
    array: ["Part time", "Full time","Remote"]
  },
  {
    fillterType: "Experience",
    array: ["Frasher", "2 year","5 Year"]
  },
]

const FillterCard = () => {
  const dispatch = useDispatch();
  const [selectedValue,setSelectedValue] = useState("");
  
  const chageHandler = (value) =>{
      setSelectedValue(value);
  }

  useEffect(()=>{
    dispatch(setSearchedQuery(selectedValue));
  },[selectedValue]);
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Fillter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup value={selectedValue} onValueChange={chageHandler}>
        {
          fillterData.map((data,index)=> (
            <div>
              <h1 className='font-bold text-lg'>{data.fillterType}</h1>
              {
                data.array.map((item ,idx)=>{
                  const itemId = `id${index-idx}`
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} id={itemId}/>
                      <Label htmlFor={itemId}>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FillterCard