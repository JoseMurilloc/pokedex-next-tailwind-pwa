import Image from "next/image";
import { Component } from "react";

export class HeaderPokemon extends Component {
  render() {
    return (
      <header 
        className="absolute flex justify-between align-center w-screen pr-8"
      >
        <Image 
          src="/icons/arrow-left.svg" 
          width="15" 
          height="15"
          className="text-white"
        />  

        <div className="flex flex-1 ml-4">
          <span className="text-white font-bold text-xl font-['Poppins']">Charmander</span>
        </div>

        <div>
          <span className="text-white font-bold font-['Poppins'] text-xs">#004</span>
        </div>
     </header>
    )
  }
}