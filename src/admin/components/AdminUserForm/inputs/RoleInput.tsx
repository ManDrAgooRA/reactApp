import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box, Select } from 'grommet';
import { adminAllRolesSelector } from '@/user/store/selectors';
import { IRoleInput } from '@/admin/interfaces';

export const RoleInput: FC<IRoleInput> = ({
  register,
  errorMessage,
  role,
  setRole,
}) => {
  const allRolles = useSelector(adminAllRolesSelector);
  return (
    <Box align="center" justify="start" pad="small">
      <Select
        id="select"
        name="select"
        placeholder="Select"
        options={allRolles}
        value={`${role}`}
        error={errorMessage}
        {...register('role')}
        onChange={({ option }: { option: string }) => setRole(option)}
      />
    </Box>
  );
};
