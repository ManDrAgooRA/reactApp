export const getCountColumns = (size: string): string => {
  let columnsGrid = '';
  if (size === 'large') {
    columnsGrid = '1/4';
  } else if (size === 'medium') {
    columnsGrid = '2/4';
  } else {
    columnsGrid = '100%';
  }

  return columnsGrid;
};
