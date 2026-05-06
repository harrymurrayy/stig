export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-label">
          <span className="rule" style={{ background: "var(--accent)" }} />
          Our mission
        </div>
        <div className="about-body">
          <p className="about-lede">
            At The STIG Initiative, our mission is to ensure no one faces mental
            health struggles alone.
          </p>
          <p>
            Through lived experience, we provide peer-led support, educational
            awareness, and practical resources to help people navigate grief,
            crisis and recovery. We want to break the stigma around mental
            health in a positive and inclusive way.
          </p>
          <p className="about-foot">
            The Stig Initiative is the public-facing work of{" "}
            <strong>The Jack Murray Foundation</strong>, the registered charity
            founded in memory of Jack — known to friends as Stig.
          </p>
        </div>
      </div>
    </section>
  );
}
