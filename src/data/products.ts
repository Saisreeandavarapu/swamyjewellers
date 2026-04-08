export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Necklace' | 'Ring' | 'Earring' | 'Bracelet';
  material: 'Gold' | 'Silver' | 'Diamond';
  image: string;
  isBestSeller?: boolean;
  description: string;
  wishlist?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Eternal Gold Necklace',
    price: 125000,
    category: 'Necklace',
    material: 'Gold',
    image: '/src/assets/products/image.png',
    isBestSeller: true,
    description: 'A handcrafted 22k gold necklace featuring intricate traditional designs.'
  },
  {
    id: '2',
    name: 'Royal Diamond Solitaire',
    price: 450000,
    category: 'Ring',
    material: 'Diamond',
    image: '/src/assets/products/image copy.png',
    isBestSeller: true,
    description: 'A stunning solitaire diamond ring set in 18k white gold.'
  },
  {
    id: '3',
    name: 'Classic Silver Bangles',
    price: 15600,
    category: 'Bracelet',
    material: 'Silver',
    image: '/src/assets/products/image copy 2.png',
    isBestSeller: false,
    description: 'Elegant sterling silver bangles with a polished finish.'
  },
  {
    id: '4',
    name: 'Floral Diamond Studs',
    price: 85000,
    category: 'Earring',
    material: 'Diamond',
    image: '/src/assets/products/image copy 3.png',
    isBestSeller: true,
    description: 'Exquisite diamond-encrusted floral stud earrings.'
  },
  {
    id: '5',
    name: 'Antique Gold Ring',
    price: 45000,
    category: 'Ring',
    material: 'Gold',
    image: '/src/assets/products/image copy 4.png',
    isBestSeller: false,
    description: 'Vintage-inspired gold ring with intricate filigree work.'
  },
  {
    id: '6',
    name: 'Bridal Choker Set',
    price: 890000,
    category: 'Necklace',
    material: 'Gold',
    image: '/src/assets/products/image copy 5.png',
    isBestSeller: true,
    description: 'The ultimate bridal choker set featuring uncut diamonds and gold.'
  },
  {
    id: '7',
    name: 'Sapphire Silver Pendant',
    price: 28000,
    category: 'Necklace',
    material: 'Silver',
    image: '/src/assets/products/image copy 6.png',
    isBestSeller: false,
    description: 'Deep blue sapphire pendant on a sterling silver chain.'
  },
  {
    id: '8',
    name: 'Gold Hoop Earrings',
    price: 32000,
    category: 'Earring',
    material: 'Gold',
    image: '/src/assets/products/image copy 7.png',
    isBestSeller: false,
    description: 'Classic 18k gold hoop earrings for everyday elegance.'
  }
];

export const categories = ['Necklaces', 'Rings', 'Earrings', 'Bracelets'];
export const materials = ['Gold', 'Silver', 'Diamond'];
