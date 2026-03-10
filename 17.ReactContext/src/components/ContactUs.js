import React , {useContext} from 'react'
import UserContext from '../utils/UserContext';

const ContactUs = () => {

  const {loggedInUser ,setUserName} = useContext(UserContext);
  

  return (
    <div>
        <h1  className='text-3xl' >Contact Us Page</h1>
        <p className='text-lg ml-3'>Since the rouing for this page is provided by anchor tag  (&lt;a&gt; &lt;/a&gt;)    instead of  (&lt;Link&gt; &lt;/Link&gt;)  tag so this will reload the whole page</p>
        <div>
          <label>UserName: </label>
          <input className=" m-2 border"  value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}} />
        </div>
    </div>
  )
}

export default ContactUs