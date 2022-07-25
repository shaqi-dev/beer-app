import React, { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import BeerList from '../BeerList';
import BeerItem from '../../models/BeerItem';
import s from './PaginatedBeerList.module.scss';

interface PaginatedBeerListProps {
  data: BeerItem[] | null
}

const PaginatedBeerList: FC<PaginatedBeerListProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState('0');
  const [allData, setAllData] = useState<null | BeerItem[]>(null);
  const [currentData, setCurrentData] = useState<null | BeerItem[]>(null);
  const beersPerPage = 12;
  const beersTotal = data?.length;
  const pagesTotal = Math.ceil((beersTotal || 0) / beersPerPage);

  useEffect(() => {
    setAllData(data);
  }, []);

  useEffect(() => {
    const start = Number(currentPage) * beersPerPage;
    let end = start + beersPerPage;
    if (beersTotal && end > beersTotal) {
      end = beersTotal;
    }

    const current = allData?.slice(start, end) || null;
    setCurrentData(current);
  }, [currentPage, allData]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const { selected } = selectedItem;
    setCurrentPage(selected.toString());
  };

  return (
    <div className={s.root}>
      <BeerList data={currentData} />
      <ReactPaginate
        className={s.paginator}
        pageLinkClassName={s['paginator__page-link']}
        activeLinkClassName={s['paginator__page-link--active']}
        previousLinkClassName={s['paginator__previous-link']}
        nextLinkClassName={s['paginator__next-link']}
        breakLinkClassName={s['paginator__break-link']}
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={pagesTotal}
      />
    </div>
  );
};

export default PaginatedBeerList;
