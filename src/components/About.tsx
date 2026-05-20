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
