import { Component } from "react";
import { selectColorBasedType } from "../utils/selectColorBasedType";

type ChipsProps = {
  name: string;
  type: string;
};

type ChipsState = {};

export default class Chips extends Component<ChipsProps, ChipsState> {
  
  state: ChipsState = {}

  componentDidMount() {
    const {type} = this.props
    const colorBasedType = selectColorBasedType(type);
    this.setState({ color: colorBasedType})
  }
  

  render() {
    const { name } = this.props
    return (
      <div 
        className="px-4 mx-0 my-auto rounded-3xl bg-orange-500"
      >
        <span className="text-white font-bold text-sm">{name}</span>
      </div>
    )
  }
}