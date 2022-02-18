import React from 'react'
import { Link } from 'react-router-dom'
import { ProductForm } from '../components/ProductForm'

export const ShowForm = () => {

  return (

    <div>
        
        <Link className='btn btn-info mx-2' to={"/"}>Home</Link>
        <ProductForm/>
    </div>
  )
}
