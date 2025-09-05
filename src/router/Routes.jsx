import Error from "@/errorPage/Error";
import UnAuthPage from "@/errorPage/UnAuthCart";
import CartGuard from "@/guards/cartGuard";
import LoginGuard from "@/guards/loginGuard";
import ValidUserGaurd from "@/guards/userGuard";
import MainLayout from "@/layout/mainLayout";
import Login from "@/pages/authPages/Login";
import Register from "@/pages/authPages/Register";
import Blog from "@/pages/homePages/blog/Blog";
import Home from "@/pages/homePages/home";
import ProductDetails from "@/pages/homePages/product/ProductDetails";
import Products from "@/pages/homePages/product/Products";
import Shop from "@/pages/homePages/shop";
import AboutUs from "@/pages/homePages/static/AboutUs";
import ContactUs from "@/pages/homePages/static/ContactUs";
import FAQs from "@/pages/homePages/static/FAQs";
import Cart from "@/pages/userDashboard/cart";
import UserPage from "@/pages/userDashboard/user";


import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: 'shop',
                    element: <Shop />
                },
                {
                    path: 'product',
                    element: <Products />
                },
                {
                    path: 'product-details',
                    element: <ProductDetails />
                },
                {
                    path: 'blog-details',
                    element: <Blog />
                },
                {
                    path: 'about-us',
                    element: <AboutUs />
                },
                {
                    path: 'contact-us',
                    element: <ContactUs />
                },
                {
                    path: 'faq',
                    element: <FAQs />
                }
            ]
        },
        {
            path: 'unauthorize-user',
            element: <UnAuthPage />,
        },
        {
            path: '/user',
            element: <ValidUserGaurd />,
            children: [
                {
                    index: true,
                    element: <UserPage />
                },
            ]
        },
        {
            path: '/wishlist',
            element: <ValidUserGaurd />,
            children: [
                {
                    index: true,
                    element: <UserPage />
                },
            ]
        },
        {
            path: '/cart',
            element: <CartGuard />,
            children: [
                {
                    index: true,
                    element: <Cart />
                },
            ]
        },
        // {
        //     path: '/user',
        //     element: <ValidUserGaurd />,
        //     children: [
        //         {
        //             index: true,
        //             element: <UserPage />
        //         },
        //     ]
        // },
        {
            path: "/login",
            element: <LoginGuard />,
            children: [
                {
                    index: true,
                    element: <Login />
                }
            ]
        },
        {
            path: "/register",
            element: <LoginGuard />,
            children: [
                {
                    index: true,
                    element: <Register />
                }
            ]
        }
    ]
);
