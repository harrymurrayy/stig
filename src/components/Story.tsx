export default function Story() {
  return (
    <section id="story" className="pt-27.5 pb-14 max-md:pt-20 max-md:pb-8 bg-paper-2">
      <div className="container">
        <div className="max-w-180 mx-auto text-center mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-4.5">
            <span className="w-7 h-0.5 rounded-full bg-accent" />
            Watch
          </div>
          <h2 className="font-bold text-[clamp(30px,3.6vw,48px)] leading-[1.08] tracking-[-0.02em] mb-4.5 text-balance text-ink">
            Who we are.
          </h2>
          <p className="text-lg leading-[1.55] text-muted text-pretty">
            A short introduction to The Stig Initiative — who we are, and what we do.
          </p>
        </div>

        <div className="relative aspect-video max-w-[860px] mx-auto rounded-[22px] overflow-hidden bg-ink shadow-[0_18px_40px_-28px_rgba(28,43,58,0.25)]">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1725003965493262%2F&show_text=false&width=560&t=0"
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            title="The Stig Initiative — who we are"
          />
        </div>
        <p className="text-center text-[13.5px] text-muted mt-4">
          Watch the full video on our{" "}
          <a
            href="https://www.facebook.com/people/The-Stig-Initiative/61588765630227/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:underline"
          >
            Facebook page
          </a>
          .
        </p>
        <div className="mt-10 border-t border-line" />
      </div>
    </section>
  );
}
