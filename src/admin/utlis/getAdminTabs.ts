export const getAdminTabs = (params: object): number => {
  const param = Object.values(params).join().split('/')[0];

  if (param === 'users') {
    return 0;
  }
  if (param === 'goods') {
    return 1;
  }
  return 0;
};
