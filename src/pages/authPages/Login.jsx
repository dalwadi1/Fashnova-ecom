import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Main_Logo1 } from "@/lib/svgFils"
import { useDispatch, useSelector } from "react-redux"
import { userLogIn } from "@/redux/actions/auth.action"

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, user } = useSelector((state) => state.userDetails)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values) => {
        dispatch(userLogIn(values))
    }
    return (
        <div className="w-full h-dvh flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200">
            <div className="grid sm:grid-cols-2 grid-cols-1 w-[90vw] max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="hidden sm:flex items-center justify-center bg-sky-100">
                    <video
                        src="/assets/gif/register.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full"
                    />
                </div>

                <div className="relative flex flex-col items-center justify-center p-6">
                    <div className="flex items-center justify-center rounded-full bg-sky-900 shadow-lg p-1 mt-3">
                        <img src={Main_Logo1} alt="main-logo" className='h-8 w-8 rounded-full bg-transparent' />
                        {/* <LogIn size={30} className="text-white" /> */}
                    </div>

                    <h1 className="sm:text-2xl text-lg font-bold py-2">Welcome Back!</h1>
                    <p className="max-w-[70vw] text-center px-5 py-2 sm:text-sm text-xs">
                        Login to your account to continue shopping and track your orders.
                    </p>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col items-center justify-center gap-3 py-5 w-full max-w-sm"
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
                            <button
                                className={
                                    loading
                                        ? "bg-sky-600 cursor-not-allowed opacity-50 px-8 rounded-sm py-1 mt-2 sm:text-sm text-xs w-full flex items-center justify-center"
                                        : "bg-sky-800 cursor-pointer hover:bg-sky-800 text-white px-8 rounded-sm py-3 mt-2 sm:text-sm text-xs w-full flex items-center justify-center"
                                }
                                disabled={loading}
                            >
                                {loading ? <video
                                    src="/assets/gif/loader/loading.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-9 h-9 rounded-full"
                                /> : 'LOG IN'}
                            </button>

                            {/* <Button
                                type="submit"
                                className={loading ? "bg-sky-800 hover:bg-sky-800 px-18 py-5 mt-2 sm:text-sm text-xs w-full" : "bg-sky-800 hover:bg-sky-800 px-18 py-5 mt-2 sm:text-sm text-xs w-full"}
                            >

                            </Button> */}

                            <p className="text-center sm:text-sm text-xs">
                                Don&apos;t have an account?{" "}
                                <Link className="text-sky-950" to="/register">
                                    Register
                                </Link>
                            </p>
                        </form>
                    </Form>

                    <div className="absolute top-3 left-3">
                        <div className="shadow-lg rounded-sm p-1">
                            <Link to={'/'} className="">
                                <img
                                    src="/assets/gif/back.jpg"
                                    className="h-5 w-10 bg-transparent"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
