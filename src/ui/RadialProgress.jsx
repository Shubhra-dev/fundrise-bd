// src/components/ui/RadialProgress.jsx
import { useMemo } from 'react';

/**
 * Radial (donut) progress with rounded cap.
 *
 * Props:
 * - value: 0..100
 * - size: px (SVG box)
 * - strokeWidth: ring thickness in px
 * - trackColor: Tailwind class or hex for the track
 * - progressColor: Tailwind class or hex for the progress
 * - bgClass: wrapper classes
 * - rounded: boolean (rounded linecap)
 * - showCenter: boolean (show % text in middle)
 * - duration: ms (animation)
 * - startAngle: degrees (default -90 = start at top)
 */
export default function RadialProgress({
  value = 50,
  size = 56,
  strokeWidth = 8,
  trackColor = 'stroke-slate-200',
  progressColor = 'stroke-bg-dusky-plum-base', // your theme color
  bgClass = '',
  rounded = true,
  showCenter = false,
  duration = 700,
  startAngle = -90,
}) {
  const clamped = Math.max(0, Math.min(100, value));
  const r = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth]);
  const C = useMemo(() => 2 * Math.PI * r, [r]);
  const dashOffset = useMemo(() => C * (1 - clamped / 100), [C, clamped]);

  return (
    <div
      className={`inline-flex items-center pl-2`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${clamped}%`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={bgClass}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className={trackColor}
          fill="none"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <g transform={`rotate(${startAngle} ${size / 2} ${size / 2})`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            className={progressColor}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap={rounded ? 'round' : 'butt'}
            strokeDasharray={C}
            strokeDashoffset={dashOffset}
            style={{
              transition: `stroke-dashoffset ${duration}ms ease`,
            }}
          />
        </g>
      </svg>

      {showCenter && (
        <span className="absolute text-xs font-semibold text-slate-700">{clamped}%</span>
      )}
    </div>
  );
}
