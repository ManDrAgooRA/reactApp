import React, { FC, useState, useEffect } from 'react';
import { Box, Collapsible } from 'grommet';
import { CaretLeftFill } from 'grommet-icons';
import { useSelector, useDispatch } from 'react-redux';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import { PriceRange } from '@/user/components/RangeSelector/RangeSelector';
import { isLoadAllGoodsSelector } from '@/user/store/selectors';
import { fetchAllGoods } from '@/user/store/thunks';
import './filterByPrice.scss';

export const FilterByPrice: FC = () => {
  const [open, setOpen] = useState(false);
  const isAllGoodsLoad = useSelector(isLoadAllGoodsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGoods());
  }, []);

  if (isAllGoodsLoad) {
    return <CustomSpinner />;
  }

  return (
    <>
      <Box align="start" gap="small">
        <button
          className="btn btn-price"
          type="button"
          onClick={() => setOpen(!open)}
        >
          Price
          <div className={open ? 'icon-price__active' : 'icon-price'}>
            <CaretLeftFill />
          </div>
        </button>
      </Box>
      <Collapsible open={open}>
        <PriceRange />
      </Collapsible>
    </>
  );
};
