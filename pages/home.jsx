// VC Writings — Homepage sections
// Fully responsive; uses utility classes from site.css plus tokens.css.

function HomeHero() {
  return (
    <section className="vc-pad" style={{ paddingTop: 60, paddingBottom: 80 }}>
      <div className="vc-container" style={{ padding: 0 }}>
        <div className="vc-split">
          {/* TEXT */}
          <div>
            <div className="vc-eyebrow" style={{ marginBottom: 18 }}>
              № 42 Aviles Street &nbsp;·&nbsp; St. Augustine, Florida
            </div>
            <h1 className="vc-display-xl" style={{ color: 'var(--vc-iron)', marginBottom: 14 }}>
              A small shop<br/>
              <span className="vc-italic" style={{ color: 'var(--vc-shutter)' }}>for verse</span><br/>
              prescribed by hand.
            </h1>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginTop: 28, marginBottom: 36, maxWidth: 520 }}>
              <span style={{ display: 'block', flex: '0 0 60px', height: 1, background: 'var(--vc-brass-deep)', marginTop: 14 }} />
              <p className="vc-body-lg" style={{
                fontStyle: 'italic', color: 'var(--vc-iron-soft)', margin: 0,
              }}>
                Name someone you love and a feeling you want sent.
                Walk out with a small brown bottle, sealed in wax,
                a sprig of lavender tied to the neck.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              <a className="vc-btn vc-btn--filled vc-btn--lg" href="prescribe.html">
                Fill a Prescription <span style={{ marginLeft: 6 }}>→</span>
              </a>
              <a href="visit.html" style={{
                fontFamily: 'var(--vc-body)', fontStyle: 'italic',
                fontSize: 16, color: 'var(--vc-iron-soft)',
                textUnderlineOffset: 4, textDecorationThickness: '0.5px',
              }}>
                or simply visit the shop &nbsp;·&nbsp; Tues–Sun, 11–6
              </a>
            </div>

            <HomeAlmanac />
          </div>

          {/* SIGN */}
          <HomeSign />
        </div>
      </div>
    </section>
  );
}

function HomeAlmanac() {
  const items = [
    { tag: 'TODAY',    val: 'Tuesday · 12 May · low tide 3.42 pm' },
    { tag: 'WEATHER OF THE HEART', val: 'warm, light wind from the south' },
    { tag: 'POEM OF THE DAY', val: 'Mary Oliver · The Summer Day' },
  ];
  return (
    <div style={{
      marginTop: 56,
      paddingTop: 22,
      borderTop: '1px solid rgba(28,24,20,0.15)',
      display: 'grid', gridTemplateColumns: '1fr', gap: 18,
      fontFamily: 'var(--vc-body)',
    }}>
      <style>{`
        @media (min-width: 720px) {
          .home-almanac { grid-template-columns: repeat(3, 1fr); gap: 30px; }
        }
      `}</style>
      <div className="home-almanac" style={{ display: 'grid', gap: 18, gridTemplateColumns: '1fr' }}>
        {items.map(i => (
          <div key={i.tag}>
            <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 10, letterSpacing: '0.28em', color: 'var(--vc-brass-deep)', marginBottom: 4 }}>
              {i.tag}
            </div>
            <div style={{ fontStyle: 'italic', fontSize: 14, color: 'var(--vc-iron-soft)' }}>
              {i.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeSign() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Coquina background */}
      <div className="vc-coquina-bg" style={{
        position: 'absolute', inset: '-24px -12px',
        boxShadow: 'inset 0 0 90px rgba(0,0,0,0.18)',
      }} />

      <div style={{ position: 'relative', padding: '36px 12px' }}>
        {/* Wrought iron hanger */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 0 }}>
          <div style={{ width: 6, height: 32, background: 'linear-gradient(180deg, #0a0806, #1c1814)' }} />
          <div style={{ width: 30, height: 6, background: 'linear-gradient(180deg, #1c1814, #0a0806)', borderRadius: 3 }} />
          <div style={{ width: 2, height: 22, background: '#1c1814' }} />
        </div>

        <div className="vc-wood" style={{
          padding: 'clamp(22px, 4vw, 36px) clamp(18px, 4vw, 32px) clamp(22px, 4vw, 30px)',
          boxShadow: '0 14px 30px rgba(0,0,0,0.4), inset 0 0 0 3px #5a3a26, inset 0 0 0 4px #1C1814',
          transform: 'rotate(-1deg)',
          position: 'relative', textAlign: 'center',
        }}>
          <span style={cornerStud('top','left')} />
          <span style={cornerStud('top','right')} />
          <span style={cornerStud('bottom','left')} />
          <span style={cornerStud('bottom','right')} />

          <div style={{
            fontFamily: 'var(--vc-sign)', fontSize: 'clamp(8px, 1vw, 10px)',
            letterSpacing: '0.42em', color: 'var(--vc-brass-pale)',
            textShadow: '1px 1px 0 rgba(0,0,0,0.5)', marginBottom: 14,
          }}>
            ✦ &nbsp; ESTABLISHED &nbsp; ANNO &nbsp; MMXXIV &nbsp; ✦
          </div>

          <h2 style={{
            fontFamily: 'var(--vc-sign)',
            fontSize: 'clamp(64px, 8vw, 104px)', lineHeight: 0.92,
            color: '#f0d8a0', letterSpacing: '0.04em',
            fontWeight: 'normal', margin: '0 0 6px',
            textShadow: '2px 2px 0 rgba(0,0,0,0.55), 3px 3px 0 rgba(0,0,0,0.4), 4px 4px 8px rgba(0,0,0,0.5), 0 0 24px rgba(233,201,138,0.18)',
          }}>VC</h2>
          <h2 style={{
            fontFamily: 'var(--vc-display)', fontStyle: 'italic',
            fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1,
            color: '#e9c98a', fontWeight: 'normal', margin: '0 0 12px',
            textShadow: '1px 1px 0 rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.4)',
          }}>Writings</h2>
          <h3 style={{
            fontFamily: 'var(--vc-script)',
            fontSize: 'clamp(22px, 2.8vw, 32px)', lineHeight: 1,
            color: '#d4b27a', fontWeight: 'normal', margin: '0 0 18px',
            textShadow: '1px 1px 0 rgba(0,0,0,0.4)',
          }}>by Stephanie Van Clief</h3>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '6px 0 12px' }}>
            <VCDragonfly size={84} color="#d4b27a" cipher={false} />
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            fontFamily: 'var(--vc-display)', fontStyle: 'italic',
            fontSize: 'clamp(11px, 1.2vw, 14px)', color: '#d4b27a',
            letterSpacing: '0.08em', textShadow: '1px 1px 0 rgba(0,0,0,0.4)',
          }}>
            <span style={{ width: 26, height: 1, background: 'currentColor', opacity: 0.5 }} />
            <span>verse · prescribed · by hand</span>
            <span style={{ width: 26, height: 1, background: 'currentColor', opacity: 0.5 }} />
          </div>
        </div>

        <div style={{
          marginTop: 20, textAlign: 'center',
          fontFamily: 'var(--vc-body)', fontStyle: 'italic',
          fontSize: 12, color: 'var(--vc-iron-soft)',
        }}>
          the shop sign · painted by Mr. Eli Costa, sign-maker of Charlotte Street
        </div>
      </div>
    </div>
  );
}

function cornerStud(v, h) {
  return {
    position: 'absolute',
    [v]: 8, [h]: 8,
    width: 8, height: 8, borderRadius: '50%',
    background: 'radial-gradient(circle at 30% 30%, #e6c479, #8C6F3F 70%, #4a3a1e)',
    boxShadow: '0 0 2px rgba(0,0,0,0.5)',
  };
}

// ─── Philosophy ──────────────────────────────────────────────
function HomePhilosophy() {
  return (
    <section className="vc-pad" style={{
      background: 'var(--vc-parchment)',
      borderTop: '1px solid rgba(28,24,20,0.1)',
      borderBottom: '1px solid rgba(28,24,20,0.1)',
      padding: 'clamp(70px, 10vw, 110px) 24px',
      position: 'relative',
    }}>
      <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--vc-script)',
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: 'var(--vc-shutter)',
          lineHeight: 1, marginBottom: 24,
        }}>
          A poem is a small bottle
        </div>
        <p className="vc-body-lg" style={{ color: 'var(--vc-iron-soft)', maxWidth: 700, margin: '0 auto 28px' }}>
          The right one, opened at the right hour, can change the weather inside a room.
          I have been finding those bottles for the people I love my whole life.
          The shop is my excuse to do it for everyone else.
        </p>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap',
          fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 15, color: 'var(--vc-brass-deep)',
        }}>
          <span style={{ display: 'inline-block', width: 36, height: 1, background: 'currentColor' }} />
          <span>Stephanie Van Clief, proprietress</span>
          <span style={{ display: 'inline-block', width: 36, height: 1, background: 'currentColor' }} />
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────
function HomeHow() {
  const steps = [
    { n: 'I.',  t: 'Name a person',  b: 'A mother. A friend who is grieving. The version of yourself you were at sixteen.' },
    { n: 'II.', t: 'Name the feeling', b: 'A welcome. An apology. Courage for Tuesday. The thing you cannot quite say aloud.' },
    { n: 'III.', t: 'We prescribe',   b: 'A poem chosen by hand from our shelves — letterpressed onto cotton paper, folded once.' },
    { n: 'IV.', t: 'Sealed & sent',   b: 'A small brown bottle, hand-numbered, wax-sealed, a sprig of lavender tied at the neck.' },
  ];
  return (
    <section className="vc-section vc-pad">
      <div className="vc-container" style={{ padding: 0 }}>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40,
        }}>
          <div className="vc-eyebrow">How a prescription is filled</div>
          <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', maxWidth: 720 }}>
            Four small steps,<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-marsh)' }}>each taken slowly.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--vc-body)', fontStyle: 'italic',
            fontSize: 16, color: 'var(--vc-iron-soft)', maxWidth: 540, margin: 0,
          }}>
            The whole point is to slow down. I work the way a chemist did
            in 1880 — by hand, with patience, one bottle at a time.
          </p>
        </div>

        <div className="vc-grid vc-grid--4" style={{
          background: 'rgba(28,24,20,0.15)',
          border: '1px solid rgba(28,24,20,0.15)',
          gap: 1,
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: 'var(--vc-mission)', padding: '32px 26px 36px',
              position: 'relative', minHeight: 220,
            }}>
              <div style={{
                fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                fontSize: 44, lineHeight: 1, color: 'var(--vc-brass)',
                fontVariantNumeric: 'oldstyle-nums',
              }}>{s.n}</div>
              <div style={{ width: 36, height: 1, background: 'var(--vc-brass-deep)', margin: '18px 0 14px', opacity: 0.5 }} />
              <h3 style={{
                fontFamily: 'var(--vc-display)', fontSize: 22, color: 'var(--vc-iron)',
                fontWeight: 'normal', marginBottom: 12, lineHeight: 1.15, margin: '0 0 12px',
              }}>{s.t}</h3>
              <p style={{
                fontFamily: 'var(--vc-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--vc-iron-soft)',
                margin: 0,
              }}>{s.b}</p>
              {i === 3 && (
                <div style={{ position: 'absolute', bottom: 14, right: 16, opacity: 0.7 }}>
                  <VCDragonfly size={26} color="var(--vc-marsh)" cipher={false} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <a className="vc-btn vc-btn--filled vc-btn--lg" href="prescribe.html">
            Begin a Prescription <span style={{ marginLeft: 6 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Featured Prescription ──────────────────────────────────
function HomeFeatured() {
  return (
    <section style={{
      background: 'var(--vc-iron)', color: 'var(--vc-mission)',
    }}>
      <div className="vc-split" style={{ gap: 0 }}>
        <div style={{
          padding: 'clamp(50px, 8vw, 90px) clamp(24px, 6vw, 80px)',
          background: 'radial-gradient(ellipse at 30% 30%, #2a2620, var(--vc-iron) 70%)',
        }}>
          <div className="vc-eyebrow" style={{ color: 'var(--vc-brass)', marginBottom: 14 }}>
            № 0042 &nbsp;·&nbsp; this week's prescription
          </div>
          <h2 className="vc-display-md" style={{ color: 'var(--vc-mission)', marginBottom: 16 }}>
            For a mother,<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-lavender)' }}>on a quiet Sunday.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--vc-body)', fontSize: 16, lineHeight: 1.6,
            color: 'rgba(241,233,216,0.78)', maxWidth: 420, marginBottom: 28,
          }}>
            Prescribed last Tuesday for a woman in Vermont, posted to her mother in
            Charleston. Dickinson, folded once, sealed in red.
          </p>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 30, flexWrap: 'wrap' }}>
            <VCBottle height={260} />
            <div style={{ paddingBottom: 16 }}>
              <div style={{
                fontFamily: 'var(--vc-script)', fontSize: 28, color: 'var(--vc-lavender)',
                lineHeight: 1.1, marginBottom: 12,
              }}>for Mama</div>
              <div style={{ fontFamily: 'var(--vc-mono)', fontSize: 11, color: 'var(--vc-brass-pale)', letterSpacing: '0.14em' }}>
                NO. 0042 / 100<br/>
                POSTED 4 MAY MMXXVI<br/>
                FROM AVILES STREET
              </div>
            </div>
          </div>
        </div>

        <div style={{
          padding: 'clamp(50px, 8vw, 90px) clamp(24px, 6vw, 80px)',
          background: 'var(--vc-parchment)', color: 'var(--vc-iron)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', right: -60, bottom: -40 }}>
            <VCDragonflyWatermark size={380} color="var(--vc-shutter)" opacity={0.05} />
          </div>
          <div style={{ position: 'relative' }}>
            <div className="vc-eyebrow" style={{ color: 'var(--vc-shutter)', marginBottom: 14 }}>
              Card № 0042
            </div>
            <div style={{
              fontFamily: 'var(--vc-display)', fontStyle: 'italic', fontSize: 17,
              color: 'var(--vc-iron-soft)', marginBottom: 4,
            }}>Emily Dickinson</div>
            <h3 className="vc-display-sm" style={{ color: 'var(--vc-iron)', marginBottom: 22 }}>
              "Hope" is the thing with feathers —
            </h3>
            <div style={{
              fontFamily: 'var(--vc-body)', fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.7,
              color: 'var(--vc-iron)', whiteSpace: 'pre-line',
            }}>
{`"Hope" is the thing with feathers —
That perches in the soul —
And sings the tune without the words —
And never stops — at all —

And sweetest — in the Gale — is heard —
And sore must be the storm —
That could abash the little Bird
That kept so many warm —`}
            </div>
            <div style={{
              marginTop: 28, paddingTop: 18,
              borderTop: '1px solid rgba(28,24,20,0.2)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 14, flexWrap: 'wrap',
              fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 13, color: 'var(--vc-iron-soft)',
            }}>
              <span>letterpressed on cotton, folded once, sealed in red wax</span>
              <span style={{ fontFamily: 'var(--vc-script)', fontSize: 22, color: 'var(--vc-shutter)' }}>
                — S.V.C.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Visit (compact, links to full visit page) ──────────────
function HomeVisit() {
  return (
    <section className="vc-section vc-pad">
      <div className="vc-container" style={{ padding: 0 }}>
        <div className="vc-eyebrow" style={{ marginBottom: 14, textAlign: 'center' }}>
          The Shop &nbsp;·&nbsp; Aviles Street
        </div>
        <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', textAlign: 'center', marginBottom: 40 }}>
          On the oldest street<br/>
          <span className="vc-italic" style={{ color: 'var(--vc-copper-deep)' }}>in the oldest city.</span>
        </h2>

        <HomeAviles />

        <div style={{
          marginTop: 40, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <a className="vc-btn" href="visit.html">Hours &amp; Address</a>
          <a className="vc-btn vc-btn--brass" href="about.html">About Stephanie</a>
        </div>
      </div>
    </section>
  );
}

function HomeAviles() {
  return (
    <div style={{
      maxWidth: 720, margin: '0 auto', position: 'relative',
    }}>
      <svg viewBox="0 0 480 360" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8b67a" />
            <stop offset="50%" stopColor="#e9c98a" />
            <stop offset="100%" stopColor="#f1e9d8" />
          </linearGradient>
          <linearGradient id="bldgLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D8B97F" />
            <stop offset="100%" stopColor="#A99481" />
          </linearGradient>
          <linearGradient id="bldgRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F1E9D8" />
            <stop offset="100%" stopColor="#C9B5A4" />
          </linearGradient>
        </defs>
        <rect width="480" height="220" fill="url(#sky)" />
        <rect x="218" y="100" width="44" height="120" fill="#C9B5A4" opacity="0.85" />
        <polygon points="218,100 240,72 262,100" fill="#A99481" opacity="0.9" />
        <rect x="232" y="120" width="16" height="22" fill="#3F5E55" opacity="0.6" />
        <circle cx="240" cy="84" r="3" fill="#1C1814" />

        <rect x="0" y="60" width="180" height="220" fill="url(#bldgLeft)" />
        <rect x="20" y="120" width="36" height="60" fill="#3a2418" />
        <rect x="22" y="122" width="32" height="56" fill="#8E3A2F" opacity="0.85" />
        <rect x="36" y="122" width="2" height="56" fill="#1C1814" opacity="0.4" />
        <rect x="80" y="120" width="36" height="60" fill="#3a2418" />
        <rect x="82" y="122" width="32" height="56" fill="#8E3A2F" opacity="0.85" />
        <rect x="96" y="122" width="2" height="56" fill="#1C1814" opacity="0.4" />
        <rect x="140" y="120" width="36" height="60" fill="#3a2418" />
        <rect x="142" y="122" width="32" height="56" fill="#8E3A2F" opacity="0.85" />
        <rect x="14" y="180" width="160" height="3" fill="#1C1814" />
        <rect x="14" y="180" width="160" height="22" fill="none" stroke="#1C1814" strokeWidth="0.5" />
        {Array.from({length:32}).map((_,i) => (
          <rect key={i} x={16+i*5} y={183} width="0.8" height="19" fill="#1C1814" />
        ))}
        <rect x="14" y="200" width="160" height="2" fill="#1C1814" />

        <rect x="280" y="50" width="200" height="230" fill="url(#bldgRight)" />
        <line x1="340" y1="100" x2="340" y2="115" stroke="#1C1814" strokeWidth="1" />
        <rect x="318" y="115" width="44" height="34" fill="#3a2418" stroke="#1C1814" />
        <text x="340" y="132" fontFamily="'IM Fell DW Pica SC', serif" fontSize="9" textAnchor="middle" fill="#e9c98a" letterSpacing="0.5">
          VC WRITINGS
        </text>
        <text x="340" y="143" fontFamily="'Pinyon Script', cursive" fontSize="7" textAnchor="middle" fill="#d4b27a">
          Stephanie V.C.
        </text>
        <rect x="380" y="170" width="34" height="110" fill="#3F5E55" opacity="0.85" />
        <rect x="380" y="170" width="34" height="110" fill="none" stroke="#1C1814" strokeWidth="1" />
        <circle cx="408" cy="225" r="1.5" fill="#B0905A" />
        <rect x="300" y="180" width="40" height="50" fill="#1C1814" opacity="0.7" />
        <rect x="300" y="180" width="40" height="50" fill="none" stroke="#8C6F3F" strokeWidth="1.5" />
        <line x1="320" y1="180" x2="320" y2="230" stroke="#8C6F3F" strokeWidth="0.5" />
        <line x1="300" y1="205" x2="340" y2="205" stroke="#8C6F3F" strokeWidth="0.5" />
        <line x1="280" y1="80" x2="260" y2="80" stroke="#1C1814" strokeWidth="1.5" />
        <rect x="252" y="74" width="14" height="18" fill="#1C1814" />
        <rect x="254" y="76" width="10" height="14" fill="#f0c870" opacity="0.6" />
        <circle cx="259" cy="83" r="6" fill="#f0c870" opacity="0.4" />

        <rect x="0" y="220" width="480" height="140" fill="#C9B5A4" />
        {Array.from({length: 8}).map((_,r) => (
          Array.from({length: 18}).map((_,c) => (
            <ellipse key={`${r}-${c}`} cx={c*30 + (r%2)*15} cy={240 + r*16} rx="9" ry="4"
              fill="#A99481" opacity={0.5 + (r%3)*0.1} stroke="#8a7560" strokeWidth="0.3" />
          ))
        ))}

        <g transform="translate(150, 130)" opacity="0.5">
          <ellipse cx="0" cy="0" rx="0.8" ry="3" fill="#3C4D38" />
          <ellipse cx="-4" cy="-1" rx="4" ry="1.2" fill="#3C4D38" opacity="0.5" />
          <ellipse cx="4" cy="-1" rx="4" ry="1.2" fill="#3C4D38" opacity="0.5" />
        </g>
      </svg>
      <div style={{
        marginTop: 14, textAlign: 'center',
        fontFamily: 'var(--vc-body)', fontStyle: 'italic',
        fontSize: 13, color: 'var(--vc-iron-soft)',
      }}>
        Aviles Street, looking south toward the Cathedral, late afternoon
      </div>
    </div>
  );
}

// Bottle SVG (shared)
function VCBottle({ height = 260 }) {
  const w = height * 0.42;
  return (
    <svg viewBox="0 0 120 280" width={w} height={height} style={{ display: 'block' }}>
      <g transform="translate(60, 12)" opacity="0.95">
        <line x1="0" y1="0" x2="0" y2="34" stroke="#9B8FA8" strokeWidth="1" />
        {[0, 6, 12, 18, 24].map((y, i) => (
          <g key={i}>
            <ellipse cx={-3} cy={y} rx="1.5" ry="3" fill="#9B8FA8" opacity={0.85 - i*0.05} />
            <ellipse cx={3} cy={y} rx="1.5" ry="3" fill="#6E6280" opacity={0.85 - i*0.05} />
          </g>
        ))}
        <ellipse cx="0" cy="36" rx="6" ry="1.4" fill="none" stroke="#B0905A" strokeWidth="0.8" />
      </g>
      <rect x="48" y="40" width="24" height="14" rx="1" fill="#9C7448" />
      <rect x="48" y="40" width="24" height="3" fill="#7a5832" />
      <path d="M 50 54 L 50 76 L 32 92 L 32 240 Q 32 262, 60 262 Q 88 262, 88 240 L 88 92 L 70 76 L 70 54 Z"
        fill="url(#hbottle)" stroke="#3a2818" strokeWidth="1.2" />
      <path d="M 38 110 Q 36 180, 40 240" stroke="rgba(255,220,180,0.25)" strokeWidth="3" fill="none" />
      <path d="M 80 110 Q 82 180, 78 240" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" />

      <line x1="60" y1="56" x2="60" y2="120" stroke="#5a3a26" strokeWidth="0.6" />
      <g transform="translate(60, 130)">
        <circle r="22" fill="#8E3A2F" />
        <circle r="22" fill="url(#hwax)" />
        <circle r="18" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="0.5" />
        <text x="0" y="2" fontFamily="'IM Fell English', serif" fontSize="11" fontStyle="italic"
          textAnchor="middle" fill="rgba(255,220,200,0.85)">SVC</text>
        <text x="0" y="11" fontFamily="'IM Fell DW Pica SC', serif" fontSize="5" letterSpacing="1"
          textAnchor="middle" fill="rgba(255,220,200,0.7)">STEPHANIE V.C.</text>
      </g>

      <rect x="40" y="170" width="40" height="56" fill="#EBDDC2" stroke="#8C6F3F" strokeWidth="0.5" opacity="0.95" />
      <text x="60" y="184" fontFamily="'IM Fell DW Pica SC', serif" fontSize="5" letterSpacing="1"
        textAnchor="middle" fill="#3a2818">VC WRITINGS</text>
      <line x1="46" y1="190" x2="74" y2="190" stroke="#8C6F3F" strokeWidth="0.3" />
      <text x="60" y="200" fontFamily="'Pinyon Script', cursive" fontSize="8" textAnchor="middle" fill="#8E3A2F">for Mama</text>
      <text x="60" y="212" fontFamily="'EB Garamond', serif" fontSize="4.5" fontStyle="italic" textAnchor="middle" fill="#3a2818">
        a quiet Sunday
      </text>
      <text x="60" y="220" fontFamily="'IM Fell DW Pica SC', serif" fontSize="3.5" letterSpacing="0.5"
        textAnchor="middle" fill="#8C6F3F">№ 0042 / 100</text>

      <defs>
        <linearGradient id="hbottle" x1="0" x2="1">
          <stop offset="0%" stopColor="#5a3a26" />
          <stop offset="30%" stopColor="#7a5230" />
          <stop offset="60%" stopColor="#5a3a26" />
          <stop offset="100%" stopColor="#3a2018" />
        </linearGradient>
        <radialGradient id="hwax" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="rgba(255,200,180,0.6)" />
          <stop offset="40%" stopColor="rgba(255,200,180,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

Object.assign(window, { HomeHero, HomePhilosophy, HomeHow, HomeFeatured, HomeVisit, VCBottle });
