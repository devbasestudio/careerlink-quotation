import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowDown, Sparkles } from 'lucide-react';

export function HeroSection() {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-black/[0.015] rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-black/[0.01] rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-10 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-muted font-medium">
            Project Quotation
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight mb-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '100ms' }}
        >
          <span className="gradient-text-bright">Website</span>
          <br />
          <span className="text-secondary/60 mm-heading text-4xl md:text-5xl lg:text-6xl">ဖွံ့ဖြိုးတိုးတက်ရေး အဆိုပြုလွှာ</span>
        </h1>

        {/* Description */}
        <p
          className={`mm-text text-muted text-base md:text-lg max-w-2xl mx-auto mb-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          လုံခြုံစိတ်ချရမှု (Security)၊ မြန်ဆန်သွက်လက်မှု (Performance) အပြည့်အဝဖြင့် စနစ်တကျ အသုံးပြုနိုင်မည့်
          <br className="hidden md:block" />
          Custom Website <span className="text-secondary font-medium">(၄) ခုအား</span> Professional စံချိန်စံညွှန်းများနှင့်အညီ တည်ဆောက်ပေးသွားမည် ဖြစ်ပါသည်။
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="#pricing"
            className="group px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full text-sm tracking-wide transition-all duration-400 hover:bg-neutral-800 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <span className="mm-heading">ကုန်ကျစရိတ်နှင့် ဝန်ဆောင်မှုများ</span>
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 glass rounded-full text-sm tracking-wide font-medium transition-all duration-400 hover:bg-black/[0.03] text-muted hover:text-secondary"
          >
            <span className="mm-heading">ပါဝင်မည့် စနစ်များကို ကြည့်ရန်</span>
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex items-center justify-center gap-10 md:gap-20 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '400ms' }}
        >
          {[
            { value: '4', label: 'Websites' },
            { value: '2 Weeks', label: 'Development' },
            { value: '18 Lakhs', label: 'Total Cost' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              <div className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] text-muted/60 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
              {i < 2 && (
                <div className="absolute -right-5 md:-right-10 top-1/2 -translate-y-1/2 w-px h-8 bg-white/[0.06] hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{ animationDelay: '600ms' }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.3em] uppercase text-muted/40">
            Scroll Down
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-muted/30 animate-float" />
        </div>
      </div>
    </section>
  );
}
