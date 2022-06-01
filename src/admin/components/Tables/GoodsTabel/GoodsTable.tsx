import React, { useState, useEffect } from 'react';
import { Box, DataTable, Heading } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTableColumns } from '@/admin/utlis';
import {
  goodsSelector,
  isLoadGoodsSelector,
  goodsSortSelector,
  goodsOrderSelector,
  goodsCountriesSelector,
  goodsCategoriesSelector,
  goodsMinPriceSelector,
  goodsCurrentMaxPriceSelector,
  allGoodsSelector,
  adminModalStateSelector,
} from '@/user/store/selectors';
import { changeAdminModalState } from '@/user/store/actions';
import { fetchGoods, fetchAllGoods } from '@/user/store/thunks';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import { AdminModal } from '@/admin/components/AdminModal/AdminModal';
import { TabelPagination } from '@/admin/components/Tables/TabelPagination/TabelPagination';
import { AdminGoodsForm } from '@/admin/components/AdminGoodsForm/AdminGoodsForm';
import '../tabel.scss';

export const GoodsTable = () => {
  const params = useParams();
  const goods = useSelector(goodsSelector);
  const adminModalState = useSelector(adminModalStateSelector);
  const [currentPage, setCurrentPage] = useState(params.page || 1);
  const [productId, setProductId] = useState(0);
  const [currentForm, setCurrentForm] = useState('add');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadGoods = useSelector(isLoadGoodsSelector);
  const sort = useSelector(goodsSortSelector);
  const order = useSelector(goodsOrderSelector);
  const countries = useSelector(goodsCountriesSelector);
  const categories = useSelector(goodsCategoriesSelector);
  const minPrice = useSelector(goodsMinPriceSelector);
  const currentMaxPrice = useSelector(goodsCurrentMaxPriceSelector);
  const allGoods = useSelector(allGoodsSelector);

  useEffect(() => {
    dispatch(fetchAllGoods());
    dispatch(
      fetchGoods({
        limit: 20,
        page: +currentPage,
        sort,
        order,
        countries,
        categories,
        minPrice,
        currentMaxPrice,
      })
    );
  }, [currentPage]);

  const handleChange = ({ page }: { page: number }) => {
    setCurrentPage(page);
    navigate(`/admin/goods/${page}`);
  };

  const handleModalClose = () => {
    dispatch(changeAdminModalState(false));
  };

  if (isLoadGoods) {
    return <CustomSpinner />;
  }

  return (
    <Box align="center" className="table-wrapper">
      <AdminModal isOpen={adminModalState} handleClose={handleModalClose}>
        <AdminGoodsForm currentForm={currentForm} productId={productId} />
      </AdminModal>

      <Heading level={2}>All Goods</Heading>

      <button
        className="btn btn-form btn-form__admin"
        type="button"
        onClick={() => {
          dispatch(changeAdminModalState(true));
          setCurrentForm('add');
        }}
      >
        Add new Product
      </button>

      <Box overflow="auto">
        <DataTable
          sortable
          data={goods}
          columns={getTableColumns(allGoods[0])}
          pin
          onClickRow={({ datum }: any) => {
            setProductId(datum.id);
            dispatch(changeAdminModalState(true));
            setCurrentForm('edit');
          }}
        />
      </Box>
      <TabelPagination
        items={allGoods}
        currentPage={+currentPage}
        handleChange={handleChange}
      />
    </Box>
  );
};
