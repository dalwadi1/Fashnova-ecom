import Error from "@/errorPage/Error";
import LoginGuard from "@/guards/loginGuard";
import AuthProtectedLayout from "@/layout/authLayout";
import MainLayout from "@/layout/mainLayout";
import Login from "@/pages/authPages/Login";
import Blog from "@/pages/homePages/blog/Blog";
import ProductDetails from "@/pages/homePages/product/ProductDetails";
import Shop from "@/pages/homePages/shop";
import AboutUs from "@/pages/homePages/static/AboutUs";
import ContactUs from "@/pages/homePages/static/ContactUs";
import FAQs from "@/pages/homePages/static/FAQs";


import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: 'shop',
                element: <Shop />
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
        path: "/login",
        element: <LoginGuard />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    }
]);
