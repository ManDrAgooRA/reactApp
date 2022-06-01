import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, DataTable, Heading } from 'grommet';
import {
  adminAllUserSelector,
  adminIsLoadingSelector,
  adminModalStateSelector,
} from '@/user/store/selectors';
import { AddRoleForm } from '@/admin/components/AddRoleForm/AddRoleForm';
import { changeAdminModalState } from '@/user/store/actions';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import { getTableColumns } from '@/admin/utlis';
import { TabelPagination } from '@/admin/components/Tables/TabelPagination/TabelPagination';
import { AdminModal } from '@/admin/components/AdminModal/AdminModal';
import { AdminUserForm } from '@/admin/components/AdminUserForm/AdminUserForm';
import { allUsers } from '@/user/store/thunks/allUsers';
import '../tabel.scss';

export const UsersTabel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminModalState = useSelector(adminModalStateSelector);
  const params = useParams();
  const [isOpenRoleModal, setIsOpenRoleModal] = useState(false);
  const [userId, setUserId] = useState(0);
  const [currentPage, setCurrentPage] = useState(params.page || 1);
  const [currentForm, setCurrentForm] = useState('');
  const [postsPerPage] = useState(20);
  const isLoadUsers = useSelector(adminIsLoadingSelector);
  const allTabelUsers = useSelector(adminAllUserSelector);
  const indexOfLastPost = +currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allTabelUsers.slice(indexOfFirstPost, indexOfLastPost);
  const pagesCount = Math.ceil(allTabelUsers.length / postsPerPage);

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  const handleChange = ({ page }: { page: number }) => {
    navigate(`/admin/users/${page}`);
    setCurrentPage(page);
  };

  const handleModalClose = () => {
    dispatch(changeAdminModalState(false));
  };

  const handleRoleClose = () => {
    setIsOpenRoleModal(false);
  };

  if (isLoadUsers) {
    return <CustomSpinner />;
  }

  return (
    <Box align="center" className="table-wrapper">
      <AdminModal isOpen={adminModalState} handleClose={handleModalClose}>
        <AdminUserForm currentForm={currentForm} userId={userId} />
      </AdminModal>

      <AdminModal isOpen={isOpenRoleModal} handleClose={handleRoleClose}>
        <AddRoleForm handleClose={handleRoleClose} />
      </AdminModal>
      <Heading level={2}>All Users</Heading>

      <button
        className="btn btn-form btn-form__admin"
        type="button"
        onClick={() => {
          dispatch(changeAdminModalState(true));
          setCurrentForm('add');
        }}
      >
        Add new User
      </button>

      <button
        className="btn btn-form btn-form__admin"
        type="button"
        onClick={() => {
          setIsOpenRoleModal(true);
        }}
      >
        Add role
      </button>

      <Box overflow="auto">
        <DataTable
          sortable
          data={currentPosts}
          columns={getTableColumns(allTabelUsers[0])}
          resizeable
          pin
          onClickRow={({ datum }: any) => {
            setUserId(datum.id);
            dispatch(changeAdminModalState(true));
            setCurrentForm('edit');
          }}
        />
      </Box>
      <TabelPagination
        items={allTabelUsers}
        currentPage={+currentPage}
        handleChange={handleChange}
        pagesCount={pagesCount}
      />
    </Box>
  );
};
