import React, {useState} from 'react'
import { Heading, Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import Image from 'next/image'
import {LinkIcon} from '@chakra-ui/icons'
import axios from 'axios'
import { useRouter } from 'next/router'
import { account, db } from '../appwrite/appwriteConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomeCard = () => {
  const [ key, setKey ] = useState()
  
  const router = useRouter()
  const handleSubmit = async () => {
    // const user = await account.getSession('current')
    // try {
    //   if(user){
    //     const res = await db.createDocument('627cba5f983525b3d0ff', `unique()` , {"devkey":key}, ['role:all'], ['role:all'])
    //   } else{
    //     await account.createAnonymousSession()                     
    //     const res = await db.createDocument('627cba5f983525b3d0ff', `unique()` , {"devkey":key}, ['role:all'], ['role:all'])
    //     console.log(res)
    //   }
    // } catch (error) {
    //   toast.error(error.message, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    // });
    // }

      const response = await axios.post("http://localhost:8000", {
        key
      })
      // console.log(response)
      router.push('/dashboard')
  }

  return (
    <div className='homeCardContainer'>
        <div style={{"width":"50%"}}>
            <div>
              <Heading>The DEV Analytical App</Heading>
            </div>
            <Heading mt={10} size="md">Find Analytics of your DEV profile. You will learn about posting, top tags, and many other things</Heading>
            <InputGroup mt={10}>
              <InputLeftElement
                pointerEvents='none'
              >
                <LinkIcon color='gray.300' />
              </InputLeftElement>
              <Input onChange={(e)=> setKey(e.target.value)} type='string' placeholder='DEV API Key' _focus={{"outline":"none"}}/>
            </InputGroup> 
            <Button onClick={handleSubmit} mt={5} colorScheme='orange' size="lg">Get Started</Button>
            {/* <div>{key}</div>         */}
        </div>
        <div>
          <Image src="/header.png" height="300px" width="300px" />
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
