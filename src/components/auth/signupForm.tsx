"use client"
import React from 'react'
import AuthCard from './AuthCard'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { signupSchema } from '@/zod/signupSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Social from './social'
import { signUp } from '@/actions/auth.action'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'

const SignupForm = () => {
  const router = useRouter()
  

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof signupSchema>) => {
      await signUp(values).then((data)=> {
        if(data.error) {
          console.log(data?.error)
        } else {
          console.log(data?.success)
        }
      })
      
        
    }
  return (
    <AuthCard
      headerLabel='Sign Up'
      subLabel='Create an account to get started'
      backButtonHref='/auth/login'
      backButtonLabel='Already have an account? Login'
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="*******"
                    type='password'
                   {...field} 
                   />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
           type="submit"
           className='w-full'>
            Create an account
        </Button>
        <Social/>
      </form>
    </Form>
    </AuthCard>
  )
}

export default SignupForm