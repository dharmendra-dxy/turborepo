import { Button } from '@repo/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div className='flex items-center h-screen w-screen justify-center'>

      <h1 className='text-5xl font-mono text-red-500'>Hello</h1>
      <h1 className='text-xl font-mono text-red-500'>Hello-123</h1>
      <h1>Hello-123</h1>

    <Button appName='web-app' className='px-6 py-2 rounded-md bg-white text-gray-400'>
      click me 
    </Button>

    </div>
  )
}

export default Page