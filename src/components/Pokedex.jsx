import React from 'react';
import axios from 'axios';
import { useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterItem from './CharacterItem';

///en este componente se van a mostrar todos los pokemones que recivan de la api
const Pokedex = () => {
    const user = useSelector(state => state.user)

    const [characters, setCharacters] = useState([])
    const [characterSearch, setCharacterSearch] = useState("")
    const [type, setType] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(' https://pokeapi.co/api/v2/pokemon')
            .then(res => setCharacters(res.data.results))
        axios
            .get(` https://pokeapi.co/api/v2/type`)
            .then(res => setType(res.data.results))
    }, [])


    console.log(type)

    const search = (e) => {
        e.preventDefault()
        navigate(`/pokedex/${characterSearch}`)
    }

    const filterType = e => {
        axios
            .get(e.target.value)
            .then(res => setCharacters(res.data.pokemon))
    }
    console.log(characters)

    //VISUALIZING.....
    return (
        <div className='pokedex-container'>
            <h2>Pokedex</h2>
            <p>Welcome <b>{user}</b>, here you can find your favorite pokemon</p>
            <form onSubmit={search}>
                <input
                    placeholder='search for a pokemon'
                    value={characterSearch}
                    type='text'
                    onChange={e => setCharacterSearch(e.target.value)}
                />
                <button type='onSubmit'>Search</button>

            </form>

            <select onChange={filterType}>
                <option>select type of pokemon</option>

                {type.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))}

                <option value=""></option>
            </select>

            <div className='pokecontainer'>
                <ul>
                    {characters.map(character => (
                        <CharacterItem
                            characterUrl={character.url ? character.url : character.pokemon?.url}
                            key={character.url ? character.url : character.pokemon?.url} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pokedex;