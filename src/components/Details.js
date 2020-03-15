import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value =>{
      const { id, company,img, info,price,title,inCart} = value.detailProduct;
      return (
        <div className="container py-5">
            {/**title */}
            <div className="row">
             <div className="col-10 max-auto text-center text-slanted text-blue my-5">
               <h1>{title}</h1>
              </div>
            </div>
            {/**end title */}
            {/**Product info */}
              <div className="row">
                <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img=fluid " alt="Product img"/>
                </div>
                 {/**Product text */}
                <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
                  <h2>Model:{title}</h2>
                  <h4 className="text-title text-uppercase
                  text-muted mt-3 mb-3">
                    made by:<span className="text-uppercase">{company}</span>
                  </h4>
                 <h4 className="text-blue"> <strong>$</strong>{price}</h4>
                 <p className="text-capitalize font-weight-bold mt-3 mb-0">Some Info about product:</p>
                 <p className="text-muted lead">{info}</p>

                 <div>
                   <Link to="/">
                     <ButtonContainer>
                       back to Product
                     </ButtonContainer>
                   </Link>

                   <ButtonContainer cart
                   disabled = {inCart ? true : false}
                   onClick={ ()=>{
                     value.addToCart(id);
                     value.openModal(id);
                   }}
                   
                   >
                     {inCart ? "inCart" :"Add to cart"}
                   </ButtonContainer>
                 </div>
                </div>
              </div>

            {/**end Product info*/}
            {/** */}
            {/** */}
            {/** */}
        </div>
      )
        }}
      </ProductConsumer>
    )
  }
}
