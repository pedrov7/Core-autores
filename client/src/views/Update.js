import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';

export const Update = () => {

    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const [validation, setValidation] = useState('');

    useEffect(() => {

        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);

            })

    }, [])

    const updateProductHandler = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        }
        )
        .then(res => {
            console.log(res);
            alert("Changes saved!");
            navigate('/');        
        })

        .catch(err => {
            setValidation('is-invalid')
            setError(err.response.data.errors.title.message);
        })
        
    }

    return (

        <form onSubmit={updateProductHandler}>
            <h2>Favorite authors</h2>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input value = {title} onChange={(e) => {
                    setTitle(e.target.value)
                    setValidation('')
                    }} type="text" className={`form-control ${validation}`}/>
                <div id="validationServer03Feedback" className="invalid-feedback">
                        {error}
                    </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>   
            <Link className='btn btn-success mx-2' to={"/"}>Cancel</Link> 
        </form>
    )
}
