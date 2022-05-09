import React from 'react'
import '../filter/filter.css'
import FilterItem from './filterItem'

const Filter = ({filterList}) => {
  return (
    <div className='filter-container'>
        {filterList && filterList.map(item => {
            return <FilterItem filter={item} key={item.id} />
        })}
    </div>
  )
}

export default Filter