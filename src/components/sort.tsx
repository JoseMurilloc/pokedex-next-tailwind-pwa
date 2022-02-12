import Image from 'next/image';
import {Component} from 'react';

export class Sort extends Component {
  render() {
    return (
      <div className="my-0 flex flex-4 justify-center align-center">
        <span className="text-sm mt-1">#</span>
        <Image className="" src="/icons/arrow-down.svg" width="10" height="16"/>
      </div>
    );
  }
}