import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function MaintenanceSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="maintenance" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="After Delivery"
          title="Maintenance & Support"
          subtitle="ဝဘ်ဆိုက် အပ်နှံပြီးနောက် ပံ့ပိုးမှုများ"
        />

        <div ref={ref} className="space-y-6">
          {/* Free maintenance card */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 card-shine transition-all duration-500 hover:border-white/10 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                  အခမဲ့ Maintenance — ၁ လ
                </h3>
                <p className="text-muted/70 text-[15px] leading-relaxed">
                  ဝဘ်ဆိုက် တည်ဆောက်ပြီးလို့ Client ဆီ အပ်နှံပြီးတဲ့အခါ
                  Maintenance <span className="text-secondary/80 font-medium">တစ်လ အခမဲ့</span> ပေးပါတယ်။
                  ဖြစ်လာတဲ့ ပြဿနာများနှင့် Security ပိုင်းဆိုင်ရာ ကိစ္စရပ်များကို
                  အကုန်လုံး တာဝန်ယူ ဖြေရှင်းပေးပါတယ်။
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🐛', title: 'Bug Fixes', desc: 'ပြဿနာများ ဖြေရှင်းခြင်း' },
                { icon: '🔐', title: 'Security', desc: 'လုံခြုံရေး ကိစ္စများ' },
                { icon: '📞', title: 'Support', desc: 'နည်းပညာ ပံ့ပိုးမှု' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/[0.02] rounded-xl p-4 text-center border border-white/[0.04] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.08]"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="font-heading text-sm font-semibold text-secondary/80 mt-2">
                    {item.title}
                  </h4>
                  <p className="text-muted/50 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After maintenance */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 card-shine transition-all duration-500 hover:border-white/10 ${
              isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-3xl">🔧</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                  ထပ်တိုး လုပ်ဆောင်ခြင်း
                </h3>
                <p className="text-muted/70 text-[15px] leading-relaxed">
                  အခမဲ့ Maintenance ကာလ (၁) လ ပြည့်သွားပြီးနောက်
                  ထပ်မံ ပြင်ဆင်ချင်သည်များ ရှိပါက ကျွန်တော်တို့ဆီမှာ
                  သီးသန့် လာပြောပြီး ဈေးတွက်ချက်ကာ ထပ်တိုး
                  လုပ်ဆောင်လို့ ရပါတယ်။
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
