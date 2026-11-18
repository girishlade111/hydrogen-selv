import { SITE_ASSETS } from '../data/portfolio';

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#09090b]"
    >
      <img
        src={SITE_ASSETS.background}
        alt=""
        referrerPolicy="no-referrer"
        className="h-full w-full scale-[1.03] object-cover object-center opacity-70"
      />
      {/* Subdued warm-mauve / charcoal atmospheric veil matching reference contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(16, 14, 18, 0.56) 0%, rgba(12, 11, 14, 0.64) 48%, rgba(8, 8, 10, 0.86) 100%)',
        }}
      />
      {/* Gentle edge vignette so the central card column reads effortlessly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, transparent 25%, rgba(6, 6, 8, 0.58) 100%)',
        }}
      />
    </div>
  );
}
