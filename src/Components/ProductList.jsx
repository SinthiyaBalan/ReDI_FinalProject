import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


function ProductList({selectedCategory ,setSelectedProductId, products ,setDefaultqty}) {

    const navigate = useNavigate();
  

  return (
    <>
        <div className='container md:flex lg:flex lg:flex-wrap lg:gap-8 lg:items-center justify-center items-center mt-8 mb-6'>
            {products && products.filter(i => i.category == selectedCategory).map((i , index) => <div key = {index} className="card w-96 h-96 bg-base-100 shadow-xl">
                
                <figure><img className="object-cover h-80 w-96" src={i.pics[0]} alt="pics" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{i.name}</h2>
                    <p>Price: €{i.price}</p>
                    
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={ () => {
                            setSelectedProductId(i.id);
                            setDefaultqty(1);
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