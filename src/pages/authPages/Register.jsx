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
import { Main_Logo1 } from "@/lib/svgFils"

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
        <div className="w-full h-dvh flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200">
            <div className="grid sm:grid-cols-2 grid-cols-1 w-[90vw] max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden">

                {/* LEFT SIDE IMAGE */}
                <div className="hidden sm:flex items-center justify-center bg-sky-100">
                    <img
                        src="/assets/gif/register.jpg"
                        className="h-full w-full"
                    />
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="flex flex-col items-center justify-center p-6 relative">
                    <div className="flex items-center justify-center rounded-full bg-sky-900 shadow-lg p-1">
                        <img src={Main_Logo1} alt="main-logo" className='h-8 w-8 rounded-full bg-transparent' />
                    </div>

                    <h1 className="sm:text-2xl text-lg font-bold text-center mt-2">
                        Create Your Account
                    </h1>
                    <p className="max-w-[70vw] text-center px-5 py-2 sm:text-sm text-xs">
                        Join us today and enjoy a seamless shopping experience.
                    </p>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col items-center justify-center gap-2 w-full max-w-sm"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="sm:text-sm text-xs">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your name"
                                                className="bg-sky-50 sm:text-sm text-xs"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="sm:text-sm text-xs" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="sm:text-sm text-xs">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="bg-sky-50 sm:text-sm text-xs"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="sm:text-sm text-xs" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="sm:text-sm text-xs">Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="bg-sky-50 sm:text-sm text-xs"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="sm:text-sm text-xs" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="sm:text-sm text-xs">
                                            Confirm Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Re-enter your password"
                                                className="bg-sky-50 sm:text-sm text-xs"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="sm:text-sm text-xs" />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="bg-sky-800 hover:bg-sky-800 px-12 sm:py-3 mt-2 sm:text-sm text-xs w-full"
                            >
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
        </div>
    )
}

export default Register
