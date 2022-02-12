import { Component } from "react";
import { api } from "../services/api";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { selectColorBasedType } from "../utils/selectColorBasedType";

type CardPokemonProps = {
  namePokemon: string;
};

type Pokemon = {
  id: number;
  name: string;
  avatar: string;
};

type CardPokemonState = {
  idFormatted: string;
  pokemon: Pokemon
};

export class CardPokemon extends Component<CardPokemonProps, CardPokemonState> {


  async handleGetInfoPokemon() {
    const { namePokemon }  = this.props;

    try { 
      const {data} = await api.get(`/pokemon/${namePokemon}`)
      const formatterId = this.handleIAddZeroInDecimalId(data.id); 
      
      const {id, name} = data;
      const nameUppercase = capitalizeFirstLetter(name);

      this.setState({ pokemon: { id, name: nameUppercase, avatar: data.sprites.other.home.front_default} });

      this.setState({ idFormatted: formatterId})
    } catch (error) {
      console.log(error)
    }

  }

  componentDidMount() {
    this.handleGetInfoPokemon()
  }

  state: CardPokemonState = {
    idFormatted: "",
    pokemon: {} as Pokemon
  };  

  handleIAddZeroInDecimalId(id: number) {
    if (id < 10) return `#00${id}`;
    if (id >= 10 && id <= 99) return `#0${id}`;
    return `#${id}`;
  }
  
  render() {
    const { idFormatted } = this.state;
    const {pokemon} = this.state;

    return (
      <div 
        className={`min-h-28 w-24 flex flex-col	bg-white border  rounded-lg border-green-400`}
      >
        <header className="pt-1 px-2">
          <span className={`flex justify-end text-green-400 text-xs`}>
            {idFormatted}
          </span>
        </header>
        <main className="px-4 flex-1 flex justify-center align-center">
          <img
            src={pokemon.avatar} 
            alt={pokemon.name} 
          />
        </main>
        <footer className={`border px-2 py-1 rounded-br-lg rounded-bl-lg flex justify-center align-center bg-green-400 border-green-400`}>
          <span className="text-white text-xs">{pokemon.name}</span>
        </footer>
      </div>
    );
  }
}