"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import BackButton from './back-button'

const AuthCard = ({headerLabel, subLabel, backButtonHref, backButtonLabel, children}: IAuthCard) => {
  return (
    <Card className='w-[400px] shadow-none border-none'>
        <CardHeader className='text-center'>
            <CardTitle>{headerLabel}</CardTitle>
            <CardDescription>{subLabel}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
            <BackButton 
                link={backButtonHref}
                label={backButtonLabel}
            />
        </CardFooter>
    </Card>
  )
}

export default AuthCard