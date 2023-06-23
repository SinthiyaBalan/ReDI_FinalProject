import React from 'react'
import data from '../data.json'

function ProductDetails({selectedProduct}) {

    console.log("product Id",selectedProduct);

    const product = data.products.filter(i => i.id == selectedProduct)

    console.log(product);


    
  return (
    <div className='product-details-container'>
   
        <div className="carousel w-96 h-96 mt-10 ml-10 p-15">
        <div id="item1" className="carousel-item w-96">
            {product && product.map ( i => <img src= {i.pics[0]} className="w-full" />)}
        
        </div> 
        <div id="item2" className="carousel-item w-full">
          
          {product && product.map ( i => <img src= {i.pics[1]} className="w-full" />)}
        </div> 
        <div id="item3" className="carousel-item w-full">
         
          {product && product.map ( i => <img src= {i.pics[2]} className="w-full" />)}
        </div> 
        <div id="item4" className="carousel-item w-full">
         
          {product && product.map ( i => <img src= {i.pics[3]} className="w-full" />)}
        </div>
      </div> 
      <div className="flex justify-center w-96 py-2 gap-2 ml-10">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>

      <div className='product-details'>
      {product && product.map ( i => <h2 className='prod-name'>{product.name}</h2>)}
        
      </div>
   
    </div>
  )
}

export default ProductDetails