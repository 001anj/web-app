import { faker } from '@faker-js/faker';

export const errorMessages = {
  invalidCredentials: 'Invalid credentials. Please try again.',
  emptyCredentials: 'Username and password are required.',
};

export const userCredentials = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
};

export const pageHeaders = {
  loginPageHeader: 'Exercise 1: Automate a Login Form',
  filterPageHeader: 'Exercise 6: Filter Products by Category',
  sortPageHeader: 'Exercise 7: Sort Products by Price'
};

export const invalidLoginCredentials = {
  username: 'invalidUser',
  password: 'invalidPass',
};

export const onlyUsernameCredentials = {
  username: 'admin',
  password: '',
};

export const onlyPasswordCredentials = {
  username: '',
  password: 'admin123',
};

export const registrationMessages = {
  success: 'Registration Successful',
  thankYouMessage: 'Thank you for registering,',
};

export const dynamicButtonClickedMessage = 'Dynamic button clicked!';

const searchableProducts = [
  { name: 'Wireless Headphones', price: 99.99, category: 'Electronics' },
  { name: 'Coffee Mug', price: 12.99, category: 'Home' },
  { name: 'Running Shoes', price: 89.99, category: 'Sports' },
  { name: 'Mechanical Keyboard', price: 129.99, category: 'Electronics' },
  { name: 'Yoga Mat', price: 29.99, category: 'Sports' },
];
export const randomProduct = faker.helpers.arrayElement(searchableProducts);

export const expectedProducts = [
  { name: 'PlayStation 5', category: 'Gaming', price: 499 },
  { name: 'Xbox Series X', category: 'Gaming', price: 499 },
  { name: 'MacBook Pro', category: 'Laptops', price: 1999 },
  { name: 'Dell XPS 15', category: 'Laptops', price: 1499 },
  { name: 'iPhone 15', category: 'Smartphones', price: 999 },
  { name: 'Samsung Galaxy S24', category: 'Smartphones', price: 899 },
];

export const allProductCategories = expectedProducts.map((product) => product.category);

const countries = ['us', 'uk', 'pl', 'de'] as const;
export const randomCountry = faker.helpers.arrayElement(countries);

