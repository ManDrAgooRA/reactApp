export const PHONE_MASK = [
  { fixed: '(' },
  {
    length: 3,
    regexp: /^[0-9]{1,3}$/,
    placeholder: 'xxx',
  },
  { fixed: ')' },
  { fixed: ' ' },
  {
    length: 3,
    regexp: /^[0-9]{1,3}$/,
    placeholder: 'xxx',
  },
  { fixed: '-' },
  {
    length: 4,
    regexp: /^[0-9]{1,4}$/,
    placeholder: 'xxxx',
  },
];

export const getDateMask = (value: string) => {
  const daysInMonth = (month: number) => {
    return new Date(2021, month, 0).getDate();
  };

  return [
    {
      length: [1, 2],
      options: Array.from({ length: 12 }, (v, k) => k + 1),
      regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
      placeholder: 'mm',
    },
    { fixed: '/' },
    {
      length: [1, 2],
      options: Array.from(
        {
          length: daysInMonth(parseInt(value.split('/')[0], 10)),
        },
        (v, k) => k + 1
      ),
      regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
      placeholder: 'dd',
    },
    { fixed: '/' },
    {
      length: 4,
      options: Array.from({ length: 100 }, (v, k) => 2021 - k),
      regexp:
        /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
      placeholder: 'yyyy',
    },
  ];
};
