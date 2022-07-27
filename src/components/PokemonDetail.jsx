import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
    const [character, setCharacter] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res) => setCharacter(res.data))
    }, [id])

    console.log(character)

    /////VISUALIZING...........................
    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character?.sprites?.other.dream_world.front_default} />
        </div>      
    );
};

export default PokemonDetail;