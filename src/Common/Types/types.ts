export type titleDatasType = {
  title: string;
  tags: string[];
  locker: number;
  comments: number;
  date: string;
};

export type product = {
  productId: number;
  productName: string;
  outside: boolean;
  pointX: number;
  pointY: number;
  priceOriginal: number;
  priceDiscount: number;
  discountRate: number;
  imageUrl: string;
};

export type data = {
  imageUrl: string;
  productList: product[];
};
