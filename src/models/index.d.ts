import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerOrderItem = {
  readonly id?: string | null;
  readonly orderId?: string | null;
  readonly productId?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
}

type LazyOrderItem = {
  readonly id?: string | null;
  readonly orderId?: string | null;
  readonly productId?: string | null;
  readonly quantity?: number | null;
  readonly price?: number | null;
}

export declare type OrderItem = LazyLoading extends LazyLoadingDisabled ? EagerOrderItem : LazyOrderItem

export declare const OrderItem: (new (init: ModelInit<OrderItem>) => OrderItem)

type EagerReview = {
  readonly id?: string | null;
  readonly comment?: string | null;
  readonly updatedAt?: number | null;
  readonly createdAt?: number | null;
  readonly rating?: number | null;
}

type LazyReview = {
  readonly id?: string | null;
  readonly comment?: string | null;
  readonly updatedAt?: number | null;
  readonly createdAt?: number | null;
  readonly rating?: number | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review)

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerId?: string | null;
  readonly dateAndTime?: string | null;
  readonly totalAmount?: number | null;
  readonly status?: string | null;
  readonly shippingAddress?: string | null;
  readonly paymentMethod?: string | null;
  readonly discount?: number | null;
  readonly orderItems?: OrderItem | null;
  readonly customerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerId?: string | null;
  readonly dateAndTime?: string | null;
  readonly totalAmount?: number | null;
  readonly status?: string | null;
  readonly shippingAddress?: string | null;
  readonly paymentMethod?: string | null;
  readonly discount?: number | null;
  readonly orderItems?: OrderItem | null;
  readonly customerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly category?: string | null;
  readonly brand?: string | null;
  readonly stock?: number | null;
  readonly images?: string[] | null;
  readonly rating?: number | null;
  readonly reviews?: (Review | null)[] | null;
  readonly createdAt?: number | null;
  readonly updatedAt?: number | null;
  readonly categoryID: string;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly category?: string | null;
  readonly brand?: string | null;
  readonly stock?: number | null;
  readonly images?: string[] | null;
  readonly rating?: number | null;
  readonly reviews?: (Review | null)[] | null;
  readonly createdAt?: number | null;
  readonly updatedAt?: number | null;
  readonly categoryID: string;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly address: string;
  readonly dateOfBirth?: string | null;
  readonly createdAt?: number | null;
  readonly updatedAt?: number | null;
  readonly Orders?: (Order | null)[] | null;
  readonly password?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly address: string;
  readonly dateOfBirth?: string | null;
  readonly createdAt?: number | null;
  readonly updatedAt?: number | null;
  readonly Orders: AsyncCollection<Order>;
  readonly password?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}