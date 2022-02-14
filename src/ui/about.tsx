import Image from "next/image";
import { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center align-center min-h-8 min-w-full">
        <h2 className="text-orange-500 text-lg font-bold my-4 text-center">
          About
        </h2>

        <div className="flex align-center justify-between">
          <aside className="bg-amber-400">
           <div>
             <Image src="/icons/weight.svg" width="25" height="25" />
             <span>8,5 kg</span>
           </div>
           <span>Weight</span>
          </aside>
          <aside className="bg-amber-400">
            <div>
              <Image src="/icons/height.svg" width="25" height="25" />
              <span>0,6 m</span>
            </div>
            <span>Height</span>
          </aside>
          <aside className="bg-amber-400">
            <div>
              <span>Mega-Punch</span>
              <span>Mega-Punch \n Fire-Punch</span>
            </div>
            <span>Moves</span>
          </aside>
        </div>
      </div>
    );
  }
}