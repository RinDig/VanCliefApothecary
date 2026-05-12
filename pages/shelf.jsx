// VC Writings — The Shelf
// What's been prescribed this week, with the wooden shelf on display.

function ShelfPage() {
  const bottles = [
    { ribbon: '#8E3A2F', tag: 'for Mama',      occ: 'a quiet Sunday',        no: '0042', poet: 'Emily Dickinson', for: 'Anna · Vermont' },
    { ribbon: '#9B8FA8', tag: 'for Helen',     occ: 'grief, gently',         no: '0043', poet: 'Mary Oliver',     for: 'Daniel · Maine' },
    { ribbon: '#3C4D38', tag: 'for Daniel',    occ: 'courage on Tuesday',    no: '0044', poet: 'Mary Oliver',     for: 'self · Asheville' },
    { ribbon: '#5F8278', tag: 'for the bride', occ: 'a wedding morning',     no: '0045', poet: 'Walt Whitman',    for: 'her mother · Savannah' },
    { ribbon: '#B0905A', tag: 'for Aunt Liv',  occ: 'an apology, long owed', no: '0046', poet: 'W. C. Williams',  for: 'James · Brooklyn' },
  ];
  return (
    <main>
      <section className="vc-pad" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <div className="vc-container" style={{ padding: 0 }}>
          <div className="vc-eyebrow" style={{ marginBottom: 14 }}>This week's shelf</div>
          <h1 className="vc-display-xl" style={{ color: 'var(--vc-iron)', marginBottom: 18, maxWidth: 940 }}>
            Five bottles,<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-shutter)' }}>prescribed Tuesday through Saturday.</span>
          </h1>
          <p className="vc-body-lg" style={{
            fontStyle: 'italic', color: 'var(--vc-iron-soft)', maxWidth: 660,
          }}>
            We don't sell off the shelf — each bottle is filled to a request.
            But you can see what we've made this week, and what poems are
            walking out the door.
          </p>
        </div>
      </section>

      {/* The wooden shelf */}
      <section className="vc-pad" style={{
        background: 'var(--vc-parchment)',
        borderTop: '1px solid rgba(28,24,20,0.1)',
        borderBottom: '1px solid rgba(28,24,20,0.1)',
        paddingTop: 50, paddingBottom: 60,
        position: 'relative',
      }}>
        <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
        <div className="vc-container" style={{ padding: 0, position: 'relative' }}>
          <ShelfDisplay bottles={bottles} />
        </div>
      </section>

      {/* Bottle details */}
      <section className="vc-section vc-pad">
        <div className="vc-container" style={{ padding: 0 }}>
          <div className="vc-eyebrow" style={{ marginBottom: 14 }}>The ledger</div>
          <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', marginBottom: 40 }}>
            What sat on the shelf<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-marsh)' }}>this week, in order.</span>
          </h2>
          <div style={{ borderTop: '2px solid var(--vc-iron)' }}>
            {bottles.map(b => (
              <div key={b.no} style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 12,
                padding: '22px 0',
                borderBottom: '1px solid rgba(28,24,20,0.15)',
                alignItems: 'baseline',
              }}>
                <style>{`
                  @media (min-width: 720px) {
                    .shelf-row { grid-template-columns: 90px 1.4fr 1fr 1fr 140px !important; gap: 28px !important; }
                  }
                `}</style>
                <div className="shelf-row" style={{
                  display: 'grid', gridTemplateColumns: '1fr', gap: 12, width: '100%',
                  alignItems: 'baseline',
                }}>
                  <div style={{
                    fontFamily: 'var(--vc-mono)', fontSize: 13, letterSpacing: '0.14em',
                    color: 'var(--vc-brass-deep)',
                  }}>№ {b.no}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--vc-script)', fontSize: 30, color: 'var(--vc-shutter)', lineHeight: 1 }}>
                      {b.tag}
                    </div>
                    <div style={{ fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 14, color: 'var(--vc-iron-soft)', marginTop: 4 }}>
                      {b.occ}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                    fontSize: 17, color: 'var(--vc-iron)',
                  }}>{b.poet}</div>
                  <div style={{
                    fontFamily: 'var(--vc-body)', fontSize: 14, color: 'var(--vc-iron-soft)',
                  }}>
                    <span className="vc-eyebrow" style={{ fontSize: 10, marginRight: 6 }}>FROM</span>
                    {b.for}
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block', width: 36, height: 6,
                      background: b.ribbon, marginRight: 8, verticalAlign: 'middle',
                    }} />
                    <span style={{ fontFamily: 'var(--vc-body)', fontSize: 12, color: 'var(--vc-iron-soft)', fontStyle: 'italic' }}>
                      seal &amp; tag
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--vc-iron)', color: 'var(--vc-mission)', padding: 'clamp(60px, 8vw, 90px) 0' }}>
        <div className="vc-container" style={{ textAlign: 'center' }}>
          <div className="vc-eyebrow" style={{ color: 'var(--vc-brass-pale)', marginBottom: 14 }}>Want one of your own?</div>
          <h2 className="vc-display-md" style={{ color: 'var(--vc-mission)', marginBottom: 26 }}>
            Tell us a person.<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-lavender)' }}>Tell us a feeling.</span>
          </h2>
          <a className="vc-btn" style={{ borderColor: 'var(--vc-brass-pale)', color: 'var(--vc-brass-pale)' }} href="prescribe.html">
            Fill a Prescription →
          </a>
        </div>
      </section>
    </main>
  );
}

function ShelfDisplay({ bottles }) {
  return (
    <div style={{ position: 'relative', paddingBottom: 28 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 0,
        alignItems: 'flex-end',
        padding: '0 14px',
      }}>
        {bottles.map((b, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
            <ShelfBottle {...b} />
          </div>
        ))}
      </div>
      <div style={{
        height: 16,
        background: 'linear-gradient(180deg, #4a2e1e, #2e1c11 60%, #1a0e08)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
      }} />
      <div style={{ height: 3, background: '#1a0e08' }} />
    </div>
  );
}

function ShelfBottle({ ribbon, tag, occ, no }) {
  return (
    <svg viewBox="0 0 100 280" width="100%" style={{ display: 'block', maxWidth: 160 }}>
      <g transform="translate(50, 10)" opacity="0.95">
        <line x1="0" y1="0" x2="0" y2="38" stroke={ribbon} strokeWidth="1" />
        {[0, 7, 14, 21, 28].map((y, i) => (
          <g key={i}>
            <ellipse cx={-3} cy={y} rx="1.5" ry="3.5" fill="#9B8FA8" opacity={0.9 - i*0.05} />
            <ellipse cx={3} cy={y} rx="1.5" ry="3.5" fill="#6E6280" opacity={0.9 - i*0.05} />
          </g>
        ))}
      </g>
      <ellipse cx="50" cy="48" rx="14" ry="2" fill="none" stroke="#B0905A" strokeWidth="0.8" />
      <ellipse cx="50" cy="50" rx="13" ry="1.8" fill="none" stroke={ribbon} strokeWidth="0.6" opacity="0.7" />
      <rect x="38" y="40" width="24" height="14" rx="1" fill="#9C7448" />
      <rect x="38" y="40" width="24" height="3" fill="#7a5832" />
      <path d="M 40 54 L 40 76 L 22 92 L 22 252 Q 22 270, 50 270 Q 78 270, 78 252 L 78 92 L 60 76 L 60 54 Z"
        fill="url(#sbottle)" stroke="#3a2818" strokeWidth="1" />
      <path d="M 28 110 Q 26 200, 30 250" stroke="rgba(255,220,180,0.3)" strokeWidth="3" fill="none" />
      <path d="M 70 110 Q 72 200, 68 250" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" />
      <rect x="28" y="160" width="44" height="68" fill="#EBDDC2" opacity="0.96" stroke="#8C6F3F" strokeWidth="0.4" />
      <text x="50" y="174" fontFamily="'IM Fell DW Pica SC', serif" fontSize="5" letterSpacing="0.8"
        textAnchor="middle" fill="#3a2818">VC WRITINGS</text>
      <line x1="36" y1="178" x2="64" y2="178" stroke="#8C6F3F" strokeWidth="0.3" />
      <text x="50" y="194" fontFamily="'Pinyon Script', cursive" fontSize="11"
        textAnchor="middle" fill={ribbon}>{tag}</text>
      <text x="50" y="208" fontFamily="'EB Garamond', serif" fontSize="5" fontStyle="italic"
        textAnchor="middle" fill="#3a2818">{occ}</text>
      <line x1="36" y1="214" x2="64" y2="214" stroke="#8C6F3F" strokeWidth="0.3" />
      <text x="50" y="222" fontFamily="'IM Fell DW Pica SC', serif" fontSize="3.5" letterSpacing="0.4"
        textAnchor="middle" fill="#8C6F3F">№ {no} / 100</text>
      <line x1="50" y1="56" x2="50" y2="118" stroke="#5a3a26" strokeWidth="0.5" />
      <g transform="translate(50, 130)">
        <circle r="14" fill="#8E3A2F" />
        <circle r="14" fill="url(#swax)" />
        <circle r="11" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="0.4" />
        <text x="0" y="2" fontFamily="'IM Fell English', serif" fontSize="7" fontStyle="italic"
          textAnchor="middle" fill="rgba(255,220,200,0.85)">SVC</text>
      </g>
      <defs>
        <linearGradient id="sbottle" x1="0" x2="1">
          <stop offset="0%" stopColor="#5a3a26" />
          <stop offset="30%" stopColor="#7a5230" />
          <stop offset="60%" stopColor="#5a3a26" />
          <stop offset="100%" stopColor="#3a2018" />
        </linearGradient>
        <radialGradient id="swax" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="rgba(255,200,180,0.6)" />
          <stop offset="40%" stopColor="rgba(255,200,180,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

Object.assign(window, { ShelfPage });
