import { useScrollReveal } from '../hooks/useScrollReveal';

export function HeroSection() {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/[0.015] rounded-full blur-3xl animate-float delay-300" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div
          className={`inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="text-xs tracking-[0.2em] uppercase text-muted font-medium">
            Project Quotation
          </span>
        </div>

        <h1
          className={`font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6 ${
            isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">ဝဘ်ဆိုက်</span>
          <br />
          <span className="text-secondary/60">တည်ဆောက်ခြင်း</span>
        </h1>

        <p
          className={`text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          Security အပြည့်၊ Performance အပြည့်နဲ့ Production-Ready ဖြစ်တဲ့
          <br className="hidden md:block" />
          ဝဘ်ဆိုက် <span className="text-secondary font-medium">သုံးခု</span>ကို
          ပရော်ဖက်ရှင်နယ်စံနှုန်းနဲ့ တည်ဆောက်ပေးပါမယ်
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${
            isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'
          }`}
        >
          <a
            href="#pricing"
            className="group px-8 py-3.5 bg-secondary text-primary font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            ကုန်ကျစရိတ် ကြည့်ရန်
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 glass rounded-full text-sm tracking-wide font-medium transition-all duration-300 hover:bg-white/[0.06] text-muted hover:text-secondary"
          >
            Feature များ ကြည့်ရန်
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`flex items-center justify-center gap-8 md:gap-16 ${
            isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'
          }`}
        >
          {[
            { value: '၃', label: 'ဝဘ်ဆိုက်' },
            { value: '၁ ပတ်', label: 'တည်ဆောက်ချိန်' },
            { value: '၁၅ သိန်း', label: 'စုစုပေါင်း' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-secondary">
                {stat.value}
              </div>
              <div className="text-xs text-muted mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 ${
          isVisible ? 'animate-fade-in delay-600' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted/50">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
