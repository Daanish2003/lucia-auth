import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(8, {message: "minimum 8 characters are required"})
})