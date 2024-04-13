import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-lg font-bold">Home</h1>
      <div>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
}