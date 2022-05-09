import React from 'react'
import '../moodcollectioncard/moodcollectioncard.css'
import { Link } from 'react-router-dom';

const MoodCollectionCard = ({item,setProgress}) => {
  setProgress(10);
  setProgress(100);
  return (
    <Link to='/home' style={{textDecoration: 'none', color: 'gray'}}>
    <div className='card cur-pointer'>
        <img src={item.coverImg} alt={item.title} className='collection-cover-img'/>
        <div className='collection-title-box '>            
            {item.title}    
        </div>
    </div>
    </Link>
  )
}

export default MoodCollectionCard