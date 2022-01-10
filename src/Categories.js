import React from 'react';

const Categories = ({newCategories, filterItems}) => {
    return (
        <div className='btn-container'>
           {
               newCategories.map(category => {
                   return <button onClick={() => 
                    filterItems(category)}> 
                    {category} 
                    </button>
               })
           }
        </div>
    );
};

export default Categories;          