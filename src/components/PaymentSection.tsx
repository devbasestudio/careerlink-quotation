import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

export function PaymentSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="payment" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Payment"
          title="ပေးချေမှု စည်းကမ်းချက်များ"
          subtitle="ပေးချေမှုကို အဆင့် (၂) ဆင့်ဖြင့် ခွဲ၍ ပေးချေနိုင်ပါတယ်"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First payment */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 text-center card-shine transition-all duration-500 hover:border-white/10 ${
              isVisible ? 'animate-slide-left' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="font-heading text-xl font-bold text-secondary/70">
                ၁
              </span>
            </div>

            <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
              ပထမ အရစ်
            </h3>

            <div className="my-6">
              <span className="font-heading text-5xl font-extrabold gradient-text">
                ၅၀
              </span>
              <span className="text-2xl text-muted ml-1">%</span>
            </div>

            <div className="divider max-w-16 mx-auto mb-6" />

            <p className="text-muted/70 text-sm leading-relaxed">
              ပရောဂျက် စတင်ဆောင်ရွက်ချိန်တွင်
              <br />
              <span className="text-secondary/60 font-medium">
                ၇ သိန်း ၅ သောင်း
              </span>{' '}
              ပေးချေရပါမယ်
            </p>
          </div>

          {/* Second payment */}
          <div
            className={`glass rounded-2xl p-8 md:p-10 text-center card-shine transition-all duration-500 hover:border-white/10 ${
              isVisible ? 'animate-slide-right' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="font-heading text-xl font-bold text-secondary/70">
                ၂
              </span>
            </div>

            <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
              ဒုတိယ အရစ်
            </h3>

            <div className="my-6">
              <span className="font-heading text-5xl font-extrabold gradient-text">
                ၅၀
              </span>
              <span className="text-2xl text-muted ml-1">%</span>
            </div>

            <div className="divider max-w-16 mx-auto mb-6" />

            <p className="text-muted/70 text-sm leading-relaxed">
              ပရောဂျက် အားလုံး ပြီးဆုံးသွားချိန်တွင်
              <br />
              <span className="text-secondary/60 font-medium">
                ၇ သိန်း ၅ သောင်း
              </span>{' '}
              ပေးချေရပါမယ်
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
