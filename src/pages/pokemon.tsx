import Image from 'next/image';
import { Component } from 'react'
import Chips from '../components/chips';
import { HeaderPokemon } from '../components/headerPokemon';
import { About } from '../ui/about';

type PokemonProps = {
  namePokemon: string;
};

type PokemonState = {};


export default class Pokemon extends Component<PokemonProps, PokemonState> { 
  state: PokemonState = {};

  componentDidMount() {

  }

  render () {
    return (
      <div 
        className="relative flex flex-col bg-orange-500 px-2 py-6 w-screen min-h-screen"
      >
        <Image 
          src="/icons/pokeball_light.svg" 
          width="225" 
          height="225"
        />

        <HeaderPokemon />

        <div className="bg-white flex flex-1 rounded-2xl relative py-10 px-6 justify-center align-center">
          <img 
            className="absolute -top-36 left-0 right-0 mx-auto w-48" 
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" 
            alt="Charmander" 
          />

          <div className="h-8 min-w-full gap-2">
            <div className="flex justify-center align-center h-8 min-w-full gap-2">
              <Chips type="poison" name="Poison" />
              <Chips type="bug" name="Grass" />
              <Chips type="fire" name="Fire" />
            </div>

            <About />
          </div>
        </div>        
      </div>
    )
  }
}
