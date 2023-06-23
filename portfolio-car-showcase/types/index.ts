import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "subbmit" | "button";
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SerchMenufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarcardsProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

