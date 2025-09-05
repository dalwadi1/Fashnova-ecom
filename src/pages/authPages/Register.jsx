import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router"
import { UserRoundPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// ✅ Validation schema
const registerSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

const Register = () => {
    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = (values) => {
        console.log("Register data:", values)
        // 👉 Yahan API call kar sakte ho (axios/fetch)
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200">
            <div className="max-w-[80vw] flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 shadow-2xl p-5 rounded-md border">
                <div className="flex items-center justify-center rounded-full bg-sky-900 shadow-lg p-3">
                    <UserRoundPlus size={30} />
                </div>

                <h1 className="sm:text-2xl text-lg font-bold text-center">Create Your Account</h1>
                <p className="max-w-[80vw] text-center px-5 sm:text-sm text-xs">
                    Join us today and enjoy a seamless shopping experience.
                </p>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col items-center justify-center gap-2 max-w-[70vw]"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className='sm:text-sm text-xs'>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" className="bg-sky-50 sm:text-sm text-xs" {...field} />
                                    </FormControl>
                                    <FormMessage className='sm:text-sm text-xs' />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className='sm:text-sm text-xs'>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" className="bg-sky-50 sm:text-sm text-xs" {...field} />
                                    </FormControl>
                                    <FormMessage className='sm:text-sm text-xs' />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className='sm:text-sm text-xs'>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter your password" className="bg-sky-50 sm:text-sm text-xs" {...field} />
                                    </FormControl>
                                    <FormMessage className='sm:text-sm text-xs' />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className='sm:text-sm text-xs'>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Re-enter your password" className="bg-sky-50 sm:text-sm text-xs" {...field} />
                                    </FormControl>
                                    <FormMessage className='sm:text-sm text-xs' />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="bg-sky-800 hover:bg-sky-800 px-12 sm:py-3 mt-2 sm:text-sm text-xs">
                            REGISTER
                        </Button>

                        <p className="sm:text-sm text-xs">
                            Already have an account?{" "}
                            <Link className="text-sky-950" to="/login">
                                Log in
                            </Link>
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Register
