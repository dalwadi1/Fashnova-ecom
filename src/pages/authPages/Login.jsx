import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router"
import { ArrowLeftToLine, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

const Login = () => {
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values) => {
        console.log("Login data:", values)
        localStorage.setItem("user", JSON.stringify(values))
        localStorage.setItem("token", JSON.stringify(true))
        navigate("/")
    }

    return (
        <div className="w-full h-dvh flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200">
            <div className="relative max-w-[80vw] flex flex-col items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 shadow-2xl p-2 rounded-md border">
                <div className="flex items-center justify-center rounded-full bg-sky-900 shadow-lg p-3 mt-3">
                    <LogIn size={30} />
                </div>

                <h1 className="sm:text-2xl text-lg font-bold py-2">Welcome Back!</h1>
                <p className="max-w-[70vw] text-center px-5 py-2 sm:text-sm text-xs">
                    Login to your account to continue shopping and track your orders.
                </p>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col items-center justify-center gap-3 py-5 max-w-[75vw]"
                    >

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className='sm:text-sm text-xs'>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="bg-sky-50 sm:text-sm text-xs"
                                            {...field}
                                        />
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
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            className="bg-sky-50 sm:text-sm text-xs"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='sm:text-sm text-xs' />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="bg-sky-800 hover:bg-sky-800 px-18 sm:py-3 mt-2 sm:text-sm text-xs"
                        >
                            LOG IN
                        </Button>

                        <p className="text-center sm:text-sm text-xs">
                            Don&apos;t have an account?{" "}
                            <Link className="text-sky-950" to="/register">
                                Register
                            </Link>
                        </p>
                    </form>
                </Form>

                <div className="absolute top-3 left-3">
                    <div className="bg-sky-100 shadow-lg rounded-sm p-1">
                        <Link to={'/'} className="">
                            <ArrowLeftToLine />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
