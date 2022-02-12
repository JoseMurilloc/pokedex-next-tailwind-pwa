import axios from 'axios';
import Image from 'next/image';
import { Component } from 'react'
import { CardPokemon } from '../components/cardPokemon';
import { Search } from '../components/search';
import { Sort } from '../components/sort';
import { api } from '../services/api';

type HomeProps = {};
type HomeState = {
  pokemons: Array<any>;
};

type ItemPokemon = {
  name: string;
  url: string;
}
type ResponsePokemon = {
  results: Array<ItemPokemon>;
};

export default class Home extends Component<HomeProps, HomeState> { 
  state: HomeState = {
    pokemons: []
  };
  
  componentDidMount() {
    this.handleFetchingAllPokemon();
  }


  // 〽️
  async handleFetchingAllPokemon() {
    try { 
      // const response = await api.get<ResponsePokemon>('/?limit=20')
    } catch {
      console.log('error')
    }
  }


  render () {
    const {pokemons} = this.state
    return (
      <div 
        className="flex flex-col bg-slate-100 px-4 py-6 w-screen pb-24"
      >
        <header className="max-h-24">
          <section className="flex flex-row justify-between">
            <Image 
              src="/icons/pokeball.svg" 
              width="24" 
              height="24"
            />
            <h1 
              className={
                `font-['Poppins'] text-2xl font-bold flex-1 ml-3 text-neutral-900`
              }
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
              id={1}
              name="Bulbasaur" 
              avatar="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
              type="grass" 
            />
          ))}
        </main>
      </div>
    )
  }
}
