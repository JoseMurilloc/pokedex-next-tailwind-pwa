import Image from 'next/image';
import {Component} from 'react';

export class Sort extends Component {
  render() {
    return (
      <div className="flex w-8 justify-center align-center">
        <span>#</span>
        <Image src="/icons/arrow-down.svg" width="10" height="16"/>
      </div>
    );
  }
}