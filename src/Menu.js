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

                            <header>
                                <h4> {title} </h4>
                                <p> {price} </p>
                            </header>
                                
                            <p> {desc}</p>
                            {/* <div className='header-container'>
                                
                            </div> */}
                            

                        </article>
                    );
                })
            }
        </section>
    );
};

export default Menu;