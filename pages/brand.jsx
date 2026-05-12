// VC Writings — Brand Book (public "Our Craft" page)

function BrandPage() {
  return (
    <main>
      <section className="vc-pad" style={{ paddingTop: 60, paddingBottom: 50 }}>
        <div className="vc-container" style={{ padding: 0 }}>
          <div className="vc-eyebrow" style={{ marginBottom: 14 }}>Our craft</div>
          <h1 className="vc-display-xl" style={{ color: 'var(--vc-iron)', marginBottom: 18, maxWidth: 1100 }}>
            A visual language<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-shutter)' }}>borrowed from the old quarter.</span>
          </h1>
          <p className="vc-body-lg" style={{ fontStyle: 'italic', color: 'var(--vc-iron-soft)', maxWidth: 720 }}>
            Every color is from the architecture or the marsh.
            Every face of type is one a sign-maker would have known.
            Nothing here is invented; only remembered.
          </p>
        </div>
      </section>

      <BrandMark />
      <BrandPalette />
      <BrandType />
      <BrandMaterial />
    </main>
  );
}

function BrandMark() {
  return (
    <section className="vc-pad vc-section" style={{
      background: 'var(--vc-parchment)', position: 'relative',
      borderTop: '1px solid rgba(28,24,20,0.1)', borderBottom: '1px solid rgba(28,24,20,0.1)',
    }}>
      <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
      <div className="vc-container" style={{ padding: 0, position: 'relative' }}>
        <div className="vc-eyebrow" style={{ marginBottom: 22 }}>i. The mark</div>
        <div className="vc-split">
          <div style={{
            aspectRatio: '5 / 4', background: 'var(--vc-mission)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            boxShadow: 'inset 0 0 0 1px rgba(28,24,20,0.12), 0 12px 28px rgba(0,0,0,0.08)',
          }}>
            {['top-left','top-right','bottom-left','bottom-right'].map(c => (
              <div key={c} style={{
                position: 'absolute',
                [c.includes('top') ? 'top' : 'bottom']: 24,
                [c.includes('left') ? 'left' : 'right']: 24,
                fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                fontSize: 24, color: 'var(--vc-brass-deep)', opacity: 0.6,
              }}>✦</div>
            ))}
            <div style={{ position: 'absolute', inset: 28, border: '1px solid rgba(28,24,20,0.4)' }} />
            <div style={{ position: 'absolute', inset: 36, border: '0.5px solid rgba(28,24,20,0.25)' }} />
            <div style={{ position: 'relative', textAlign: 'center', padding: 30 }}>
              <VCDragonfly size={220} color="var(--vc-iron)" cipher={true} />
              <div style={{ marginTop: 18, fontFamily: 'var(--vc-script)', fontSize: 38, color: 'var(--vc-shutter)', lineHeight: 1 }}>
                S. V. C.
              </div>
              <div style={{ marginTop: 6, fontFamily: 'var(--vc-sign)', fontSize: 10, letterSpacing: '0.36em', color: 'var(--vc-iron-soft)' }}>
                STEPHANIE &nbsp; VAN &nbsp; CLIEF
              </div>
            </div>
          </div>
          <div>
            <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', marginBottom: 18 }}>
              One dragonfly.<br/>
              <span className="vc-italic" style={{ color: 'var(--vc-marsh)' }}>Nowhere else.</span>
            </h2>
            <p style={{ fontFamily: 'var(--vc-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--vc-iron-soft)', marginBottom: 14 }}>
              Stephanie's initials — S, V, C — are engraved into the
              thorax of a single dragonfly, drawn from the ones that
              hover over the Matanzas at first light. The cipher is small
              enough that you have to lean in to find it. That is the point.
            </p>
            <p style={{ fontFamily: 'var(--vc-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--vc-iron-soft)' }}>
              The dragonfly belongs to the storefront sign and the wax seal.
              It is watermarked behind every prescription card.
              You will not see it on tote bags or tissue paper.
              The motif loses its weight if it shows up more than that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandPalette() {
  const swatches = [
    { name: 'Coquina',         note: 'shell-flecked stone, walls of the Castillo',         hex: '#C9B5A4', text: 'var(--vc-iron)' },
    { name: 'Coquina Deep',    note: 'the shadowed side of the wall',                       hex: '#A99481', text: 'var(--vc-mission)' },
    { name: 'Mission White',   note: 'old plaster, hand-pulled cotton paper',               hex: '#F1E9D8', text: 'var(--vc-iron)' },
    { name: 'Parchment',       note: 'a page that has waited a hundred years',              hex: '#EBDDC2', text: 'var(--vc-iron)' },
    { name: 'Shutter Red',     note: 'a weathered Spanish shutter, Hypolita & Cordova',     hex: '#8E3A2F', text: 'var(--vc-mission)' },
    { name: 'Wrought Iron',    note: 'balcony railings of the old quarter',                 hex: '#1C1814', text: 'var(--vc-mission)' },
    { name: 'Oxidized Copper', note: 'the dome of the Cathedral Basilica',                  hex: '#5F8278', text: 'var(--vc-mission)' },
    { name: 'Worn Brass',      note: 'a door pull touched by four centuries',               hex: '#B0905A', text: 'var(--vc-iron)' },
    { name: 'Dusty Lavender',  note: 'dried sprigs in a kitchen window',                    hex: '#9B8FA8', text: 'var(--vc-iron)' },
    { name: 'Marsh Green',     note: 'dragonfly wings on the Matanzas at dawn',             hex: '#3C4D38', text: 'var(--vc-mission)' },
  ];
  return (
    <section className="vc-section vc-pad">
      <div className="vc-container" style={{ padding: 0 }}>
        <div className="vc-eyebrow" style={{ marginBottom: 22 }}>ii. The palette</div>
        <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', marginBottom: 16, maxWidth: 760 }}>
          Old colors.<br/>
          <span className="vc-italic" style={{ color: 'var(--vc-shutter)' }}>Lived-in colors.</span>
        </h2>
        <p style={{
          fontFamily: 'var(--vc-body)', fontStyle: 'italic',
          fontSize: 16, color: 'var(--vc-iron-soft)', maxWidth: 600, marginBottom: 36,
        }}>
          Nothing that exists only on a screen. Each one taken from
          a place a tourist might walk past today.
        </p>

        <div className="vc-grid vc-grid--5" style={{ gap: 16, marginBottom: 16 }}>
          {swatches.slice(0, 5).map((s, i) => <Swatch key={s.name} {...s} idx={i+1} />)}
        </div>
        <div className="vc-grid vc-grid--5" style={{ gap: 16 }}>
          {swatches.slice(5).map((s, i) => <Swatch key={s.name} {...s} idx={i+6} />)}
        </div>
      </div>
    </section>
  );
}

function Swatch({ name, note, hex, text, idx }) {
  return (
    <div>
      <div style={{
        background: hex, color: text,
        aspectRatio: '4 / 5',
        padding: 16,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        boxShadow: 'inset 0 0 0 1px rgba(28,24,20,0.08), inset 0 0 60px rgba(0,0,0,0.05)',
      }}>
        <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 10, letterSpacing: '0.2em', opacity: 0.7 }}>
          № {String(idx).padStart(2, '0')}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--vc-display)', fontSize: 19, lineHeight: 1.1, marginBottom: 4 }}>
            {name}
          </div>
          <div style={{ fontFamily: 'var(--vc-mono)', fontSize: 10, letterSpacing: '0.06em', opacity: 0.75 }}>
            {hex.toUpperCase()}
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 10, fontFamily: 'var(--vc-body)', fontStyle: 'italic',
        fontSize: 12, lineHeight: 1.4, color: 'var(--vc-iron-soft)',
      }}>{note}</div>
    </div>
  );
}

function BrandType() {
  return (
    <section className="vc-section vc-pad" style={{ background: 'var(--vc-mission)' }}>
      <div className="vc-container" style={{ padding: 0 }}>
        <div className="vc-eyebrow" style={{ marginBottom: 22 }}>iii. The hand of the sign-painter</div>

        <div style={{
          background: '#2a1810', position: 'relative',
          padding: 'clamp(40px, 6vw, 70px) 24px',
          marginBottom: 40,
          boxShadow: 'inset 0 0 0 4px #4a2e1e, inset 0 0 0 5px #1C1814, inset 0 0 80px rgba(0,0,0,0.5)',
          overflow: 'hidden',
        }}>
          <div className="vc-wood" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--vc-sign)', fontSize: 11, letterSpacing: '0.36em',
              color: '#d4b27a', marginBottom: 18, textShadow: '1px 1px 0 rgba(0,0,0,0.5)',
            }}>
              DISPLAY &nbsp; · &nbsp; IM FELL DW PICA SC
            </div>
            <div style={{
              fontFamily: 'var(--vc-sign)',
              fontSize: 'clamp(48px, 9vw, 120px)', lineHeight: 0.95,
              color: '#f0d8a0', letterSpacing: '0.04em',
              textShadow: '2px 2px 0 rgba(0,0,0,0.55), 3px 3px 0 rgba(0,0,0,0.4), 4px 4px 8px rgba(0,0,0,0.5), 0 0 30px rgba(233,201,138,0.12)',
              marginBottom: 14,
            }}>VC WRITINGS</div>
            <div style={{
              fontFamily: 'var(--vc-display)', fontStyle: 'italic',
              fontSize: 'clamp(20px, 3vw, 36px)',
              color: '#d4b27a', textShadow: '1px 1px 0 rgba(0,0,0,0.5)',
            }}>
              of verse, prescribed by hand
            </div>
          </div>
        </div>

        <div className="vc-split">
          <div style={{ background: 'var(--vc-parchment)', padding: 30, position: 'relative' }}>
            <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
            <div style={{ position: 'relative' }}>
              <div className="vc-eyebrow" style={{ marginBottom: 14, color: 'var(--vc-shutter)' }}>
                BODY &nbsp; · &nbsp; EB GARAMOND
              </div>
              <div style={{
                fontFamily: 'var(--vc-body)', fontSize: 'clamp(56px, 9vw, 84px)',
                lineHeight: 1, color: 'var(--vc-iron)', marginBottom: 14, letterSpacing: '-0.01em',
              }}>Aa Bb Cc</div>
              <div style={{
                fontFamily: 'var(--vc-body)', fontSize: 'clamp(20px, 2.6vw, 26px)',
                fontStyle: 'italic', color: 'var(--vc-iron-soft)', marginBottom: 18, lineHeight: 1.2,
              }}>& dragonflies hover at first light —</div>
              <p style={{ fontFamily: 'var(--vc-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--vc-iron)', margin: 0 }}>
                The body face belongs in a leather-bound volume from 1890.
                Old-style numerals, true italics, and the small caps the
                chemist would have used for his Latin abbreviations.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--vc-mission)', padding: 30, boxShadow: 'inset 0 0 0 1px rgba(28,24,20,0.1)' }}>
            <div className="vc-eyebrow" style={{ marginBottom: 14, color: 'var(--vc-shutter)' }}>
              SIGNATURE &nbsp; · &nbsp; PINYON SCRIPT
            </div>
            <div style={{
              fontFamily: 'var(--vc-script)',
              fontSize: 'clamp(64px, 11vw, 96px)', lineHeight: 0.95,
              color: 'var(--vc-shutter)', marginBottom: 6, letterSpacing: '-0.02em',
            }}>Stephanie</div>
            <div style={{
              fontFamily: 'var(--vc-script)',
              fontSize: 'clamp(36px, 6vw, 52px)', lineHeight: 1,
              color: 'var(--vc-iron-soft)', marginBottom: 20,
            }}>for the one you love</div>
            <p style={{ fontFamily: 'var(--vc-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--vc-iron-soft)', margin: 0 }}>
              Used only where a human hand would be: gift tags, the closing of a
              letter, the recipient's name on the bottle. Never for navigation,
              never for prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandMaterial() {
  return (
    <section className="vc-section vc-pad">
      <div className="vc-container" style={{ padding: 0 }}>
        <div className="vc-eyebrow" style={{ marginBottom: 22 }}>iv. Material &amp; motif</div>
        <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', marginBottom: 36, maxWidth: 720 }}>
          The product is the slowness<br/>
          <span className="vc-italic" style={{ color: 'var(--vc-marsh)' }}>of opening the bottle.</span>
        </h2>

        <div className="vc-grid vc-grid--3">
          <MaterialCard
            title="Lavender, two ways"
            body="As a real sprig tied to every bottle. As a color in the palette. Never as an illustration."
          >
            <div style={{
              background: 'var(--vc-coquina-pale)', height: 200,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <svg viewBox="0 0 200 220" width="120" height="170">
                {[0, 12, 24, 36, 48, 60, 72, 84].map((y, i) => (
                  <g key={i}>
                    <ellipse cx={94} cy={32 + y} rx="3" ry="6" fill="#9B8FA8" opacity={0.95 - i*0.05} />
                    <ellipse cx={106} cy={32 + y} rx="3" ry="6" fill="#6E6280" opacity={0.95 - i*0.05} />
                  </g>
                ))}
                <line x1="100" y1="40" x2="100" y2="200" stroke="#3C4D38" strokeWidth="1.5" />
                <path d="M 100 200 Q 92 204, 88 210" stroke="#B0905A" strokeWidth="1.2" fill="none" />
                <path d="M 100 200 Q 108 204, 112 210" stroke="#B0905A" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
          </MaterialCard>

          <MaterialCard
            title="Cotton-fiber paper"
            body="Yellows slightly at the edge. Toothy enough to take a letterpress impression. Never bright white, never coated."
          >
            <div style={{
              height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <div className="vc-parchment-bg" style={{
                position: 'absolute', inset: 16,
                boxShadow: '0 4px 14px rgba(0,0,0,0.12), inset 0 0 30px rgba(143,58,47,0.06)',
                transform: 'rotate(-1.5deg)',
              }} />
              <div className="vc-parchment-bg" style={{
                position: 'absolute', inset: 22,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transform: 'rotate(1deg)',
              }} />
              <div style={{
                position: 'relative', padding: '24px 28px',
                fontFamily: 'var(--vc-body)', fontStyle: 'italic',
                fontSize: 19, color: 'var(--vc-iron)', textAlign: 'center',
              }}>
                "let it be enough<br/>that I called you mine"
              </div>
            </div>
          </MaterialCard>

          <MaterialCard
            title="Wax & twine"
            body="A wax seal stamped with SVC, twine wrapped twice, a sprig of lavender tied at the knot."
          >
            <div style={{
              height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--vc-parchment)', position: 'relative',
            }}>
              <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
              <div className="vc-wax" style={{
                width: 120, height: 120, position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
                  <div style={{
                    fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                    fontSize: 36, color: 'rgba(255,220,200,0.85)',
                    textShadow: '0 1px 0 rgba(0,0,0,0.4)',
                  }}>SVC</div>
                  <div style={{
                    fontFamily: 'var(--vc-sign)', fontSize: 7, letterSpacing: '0.2em',
                    color: 'rgba(255,220,200,0.7)', marginTop: -1,
                  }}>STEPHANIE V.C.</div>
                </div>
              </div>
            </div>
          </MaterialCard>
        </div>
      </div>
    </section>
  );
}

function MaterialCard({ title, body, children }) {
  return (
    <div>
      {children}
      <div style={{ marginTop: 18, borderTop: '1px solid var(--vc-brass-deep)', paddingTop: 14 }}>
        <h4 className="vc-display-sm" style={{ color: 'var(--vc-iron)', marginBottom: 8 }}>
          {title}
        </h4>
        <p style={{ fontFamily: 'var(--vc-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--vc-iron-soft)', margin: 0 }}>
          {body}
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { BrandPage });
