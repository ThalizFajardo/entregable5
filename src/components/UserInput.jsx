import React from 'react';
import { useState } from 'react'
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UserInput = () => {
    const [userName, setUserName] = useState(" ");

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submit = e => {
        e.preventDefault()
        dispatch(changeUser(userName))
        navigate("/pokedex")
    }


    return (
        <div className='beginning-container' >
            <div className='banner'>
                <h2>Hello trainer !</h2>
                <img src="https://seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon--trainer-png.png" />
            </div>

            <p>Give me your name to start</p>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <button><i className="fas fa-paper-plane ">::before</i></button>
            </form>
        </div>
    );
};

export default UserInput;