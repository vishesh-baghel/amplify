// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Order, Product, Customer, OrderItem, Review } = initSchema(schema);

export {
  Category,
  Order,
  Product,
  Customer,
  OrderItem,
  Review
};