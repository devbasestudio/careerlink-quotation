import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="text-center mb-20">
      <span
        className={`inline-block text-[11px] tracking-[0.3em] uppercase text-muted/60 mb-5 font-medium ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {label}
      </span>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-bright mb-5 leading-tight ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '100ms' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mm-text text-muted/70 text-base max-w-2xl mx-auto ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`divider max-w-20 mx-auto mt-10 ${
          isVisible ? 'animate-line-draw' : 'opacity-0'
        }`}
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
}
