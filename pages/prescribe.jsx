// VC Writings — Prescribe page
// Responsive 4-step intake. Mobile: stacks form above preview.

const { useState: useStateRx, useEffect: useEffectRx, useRef: useRefRx } = React;

function PrescribePage() {
  const [step, setStep] = useStateRx(0);
  const [rx, setRx] = useStateRx({
    name: '', relation: '', occasion: '', occasionLabel: '', feelings: [],
    tone: 1, note: '', from: '',
    poet: 'Emily Dickinson', title: '"Hope" is the thing with feathers —',
    poemLines: defaultPoem,
  });
  const total = 4;
  const advance = () => setStep(s => Math.min(s + 1, total));
  const back = () => setStep(s => Math.max(s - 1, 0));
  const reset = () => { setStep(0); setRx(r => ({ ...r, name:'', relation:'', occasion:'', occasionLabel:'', feelings:[], note:'', from:'' })); };

  useEffectRx(() => {
    const match = matchPoem(rx);
    setRx(r => ({ ...r, poet: match.poet, title: match.title, poemLines: match.lines }));
  }, [rx.occasion, rx.feelings.join(','), rx.tone, rx.relation]);

  return (
    <div className="vc-paper" style={{ minHeight: '100vh' }}>
      <RxTopBar step={step} total={total} />

      <div className="rx-main">
        <div className="rx-form" style={{ position: 'relative' }}>
          <div aria-hidden="true" style={{
            position: 'absolute', top: -14, right: 24,
            fontFamily: 'var(--vc-display)', fontStyle: 'italic',
            fontSize: 'clamp(120px, 18vw, 220px)', color: 'var(--vc-iron)',
            opacity: 0.04, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
          }}>{['I','II','III','IV'][step]}</div>
          <div key={step} className="vc-fade-in" style={{ position: 'relative' }}>
            {step === 0 && <RxStep1 rx={rx} setRx={setRx} onContinue={advance} canAdvance={rx.name.trim().length > 0} />}
            {step === 1 && <RxStep2 rx={rx} setRx={setRx} />}
            {step === 2 && <RxStep3 rx={rx} setRx={setRx} />}
            {step === 3 && <RxStep4 rx={rx} setRx={setRx} reset={reset} />}
          </div>
        </div>

        <div className="rx-preview">
          <RxPreviewCard rx={rx} step={step} />
        </div>
      </div>

      <RxBottomBar step={step} total={total} rx={rx} onBack={back} onNext={advance} onReset={reset} />

      <style>{`
        .rx-main {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          min-height: calc(100vh - 64px - 70px);
        }
        .rx-form {
          padding: 28px 24px 40px;
          order: 2;
        }
        .rx-preview {
          background: var(--vc-iron);
          padding: 32px 24px;
          order: 1;
          display: flex;
          justify-content: center;
        }
        @media (min-width: 720px) {
          .rx-form { padding: 36px 48px 48px; }
          .rx-preview { padding: 40px 32px; }
        }
        @media (min-width: 980px) {
          .rx-main { grid-template-columns: 1.3fr 1fr; }
          .rx-form { padding: 48px 64px; order: 1; }
          .rx-preview { order: 2; padding: 48px 40px; }
        }
      `}</style>
    </div>
  );
}

// ─── Top bar ─────────────────────────────────────────────────
function RxTopBar({ step }) {
  return (
    <div style={{
      background: 'var(--vc-iron)',
      borderBottom: '1px solid rgba(241,233,216,0.12)',
      padding: '12px 24px',
      color: 'var(--vc-mission)',
    }}>
      <style>{`
        .rx-bar-inner {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; flex-wrap: wrap;
        }
        .rx-progress {
          display: flex; gap: 14px; flex: 1; justify-content: center;
          flex-wrap: wrap;
        }
        .rx-progress-item {
          display: flex; align-items: center; gap: 6px;
        }
        .rx-progress-label { display: none; }
        @media (min-width: 720px) {
          .rx-progress-label { display: inline; }
        }
      `}</style>
      <div className="rx-bar-inner">
        <a href="index.html" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          textDecoration: 'none', color: 'inherit',
        }}>
          <VCMonogram size={28} color="var(--vc-brass-pale)" />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 12, letterSpacing: '0.22em', color: 'var(--vc-brass-pale)' }}>
              VC&nbsp;WRITINGS
            </div>
            <div style={{ fontFamily: 'var(--vc-script)', fontSize: 14, color: 'rgba(241,233,216,0.75)', lineHeight: 1 }}>
              intake counter
            </div>
          </div>
        </a>

        <div className="rx-progress">
          {['Person','Occasion','Feeling','Prescription'].map((label, i) => (
            <div key={label} className="rx-progress-item">
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: i < step ? 'var(--vc-brass-pale)' : i === step ? 'var(--vc-shutter)' : 'transparent',
                border: `1px solid ${i <= step ? 'var(--vc-brass-pale)' : 'rgba(241,233,216,0.3)'}`,
              }} />
              <div className="rx-progress-label" style={{
                fontFamily: 'var(--vc-sign)', fontSize: 10, letterSpacing: '0.22em',
                color: i === step ? 'var(--vc-mission)' : 'rgba(241,233,216,0.5)',
                textTransform: 'uppercase',
              }}>
                {['I','II','III','IV'][i]} · {label}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          fontFamily: 'var(--vc-body)', fontStyle: 'italic',
          fontSize: 12, color: 'rgba(241,233,216,0.55)',
        }}>
          № <span style={{ fontVariantNumeric: 'oldstyle-nums tabular-nums' }}>0142</span>
        </div>
      </div>
    </div>
  );
}

// ─── Step shell ──────────────────────────────────────────────
function RxShell({ numeral, kicker, title, body, children }) {
  return (
    <div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div style={{
            fontFamily: 'var(--vc-display)', fontStyle: 'italic',
            fontSize: 26, color: 'var(--vc-brass)', lineHeight: 1,
          }}>{numeral}</div>
          <div className="vc-eyebrow">{kicker}</div>
        </div>
        <h2 className="vc-display-md" style={{ color: 'var(--vc-iron)', marginBottom: body ? 12 : 0 }}>
          {title}
        </h2>
        {body && (
          <p style={{
            fontFamily: 'var(--vc-body)', fontStyle: 'italic',
            fontSize: 16, lineHeight: 1.5, color: 'var(--vc-iron-soft)',
            maxWidth: 540, margin: 0,
          }}>{body}</p>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {children}
      </div>
    </div>
  );
}

function RxField({ label, hint, children }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
        <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 10, letterSpacing: '0.26em', color: 'var(--vc-iron)' }}>{label}</div>
        {hint && (
          <div style={{ fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 12, color: 'var(--vc-iron-soft)' }}>{hint}</div>
        )}
      </div>
      {children}
    </div>
  );
}

function RxInput({ value, onChange, placeholder, autoFocus, style }) {
  return (
    <input
      autoFocus={autoFocus}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%',
        background: 'transparent', border: 'none',
        borderBottom: '1px solid rgba(28,24,20,0.3)',
        fontFamily: 'var(--vc-script)',
        fontSize: 'clamp(26px, 4vw, 36px)', color: 'var(--vc-shutter)',
        outline: 'none', padding: '4px 0 6px',
        ...style,
      }}
    />
  );
}

function rxChip(active) {
  return {
    padding: '9px 16px',
    fontFamily: 'var(--vc-body)',
    fontSize: 15,
    fontStyle: active ? 'normal' : 'italic',
    background: active ? 'var(--vc-iron)' : 'transparent',
    color: active ? 'var(--vc-mission)' : 'var(--vc-iron)',
    border: `1px solid ${active ? 'var(--vc-iron)' : 'rgba(28,24,20,0.3)'}`,
    cursor: 'pointer', transition: 'all 0.18s', borderRadius: 0,
  };
}

// ─── Step 1 ──────────────────────────────────────────────────
function RxStep1({ rx, setRx, onContinue, canAdvance }) {
  const relations = ['Mother','Father','Beloved','Friend','Sister','Brother','Child','Yourself'];
  return (
    <RxShell
      numeral="I."
      kicker="Begin with a person"
      title={<>For whom is this poem<br/><i style={{ color: 'var(--vc-shutter)' }}>being prescribed?</i></>}
      body="A name on the bottle. We will hand-letter it. If they go by something only you call them, use that."
    >
      <RxField label="THEIR NAME" hint="written in fountain pen on the tag">
        <RxInput value={rx.name} onChange={v => setRx(r => ({ ...r, name: v }))}
          placeholder="Mama, Helen, the bride, my own dear self…" autoFocus />
      </RxField>
      <RxField label="WHO THEY ARE TO YOU" hint="select one — or leave it open">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {relations.map(r => (
            <button key={r} onClick={() => setRx(rx2 => ({ ...rx2, relation: rx2.relation === r ? '' : r }))}
              style={rxChip(rx.relation === r)}>
              {r}
            </button>
          ))}
        </div>
      </RxField>
      <div style={{
        marginTop: 10, paddingTop: 16,
        fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 13, color: 'var(--vc-iron-soft)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <VCDragonfly size={18} color="var(--vc-brass-deep)" cipher={false} />
        <span>The bottle holds one poem. Pick one person. The work is in the choosing.</span>
      </div>
    </RxShell>
  );
}

// ─── Step 2 ──────────────────────────────────────────────────
function RxStep2({ rx, setRx }) {
  const occasions = [
    { id: 'mother',   title: 'Mother\u2019s Day',     sub: 'the second Sunday in May' },
    { id: 'birthday', title: 'A birthday',            sub: 'a year more of them' },
    { id: 'wedding',  title: 'A wedding morning',     sub: 'before the church' },
    { id: 'grief',    title: 'Grief, gently held',    sub: 'when words are scarce' },
    { id: 'welcome',  title: 'A welcome',             sub: 'home, baby, news' },
    { id: 'apology',  title: 'An apology, long owed', sub: 'said properly, at last' },
    { id: 'courage',  title: 'Courage for Tuesday',   sub: 'the ordinary, hard day' },
    { id: 'because',  title: 'Just because',          sub: 'no reason at all' },
  ];
  return (
    <RxShell
      numeral="II."
      kicker={`A poem for ${rx.name || 'them'}`}
      title={<>What is the<br/><i style={{ color: 'var(--vc-marsh)' }}>occasion?</i></>}
      body="Or the absence of one. There is a poem for both."
    >
      <div style={{
        display: 'grid', gap: 10,
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      }}>
        {occasions.map(o => {
          const on = rx.occasion === o.id;
          return (
            <button key={o.id}
              onClick={() => setRx(r => ({ ...r, occasion: o.id, occasionLabel: o.title.toLowerCase() }))}
              style={{
                textAlign: 'left',
                padding: '14px 18px',
                background: on ? 'var(--vc-iron)' : 'var(--vc-mission)',
                color: on ? 'var(--vc-mission)' : 'var(--vc-iron)',
                border: `1px solid ${on ? 'var(--vc-iron)' : 'rgba(28,24,20,0.2)'}`,
                cursor: 'pointer', transition: 'all 0.2s', position: 'relative',
                borderRadius: 0,
              }}
            >
              <div style={{ fontFamily: 'var(--vc-display)', fontSize: 20, lineHeight: 1.15, marginBottom: 4 }}>
                {o.title}
              </div>
              <div style={{
                fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 13,
                color: on ? 'rgba(241,233,216,0.65)' : 'var(--vc-iron-soft)',
              }}>{o.sub}</div>
              {on && (
                <div style={{
                  position: 'absolute', top: 12, right: 14,
                  fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                  fontSize: 18, color: 'var(--vc-shutter)',
                }}>✓</div>
              )}
            </button>
          );
        })}
      </div>
    </RxShell>
  );
}

// ─── Step 3 ──────────────────────────────────────────────────
function RxStep3({ rx, setRx }) {
  const feels = [
    'tenderness','gratitude','courage','comfort','joy','wonder',
    'forgiveness','remembrance','hope','quiet','company','tenacity',
  ];
  const toggle = f => setRx(r => ({
    ...r,
    feelings: r.feelings.includes(f) ? r.feelings.filter(x => x !== f) : [...r.feelings, f].slice(0, 4),
  }));
  return (
    <RxShell
      numeral="III."
      kicker="The weather of the heart"
      title={<>Name the<br/><i style={{ color: 'var(--vc-lavender-deep)' }}>feeling you want sent.</i></>}
      body="As many as four. We will find a poem that holds them all at once."
    >
      <RxField label="FEELINGS · pick up to four">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {feels.map(f => (
            <button key={f} onClick={() => toggle(f)} style={rxChip(rx.feelings.includes(f))}>
              {f}
            </button>
          ))}
        </div>
      </RxField>
      <RxField label="TONE · how should it land?">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 14, color: 'var(--vc-iron-soft)', minWidth: 60 }}>tender</span>
          <input type="range" min="0" max="2" step="1" value={rx.tone}
            onChange={e => setRx(r => ({ ...r, tone: parseInt(e.target.value, 10) }))}
            style={{ flex: 1, accentColor: 'var(--vc-shutter)' }}
          />
          <span style={{ fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 14, color: 'var(--vc-iron-soft)', minWidth: 60, textAlign: 'right' }}>bracing</span>
        </div>
      </RxField>
      <RxField label="ANYTHING ELSE STEPHANIE SHOULD KNOW" hint="optional · she reads every one">
        <textarea value={rx.note} onChange={e => setRx(r => ({ ...r, note: e.target.value }))}
          placeholder="A detail. A line you remember her saying. A song."
          rows={3}
          style={{
            width: '100%', resize: 'none',
            background: 'transparent', border: 'none',
            borderBottom: '1px solid rgba(28,24,20,0.3)',
            fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 17,
            color: 'var(--vc-iron)', outline: 'none', padding: '6px 0',
            lineHeight: 1.5,
          }}
        />
      </RxField>
      <RxField label="FROM" hint="how the card will be signed">
        <RxInput value={rx.from} onChange={v => setRx(r => ({ ...r, from: v }))}
          placeholder="Anna" style={{ maxWidth: 320 }} />
      </RxField>
    </RxShell>
  );
}

// ─── Step 4: Reveal ──────────────────────────────────────────
function RxStep4({ rx, setRx, reset }) {
  const [phase, setPhase] = useStateRx(0);
  const writeMs = 2200;
  const sealMs = 850;
  useEffectRx(() => {
    const t1 = setTimeout(() => setPhase(1), writeMs);
    const t2 = setTimeout(() => setPhase(2), writeMs + sealMs);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <RxShell
      numeral="IV."
      kicker={`№ 0142 · filled for ${rx.name || 'you'}`}
      title={<>Your prescription<br/><i style={{ color: 'var(--vc-shutter)' }}>has been written.</i></>}
      body={null}
    >
      <div style={{
        background: 'var(--vc-parchment)',
        padding: 'clamp(20px, 4vw, 30px)',
        position: 'relative', overflow: 'hidden',
        boxShadow: 'inset 0 0 0 1px rgba(28,24,20,0.12)',
      }}>
        <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', right: -40, bottom: -30 }}>
          <VCDragonflyWatermark size={260} color="var(--vc-shutter)" opacity={0.06} />
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, gap: 14, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 9, letterSpacing: '0.28em', color: 'var(--vc-shutter)', marginBottom: 4 }}>
                PRESCRIPTION · No. 0142
              </div>
              <div style={{ fontFamily: 'var(--vc-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--vc-iron-soft)' }}>
                {rx.poet}
              </div>
              <div className="vc-display-sm" style={{ color: 'var(--vc-iron)' }}>
                {rx.title}
              </div>
            </div>
            <div style={{
              opacity: phase >= 1 ? 1 : 0,
              animation: phase >= 1 ? 'vcStamp 0.85s cubic-bezier(.2,.7,.2,1.1) both' : 'none',
            }}>
              <div className="vc-wax" style={{
                width: 64, height: 64,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  position: 'relative', zIndex: 2,
                  fontFamily: 'var(--vc-display)', fontStyle: 'italic',
                  fontSize: 22, color: 'rgba(255,220,200,0.85)',
                  textShadow: '0 1px 0 rgba(0,0,0,0.4)',
                }}>SVC</div>
              </div>
            </div>
          </div>

          <PenWrittenPoem text={(rx.poemLines || defaultPoem).join('\n')} ms={writeMs} />

          <div style={{
            marginTop: 18, paddingTop: 14,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 14, flexWrap: 'wrap',
            opacity: phase === 2 ? 1 : 0, transition: 'opacity 0.6s',
            fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 12, color: 'var(--vc-iron-soft)',
            borderTop: '1px solid rgba(28,24,20,0.2)',
          }}>
            <span>folded once · placed in the bottle · sealed in red</span>
            <span style={{ fontFamily: 'var(--vc-script)', fontSize: 22, color: 'var(--vc-shutter)' }}>
              {rx.from ? `— ${rx.from}` : '— S. V. C.'}
            </span>
          </div>
        </div>
      </div>

      {phase === 2 && (
        <div style={{
          display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap',
          animation: 'vcFadeIn 0.6s ease-out both',
        }}>
          <button className="vc-btn vc-btn--filled" onClick={() => alert('In a real shop, this would proceed to checkout. (Demo)')}>
            Send to {rx.name || 'them'} &nbsp;·&nbsp; $24
          </button>
          <button className="vc-btn">Wrap in linen · +$1</button>
          <button onClick={reset} style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 14,
            color: 'var(--vc-iron-soft)', textDecoration: 'underline', textUnderlineOffset: 3,
          }}>
            fill another →
          </button>
        </div>
      )}
    </RxShell>
  );
}

// ─── Preview card ────────────────────────────────────────────
function RxPreviewCard({ rx, step }) {
  return (
    <div style={{ width: '100%', maxWidth: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div className="vc-eyebrow" style={{ color: 'var(--vc-brass-pale)', alignSelf: 'flex-start' }}>
        {step === 3 ? 'ready to seal' : 'taking shape · live'}
      </div>

      <div style={{
        width: '100%', aspectRatio: '3.5 / 5',
        background: 'var(--vc-parchment)',
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 16px 36px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(28,24,20,0.15)',
      }}>
        <div className="vc-parchment-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', right: -20, bottom: -10 }}>
          <VCDragonflyWatermark size={220} color="var(--vc-shutter)" opacity={0.07} />
        </div>
        <div style={{ position: 'relative', padding: '20px 22px 16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <VCDragonfly size={18} color="var(--vc-iron)" cipher={false} />
            <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 8.5, letterSpacing: '0.26em', color: 'var(--vc-iron)' }}>
              VC&nbsp;WRITINGS
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 7.5, letterSpacing: '0.3em', color: 'var(--vc-shutter)' }}>
              No. 0142
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(28,24,20,0.2)', borderBottom: '1px solid rgba(28,24,20,0.2)', padding: '10px 0', marginBottom: 12 }}>
            <RxPrevRow label="FOR" value={rx.name} placeholder="(a name)" script />
            {rx.relation && <RxPrevRow label="WHO IS" value={rx.relation.toLowerCase()} compact />}
            <RxPrevRow label="ON" value={rx.occasionLabel} placeholder="(the occasion)" compact />
            <RxPrevRow label="FEELING" value={rx.feelings.join(', ')} placeholder="(the weather of the heart)" compact />
          </div>
          <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
            <div style={{ fontFamily: 'var(--vc-display)', fontStyle: 'italic', fontSize: 10, color: 'var(--vc-iron-soft)', marginBottom: 1 }}>
              {step >= 1 ? rx.poet : '—'}
            </div>
            <div style={{
              fontFamily: 'var(--vc-display)', fontSize: 14, lineHeight: 1.1, color: 'var(--vc-iron)',
              marginBottom: 8, opacity: step >= 1 ? 1 : 0.3,
            }}>
              {step >= 1 ? rx.title : 'a poem to be chosen'}
            </div>
            <div style={{
              fontFamily: 'var(--vc-body)', fontSize: 10.5, lineHeight: 1.55, color: 'var(--vc-iron)',
              whiteSpace: 'pre-line',
              opacity: step >= 2 ? 0.9 : 0.25,
              filter: step < 2 ? 'blur(2px)' : 'none',
            }}>
              {(rx.poemLines || defaultPoem).slice(0, 6).join('\n')}
            </div>
          </div>
          <div style={{
            marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(28,24,20,0.2)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 9, color: 'var(--vc-iron-soft)',
          }}>
            <span>filled by hand on Aviles St.</span>
            <span style={{
              fontFamily: 'var(--vc-script)', fontSize: 16,
              color: 'var(--vc-shutter)', opacity: rx.from ? 1 : 0.4,
            }}>
              {rx.from ? `— ${rx.from}` : '—'}
            </span>
          </div>
        </div>
      </div>

      <div style={{
        fontFamily: 'var(--vc-body)', fontStyle: 'italic', fontSize: 12,
        color: 'rgba(241,233,216,0.55)', textAlign: 'center',
      }}>
        {step === 3 ? 'sealed, sprigged, and yours' : 'card № 0142 · in progress'}
      </div>
    </div>
  );
}

function RxPrevRow({ label, value, placeholder, compact, script }) {
  const isEmpty = !value;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', padding: compact ? '3px 0' : '4px 0', alignItems: 'center' }}>
      <div style={{ fontFamily: 'var(--vc-sign)', fontSize: 7.5, letterSpacing: '0.22em', color: 'var(--vc-brass-deep)' }}>{label}</div>
      <div style={{
        fontFamily: script ? 'var(--vc-script)' : 'var(--vc-body)',
        fontStyle: !script && !isEmpty ? 'italic' : 'normal',
        fontSize: script ? 22 : 13, lineHeight: script ? 1 : 1.2,
        color: isEmpty ? 'rgba(28,24,20,0.3)' : (script ? 'var(--vc-shutter)' : 'var(--vc-iron)'),
        minHeight: script ? 22 : 16,
      }}>{value || placeholder}</div>
    </div>
  );
}

// ─── Bottom bar ──────────────────────────────────────────────
function RxBottomBar({ step, total, rx, onBack, onNext, onReset }) {
  const canAdvance = (
    (step === 0 && rx.name.trim().length > 0) ||
    (step === 1 && rx.occasion) ||
    (step === 2 && rx.feelings.length > 0) ||
    (step === 3)
  );
  return (
    <div style={{
      background: 'var(--vc-iron)',
      borderTop: '1px solid rgba(241,233,216,0.12)',
      padding: '14px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 12,
      position: 'sticky', bottom: 0,
    }}>
      <button onClick={step === 0 ? null : onBack} disabled={step === 0}
        style={{
          background: 'transparent', border: 'none',
          fontFamily: 'var(--vc-sign)', fontSize: 11, letterSpacing: '0.28em',
          color: step === 0 ? 'rgba(241,233,216,0.25)' : 'rgba(241,233,216,0.75)',
          cursor: step === 0 ? 'default' : 'pointer',
          textTransform: 'uppercase', padding: '8px 0',
        }}>← back</button>

      <div style={{
        fontFamily: 'var(--vc-body)', fontStyle: 'italic',
        fontSize: 12, color: 'rgba(241,233,216,0.5)',
        display: 'none',
      }} className="rx-bot-caption">
        {step === 3 ? 'a sprig of lavender will be tied at the neck' :
          step === 2 ? 'almost prescribed' :
          `step ${step + 1} of ${total}`}
      </div>
      <style>{`
        @media (min-width: 720px) { .rx-bot-caption { display: inline !important; } }
      `}</style>

      {step < total - 1 ? (
        <button onClick={canAdvance ? onNext : null} disabled={!canAdvance}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: canAdvance ? 'var(--vc-brass)' : 'transparent',
            border: `1px solid ${canAdvance ? 'var(--vc-brass)' : 'rgba(241,233,216,0.2)'}`,
            color: canAdvance ? 'var(--vc-iron)' : 'rgba(241,233,216,0.3)',
            fontFamily: 'var(--vc-sign)', fontSize: 11, letterSpacing: '0.28em',
            padding: '12px 22px', cursor: canAdvance ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s', textTransform: 'uppercase',
          }}>{step === 2 ? 'prescribe' : 'continue'} →</button>
      ) : (
        <button onClick={onReset}
          style={{
            background: 'transparent', border: '1px solid rgba(241,233,216,0.3)',
            color: 'rgba(241,233,216,0.75)',
            fontFamily: 'var(--vc-sign)', fontSize: 11, letterSpacing: '0.28em',
            padding: '12px 22px', cursor: 'pointer', textTransform: 'uppercase',
          }}>start over</button>
      )}
    </div>
  );
}

// ─── Pen-written poem ───────────────────────────────────────
function PenWrittenPoem({ text, ms = 2200 }) {
  const lines = text.split('\n');
  return (
    <div style={{
      fontFamily: 'var(--vc-body)', fontSize: 'clamp(14px, 1.5vw, 17px)',
      lineHeight: 1.7, color: 'var(--vc-iron)', whiteSpace: 'pre-line',
    }}>
      {lines.map((line, i) => (
        <div key={i} style={{
          opacity: 0,
          animation: `vcFadeIn 0.4s ease-out ${(ms/lines.length/1000)*i}s both`,
        }}>{line || '\u00A0'}</div>
      ))}
    </div>
  );
}

// ─── Poem library ───────────────────────────────────────────
const defaultPoem = [
  '"Hope" is the thing with feathers —',
  'That perches in the soul —',
  'And sings the tune without the words —',
  'And never stops — at all —',
];

function matchPoem(rx) {
  const f = rx.feelings.join(' ');
  const occ = rx.occasion;
  if (occ === 'grief' || /remember|comfort|quiet/.test(f)) {
    return {
      poet: 'Mary Oliver',
      title: 'When Death Comes',
      lines: [
        'When it\u2019s over, I want to say:',
        'all my life I was a bride married to amazement.',
        'I was the bridegroom, taking the world',
        'into my arms.',
        '',
        'I don\u2019t want to end up simply having visited this world.',
      ],
    };
  }
  if (occ === 'mother' || rx.relation === 'Mother') {
    return {
      poet: 'Lucille Clifton',
      title: 'won\u2019t you celebrate with me',
      lines: [
        'won\u2019t you celebrate with me',
        'what i have shaped into',
        'a kind of life? i had no model.',
        'born in babylon',
        'both nonwhite and woman',
        'what did i see to be except myself?',
      ],
    };
  }
  if (occ === 'courage' || /courage|tenacity/.test(f)) {
    return {
      poet: 'Mary Oliver',
      title: 'The Journey',
      lines: [
        'One day you finally knew',
        'what you had to do, and began,',
        'though the voices around you',
        'kept shouting',
        'their bad advice —',
      ],
    };
  }
  if (occ === 'wedding' || /joy|wonder/.test(f)) {
    return {
      poet: 'Walt Whitman',
      title: 'Song of the Open Road',
      lines: [
        'Afoot and light-hearted I take to the open road,',
        'Healthy, free, the world before me,',
        'The long brown path before me leading wherever I choose.',
        '',
        'Henceforth I ask not good-fortune, I myself am good-fortune.',
      ],
    };
  }
  if (occ === 'apology') {
    return {
      poet: 'William Carlos Williams',
      title: 'This Is Just To Say',
      lines: [
        'I have eaten','the plums','that were in','the icebox','',
        'and which','you were probably','saving for breakfast','',
        'Forgive me','they were delicious','so sweet','and so cold',
      ],
    };
  }
  if (occ === 'welcome' || /gratitude|tenderness/.test(f)) {
    return {
      poet: 'Wendell Berry',
      title: 'The Peace of Wild Things',
      lines: [
        'When despair for the world grows in me',
        'and I wake in the night at the least sound',
        'in fear of what my life and my children\u2019s lives may be,',
        'I go and lie down where the wood drake',
        'rests in his beauty on the water, and the great heron feeds.',
      ],
    };
  }
  return {
    poet: 'Emily Dickinson',
    title: '"Hope" is the thing with feathers —',
    lines: defaultPoem.concat([
      '', 'And sweetest — in the Gale — is heard —',
      'And sore must be the storm —',
      'That could abash the little Bird',
      'That kept so many warm —',
    ]),
  };
}

Object.assign(window, { PrescribePage });
