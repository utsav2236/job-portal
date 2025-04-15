import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  });
  const { loading,user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // validation st

  // end

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // validation st
    
    // end
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true,
      });
      if (res.data.SUCCESS) {
        navigate("/login")
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [])
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border-gray-200 border-2 rounded-md p-4 my-10'>
          <h1 className='font-bold text-2xl mb-5 text-center'>Signup</h1>
          <div className='my-2'>
            <Label  className="mb-2" htmlFor="fname">Full Name</Label>
            <Input className="mb-2"
              id='fname'
              type='text'
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your Full Name" />
          </div>
          <div className='my-2'>
            <Label htmlFor="email">Email</Label>
            <Input className="my-2"
              id='email'
              type='email'
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter Your mail" />
          </div>
          <div className='my-2'>
            <Label htmlFor="email">Phone Number</Label>
            <Input className="my-2"
              id='phone'
              type='text'
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your Phone number" />
          </div>
          <div className='my-2'>
            <Label htmlFor="email">Password</Label>
            <Input className="my-2"
              id='password'
              type='password'
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="password" />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  id='r1'
                  type="radio"
                  name='role' value='student'
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer' />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  id='r2'
                  type="radio"
                  name='role'
                  value='recruiter'
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer' />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center gap-2'>
              <Label htmlFor="file">Profile</Label>
              <Input id="file" accept="image//*" type="file" onChange={changeFileHandler} className='cursor-pointer' />
            </div>
          </div>
          {
            loading ? <Button className='w-full my-4'> <Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> :

              <Button type="submit" className='w-full my-4'>Signup</Button>
          }
          <span className='text-sm'>Alredy have an account? <Link to='/login' className='text-blue-600'>Login</Link></span>
        </form>
      </div>
    </>

  )
}

export default Signup