export type Categories = {
  id: string;
  name: string;
  image: string;
};

export type foodType = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  foodType: string;
  isSpecial: boolean;
  foodCategory: {
    name: string;
    image: string;
  };
};

export type ResponseError = {
  message: string;
};
