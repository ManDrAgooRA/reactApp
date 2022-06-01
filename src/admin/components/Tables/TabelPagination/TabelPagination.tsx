import React from 'react';
import { Box, Pagination } from 'grommet';
import { TGoodsUser } from '@/admin/interfaces';

export const TabelPagination = ({
  items,
  currentPage,
  handleChange,
  pagesCount,
}: {
  items: TGoodsUser[];
  currentPage: number;
  handleChange(e: any): void;
  pagesCount?: number;
}) => {
  const pages = pagesCount || Math.ceil((+items.length - 1) / 20);
  return (
    <Box className="pagination-wrapper">
      <Pagination
        numberMiddlePages={2}
        numberItems={pages || 1}
        page={currentPage}
        size="medium"
        step={1}
        onChange={handleChange}
      />
    </Box>
  );
};
