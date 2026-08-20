import Image from "next/image";
import Icon from "@/components/Icon";
import type { ShopItem } from "@/data/shop";

const GBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

const IMAGE_SIZES = "(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw";

/** "XS" … "3XL" -> "XS–3XL". Variants arrive from Shopify already in wearing order. */
function sizeRange(sizes: string[]) {
  if (sizes.length === 0) return null;
  if (sizes.length === 1) return sizes[0];
  return `${sizes[0]}–${sizes[sizes.length - 1]}`;
}

export default function ProductCard({ item }: { item: ShopItem }) {
  const range = sizeRange(item.sizes);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl bg-paper-2 border border-line transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(17,24,39,0.08)]"
    >
      <div className="relative aspect-square bg-white">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes={IMAGE_SIZES}
          className={`object-contain transition-opacity duration-300 ${item.imageBack ? "group-hover:opacity-0" : ""}`}
        />
        {item.imageBack && (
          <Image
            src={item.imageBack}
            alt=""
            aria-hidden
            fill
            sizes={IMAGE_SIZES}
            className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        {item.limitedEdition && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-ink/85 text-white text-[11px] font-semibold tracking-[0.06em] uppercase">
            Limited edition
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 max-sm:p-4">
        <h3 className="font-semibold text-[17px] tracking-[-0.01em] text-ink">{item.name}</h3>
        <p className="mt-1 text-[13px] font-medium tracking-[0.04em] uppercase text-muted">
          {item.logos} {item.logos === 1 ? "logo" : "logos"}
          {range && ` · ${range}`}
        </p>
        <div className="flex items-center justify-between gap-3 mt-auto pt-5">
          <span className="font-bold text-[19px] text-ink">{GBP.format(item.price)}</span>
          <span className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-accent">
            Buy on Donaghys
            <Icon name="arrow" size={16} />
          </span>
        </div>
      </div>
    </a>
  );
}
