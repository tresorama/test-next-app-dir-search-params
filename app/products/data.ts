// static array of products slug
export const tags = ["shoes", "top", "coat"] as const;
export type ProductTag = typeof tags[number];

// static array of products (title, id, tags)
export type Product = {
  title: string;
  id: number;
  tags: ProductTag[];
};
export const products: Product[] = [
  { title: "Shoe Blue", id: 1, tags: ["shoes"] },
  { title: "Top Pink", id: 2, tags: ["top"] },
  { title: "Trench Grey", id: 3, tags: ["coat"] },
];
