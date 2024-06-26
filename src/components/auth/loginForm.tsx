"use client"
import React from 'react'
import AuthCard from './AuthCard'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { LoginSchema } from '@/zod/loginSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/button'
import Social from './social'
import Link from 'next/link'
import { Login } from '@/actions/auth.action'

const LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    Login(values).then((data) => {
      if(data.error) {
        console.log(data.error)
      } else {
        console.log(data.success)
      }
    })
}
  return (
    <AuthCard
      headerLabel='Login'
      subLabel='Create an account to get started'
      backButtonHref='/auth/signup'
      backButtonLabel='Don’t have an account? Sign Up'
    >
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                       placeholder="Enter your email" 
                       type="email"{...field} 
                       />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"link"} size="sm" className="font-normal text-xs p-1"><Link href="/auth/forgot-password">Forgot Password?</Link></Button>
        </div>
        <Button 
           type="submit"
           className='w-full'>
            Create an account
        </Button>
        <Social />
      </form>
    </Form>
    </AuthCard>
  )
}

export default LoginForm