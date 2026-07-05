import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';
import {
  ShieldCheck,
  Zap,
  Smartphone,
  Database,
  Globe,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

interface SharedFeature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const sharedFeatures: SharedFeature[] = [
  {
    Icon: ShieldCheck,
    title: 'Full Security',
    description:
      'Authentication, Authorization, Data Encryption နဲ့ Security Best Practices တွေ အပြည့်အဝ ထည့်သွင်းပေးထားပါတယ်',
  },
  {
    Icon: Zap,
    title: 'High Performance',
    description:
      'Optimized Loading, Caching Strategy, Image Optimization နဲ့ Code Splitting ဖြင့် မြန်ဆန်စွာ Run ပါတယ်',
  },
  {
    Icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Phone, Tablet, Desktop အားလုံးမှာ ကောင်းမွန်စွာ Display ဖြစ်ဖို့ Responsive Design နဲ့ တည်ဆောက်ထားပါတယ်',
  },
  {
    Icon: Database,
    title: 'Supabase Database',
    description:
      'Supabase Database ကို Setup လုပ်ပေးပြီး Data Management အတွက် Backend ပြည့်စုံစွာ စီစဉ်ပေးပါတယ်',
  },
  {
    Icon: Globe,
    title: 'Domain & SSL Setup',
    description:
      'Custom Domain Setup လုပ်ပေးပြီး SSL Certificate ဖြင့် Secure Connection ရရှိစေပါတယ်',
  },
  {
    Icon: Rocket,
    title: 'Production-Ready',
    description:
      'Data ထည့်ပြီးတဲ့အထိ အသုံးပြုလို့ရတဲ့ Production-Ready State အထိ Support ပေးပါမယ်',
  },
];

export function SharedFeaturesSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="shared-features" className="py-24 md:py-32 px-6 relative section-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          label="Included in All"
          title="Website သုံးခုလုံးအတွက်"
          subtitle="Website တိုင်းကို အောက်ပါ Quality Standards တွေနဲ့ တည်ဆောက်ပေးပါမယ်"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sharedFeatures.map((feature, index) => {
            const { Icon } = feature;
            return (
              <div
                key={feature.title}
                className={`glass rounded-2xl p-7 card-shine glass-hover group ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="icon-container mb-5 group-hover:bg-white/[0.06]">
                  <Icon className="w-5 h-5 text-white/40 transition-colors duration-400 group-hover:text-white/70" />
                </div>
                <h3 className="font-heading text-base font-semibold text-secondary mb-2.5 tracking-tight">
                  {feature.title}
                </h3>
                <p className="mm-text-sm text-muted/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
