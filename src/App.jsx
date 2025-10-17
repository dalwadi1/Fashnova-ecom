import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './router/Routes'
import { useDispatch } from 'react-redux'
import { getProducts } from './redux/actions/product.action'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return <RouterProvider router={router} />
}

export default App
