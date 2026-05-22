/** Display width in CSS (must match App.css .hero-side-image max-width). */
export const HERO_SIDE_DISPLAY_WIDTH = 580
export const HERO_SIDE_DISPLAY_HEIGHT = Math.round((702 / 398) * HERO_SIDE_DISPLAY_WIDTH)

const HERO_1X = '/hero-side-image.png'
const HERO_2X = '/hero-side-image@2x.png'

export function HeroSideImage() {
  return (
    <div className="hero-side-image-wrap">
      <img
        src={HERO_1X}
        srcSet={`${HERO_1X} ${HERO_SIDE_DISPLAY_WIDTH}w, ${HERO_2X} ${HERO_SIDE_DISPLAY_WIDTH * 2}w`}
        sizes="(max-width: 960px) min(100vw - 48px, 580px), min(42vw, 760px)"
        width={HERO_SIDE_DISPLAY_WIDTH}
        height={HERO_SIDE_DISPLAY_HEIGHT}
        alt="Business analyst reviewing analytics and decision intelligence dashboards"
        className="hero-side-image"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}
