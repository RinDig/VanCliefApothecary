// The Van Clief dragonfly — a fine-line illustration with the SVC cipher
// tucked into the thorax. Used sparingly: storefront sign + prescription
// card watermark. Nowhere else.

function VCDragonfly({ size = 120, color = 'currentColor', cipher = true, style = {}, decorative = true }) {
  const stroke = color;
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      style={{ display: 'block', ...style }}
      aria-hidden={decorative}
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Upper-left wing */}
      <path
        d="M 120 100 C 80 78, 38 76, 18 96 C 30 102, 56 108, 84 112 C 60 110, 38 116, 26 130 C 50 132, 90 124, 118 116"
        strokeWidth="1.2"
      />
      {/* Wing veining — upper left */}
      <path d="M 32 100 Q 70 104, 110 108" strokeWidth="0.5" opacity="0.6" />
      <path d="M 36 116 Q 72 118, 112 116" strokeWidth="0.5" opacity="0.6" />
      <path d="M 50 96 L 56 110" strokeWidth="0.4" opacity="0.5" />
      <path d="M 70 98 L 74 110" strokeWidth="0.4" opacity="0.5" />
      <path d="M 90 100 L 92 112" strokeWidth="0.4" opacity="0.5" />

      {/* Upper-right wing */}
      <path
        d="M 120 100 C 160 78, 202 76, 222 96 C 210 102, 184 108, 156 112 C 180 110, 202 116, 214 130 C 190 132, 150 124, 122 116"
        strokeWidth="1.2"
      />
      <path d="M 208 100 Q 170 104, 130 108" strokeWidth="0.5" opacity="0.6" />
      <path d="M 204 116 Q 168 118, 128 116" strokeWidth="0.5" opacity="0.6" />
      <path d="M 190 96 L 184 110" strokeWidth="0.4" opacity="0.5" />
      <path d="M 170 98 L 166 110" strokeWidth="0.4" opacity="0.5" />
      <path d="M 150 100 L 148 112" strokeWidth="0.4" opacity="0.5" />

      {/* Lower-left wing — shorter, angled down */}
      <path
        d="M 120 132 C 88 144, 50 152, 30 144 C 42 138, 70 132, 96 130 C 76 134, 58 144, 50 158 C 74 158, 102 148, 120 140"
        strokeWidth="1.2"
      />
      <path d="M 42 142 Q 80 140, 116 136" strokeWidth="0.5" opacity="0.55" />
      <path d="M 56 152 Q 86 148, 116 142" strokeWidth="0.5" opacity="0.55" />

      {/* Lower-right wing */}
      <path
        d="M 120 132 C 152 144, 190 152, 210 144 C 198 138, 170 132, 144 130 C 164 134, 182 144, 190 158 C 166 158, 138 148, 120 140"
        strokeWidth="1.2"
      />
      <path d="M 198 142 Q 160 140, 124 136" strokeWidth="0.5" opacity="0.55" />
      <path d="M 184 152 Q 154 148, 124 142" strokeWidth="0.5" opacity="0.55" />

      {/* Head */}
      <ellipse cx="120" cy="78" rx="8" ry="6.5" strokeWidth="1.3" fill={stroke} fillOpacity="0.06" />
      {/* Eyes — tiny dots */}
      <circle cx="116" cy="77" r="1.5" fill={stroke} stroke="none" />
      <circle cx="124" cy="77" r="1.5" fill={stroke} stroke="none" />

      {/* Thorax — short, slightly wider */}
      <path d="M 113 86 L 127 86 L 126 100 L 114 100 Z" strokeWidth="1.2" fill={stroke} fillOpacity="0.08" />

      {/* Abdomen — long, slender, segmented */}
      <path d="M 116 102 L 124 102 L 123 220 L 117 220 Z" strokeWidth="1.2" fill={stroke} fillOpacity="0.04" />
      {/* Segments */}
      <line x1="116" y1="120" x2="124" y2="120" strokeWidth="0.7" opacity="0.7" />
      <line x1="116" y1="138" x2="124" y2="138" strokeWidth="0.7" opacity="0.7" />
      <line x1="116" y1="156" x2="124" y2="156" strokeWidth="0.7" opacity="0.7" />
      <line x1="116" y1="174" x2="124" y2="174" strokeWidth="0.7" opacity="0.7" />
      <line x1="117" y1="192" x2="123" y2="192" strokeWidth="0.7" opacity="0.7" />
      <line x1="117" y1="208" x2="123" y2="208" strokeWidth="0.7" opacity="0.7" />

      {/* Antennae — short, just two whisks */}
      <path d="M 117 74 Q 113 68, 110 64" strokeWidth="0.6" opacity="0.7" />
      <path d="M 123 74 Q 127 68, 130 64" strokeWidth="0.6" opacity="0.7" />

      {/* SVC cipher — inside the thorax, almost too small to read */}
      {cipher && (
        <g opacity="0.85">
          <text
            x="120" y="95"
            fontFamily="'IM Fell English', serif"
            fontSize="7"
            fontStyle="italic"
            textAnchor="middle"
            fill={stroke}
            stroke="none"
            letterSpacing="0.5"
          >SVC</text>
        </g>
      )}
    </svg>
  );
}

// A pared-down silhouette for watermarks — wings only, very faint.
function VCDragonflyWatermark({ size = 380, color = 'currentColor', opacity = 0.06, style = {} }) {
  return (
    <svg
      viewBox="0 0 240 240"
      width={size}
      height={size}
      style={{ display: 'block', opacity, ...style }}
      aria-hidden="true"
      fill={color}
      stroke="none"
    >
      <path d="M 120 100 C 80 78, 38 76, 18 96 C 30 102, 56 108, 84 112 C 60 110, 38 116, 26 130 C 50 132, 90 124, 118 116 Z" opacity="0.6" />
      <path d="M 120 100 C 160 78, 202 76, 222 96 C 210 102, 184 108, 156 112 C 180 110, 202 116, 214 130 C 190 132, 150 124, 122 116 Z" opacity="0.6" />
      <path d="M 120 132 C 88 144, 50 152, 30 144 C 42 138, 70 132, 96 130 C 76 134, 58 144, 50 158 C 74 158, 102 148, 120 140 Z" opacity="0.5" />
      <path d="M 120 132 C 152 144, 190 152, 210 144 C 198 138, 170 132, 144 130 C 164 134, 182 144, 190 158 C 166 158, 138 148, 120 140 Z" opacity="0.5" />
      <ellipse cx="120" cy="78" rx="8" ry="6.5" />
      <rect x="113" y="86" width="14" height="14" />
      <rect x="116" y="102" width="8" height="118" rx="1" />
    </svg>
  );
}

// The "VC" monogram — when you don't want the whole creature.
function VCMonogram({ size = 80, color = 'currentColor', style = {} }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'block', ...style }} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="50" r="44" opacity="0.4" />
        <circle cx="50" cy="50" r="40" opacity="0.7" />
        {/* V */}
        <path d="M 28 32 L 42 64 L 50 64 L 36 32 Z" fill={color} stroke="none" />
        {/* C */}
        <path d="M 72 38 C 64 38, 58 44, 58 52 C 58 60, 64 66, 72 66 C 74 66, 76 65.5, 78 65"
          strokeWidth="3.5" fill="none" />
        {/* tiny dragonfly between */}
        <line x1="50" y1="36" x2="50" y2="68" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="50" cy="34" rx="1.5" ry="1.2" fill={color} stroke="none" />
        <path d="M 46 40 Q 40 38, 36 42" strokeWidth="0.6" opacity="0.6" />
        <path d="M 54 40 Q 60 38, 64 42" strokeWidth="0.6" opacity="0.6" />
        <path d="M 46 44 Q 42 44, 38 46" strokeWidth="0.5" opacity="0.5" />
        <path d="M 54 44 Q 58 44, 62 46" strokeWidth="0.5" opacity="0.5" />
      </g>
    </svg>
  );
}

Object.assign(window, { VCDragonfly, VCDragonflyWatermark, VCMonogram });
