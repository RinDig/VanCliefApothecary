// VC Writings — Visit page

function VisitPage() {
  const hours = [
    ['Monday', 'closed · we are walking the marsh'],
    ['Tuesday', '11 — 6'],
    ['Wednesday', '11 — 6'],
    ['Thursday', '11 — 6'],
    ['Friday', '11 — 8 · candle hours'],
    ['Saturday', '10 — 8'],
    ['Sunday', '12 — 5'],
  ];
  const directions = [
    { n: '01.', t: 'From the Plaza de la Constitución', b: 'Walk south on St. George Street. Turn left on Cadiz. Aviles Street is one block over.' },
    { n: '02.', t: 'From the Castillo de San Marcos', b: 'Cross the plaza, take Avenida Menendez two blocks south, turn right on Aviles.' },
    { n: '03.', t: 'From the parking on Cordova', b: 'Walk east on Hypolita, turn right at the Cathedral. Aviles is on your right.' },
  ];

  return (
    <main>
      <section className="vc-pad" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="vc-container" style={{ padding: 0 }}>
          <div className="vc-eyebrow" style={{ marginBottom: 14 }}>Aviles Street</div>
          <h1 className="vc-display-xl" style={{ color: 'var(--vc-iron)', marginBottom: 18 }}>
            Come see us<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-shutter)' }}>on the oldest street.</span>
          </h1>
          <p className="vc-body-lg" style={{
            fontStyle: 'italic', color: 'var(--vc-iron-soft)', maxWidth: 660, margin: 0,
          }}>
            Aviles is the oldest street in the oldest city. If the lavender at the door
            is fresh, we are inside.
          </p>
        </div>
      </section>

      {/* Street illustration full width */}
      <section className="vc-pad" style={{
        background: 'var(--vc-coquina-pale)',
        borderTop: '1px solid rgba(28,24,20,0.1)',
        borderBottom: '1px solid rgba(28,24,20,0.1)',
        padding: 'clamp(40px, 6vw, 70px) 24px',
      }}>
        <div className="vc-container" style={{ padding: 0 }}>
          <VisitStreet />
        </div>
      </section>

      {/* Hours + address grid */}
      <section className="vc-section vc-pad">
        <div className="vc-container" style={{ padding: 0 }}>
          <div className="vc-split">
            <div>
              <div className="vc-eyebrow" style={{ marginBottom: 14 }}>i. The hours</div>
              <h2 className="vc-display-sm" style={{ color: 'var(--vc-iron)', marginBottom: 22 }}>
                When the door is open.
              </h2>
              <div style={{ borderTop: '2px solid var(--vc-iron)', paddingTop: 14 }}>
                {hours.map(([d, h]) => (
                  <div key={d} style={{
                    display: 'flex', justifyContent: 'space-between', gap: 12,
                    padding: '10px 0', borderBottom: '1px dotted rgba(28,24,20,0.25)',
                    fontFamily: 'var(--vc-body)', fontSize: 16,
                  }}>
                    <span style={{ fontStyle: 'italic' }}>{d}</span>
                    <span style={{ color: 'var(--vc-iron-soft)', textAlign: 'right' }}>{h}</span>
                  </div>
                ))}
              </div>
              <p style={{
                marginTop: 22, fontFamily: 'var(--vc-body)', fontStyle: 'italic',
                fontSize: 14, color: 'var(--vc-iron-soft)', lineHeight: 1.6,
              }}>
                The shop closes briefly on the second Tuesday of each month
                so I can letterpress the new run of cards. The lavender at
                the door will tell you.
              </p>
            </div>

            <div>
              <div className="vc-eyebrow" style={{ marginBottom: 14 }}>ii. The address</div>
              <h2 className="vc-display-sm" style={{ color: 'var(--vc-iron)', marginBottom: 22 }}>
                Where the door is.
              </h2>
              <div style={{
                fontFamily: 'var(--vc-display)', fontSize: 'clamp(24px, 2.4vw, 30px)',
                lineHeight: 1.3, color: 'var(--vc-iron)', marginBottom: 22,
              }}>
                № 42 Aviles Street<br/>
                <span style={{ fontStyle: 'italic', color: 'var(--vc-iron-soft)' }}>
                  St. Augustine, FL 32084
                </span>
              </div>
              <p style={{
                fontFamily: 'var(--vc-body)', fontSize: 16, color: 'var(--vc-iron-soft)',
                lineHeight: 1.6, marginBottom: 22,
              }}>
                Down from the Cathedral, two doors past the wrought iron
                gate. Coquina-stone façade. A wooden sign hangs from a
                wrought-iron arm. The dragonfly is on the sign.
              </p>
              <div className="vc-eyebrow" style={{ marginBottom: 8 }}>By post</div>
              <p style={{
                fontFamily: 'var(--vc-body)', fontSize: 15, color: 'var(--vc-iron-soft)',
                lineHeight: 1.6, margin: '0 0 18px',
              }}>
                We mail prescriptions anywhere a postman can reach.
                Wrap in linen for an additional dollar.
              </p>
              <a className="vc-btn vc-btn--brass" href="prescribe.html">
                Fill a Prescription →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="vc-section vc-pad" style={{
        background: 'var(--vc-parchment)',
        borderTop: '1px solid rgba(28,24,20,0.1)',
        position: 'relative',
      }}>
        <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
        <div className="vc-container" style={{ padding: 0, position: 'relative' }}>
          <div className="vc-eyebrow" style={{ marginBottom: 14 }}>iii. How to find the door</div>
          <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', marginBottom: 36 }}>
            Three ways<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-marsh)' }}>to walk to us.</span>
          </h2>
          <div className="vc-grid vc-grid--3">
            {directions.map(d => (
              <div key={d.n} style={{ borderTop: '1px solid var(--vc-iron)', paddingTop: 18 }}>
                <div style={{
                  fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                  fontSize: 36, color: 'var(--vc-brass)', lineHeight: 1,
                  fontVariantNumeric: 'oldstyle-nums', marginBottom: 12,
                }}>{d.n}</div>
                <h3 className="vc-display-sm" style={{ color: 'var(--vc-iron)', fontSize: 22, marginBottom: 10 }}>
                  {d.t}
                </h3>
                <p style={{
                  fontFamily: 'var(--vc-body)', fontSize: 15, lineHeight: 1.6,
                  color: 'var(--vc-iron-soft)', margin: 0,
                }}>{d.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do once inside */}
      <section style={{ background: 'var(--vc-iron)', color: 'var(--vc-mission)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="vc-container">
          <div className="vc-eyebrow" style={{ color: 'var(--vc-brass-pale)', marginBottom: 14 }}>iv. Once you are inside</div>
          <h2 className="vc-display-md" style={{ color: 'var(--vc-mission)', marginBottom: 40, maxWidth: 720 }}>
            There is a chair.<br/>
            <span className="vc-italic" style={{ color: 'var(--vc-lavender)' }}>It is for sitting.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--vc-body)', fontSize: 'clamp(17px, 1.5vw, 19px)',
            lineHeight: 1.7, color: 'rgba(241,233,216,0.85)', maxWidth: 680, margin: 0,
          }}>
            The shop is one small room. There is a counter. Behind the counter,
            a wall of cards. Above the counter, a brass bell. Beside the counter,
            a wing-back chair the color of old plums. If we are busy, sit in it.
            There is no rush. We do not run the shop on a clock.
          </p>
        </div>
      </section>
    </main>
  );
}

// A wider, more zoomed-in version of the storefront illustration
function VisitStreet() {
  return (
    <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
      <svg viewBox="0 0 900 420" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8a06a" />
            <stop offset="40%" stopColor="#e9c98a" />
            <stop offset="100%" stopColor="#f1e9d8" />
          </linearGradient>
          <linearGradient id="vleft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D8B97F" />
            <stop offset="100%" stopColor="#A99481" />
          </linearGradient>
          <linearGradient id="vright" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F1E9D8" />
            <stop offset="100%" stopColor="#C9B5A4" />
          </linearGradient>
          <linearGradient id="vshop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EBDDC2" />
            <stop offset="100%" stopColor="#C9B5A4" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="900" height="260" fill="url(#vsky)" />

        {/* Cathedral tower far */}
        <rect x="380" y="100" width="50" height="160" fill="#C9B5A4" opacity="0.85" />
        <polygon points="380,100 405,68 430,100" fill="#A99481" />
        <rect x="395" y="120" width="20" height="26" fill="#3F5E55" opacity="0.6" />
        <circle cx="405" cy="84" r="4" fill="#1C1814" />

        {/* Left buildings */}
        <rect x="0" y="60" width="340" height="280" fill="url(#vleft)" />
        {[40, 100, 160, 220, 280].map(x => (
          <g key={x}>
            <rect x={x} y={140} width={38} height={66} fill="#3a2418" />
            <rect x={x+2} y={142} width={34} height={62} fill="#8E3A2F" opacity="0.85" />
            <rect x={x+19} y={142} width={2} height={62} fill="#1C1814" opacity="0.5" />
          </g>
        ))}
        {/* balcony */}
        <rect x="30" y="206" width="290" height="3" fill="#1C1814" />
        <rect x="30" y="206" width="290" height="26" fill="none" stroke="#1C1814" strokeWidth="0.5" />
        {Array.from({length: 60}).map((_,i) => (
          <rect key={i} x={32+i*5} y={209} width="0.8" height="22" fill="#1C1814" />
        ))}
        <rect x="30" y="230" width="290" height="2" fill="#1C1814" />

        {/* Right storefront — the VC Writings shop, larger */}
        <rect x="500" y="40" width="400" height="300" fill="url(#vright)" />
        {/* Window box / lavender on sill */}
        <rect x="520" y="180" width="80" height="60" fill="#1C1814" opacity="0.7" />
        <rect x="520" y="180" width="80" height="60" fill="none" stroke="#8C6F3F" strokeWidth="2" />
        <line x1="560" y1="180" x2="560" y2="240" stroke="#8C6F3F" strokeWidth="0.8" />
        <line x1="520" y1="210" x2="600" y2="210" stroke="#8C6F3F" strokeWidth="0.8" />
        {/* Lavender in window */}
        {[535, 555, 575, 590].map(x => (
          <g key={x} transform={`translate(${x}, 175)`}>
            <line x1="0" y1="0" x2="0" y2="-12" stroke="#3C4D38" strokeWidth="0.6" />
            <ellipse cx="0" cy="-14" rx="1.5" ry="3" fill="#9B8FA8" />
            <ellipse cx="0" cy="-18" rx="1.5" ry="3" fill="#6E6280" />
          </g>
        ))}

        {/* Coquina texture dots on shop wall */}
        {Array.from({length: 60}).map((_, i) => {
          const x = 500 + (i*17 % 380);
          const y = 50 + Math.floor(i*17/380)*22;
          return <circle key={i} cx={x} cy={y} r="0.8" fill="#a99481" opacity="0.5" />;
        })}

        {/* Sign hanging */}
        <line x1="700" y1="60" x2="700" y2="100" stroke="#1C1814" strokeWidth="2" />
        <line x1="690" y1="68" x2="710" y2="68" stroke="#1C1814" strokeWidth="2" />
        <path d="M 690 68 Q 700 56, 710 68" stroke="#1C1814" strokeWidth="1" fill="none" />
        <line x1="700" y1="98" x2="700" y2="104" stroke="#1C1814" strokeWidth="1" />
        <rect x="650" y="104" width="100" height="78" fill="#3a2418" stroke="#1C1814" strokeWidth="2" />
        <rect x="654" y="108" width="92" height="70" fill="#2e1c11" />
        {/* Brass studs */}
        {[[656,110],[744,110],[656,176],[744,176]].map(([x,y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill="#B0905A" />
        ))}
        <text x="700" y="128" fontFamily="'IM Fell DW Pica SC', serif" fontSize="14" textAnchor="middle" fill="#f0d8a0" letterSpacing="1.5">
          VC WRITINGS
        </text>
        <text x="700" y="145" fontFamily="'Pinyon Script', cursive" fontSize="13" textAnchor="middle" fill="#d4b27a">
          Stephanie Van Clief
        </text>
        <line x1="668" y1="152" x2="732" y2="152" stroke="#d4b27a" strokeWidth="0.5" />
        <text x="700" y="168" fontFamily="'IM Fell English', serif" fontStyle="italic" fontSize="9" textAnchor="middle" fill="#d4b27a">
          an apothecary of verse
        </text>

        {/* Door */}
        <rect x="780" y="200" width="60" height="140" fill="#3F5E55" />
        <rect x="780" y="200" width="60" height="140" fill="none" stroke="#1C1814" strokeWidth="2" />
        <line x1="810" y1="200" x2="810" y2="340" stroke="#1C1814" strokeWidth="1" />
        <circle cx="830" cy="270" r="2.5" fill="#B0905A" />
        {/* Lavender pot at door */}
        <g transform="translate(770, 320)">
          <rect x="0" y="0" width="14" height="18" fill="#8E3A2F" />
          <rect x="-1" y="0" width="16" height="3" fill="#6B2A22" />
          {[2, 5, 8, 11].map(x => (
            <g key={x} transform={`translate(${x}, 0)`}>
              <line x1="0" y1="0" x2="0" y2="-10" stroke="#3C4D38" strokeWidth="0.5" />
              <ellipse cx="0" cy="-12" rx="1.5" ry="3" fill="#9B8FA8" />
            </g>
          ))}
        </g>

        {/* Gas lamp */}
        <line x1="500" y1="100" x2="470" y2="100" stroke="#1C1814" strokeWidth="2" />
        <rect x="458" y="92" width="20" height="26" fill="#1C1814" />
        <rect x="460" y="94" width="16" height="22" fill="#f0c870" opacity="0.6" />
        <circle cx="468" cy="105" r="9" fill="#f0c870" opacity="0.4" />

        {/* Street / cobblestones */}
        <rect x="0" y="260" width="900" height="160" fill="#C9B5A4" />
        {Array.from({length: 11}).map((_,r) => (
          Array.from({length: 32}).map((_,c) => (
            <ellipse key={`${r}-${c}`} cx={c*32 + (r%2)*16 - 16} cy={278 + r*16} rx="11" ry="5"
              fill="#A99481" opacity={0.5 + (r%3)*0.1} stroke="#8a7560" strokeWidth="0.3" />
          ))
        ))}

        {/* Two dragonflies */}
        <g transform="translate(260, 160)" opacity="0.5">
          <ellipse cx="0" cy="0" rx="0.8" ry="3" fill="#3C4D38" />
          <ellipse cx="-4" cy="-1" rx="4" ry="1.2" fill="#3C4D38" opacity="0.5" />
          <ellipse cx="4" cy="-1" rx="4" ry="1.2" fill="#3C4D38" opacity="0.5" />
        </g>
        <g transform="translate(620, 220)" opacity="0.4">
          <ellipse cx="0" cy="0" rx="0.6" ry="2.2" fill="#3C4D38" />
          <ellipse cx="-3" cy="-1" rx="3" ry="1" fill="#3C4D38" opacity="0.5" />
          <ellipse cx="3" cy="-1" rx="3" ry="1" fill="#3C4D38" opacity="0.5" />
        </g>
      </svg>
      <div style={{
        marginTop: 14, textAlign: 'center',
        fontFamily: 'var(--vc-body)', fontStyle: 'italic',
        fontSize: 14, color: 'var(--vc-iron-soft)',
      }}>
        № 42 Aviles Street, looking south toward the Cathedral at five o'clock
      </div>
    </div>
  );
}

Object.assign(window, { VisitPage });
