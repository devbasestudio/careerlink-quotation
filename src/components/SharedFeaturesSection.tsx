import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

const sharedFeatures = [
  {
    icon: '🔒',
    title: 'Security အပြည့်',
    description:
      'Authentication၊ Authorization၊ Data Encryption နှင့် Security Best Practices များဖြင့် လုံခြုံစိတ်ချစွာ အသုံးပြုနိုင်ပါတယ်',
  },
  {
    icon: '⚡',
    title: 'Performance အပြည့်',
    description:
      'Optimized Loading Speed၊ Caching Strategy၊ Image Optimization နှင့် Code Splitting ဖြင့် မြန်ဆန်စွာ အလုပ်လုပ်ပါတယ်',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'Mobile Phone၊ Tablet နှင့် Desktop အားလုံးတွင် လှပစွာ ပြသနိုင်ရန် Responsive Design ဖြင့် တည်ဆောက်ထားပါတယ်',
  },
  {
    icon: '🗄️',
    title: 'Supabase Database',
    description:
      'Supabase Database ကို Setup လုပ်ပေးပြီး Data Management အတွက် ပြည့်စုံစွာ စီစဉ်ပေးပါတယ်',
  },
  {
    icon: '🌐',
    title: 'Domain Setup',
    description:
      'Custom Domain များကို Setup လုပ်ပေးပြီး SSL Certificate ဖြင့် လုံခြုံစိတ်ချရပါတယ်',
  },
  {
    icon: '🚀',
    title: 'Production-Ready',
    description:
      'Data ထည့်ပြီးတဲ့အထိ လုံးဝ တန်းပြီး အသုံးပြုလို့ရတဲ့အထိ ကူညီပေးပါမယ်',
  },
];

export function SharedFeaturesSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="shared-features" className="py-24 md:py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Included in All"
          title="ဝဘ်ဆိုက် သုံးခုလုံးတွင် ပါဝင်မည့်"
          subtitle="ဝဘ်ဆိုက်တိုင်းကို အောက်ပါ အရည်အသွေးစံနှုန်းများဖြင့် တည်ဆောက်ပေးပါမယ်"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharedFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`glass rounded-2xl p-7 card-shine transition-all duration-500 hover:border-white/10 group ${
                isVisible
                  ? `animate-scale-in delay-${(index + 1) * 100}`
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4 transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
