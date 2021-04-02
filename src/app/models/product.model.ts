export class Product  {
    id?: number;
    productName?: string;
    description?: string;
    price?: string;
    category?: string;
    imageUrl?: string;
    software?: string;
    reviews: Reviews[] = [];
}

export class Reviews  {
    value?: number;
    content?: string;
  
}