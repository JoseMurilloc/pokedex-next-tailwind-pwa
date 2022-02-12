import { Component } from "react";
import { selectColorBasedType } from "../utils/selectColorBasedType";


type CardPokemonProps = {
  type: string;
  name: string;
  avatar: string;
  id: number;
};
type CardPokemonState = {
  typeColorPokemon: string;
  idFormatted: string;
};

export class CardPokemon extends Component<CardPokemonProps, CardPokemonState> {

  componentDidMount() {
    const { type, id }  = this.props;
    const formatterId = this.handleIAddZeroInDecimalId(id);
    
    const colorTypePokemon = selectColorBasedType(type);
    
    this.setState({ typeColorPokemon: colorTypePokemon });
    this.setState({ idFormatted: formatterId });
  }

  state: CardPokemonState = {
    typeColorPokemon: "",
    idFormatted: "#",
  };  

  handleIAddZeroInDecimalId(id: number) {
    if (id < 10) return `#00${id}`;
    if (id >= 10 && id <= 99) return `#0${0}`;
    return `#${id}`;
  }
  
  render() {
    const { idFormatted, typeColorPokemon } = this.state;
    const {avatar, name} = this.props;

    return (
      <div 
        className={`min-h-28 w-24 flex flex-col	bg-white border  rounded-lg border-${typeColorPokemon}`}
      >
        <header className="pt-1 px-2">
          <span className={`flex justify-end text-sm text-${typeColorPokemon}`}>
            {idFormatted}
          </span>
        </header>
        <main className="px-4 flex-1 flex justify-center align-center">
          <img
            src={avatar} 
            alt={name} 
          />
        </main>
        <footer className={`border px-2 py-2 rounded-br-lg rounded-bl-lg flex justify-center align-center bg-${typeColorPokemon} border-${typeColorPokemon}`}>
          <span className="text-white text-xs">{this.props.name}</span>
        </footer>
      </div>
    );
  }
}