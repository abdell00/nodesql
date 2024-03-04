import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate,  Link} from'react-router-dom'
const Add = () => {
  const navigate = useNavigate()
  const [values , setvalues]=useState({
    name:'',
    email:'',
    age:'',
    gender:''
  })
  function handelsabmite(e){
    e.preventDefault()
    axios.post('/add_user', values)
    .then((res)=>(
      
      console.log(res),
      navigate('/')
    ))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
<h3>hi</h3>
<div>
  <Link to='/'>home</Link>
</div>
<form action="/submit-form" onSubmit={handelsabmite}>
<div>
  <label htmlFor="name ">name</label>
  <input className='bg-black m-5' type="text" required value={values.name} onChange={(e)=>{setvalues({ ...values, name: e.target.value })}} />
</div>
<div>
  <label htmlFor="">email</label>
  <input className='bg-black m-5' type="text" required value={values.email} onChange={(e)=>{setvalues({ ...values, email: e.target.value })}}/>
</div>
<div>
  <label htmlFor="">gender</label>
  <input className='bg-black m-5' type="text" value={values.gender} onChange={(e)=>{setvalues({ ...values, gender: e.target.value })}} />
</div>
<div>
  <label htmlFor="">age</label>
  <input className='bg-black m-5' type="text" value={values.age} onChange={(e)=>{setvalues({ ...values, age: e.target.value })}} />
</div>
<button>save</button>
</form>

    </div>
  )
}

export default Add