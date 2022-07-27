import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterItem = ({ characterUrl }) => {

    const [character, setCharacter] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(characterUrl)
            .then(res => setCharacter(res.data))
    }, [])

    console.log(character)
    return (

        <div onClick={() => navigate(`/pokemondetail/${character.id}`)} className='card'>
            <div className='text'>
                <h3>{character.name}</h3>
                <p className='cloud'><b>Types: </b><span>{character?.types?.[0].type?.name}</span></p>
            </div>
            <div> <img src={character.sprites?.front_default} /></div>
        </div>
    );
};

export default CharacterItem;