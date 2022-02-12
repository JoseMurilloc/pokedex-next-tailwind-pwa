import Image from 'next/image';
import {Component} from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="flex bg-white rounded-2xl border ">
        {/* <Image 
          className="none"
          src="/icons/search.svg" 
          width="10"
          height="10" 
        /> */}
        <input 
          className="text-center flex-1 placeholder:text-gray-600 rounded-2xl"  
          type="text" 
          placeholder="Procurar" 
        />
      </div>
    );
  }
}