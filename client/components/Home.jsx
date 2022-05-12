import React, { useEffect, useState } from 'react'
import { Heading, Button } from '@chakra-ui/react'
import { HomeCard } from './Cards/HomeCard'
import { account } from './appwrite/appwriteConfig'
import { useRouter } from 'next/dist/client/router'

export const Home =  () => {
  const router = useRouter()
  const [session, setSession] = useState()
  
  useEffect(() => {
    const getUser = async() => {
      try {
        const user = await account.getSessions()
        setSession(user)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  })

  const handleLogout = async () => {
    const user = await account.getSession('current')
    console.log(user.$id)
    const sessionid = `${user.$id}`
    account.deleteSession(sessionid)
    // console.log(sessionid)
    router.reload(window.location.pathname)
  }

  return (
    <div className='homeContainer'>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <Heading size="lg">Home</Heading>
        {
          !session &&
          <div>
            <Button mr={5} onClick={() => router.push('/register')} colorScheme="orange">Register</Button>
            <Button onClick={() => router.push('/login')} colorScheme="purple">Login</Button>
          </div>
        }
        {
          session &&
          <div>
            <Button onClick={handleLogout} colorScheme="red">Log Out</Button>
          </div>
        }
      </div>
      <div className='card'>
        <HomeCard />
      </div>
    </div>
  )
}
