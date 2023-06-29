
import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function MainSection({setSelectedCategory, setCategories, categories}) {
    const navigate = useNavigate()

    function category (e) {
        setSelectedCategory(e.target.alt)
        navigate('/productList')
    }

    useEffect(() => {
      axios("https://ecommerce-website-backend-2lob.onrender.com/categories").then(i => setCategories(i.data)).catch(i => console.log(i))
      

    }, [])
  return (
    <div>
      
        <h4 className='home_title'>Welcome to the magic world of Newbie</h4>
        <div className='category-section min-h-screen'>
          {/* {categories&& categories.map((i ,index) => <img   onClick={(e) => category(e)} src={i.pic} alt={i.name} />)} */}
          {categories ? categories.map((i ,index) => <img  key= {index} onClick={(e) => category(e)} src={i.pic} alt={i.name} />):

            <span className="loading loading-dots loading-lg"></span>
          }
          


        </div>
    </div>
  )
}

export default MainSection