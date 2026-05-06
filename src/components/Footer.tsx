import Logo from "./Logo";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo footer />
          <p className="footer-tag">
            Peer-led suicide prevention and grief support, rooted in Banbridge.
          </p>
        </div>
        <div className="footer-col">
          <div className="footer-h">Explore</div>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#involved">Get Involved</a>
          <a href="/#donate">Donate</a>
        </div>
        <div className="footer-col">
          <div className="footer-h">Get in touch</div>
          <a href="/contact?type=support">Support</a>
          <a href="/contact?type=volunteer">Volunteer</a>
          <a href="/contact?type=fundraise">Fundraise</a>
          <a href="/contact?type=partner">Partner</a>
          <a href="mailto:hello@stiginitiative.org">hello@stiginitiative.org</a>
        </div>
        <div className="footer-col">
          <div className="footer-h">Follow</div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <Icon name="ig" size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <Icon name="fb" size={20} />
            </a>
            <a href="#" aria-label="TikTok">
              <Icon name="tt" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-base container">
        <div>© {new Date().getFullYear()} The Jack Murray Foundation Ltd.</div>
        <div>Registered Charity [number TBC]</div>
      </div>
    </footer>
  );
}
