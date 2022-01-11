import React from 'react';

const Menu = ({items}) => {
    return (
        <section className='section-center'>

            {
                items.map(item=> {
                    const {id, title, categories, price, desc, img} = item;
                    return (
                        <article className='menu-container'>
                            
                            <div className='img-container'>
                                <img src = {img} alt = {title} className='menu-img'/>
                            </div>
                                
                            <div>
                                <h4 className='name'> {title} </h4>
                                <p className='price'> ${price} </p>
                                <p className='description'> {desc}</p>
                            </div>
                            
                        </article>
                    );
                })
            }

        </section>
    );
};

export default Menu;