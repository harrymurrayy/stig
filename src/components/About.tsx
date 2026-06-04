import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-27.5 max-md:py-20 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:gap-16 items-start">
          <div className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-muted pt-[18px] max-md:pt-0">
            <span className="w-7 h-0.5 rounded-full bg-accent" />
            Our mission
          </div>
          <div className="max-w-180">
            <p className="font-semibold text-[22px] leading-[1.3] tracking-[-0.015em] mb-5.5 text-ink/80">
              At The STIG Initiative, our mission is to ensure no one faces mental health struggles alone.
            </p>
            <p className="text-[18px] leading-[1.6] text-ink/80 mb-[18px] text-pretty">
              Through lived experience, we provide peer-led support, educational awareness, and practical resources to help people navigate grief, crisis and recovery. We want to break the stigma around mental health in a positive and inclusive way.
            </p>

            {/* Jack's story */}
            <div className="mt-8 pt-7 border-t border-line grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-8 items-start">
              <div>
                <p className="text-[17px] leading-[1.65] text-ink/80 text-pretty mb-4">
                  Jack was 20 years old when we lost him to suicide. Jack brought laughter, energy and light into our lives. Losing him is a space that cannot be filled. His death devastated his family and friends, and our aim in creating the Stig Initiative is to remember and honour not only Jack but all those who have lost their lives to suicide — and for all those struggling in silence.
                </p>
                <p className="text-[17px] leading-[1.65] text-ink/80 text-pretty">
                  Together we can turn pain into purpose, raise awareness, remind people they are not alone and break the stigma of mental health. Showing up matters. Checking in matters. Talking matters.
                </p>
              </div>
              <div className="relative w-full sm:w-[180px] aspect-[3/4] rounded-[18px] overflow-hidden flex-none shadow-[0_8px_32px_-12px_rgba(42,37,33,0.28)]">
                <Image
                  src="/new/89631afd-f2f8-429e-85a3-f1dc7475347c.jpeg"
                  alt="Jack Murray"
                  fill
                  className="object-cover object-top"
                  sizes="180px"
                />
              </div>
            </div>

            <p className="text-[16px] leading-[1.6] text-muted mt-6.5 pt-5.5 border-t border-line text-pretty">
              The Stig Initiative is the public-facing work of{" "}
              <strong className="text-ink font-semibold">The Jack Murray Trust</strong>, the registered charity founded in memory of Jack — known to friends as Stig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
