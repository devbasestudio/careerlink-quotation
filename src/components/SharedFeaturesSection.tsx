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
      'စနစ်တကျရှိသော အကောင့်ဝင်ရောက်မှု၊ အချက်အလက်များအား ကုဒ်ပြောင်းဝှက်၍ သိမ်းဆည်းခြင်း (Data Encryption) နှင့် လုံခြုံရေးဆိုင်ရာ အကာအကွယ်များ အပြည့်အဝ ပါဝင်ပါသည်။',
  },
  {
    Icon: Zap,
    title: 'High Performance',
    description:
      'စာမျက်နှာများ အမြန်ဆုံး ဖွင့်နိုင်ရန် ပြင်ဆင်ခြင်း၊ Caching စနစ်များ ထည့်သွင်းခြင်းနှင့် ပုံရိပ်များအား အရည်အသွေးမကျဘဲ ချုံ့ပေးခြင်းတို့ဖြင့် သွက်လက်မြန်ဆန်စွာ အသုံးပြုနိုင်ပါသည်။',
  },
  {
    Icon: Smartphone,
    title: 'Responsive Design',
    description:
      'မည်သည့် မျက်နှာပြင်အရွယ်အစားရှိသော Phone၊ Tablet နှင့် ကွန်ပျူတာများပေါ်တွင်မဆို သပ်ရပ်လှပစွာ အလိုအလျောက် ပြသပေးနိုင်ပါသည်။',
  },
  {
    Icon: Database,
    title: 'Supabase Database',
    description:
      'လုံခြုံစိတ်ချရပြီး သွက်လက်သည့် Supabase Database စနစ်ကို စနစ်တကျ အသုံးပြု၍ သုံးစွဲသူ ဒေတာအချက်အလက်များကို ထိန်းသိမ်းပေးပါမည်။',
  },
  {
    Icon: Globe,
    title: 'Domain & SSL Setup',
    description:
      'လုပ်ငန်းသုံး သီးသန့် Domain ချိတ်ဆက်ပေးပြီး HTTPS (SSL Secure Connection) ဖြင့် လုံခြုံရေး စိတ်ချရအောင် လုပ်ဆောင်ပေးပါမည်။',
  },
  {
    Icon: Rocket,
    title: 'Production-Ready',
    description:
      'အချက်အလက်များနှင့် ဗီဒီယိုများ အားလုံး ထည့်သွင်းပြီးသည်နှင့် ချက်ချင်း အဆင်သင့် အသုံးပြုနိုင်သည့် အခြေအနေအထိ ပံ့ပိုးပေးသွားပါမည်။',
  },
];

export function SharedFeaturesSection() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="shared-features" className="py-24 md:py-32 px-6 relative section-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          label="Included in All"
          title="Website အားလုံးအတွက်"
          subtitle="Website (၄) ခုစလုံးအတွက် အောက်ပါ အရည်အသွေးမြင့် စံချိန်စံညွှန်းများအတိုင်း တာဝန်ယူ တည်ဆောက်ပေးသွားမည် ဖြစ်သည်။"
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
                <div className="icon-container mb-5 group-hover:bg-black/[0.03]">
                  <Icon className="w-5 h-5 text-neutral-400 transition-colors duration-400 group-hover:text-secondary" />
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
