import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
    <section className="main">
        <h2 className="main__tittle">Qué quieres hoy?</h2>
        <input type="text" className="input" placeholder="Buscar..." />
    </section>
);

export default Search;