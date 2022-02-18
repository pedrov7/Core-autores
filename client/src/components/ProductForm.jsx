import React, { useState, useContext } from 'react'
import axios from 'axios';
import { myContext } from '../context/Mycontext';
import { Link, useNavigate } from 'react-router-dom';


export const ProductForm = () => {

    const { products, setProducts } = useContext(myContext);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const [validation, setValidation] = useState('');


    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                setProducts([...products, res.data])                
                e.target.reset();
                setTitle("");
                setPrice("");
                setDescription("");
                navigate('/');
                

            })
            .catch(err => {
                setValidation('is-invalid')
                setError(err.response.data.errors.title.message);
            })

       



    }


    console.log(error);
    return (

        <>
            <form onSubmit={onSubmitHandler}>
                <h2>Favorite authors</h2>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                        setValidation('')
                        }} 
                        id="validationServer03" 
                        type="text" 
                        className={`form-control ${validation}`}/>
                    <div id="validationServer03Feedback" className="invalid-feedback">
                        {error}
                    </div>
                </div>

                                  


                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className='btn btn-success mx-2' to={"/"}>Cancel</Link>
            </form>



        </>
    )
}
