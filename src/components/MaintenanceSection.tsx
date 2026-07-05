import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Bug, Lock, Headphones, Wrench } from 'lucide-react';

export function MaintenanceSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="maintenance" className="py-24 md:py-32 px-6 relative section-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          label="After Delivery"
          title="Maintenance & Support"
          subtitle="Website Delivery ပြီးနောက် ပံ့ပိုးမှုများ"
        />

        <div ref={ref} className="space-y-6">
          {/* Free maintenance */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 card-shine glass-hover ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="icon-container icon-container-lg flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-neutral-500" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-secondary mb-3 tracking-tight">
                  Free Maintenance — <span className="mm-heading">၁ လ</span>
                </h3>
                <p className="mm-text text-muted/50 text-[15px]">
                  Website Develop ပြီးပြီး Client ထံ Deliver လုပ်ပြီးတဲ့အခါ
                  Maintenance <span className="text-secondary/70 font-medium">1 Month အခမဲ့</span> ပေးပါတယ်။
                  ဖြစ်ပေါ်လာတဲ့ Issues တွေနဲ့ Security Related ကိစ္စတွေကို
                  အကုန်လုံး တာဝန်ယူ ဖြေရှင်းပေးပါတယ်။
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { Icon: Bug, title: 'Bug Fixes', desc: 'Issues များ Fix လုပ်ပေးခြင်း' },
                { Icon: Lock, title: 'Security', desc: 'Security Patches & Updates' },
                { Icon: Headphones, title: 'Support', desc: 'Technical Support ပေးခြင်း' },
              ].map((item) => {
                const { Icon } = item;
                return (
                  <div
                    key={item.title}
                    className="bg-black/[0.015] rounded-xl p-5 text-center border border-black/[0.04] transition-all duration-400 hover:bg-black/[0.03] hover:border-black/[0.08] group"
                  >
                    <div className="icon-container mx-auto mb-3">
                      <Icon className="w-4.5 h-4.5 text-neutral-400 transition-colors duration-300 group-hover:text-secondary" />
                    </div>
                    <h4 className="font-heading text-sm font-semibold text-secondary/70 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mm-text-sm text-muted/40 text-xs mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional work */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 card-shine glass-hover ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '150ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="icon-container icon-container-lg flex-shrink-0">
                <Wrench className="w-6 h-6 text-neutral-500" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-secondary mb-3 tracking-tight">
                  Additional Development
                </h3>
                <p className="mm-text text-muted/50 text-[15px]">
                  Free Maintenance ကာလ (1 Month) ပြည့်ပြီးနောက်
                  ထပ်မံ ပြင်ဆင်ချင်တာ ရှိရင် ကျွန်တော်တို့ဆီ
                  ဆက်သွယ်ပြီး Separate Quotation နဲ့ ထပ်တိုး
                  Develop လုပ်ပေးလို့ ရပါတယ်။
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
