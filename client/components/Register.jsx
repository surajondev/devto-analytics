import React, {useState} from 'react'
import { Heading, Input } from '@chakra-ui/react'
import { account } from './appwrite/appwriteConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

export const Register = () => {
    const router = useRouter()
    const [userId, setUserId] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    

    const handleRegister = async () => {
        try {
            await account.create(userId, email, password)
            router.push('/')
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

  return (
    <div className='homeContainer'>
      <Heading size="lg">Register</Heading>
      <div className='registerCard'>
        <div className='registerItem'>
            <Heading mb={1} size="sm">User Name*</Heading>
            <Input onChange={(e) => setUserId(e.target.value)} placeholder='Enter User Name' type='text'></Input>
        </div>
        <div className='registerItem'>
            <Heading mb={1} size="sm">Email*</Heading>
            <Input onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' type='email'></Input>
        </div>
        <div className='registerItem'>
            <Heading mb={1} size="sm">Password*</Heading>
            <Input onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' type='password'></Input>
        </div>
        <div className='registerItem'>
            <button onClick={handleRegister} className='registerButton'>Register</button>
        </div>
      </div>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </div>
  )
}
