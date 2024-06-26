"use client"
import React from 'react'
import { Button } from '../ui/button'
import { FaGoogle } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Social = () => {
  return (
    <div className=" flex justify-between">
        <Button variant={"outline"} className="w-40">
           <FaGoogle size={22}/>
        </Button>
        <Button variant={"outline"} className="w-40">
           <FaGithub size={22}/>
        </Button>
    </div>
  )
}

export default Social