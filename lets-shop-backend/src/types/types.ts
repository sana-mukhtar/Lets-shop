import { NextFunction, Request, Response } from "express";
export interface newUserRequestBody {
  name: string;
  email: string;
  photo: string;
  gender: string;
  dob: Date;
  _id: string;
  role: string;
}

export interface newProductRequestBody {
  name: string;
  category: string;
  price: number;
  stock: number;
}

export type ControllerType = (
  req: Request<{}, {}, newUserRequestBody>,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

export type productControllerType = (
  req: Request<{}, {}, newProductRequestBody>,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

export type searchRequestQuery = {
  search?: string;
  price?: string;
  category?: string;
  sort?: string;
  page?: string;
};

export interface baseQuery {
  name?: {
    $regex: string;
    $options: string;
  };
  price?: {
    $lte: number;
  };
  category?: string;
}

export type invalidateCacheProps = {
  product?: boolean;
  order?: boolean;
  admin?: boolean;
  userId?:string;
  orderId?:string;
  productId?:string | string[];
};

export type orderItemType = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  productId: string;
};

export type shippingInfoType = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
};

export interface newOrderRequestBody {
  shippingInfo: shippingInfoType;
  user: string;
  subtotal: number;
  tax: number;
  discount: number;
  shippingCharges: number;
  total: number;
  orderItems: orderItemType[];
  id:string;
}


export type orderControllerType = (
  req: Request<{}, {}, newOrderRequestBody>,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;