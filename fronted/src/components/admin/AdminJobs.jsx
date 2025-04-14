import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchByText } from '@/redux/jobSlice'
import { motion } from 'framer-motion'

function AdminJobs() {
  useGetAllAdminJobs();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setSearchByText(input));
    },[input])
    return (
        <div>
            <Navbar />
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5 '>
                    <Input
                        className='w-fit'
                        placeholder='Fillter by company name,role'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={()=> navigate("/admin/jobs/create")}>New Jobs</Button>
                </div>
                <AdminJobsTable/>
            </motion.div>
        </div>
    )
}

export default AdminJobs