import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  crumb: string;
}

export default function PageHero({ title, subtitle, image, crumb }: PageHeroProps) {
  return (
    <div className="relative w-full">
      <div className="relative h-[48vh] min-h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-forest/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pb-16">
          <p className="text-secondary tracking-[0.2em] uppercase text-xs mb-3">From My Oven</p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold text-white mb-4">
            {title}
          </h1>
          {subtitle && <p className="text-white/85 max-w-2xl mb-4">{subtitle}</p>}
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Link to="/" className="hover:text-secondary transition">
              Home
            </Link>
            <span>|</span>
            <span className="text-secondary">{crumb}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none leading-none">
          <svg
            className="block w-full h-[110px] md:h-[150px]"
            viewBox="0 0 1440 250"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0,80L60,120C120,160,240,220,360,220C480,220,600,160,720,140C840,120,960,160,1080,180C1200,200,1320,160,1380,140L1440,120L1440,250L0,250Z"
              fill="#faf6f0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
