import { faker } from '@faker-js/faker';

export const errorMessages = {
  invalidCredentials: 'Invalid credentials. Please try again.',
  emptyCredentials: 'Username and password are required.',
};

export const userCredentials = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(), 
};

const searchableProducts = [
  { name: 'Wireless Headphones', price: 99.99, category: 'Electronics' },
  { name: 'Coffee Mug', price: 12.99, category: 'Home' },
  { name: 'Running Shoes', price: 89.99, category: 'Sports' },
  { name: 'Mechanical Keyboard', price: 129.99, category: 'Electronics' },
  { name: 'Yoga Mat', price: 29.99, category: 'Sports' },
];
export const randomProduct = faker.helpers.arrayElement(searchableProducts);

export const expectedProductsByCategory: Record<string, string[]> = {
  Gaming: ['PlayStation 5', 'Xbox Series X'],
  Laptops: ['MacBook Pro', 'Dell XPS 15'],
  Smartphones: ['iPhone 15', 'Samsung Galaxy S24'],
};

export const allProductCategories = Object.entries(expectedProductsByCategory).flatMap(
  ([category, products]) => products.map(() => category),
);

const countries = ['us', 'uk', 'pl', 'de'] as const;
export const randomCountry = faker.helpers.arrayElement(countries);

