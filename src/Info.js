import React from 'react'
import './App.css';

const Info=(props)=> {
    const { userInfo } = props;
    return(
            <div>
                <div className='img'>
                    <a href={userInfo.html_url} ><img src={userInfo.avatar_url} alt='profile pec.' width={400} height={350} /></a>
                </div>
                <div className='info'>
                    <p><b>Fullname:</b> {userInfo.name}</p>
                    <hr />
                    <p><b>Username:</b> {userInfo.login}</p>
                    <hr />
                    <p><b>Location:</b> {userInfo.location}</p>
                    <hr />
                    <p><b>Email Adress:</b> {userInfo.email}</p>
                </div>
            </div>  
        );
    }   
export default Info
