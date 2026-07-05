import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="text-center mb-16">
      <span
        className={`inline-block text-xs tracking-[0.3em] uppercase text-muted mb-4 font-medium ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {label}
      </span>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 ${
          isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`divider max-w-24 mx-auto mt-8 ${
          isVisible ? 'animate-fade-in delay-300' : 'opacity-0'
        }`}
      />
    </div>
  );
}
