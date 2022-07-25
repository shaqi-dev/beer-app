import React, { ChangeEvent, FC } from 'react';
import s from './BeerSearchInput.module.scss';

const BeerSearchInput: FC = () => {
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    console.log(input.value);
  };

  return (
    <div className={s.root}>
      <input
        type="search"
        placeholder="Search"
        onChange={searchHandler}
        className={s.input}
      />
    </div>
  );
};

export default BeerSearchInput;
