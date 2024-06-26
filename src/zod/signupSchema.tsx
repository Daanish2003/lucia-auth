import { z } from 'zod';

export const signupSchema = z.object({
    email: z.string().min(1, {message: "email is required"}).email({message: "invalid email address"}),
    password: z.string().min(8, {message: "minimum 8 characters are required"}).max(255, {message: "maximum 255 characters are allowed"}),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})