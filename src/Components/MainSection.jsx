
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
        <div className='category-section'>
          {categories&& categories.map((i ,index) => <img   onClick={(e) => category(e)} src={i.pic} alt={i.name} />)}
          
          


        </div>
    </div>
  )
}

export default MainSection