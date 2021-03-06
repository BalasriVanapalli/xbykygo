import React, { useContext } from 'react';

import { CartContext } from '../CartContext';

import FooterComponent from './FooterComponent';

const Headphones = () =>

{   

const {

state: { Headphones },

addHitem

} = useContext(CartContext);

return (

<>

<div class="container mb-5">

{Headphones.map(({ name, features,des,image, price, incart }, index) => (

<div className="row">

<div className="col-6">

<div class="card-body mt-5">

<h1 className="mb-3">{name}</h1>

<p className="text-muted" style={{fontSize:"14px"}}>{des}</p>

<p className="text-muted" style={{fontSize:"14px"}}><b>FEATURES: </b>{features}</p>

<div className="mb-3">

<span><i class='fa fa-dollar' style={{fontSize:"20px"}}></i> &nbsp;{price}</span>

</div>

<button type="button"

disabled={incart === "true" ? true : false}

onClick={() => addHitem(index)}

class="btn btn-dark btn-lg p-1"

style={{borderRadius:"100px",width:"200px",height:"43px",fontSize:"18px"}}><small>Add to Cart</small></button>

</div></div>

<div className="col-6">

<div className="mt-5">

<img src={image} alt="logo" style={{width:"380px",height:"390px"}}/></div>

</div>

<hr style={{border:"1px solid black",width:"93%", borderWidth:"thin"}} />

</div>

)

)

}

</div>

<div className="footer">

<FooterComponent />

</div>

</>

);

}

export default Headphones;