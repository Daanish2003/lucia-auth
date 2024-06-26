"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const BackButton = ({link, label} : IBackButton) => {
  return (
     <Button
       variant={'link'}
       size="sm"
       className='font-normal text-sm text-center w-full'
       asChild
     >
       <Link href={link}>{label}</Link>
     </Button>
  )
}

export default BackButton