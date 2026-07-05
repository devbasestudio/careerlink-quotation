import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';
import { Check, Gem } from 'lucide-react';

export function PricingSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const includedItems = [
    'Website (3) ခု Development',
    'Domain Setup & Configuration',
    'Supabase Database Setup',
    'SSL Certificate Setup',
    'Sample Data ထည့်ပေးခြင်း',
    'Real Data ထည့်ပေးခြင်း',
    'Maintenance 1 Month အခမဲ့',
    'Security & Bug Fixes',
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Investment"
          title="Project ကုန်ကျစရိတ်"
          subtitle="Website သုံးခုလုံးအတွက် စုစုပေါင်း ကုန်ကျစရိတ်"
        />

        <div
          ref={ref}
          className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
        >
          <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden animate-glow">
            {/* Corner decorations */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos) => (
              <div key={pos} className={`absolute ${pos} w-20 h-20`}>
                <div
                  className={`absolute ${pos.includes('top') ? 'top-0' : 'bottom-0'} ${pos.includes('left') ? 'left-0' : 'right-0'} w-full h-px bg-gradient-to-${pos.includes('left') ? 'r' : 'l'} from-white/15 to-transparent`}
                />
                <div
                  className={`absolute ${pos.includes('top') ? 'top-0' : 'bottom-0'} ${pos.includes('left') ? 'left-0' : 'right-0'} w-px h-full bg-gradient-to-${pos.includes('top') ? 'b' : 't'} from-white/15 to-transparent`}
                />
              </div>
            ))}

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] mb-8">
              <Gem className="w-6 h-6 text-white/40" />
            </div>

            <span className="text-[11px] tracking-[0.3em] uppercase text-muted/50 font-medium block mb-4">
              Total Investment
            </span>

            {/* Price */}
            <div className="mb-3">
              <span className="font-heading text-6xl md:text-8xl font-extrabold gradient-text-bright">
                15
              </span>
              <span className="font-heading text-2xl md:text-3xl font-bold text-secondary/40 ml-2">
                Lakhs
              </span>
            </div>

            <p className="mm-text text-muted/50 text-base mb-12">မြန်မာကျပ် (၁,၅၀၀,၀၀၀ ကျပ်)</p>

            <div className="divider max-w-40 mx-auto mb-12" />

            {/* Included items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
              {includedItems.map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-white/[0.15]">
                    <Check className="w-3 h-3 text-white/40 transition-colors duration-300 group-hover:text-white/70" />
                  </div>
                  <span className="mm-text-sm text-secondary/50 transition-colors duration-300 group-hover:text-secondary/80">
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
