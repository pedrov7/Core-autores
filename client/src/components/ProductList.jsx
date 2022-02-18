import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router'
import { myContext } from '../context/Mycontext';


export const ProductList = () => {

    const { products, removeFromDom } = useContext(myContext);

    const { id } = useParams();


    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/product/" + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <>
        {/* <h5 className='mt-3'>We have quotes by:</h5>  */}
        <table className="table">
        
            <thead> 
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Author</th>
                    <th scope="col">Actions available</th>
                </tr>
            </thead>

            {products.map((product, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{product.title}</td>                           
                            <td>
                                <Link className='btn btn-warning me-2' to={"/edit/"+product._id}>Edit</Link>
                                <button onClick = {(e) => {deleteProduct(product._id)}}className='btn btn-danger me-2'>Delete</button>
                            </td>
                        </tr>
                    </tbody>

                )
            })}
        </table>

        </>

    )
}
