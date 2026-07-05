import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

interface WebsiteData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

const websites: WebsiteData[] = [
  {
    id: 1,
    title: 'Main Landing Page',
    subtitle: 'လုပ်ငန်း မိတ်ဆက် ဝဘ်ဆိုက်',
    description:
      'လုပ်ငန်းရဲ့ အကြောင်းအရာများ၊ Course များ၊ Blog များ ရေးသားတင်ခြင်းနှင့် Admin Control Panel ပါဝင်သော ပြည့်စုံတဲ့ Landing Page ဖြစ်ပါတယ်။',
    features: [
      'လုပ်ငန်းအကြောင်း မိတ်ဆက်စာမျက်နှာ',
      'Course များ ပြသခြင်း',
      'Blog များ ရေးသား၊ တင်ခြင်း',
      'Admin Control Panel',
      'SEO Optimized',
      'Mobile Responsive Design',
    ],
    icon: '🌐',
  },
  {
    id: 2,
    title: 'BJT Learning Platform',
    subtitle: 'ဂျပန်စာ လေ့လာရေး Platform',
    description:
      'BJT ဂျပန်စာ Learning Platform အတွက် ရည်ရွယ်ထားသော ဝဘ်ဆိုက်ဖြစ်ပြီး ၁၂ ပတ်စာ Study Plan၊ ဗီဒီယို သင်ခန်းစာများ၊ Vocabulary လေ့လာခြင်းများ ပါဝင်ပါတယ်။',
    features: [
      '၁၂ ပတ်စာ Study Plan',
      'ဗီဒီယို သင်ခန်းစာများ တင်ခြင်း',
      'Vocabulary လေ့လာခြင်း System',
      'Quiz System',
      'Exam System',
      'Progress Tracking',
    ],
    icon: '📚',
  },
  {
    id: 3,
    title: 'JLPT N2 Platform',
    subtitle: 'JLPT N2 အဆင့် လေ့လာရေး Platform',
    description:
      'JLPT N2 အဆင့်အတွက် ရည်ရွယ်ထားသော Learning Platform ဖြစ်ပြီး BJT Platform ကဲ့သို့ Feature များအပြင် Authentication၊ Payment နှင့် Messenger Integration များ ထပ်မံပါဝင်ပါတယ်။',
    features: [
      'BJT Platform ရဲ့ Feature များ အားလုံး',
      'Google Login Authentication',
      'Device Limit ထိန်းချုပ်ခြင်း',
      'Page Messenger Link ချိတ်ဆက်ခြင်း',
      'Website Payment System',
      'Messenger မှ Payment ခေါ်ယူခြင်း',
    ],
    icon: '🎯',
  },
];

function WebsiteCard({ website, index }: { website: WebsiteData; index: number }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const animClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-8 md:p-10 card-shine transition-all duration-500 hover:border-white/10 animate-pulse-glow ${
        isVisible ? animClass : 'opacity-0'
      }`}
    >
      <div className="flex items-start gap-5 mb-6">
        <div className="text-4xl">{website.icon}</div>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted font-medium bg-white/5 px-3 py-1 rounded-full">
              Website {website.id}
            </span>
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary">
            {website.title}
          </h3>
          <p className="text-muted text-sm mt-0.5">{website.subtitle}</p>
        </div>
      </div>

      <p className="text-muted/80 leading-relaxed mb-8 text-[15px]">
        {website.description}
      </p>

      <div className="space-y-3">
        <h4 className="text-xs tracking-[0.2em] uppercase text-muted/60 font-medium mb-4">
          ပါဝင်မည့် Features
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {website.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 flex-shrink-0 transition-all duration-300 group-hover:bg-white/60 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <span className="text-sm text-secondary/70 transition-colors duration-300 group-hover:text-secondary">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Features"
          title="ပါဝင်မည့် ဝဘ်ဆိုက်များ"
          subtitle="ဝဘ်ဆိုက် သုံးခုလုံးကို Security အပြည့်၊ Performance အပြည့်နဲ့ Production-Ready ဖြစ်သည်အထိ တည်ဆောက်ပေးပါမယ်"
        />

        <div className="space-y-8">
          {websites.map((website, index) => (
            <WebsiteCard key={website.id} website={website} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
