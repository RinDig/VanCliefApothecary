// Shared VC Writings nav + footer + small components
// Used by every site page.

const { useState, useEffect } = React;

// Map of page identifiers to filenames
const VC_PAGES = [
  { id: 'home',     label: 'Home',          href: 'index.html' },
  { id: 'prescribe', label: 'Prescribe',    href: 'prescribe.html' },
  { id: 'shelf',    label: 'The Shelf',     href: 'shelf.html' },
  { id: 'about',    label: 'Stephanie',     href: 'about.html' },
  { id: 'brand',    label: 'Brand Book',    href: 'brand.html' },
  { id: 'visit',    label: 'Visit',         href: 'visit.html' },
];

function VCNav({ current }) {
  const [open, setOpen] = useState(false);

  // Close on Escape, prevent scroll when open
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Primary nav set (subset of VC_PAGES)
  const primary = VC_PAGES.filter(p => ['home','prescribe','shelf','about','visit'].includes(p.id));

  return (
    <React.Fragment>
      <header className="vc-nav">
        <div className="vc-nav-inner">
          <a className="vc-nav-brand" href="index.html">
            <VCMonogram size={36} color="var(--vc-iron)" />
            <div style={{ lineHeight: 1.05 }}>
              <div className="vc-nav-brand-name">VC&nbsp;WRITINGS</div>
              <div className="vc-nav-brand-sub">Stephanie Van Clief</div>
            </div>
          </a>

          <nav className="vc-nav-links" aria-label="Primary">
            {primary.map(p => (
              <a key={p.id} href={p.href} className={current === p.id ? 'is-active' : ''}>
                {p.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a className="vc-btn vc-nav-cta" href="prescribe.html">
              Fill a Prescription
            </a>
            <button
              className="vc-burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="0" y1="2" x2="22" y2="2" />
                <line x1="0" y1="8" x2="22" y2="8" />
                <line x1="0" y1="14" x2="22" y2="14" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`vc-mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="vc-mobile-menu-head">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <VCMonogram size={32} color="var(--vc-brass-pale)" />
            <div>
              <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 13, letterSpacing: '0.22em', color: 'var(--vc-brass-pale)' }}>
                VC WRITINGS
              </div>
              <div style={{ fontFamily: 'var(--vc-script)', fontSize: 18, color: 'rgba(241,233,216,0.75)', lineHeight: 1 }}>
                Stephanie Van Clief
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: 'var(--vc-mission)', padding: 8,
              fontFamily: 'var(--vc-display)', fontSize: 28, lineHeight: 1,
            }}
          >×</button>
        </div>
        <div className="vc-mobile-menu-links">
          {VC_PAGES.map(p => (
            <a key={p.id} href={p.href} className={current === p.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {p.label}
            </a>
          ))}
        </div>
        <div className="vc-mobile-menu-foot">
          № 42 Aviles Street &nbsp;·&nbsp; St. Augustine, FL<br/>
          Tues–Sun, 11–6
        </div>
      </div>
    </React.Fragment>
  );
}

function VCFooter() {
  return (
    <footer className="vc-footer">
      <div className="vc-container">
        <div className="vc-footer-top">
          <div className="vc-footer-brand">
            <VCDragonfly size={48} color="var(--vc-brass-pale)" cipher={false} />
            <div>
              <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 18, letterSpacing: '0.2em', color: 'var(--vc-brass-pale)' }}>
                VC&nbsp;WRITINGS
              </div>
              <div style={{ fontFamily: 'var(--vc-script)', fontSize: 22, color: 'rgba(241,233,216,0.78)', lineHeight: 1, marginTop: 2 }}>
                by Stephanie Van Clief
              </div>
              <div style={{ fontFamily: 'var(--vc-display)', fontStyle: 'italic', fontSize: 13, color: 'rgba(241,233,216,0.55)', marginTop: 6 }}>
                an apothecary of verse · since MMXXIV
              </div>
            </div>
          </div>

          <div className="vc-footer-links">
            <a href="prescribe.html">Fill a Prescription</a>
            <a href="shelf.html">This Week's Shelf</a>
            <a href="about.html">About Stephanie</a>
            <a href="visit.html">Visit</a>
            <a href="brand.html">Brand Book</a>
          </div>
        </div>
        <div className="vc-footer-bot">
          <span>© MMXXVI · VC Writings · all poems remain the property of their authors</span>
          <span>made by hand on Aviles Street</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { VCNav, VCFooter, VC_PAGES });
