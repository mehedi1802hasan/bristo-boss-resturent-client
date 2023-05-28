import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const FoodCard = ({item}) => {
  const location=useLocation();
  const navigate=useNavigate()
    const {image,name,recipe,price,_id}=item;
    const {user}=useContext(AuthContext)
    
const handleAddToCard=item=>{
      console.log(item)
     if(user && user.email){
      const orderItem={_id,name,image,recipe,price, email:user.email}
      fetch('http://localhost:3000/cards',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(orderItem)
        
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      if(data.insertedId){
        alert('added done')
      }
     
      })
     }
    else{
      alert ('no user');
      navigate('/login', { state: { from: location } });
    }
    }
    return (
        <div className="card w-96 glass">
        <figure><img className='h-60' src={image} /></figure>
        <div className=" card-body">
          <h2 className="text-3xl font-bold card-title">{name}</h2>
          <p>{recipe}</p>
          <i className='font-bold'>$ {price}</i>
          <div className=" card-actions">
            <button onClick={()=>handleAddToCard(item)} className="border-0 border-b-4 border-red-600 btn btn-outline bg-slate-100">Order</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;