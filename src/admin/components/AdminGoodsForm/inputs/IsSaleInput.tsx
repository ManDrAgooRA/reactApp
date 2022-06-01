import React, { FC } from 'react';
import { Box } from 'grommet';
import { IAdminRadio } from '@/admin/interfaces';

export const IsSaleInput: FC<IAdminRadio> = ({
  register,
  errorMessage,
  setIsSaleValue,
  isSaleValue,
}) => {
  const hanleChange = (value: string) => {
    if (value === 'true') {
      setIsSaleValue(true);
    } else {
      setIsSaleValue(false);
    }
  };

  return (
    <Box className="radio-wrapper">
      <label className="radio-title">IsSale:</label>
      <label className="radio">
        <input
          type="radio"
          value="true"
          name="isSale"
          checked={isSaleValue === true}
          {...register('isSale')}
          className="radio-button"
          onChange={(e: any) => hanleChange(e.target.value)}
        />
        <span className="radio__round" />
        True
      </label>

      <label className="radio">
        <input
          type="radio"
          value="false"
          name="isSale"
          checked={isSaleValue === false}
          {...register('isSale')}
          onChange={(e: any) => hanleChange(e.target.value)}
          className="radio-button"
        />
        <span className="radio__round" />
        False
      </label>
      <span className="radio-error">{errorMessage}</span>
    </Box>
  );
};
