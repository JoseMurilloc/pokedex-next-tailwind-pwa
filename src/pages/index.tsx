import Image from 'next/image';
import { Component } from 'react'
import {  ItemPokemonResponse, ResponsePokemon } from '../@types/home';

import { CardPokemon } from '../components/cardPokemon';
import { Search } from '../components/search';
import { Sort } from '../components/sort';
import { api } from '../services/api';

type HomeProps = {};
type HomeState = {
  pokemons: Array<any>;
};

export default class Home extends Component<HomeProps, HomeState> { 
  state: HomeState = {
    pokemons: []
  };
  
  componentDidMount() {
    this.handleFetchingAllPokemon();
  }

  async handleFetchingAllPokemon() {
    try {
      const response = await api.get<ResponsePokemon>('/pokemon/?limit=20')
      this.setState({ pokemons: response.data.results}) 
    } catch {
      console.log('error')
    }
  }


  render () {
    const {pokemons} = this.state
    return (
      <div 
        className="flex flex-col bg-slate-100 px-4 py-6 w-screen pb-24 min-h-screen"
      >
        <header className="max-h-24">
          <section className="flex flex-row justify-between">
            <Image 
              src="/icons/pokeball.svg" 
              width="24" 
              height="24"
            />
              <h1 
                className="font-['Poppins'] text-2xl font-bold flex-1 ml-3 text-neutral-900"
              >
                Pokédex
              </h1>
            <Sort />  
          </section>

          <section className="mt-4">
            <Search />
          </section>
          
        </header>
        
        <main className="mt-6 grid grid-cols-3 auto-rows-auto	gap-x-4 gap-y-4">
          {pokemons.map(pokemon => (
            <CardPokemon 
              namePokemon={pokemon.name}
            />
          ))}
        </main>
      </div>
    )
  }
}
