"use server"
import bcrypt from "bcryptjs"
import { generateId } from "lucia"
import { signupSchema } from "@/zod/signupSchema"
import { z } from "zod"
import db from "@/lib/db"
import { userTable } from "@/lib/db/schema"
import jwt from "jsonwebtoken"
import { eq } from "drizzle-orm"
import { LoginSchema } from "@/zod/loginSchema"

export const signUp = async (values: z.infer<typeof signupSchema>) => {
    const validatedFields = signupSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: "Invalid Fields"}
    }
    const { email, password, confirmPassword }= validatedFields.data

    if(password !== confirmPassword) {
        return { error: "Password does not match"}
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const userId = generateId(15);

    // check if there is exisitng User in database 

    const existingUser = await db.query.userTable.findFirst({
        where: (table) => eq(table.email, email)
    })

    if(existingUser) {
        return { error: "Email already in use"}
    }

    const newUser = {
          id: userId,
          email: email,
          hashPassword: hashPassword
    }
     
    console.log(newUser)
    await db.insert(userTable).values(newUser).execute();

    return { success : "User has created successfully"}
}

export const Login = async(values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error : "Invalid Fields"}
    }

    const { email, password } = validatedFields.data

    const existingUser = await db.query.userTable.findFirst({
        where: (table) => eq(table.email, email)
    })

    if(!existingUser) {
        return { error: "There isn't "}
    }
}