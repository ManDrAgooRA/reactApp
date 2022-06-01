const faker = require('faker');

const mathRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = () => {
  const data = {
    goods: [],
    users: [
      {
        id: 1,
        email: 'admin@gmail.com',
        password:
          '$2a$10$Lbc4pqIRW0LCGksEHhkNjeDar.RAPQEz.n4XDem4DpkOxcRlunP/K',
        confirmPass: '1234567890',
        phone: '(122) 121-2121',
        dateOfBirthDay: '1/3/2019',
        userName: 'Ivan',
        role: 'admin',
      },
    ],
  };
  for (let i = 0; i < 500; i++) {
    data.goods.push({
      id: i,
      title: faker.commerce.productName(),
      productImage: faker.random.image(),
      categories: `${faker.random.word()}`,
      price: +faker.commerce.price(),
      raiting: +mathRandom(0, 100),
      countries: `${faker.address.country()}`,
      isFavorite: false,
      description: faker.commerce.productDescription(),
      isSale: false,
    });
  }
  return data;
};
