import { ReactElement } from 'react';

export interface IInput {
  register(message: string): void;
  errorMessage: string;
}

export interface ICartInput {
  value: number;
  onChange(value: string): void;
}

export interface ICustomInput {
  label: string;
  name: string;
  placeholder: string;
  errorMessage: string;
  register(message: string): void;
  icon?: ReactElement;
  mask?: object[];
}
