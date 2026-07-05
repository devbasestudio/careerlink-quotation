import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function PricingSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Pricing"
          title="ကုန်ကျစရိတ်"
          subtitle="ဝဘ်ဆိုက် သုံးခုလုံးအတွက် စုစုပေါင်း ကုန်ကျစရိတ်"
        />

        <div
          ref={ref}
          className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
        >
          {/* Main price card */}
          <div className="glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden animate-pulse-glow">
            {/* Decorative corner lines */}
            <div className="absolute top-0 left-0 w-24 h-24">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/20 to-transparent" />
            </div>
            <div className="absolute top-0 right-0 w-24 h-24">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-white/20 to-transparent" />
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-white/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24">
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-white/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24">
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            <span className="text-xs tracking-[0.3em] uppercase text-muted/60 font-medium">
              စုစုပေါင်း
            </span>

            <div className="mt-4 mb-2">
              <span className="font-heading text-6xl md:text-8xl font-extrabold gradient-text">
                ၁၅
              </span>
              <span className="font-heading text-3xl md:text-4xl font-bold text-secondary/50 ml-2">
                သိန်း
              </span>
            </div>

            <p className="text-muted text-lg mb-10">မြန်မာကျပ်</p>

            <div className="divider max-w-48 mx-auto mb-10" />

            {/* Included items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
              {[
                'ဝဘ်ဆိုက် (၃) ခု တည်ဆောက်ပေးခြင်း',
                'Domain Setup လုပ်ပေးခြင်း',
                'Supabase Database Setup',
                'SSL Certificate Setup',
                'Sample Data ထည့်ပေးခြင်း',
                'Data အစစ် ထည့်ပေးခြင်း',
                'Maintenance တစ်လ အခမဲ့',
                'Security & Bug Fixes',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <svg
                    className="w-4 h-4 mt-0.5 text-white/40 flex-shrink-0 transition-colors duration-300 group-hover:text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-secondary/60 transition-colors duration-300 group-hover:text-secondary/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
