import React from 'react';
import { Redirect } from 'react-router-dom';


export default function RouteWrapper() {

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  if (token !== null && token !== undefined) {
        if(user._admin === 'true')
        return <Redirect to="/registerAdmin" />;
        
    
          return <Redirect to="/home" />;
      }

    else{
      return <Redirect to="/" />;
  }
  
}

