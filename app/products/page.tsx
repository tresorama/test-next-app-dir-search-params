import { Product, ProductTag, products } from "./data";
import { Filters } from "./filters";

type PageProps = {
  params: {};
  searchParams: {
    tag?: ProductTag;
  };
};

export default function Page(props: PageProps) {
  const { tag } = props.searchParams;
  const filteredProducts = !tag ? products : products.filter((product) => product.tags.includes(tag));

  return (
    <div className="flex flex-col gap-12">
      <DebugJson json={{ props }} />
      <Filters />
      <ProductList products={filteredProducts} />
    </div>
  );
}

const ProductList = ({ products }: { products: Product[]; }) => (
  <section className="flex flex-col gap-4">
    {products.map((product) => (
      <div key={product.id} className="p-4 border">
        <h2>{product.title}</h2>
        <ul>
          {product.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

const DebugJson = ({ json }: { json: unknown; }) => (
  <pre
    style={{
      whiteSpace: 'pre',
      maxWidth: '100%',
      overflow: 'auto'
    }}
  >
    {JSON.stringify(json, null, 4)}
  </pre>
);