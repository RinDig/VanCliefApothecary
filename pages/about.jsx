// VC Writings — About Stephanie page

function AboutPage() {
  return (
    <main>
      {/* Hero strip */}
      <section className="vc-pad" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <div className="vc-container" style={{ padding: 0 }}>
          <div className="vc-eyebrow" style={{ marginBottom: 14 }}>The proprietress</div>
          <h1 className="vc-display-xl" style={{ color: 'var(--vc-iron)', marginBottom: 18, maxWidth: 980 }}>
            Stephanie has been finding<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-shutter)' }}>the right poem for the right moment</span><br/>
            her whole life.
          </h1>
          <p className="vc-body-lg" style={{
            color: 'var(--vc-iron-soft)', fontStyle: 'italic',
            maxWidth: 720, marginTop: 22,
          }}>
            The shop is just the part where she got tired of doing it
            only for the people she happens to know.
          </p>
        </div>
      </section>

      {/* Portrait + biography */}
      <section className="vc-pad" style={{
        background: 'var(--vc-parchment)',
        borderTop: '1px solid rgba(28,24,20,0.1)',
        borderBottom: '1px solid rgba(28,24,20,0.1)',
        position: 'relative',
        paddingTop: 70, paddingBottom: 70,
      }}>
        <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
        <div className="vc-container" style={{ padding: 0, position: 'relative' }}>
          <div className="vc-split">
            <PortraitFrame />
            <div>
              <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', marginBottom: 24 }}>
                A short life,<br/>
                <span className="vc-italic">in five paragraphs.</span>
              </h2>
              <div style={{
                fontFamily: 'var(--vc-body)', fontSize: 'clamp(16px, 1.4vw, 18px)',
                lineHeight: 1.7, color: 'var(--vc-iron)',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                <p>
                  I grew up in the marsh house on the south end of Anastasia
                  Island, watching dragonflies hover over the Matanzas at first
                  light. My grandmother kept a wooden box of typed-out poems
                  in the drawer beside her bed. When somebody needed something,
                  she would open the drawer.
                </p>
                <p>
                  For thirty years I did the same thing for the people I love.
                  A poem in the mail. A line written on the inside of a
                  birthday card. The right four words, slipped under a door.
                </p>
                <p>
                  In May of MMXXIV I leased the small storefront at № 42
                  Aviles Street, two doors past the wrought iron gate, and
                  started doing it for strangers as well.
                </p>
                <p>
                  I read every prescription request myself. I choose the
                  poem myself. I write the name on the tag myself, in
                  fountain pen, because handwriting still means something.
                </p>
                <p style={{ fontFamily: 'var(--vc-script)', fontSize: 28, color: 'var(--vc-shutter)', lineHeight: 1.2 }}>
                  — Stephanie Van Clief
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The shelves */}
      <section className="vc-section vc-pad">
        <div className="vc-container" style={{ padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="vc-eyebrow" style={{ marginBottom: 14 }}>What sits on the shelves</div>
            <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)' }}>
              The library is not large.<br/>
              <span className="vc-italic" style={{ color: 'var(--vc-marsh)' }}>It does not need to be.</span>
            </h2>
          </div>

          <div className="vc-grid vc-grid--3">
            {[
              {
                t: 'Public-domain poets',
                b: 'Dickinson, Whitman, Frost, Hopkins, Rossetti, Yeats. A few hundred poems we know by their first line. The cards are letterpressed and stay in stock.',
              },
              {
                t: 'Living poets',
                b: 'Mary Oliver, Wendell Berry, Lucille Clifton, Ada Limón, Ross Gay. Permission granted, royalties paid. We re-stock these in small printings.',
              },
              {
                t: 'A poem for an occasion',
                b: 'Some weeks I sit at the counter and write one. Not all of them are good. The ones that are go in the brass drawer behind the bell.',
              },
            ].map(c => (
              <div key={c.t} style={{
                padding: '32px 28px',
                background: 'var(--vc-mission)',
                border: '1px solid rgba(28,24,20,0.12)',
              }}>
                <h3 className="vc-display-sm" style={{ color: 'var(--vc-iron)', marginBottom: 14 }}>
                  {c.t}
                </h3>
                <p style={{
                  fontFamily: 'var(--vc-body)', fontSize: 15, lineHeight: 1.6,
                  color: 'var(--vc-iron-soft)', margin: 0,
                }}>{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The promise */}
      <section style={{ background: 'var(--vc-iron)', color: 'var(--vc-mission)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="vc-container">
          <div className="vc-eyebrow" style={{ color: 'var(--vc-brass-pale)', marginBottom: 18 }}>What I promise</div>
          <h2 className="vc-display-md" style={{ color: 'var(--vc-mission)', marginBottom: 30, maxWidth: 720 }}>
            Five small things, written down<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-lavender)' }}>so I do not forget them.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              ['I.',   'I will read your prescription request myself, the same day it arrives.'],
              ['II.',  'I will choose the poem by hand. No algorithm. No "people also bought."'],
              ['III.', 'I will hand-letter the tag. If my handwriting is bad that day, I will throw it out and start again.'],
              ['IV.',  'I will not pad the bottle with extra trinkets. The poem is the gift.'],
              ['V.',   'If the poem is wrong for you, write back and tell me. I will find a better one.'],
            ].map(([n, t]) => (
              <div key={n} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr',
                padding: '20px 0', borderBottom: '1px solid rgba(241,233,216,0.15)',
                alignItems: 'baseline', gap: 16,
              }}>
                <div style={{
                  fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                  fontSize: 28, color: 'var(--vc-brass-pale)',
                  fontVariantNumeric: 'oldstyle-nums',
                }}>{n}</div>
                <div style={{
                  fontFamily: 'var(--vc-display)', fontSize: 'clamp(18px, 1.8vw, 24px)',
                  lineHeight: 1.3, color: 'var(--vc-mission)',
                }}>{t}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
            <a className="vc-btn" style={{ borderColor: 'var(--vc-brass-pale)', color: 'var(--vc-brass-pale)' }} href="prescribe.html">
              Begin a Prescription →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// Stylized portrait — a chair, a window, a silhouette. No invented faces.
function PortraitFrame() {
  return (
    <div style={{ position: 'relative', maxWidth: 480, marginInline: 'auto' }}>
      <div style={{
        aspectRatio: '4 / 5',
        background: 'var(--vc-coquina)',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 18px 38px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(28,24,20,0.1)',
      }}>
        <div className="vc-coquina-bg" style={{ position: 'absolute', inset: 0 }} />
        <svg viewBox="0 0 400 500" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="aboutWin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f0d8a0" />
              <stop offset="100%" stopColor="#e8b67a" />
            </linearGradient>
          </defs>
          {/* The window */}
          <rect x="80" y="60" width="240" height="280" fill="url(#aboutWin)" stroke="#3a2418" strokeWidth="3" />
          {/* Window crossbars */}
          <line x1="200" y1="60" x2="200" y2="340" stroke="#3a2418" strokeWidth="2" />
          <line x1="80" y1="200" x2="320" y2="200" stroke="#3a2418" strokeWidth="2" />
          {/* Aviles Street viewed through */}
          <rect x="100" y="220" width="40" height="100" fill="#8E3A2F" opacity="0.5" />
          <rect x="160" y="180" width="34" height="140" fill="#A99481" opacity="0.6" />
          <rect x="220" y="230" width="42" height="90" fill="#3F5E55" opacity="0.45" />
          <rect x="280" y="200" width="28" height="120" fill="#C9B5A4" opacity="0.55" />

          {/* Wooden sill */}
          <rect x="60" y="340" width="280" height="20" fill="#3a2418" />
          <rect x="60" y="340" width="280" height="4" fill="#1C1814" />

          {/* On the sill — a single bottle, a small notebook, lavender sprig */}
          <g transform="translate(140, 280)">
            <rect x="0" y="0" width="20" height="60" fill="#5a3a26" rx="2" />
            <rect x="2" y="42" width="16" height="14" fill="#EBDDC2" />
            <text x="10" y="52" fontFamily="'IM Fell DW Pica SC', serif" fontSize="3" textAnchor="middle" fill="#3a2818">VC</text>
            <circle cx="10" cy="-4" r="5" fill="#8E3A2F" />
          </g>
          <g transform="translate(180, 295)">
            <rect x="0" y="0" width="50" height="45" fill="#1C1814" />
            <rect x="2" y="2" width="46" height="41" fill="#EBDDC2" />
            <line x1="6" y1="14" x2="44" y2="14" stroke="#3a2418" strokeWidth="0.5" />
            <line x1="6" y1="22" x2="44" y2="22" stroke="#3a2418" strokeWidth="0.5" />
            <line x1="6" y1="30" x2="44" y2="30" stroke="#3a2418" strokeWidth="0.5" />
          </g>
          <g transform="translate(260, 270)">
            <line x1="0" y1="20" x2="0" y2="70" stroke="#3C4D38" strokeWidth="1" />
            {[0, 7, 14, 21, 28].map((y, i) => (
              <g key={i}>
                <ellipse cx={-3} cy={22+y} rx="2" ry="4" fill="#9B8FA8" />
                <ellipse cx={3} cy={22+y} rx="2" ry="4" fill="#6E6280" />
              </g>
            ))}
          </g>

          {/* A silhouette of Stephanie at the window — back to viewer */}
          <g transform="translate(200, 380)" opacity="0.85">
            {/* Chair */}
            <rect x="-70" y="40" width="140" height="60" fill="#3a2418" />
            <rect x="-70" y="40" width="140" height="6" fill="#1C1814" />
            <rect x="-66" y="-40" width="132" height="84" fill="#5a3a26" rx="4" />
            <rect x="-66" y="-40" width="132" height="8" fill="#3a2418" />
            {/* Silhouette */}
            <ellipse cx="0" cy="-60" rx="28" ry="34" fill="#1C1814" />
            <path d="M -40 -30 Q -40 -10, -42 30 L 42 30 Q 40 -10, 40 -30 Q 20 -50, 0 -50 Q -20 -50, -40 -30 Z"
              fill="#1C1814" />
            {/* Hair bun */}
            <ellipse cx="0" cy="-78" rx="14" ry="12" fill="#3a2418" />
          </g>
        </svg>

        {/* Caption frame */}
        <div style={{
          position: 'absolute', bottom: 12, left: 12, right: 12,
          padding: '10px 14px',
          background: 'rgba(28,24,20,0.85)', color: 'var(--vc-mission)',
          fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 12,
          letterSpacing: '0.04em', textAlign: 'center',
        }}>
          Stephanie at the counter, late afternoon, looking south toward the Cathedral
        </div>
      </div>
      <div style={{
        marginTop: 14, textAlign: 'center',
        fontFamily: 'var(--vc-body)', fontStyle: 'italic',
        fontSize: 13, color: 'var(--vc-iron-soft)',
      }}>
        Photograph by Eli Costa · iv. May, MMXXVI
      </div>
    </div>
  );
}

Object.assign(window, { AboutPage });
