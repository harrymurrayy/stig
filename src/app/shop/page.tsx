import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ProductGrid from "@/components/shop/ProductGrid";
import { SHOP_ITEMS, COLLECTION_URL } from "@/data/shop";

const DESCRIPTION =
  "Official Stig Initiative clothing, printed and sold by our partners at Donaghys Direct. 20% from the proceeds of all sales go directly to The Stig Initiative.";

export const metadata: Metadata = {
  title: "Shop — The Stig Initiative",
  description: DESCRIPTION,
};

const GROUPS = [
  { title: "Adults", audience: "adult" },
  { title: "Kids", audience: "kids" },
] as const;

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-27.5 max-md:py-20 bg-paper-2">
          <div className="container">
            <div className="max-w-180">
              <SectionEyebrow className="mb-4.5">Merch</SectionEyebrow>
              <h1 className="font-bold text-[clamp(34px,4.6vw,56px)] leading-[1.05] tracking-[-0.022em] mb-5.5 text-balance text-ink">
                Wear it. Fund it.
              </h1>
              <p className="text-[18.5px] leading-[1.55] mb-8 text-pretty text-muted">
                {DESCRIPTION} All purchases are handled securely on their site.
              </p>
              <ButtonLink href={COLLECTION_URL} external arrow>
                Shop the full collection on Donaghys Direct
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="py-27.5 max-md:py-20 bg-paper">
          <div className="container">
            {GROUPS.map((group) => (
              <ProductGrid
                key={group.audience}
                title={group.title}
                items={SHOP_ITEMS.filter((item) => item.audience === group.audience)}
              />
            ))}
            <p className="mt-14 text-[14.5px] leading-[1.6] text-muted text-pretty">
              Prices, sizes and availability are set by Donaghys Direct. You&apos;ll leave
              thestiginitiative.com to complete any purchase.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
