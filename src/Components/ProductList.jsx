import React, { useEffect } from 'react'
import data from '../data.json'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function ProductList({selectedCategory ,setSelectedProduct, products, setProducts}) {

    const navigate = useNavigate();
    useEffect(() => {
        axios("https://ecommerce-website-backend-2lob.onrender.com/products").then(i => setProducts(i.data)).catch(i => console.log(i))

    }, [])

    //  const clickHandler = () => {
    //     console.log("Inside click Handler");
    //     setSelectedProduct();
    //     // navigate('/productDetails')
    //  }

  return (
    <>
        <div className='container lg:flex lg:flex-wrap lg:gap-8 lg:items-center '>
            {products && products.filter(i => i.category == selectedCategory).map(i => <div className="card w-96 h-96 bg-base-100 shadow-xl">
                {/* <figure className='h-1/2'><img src={i.pics[0]} alt="pics" className='h-full object-cover'/></figure> */}
                <figure><img class="object-cover h-80 w-96" src={i.pics[0]} alt="pics" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{i.name}</h2>
                    <p>Price: ${i.price}</p>
                    <p>Description: {i.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={ () => {
                            setSelectedProduct(i.id);
                            navigate('/productDetails')
                        }

                        }>Buy Now</button>
                    </div>
                </div>
            </div>)}
        </div>
</>
  )
}

export default ProductList