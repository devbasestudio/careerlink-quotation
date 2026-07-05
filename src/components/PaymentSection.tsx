import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';
import { ArrowRight, CircleDollarSign } from 'lucide-react';

export function PaymentSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="payment" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Payment Terms"
          title="ပေးချေမှု အစီအစဉ်"
          subtitle="Payment ကို Phase (2) ခု ခွဲပြီး ပေးချေနိုင်ပါတယ်"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        >
          {/* Arrow connector */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="w-10 h-10 rounded-full bg-primary border border-black/[0.08] flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </div>
          </div>

          {/* First payment */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 text-center card-shine glass-hover ${
              isVisible ? 'animate-slide-left' : 'opacity-0'
            }`}
          >
            <div className="icon-container icon-container-lg mx-auto mb-6">
              <CircleDollarSign className="w-6 h-6 text-neutral-500" />
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-muted/40 font-medium">
              First Installment
            </span>

            <h3 className="font-heading text-base font-semibold text-secondary mt-2 mb-6 mm-heading">
              ပထမ အရစ်
            </h3>

            <div className="mb-6">
              <span className="font-heading text-5xl font-extrabold gradient-text-bright">
                50
              </span>
              <span className="text-xl text-muted/40 ml-1 font-heading">%</span>
            </div>

            <div className="divider max-w-12 mx-auto mb-6" />

            <p className="mm-text-sm text-muted/50">
              Project စတင်ချိန်မှာ
            </p>
            <p className="font-heading text-lg text-secondary/70 font-semibold mt-2">
              9 Lakhs
            </p>
            <p className="mm-text-sm text-muted/40 mt-1">
              (၉ သိန်း)
            </p>
          </div>

          {/* Second payment */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 text-center card-shine glass-hover ${
              isVisible ? 'animate-slide-right' : 'opacity-0'
            }`}
          >
            <div className="icon-container icon-container-lg mx-auto mb-6">
              <CircleDollarSign className="w-6 h-6 text-neutral-500" />
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-muted/40 font-medium">
              Final Installment
            </span>

            <h3 className="font-heading text-base font-semibold text-secondary mt-2 mb-6 mm-heading">
              ဒုတိယ အရစ်
            </h3>

            <div className="mb-6">
              <span className="font-heading text-5xl font-extrabold gradient-text-bright">
                50
              </span>
              <span className="text-xl text-muted/40 ml-1 font-heading">%</span>
            </div>

            <div className="divider max-w-12 mx-auto mb-6" />

            <p className="mm-text-sm text-muted/50">
              Project အားလုံး Complete ဖြစ်ချိန်မှာ
            </p>
            <p className="font-heading text-lg text-secondary/70 font-semibold mt-2">
              9 Lakhs
            </p>
            <p className="mm-text-sm text-muted/40 mt-1">
              (၉ သိန်း)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
