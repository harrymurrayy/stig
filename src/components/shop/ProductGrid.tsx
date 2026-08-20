import ProductCard from "./ProductCard";
import type { ShopItem } from "@/data/shop";

export default function ProductGrid({ title, items }: { title: string; items: ShopItem[] }) {
  return (
    <section className="mb-16 last:mb-0">
      <h2 className="font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.15] tracking-[-0.02em] mb-6 text-ink">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-sm:gap-4">
        {items.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
