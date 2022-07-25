import React, { ChangeEvent, FC } from 'react';
import s from './BeerSearchInput.module.scss';

interface BeerSearchInputProps {
  // eslint-disable-next-line no-unused-vars
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BeerSearchInput: FC<BeerSearchInputProps> = ({ searchHandler }) => (
  <div className={s.root}>
    <input
      type="search"
      placeholder="Search"
      onChange={searchHandler}
      className={s.input}
    />
  </div>
);

export default BeerSearchInput;
