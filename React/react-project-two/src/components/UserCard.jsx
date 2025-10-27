import React from 'react';
import './UserCard.css';

const UserCard = (props) => {
    return (
        <div className='user-container'>
            <p id='title'>{props.name}</p>
            <p>{props.desc}</p>
            {/* <img src={props.img} alt='user' /> */}
        </div>
    )
}

export default UserCard;