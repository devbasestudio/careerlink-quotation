import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';
import {
  Globe,
  BookOpen,
  Target,
  Layout,
  PenTool,
  Shield,
  Search,
  Smartphone,
  Video,
  Brain,
  HelpCircle,
  ClipboardCheck,
  BarChart3,
  LogIn,
  MonitorSmartphone,
  MessageCircle,
  CreditCard,
  Send,
  type LucideIcon,
} from 'lucide-react';

interface FeatureItem {
  icon: LucideIcon;
  text: string;
}

interface WebsiteData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: FeatureItem[];
  Icon: LucideIcon;
}

const websites: WebsiteData[] = [
  {
    id: 1,
    title: 'Main Landing Page',
    subtitle: 'Business Introduction Website',
    description:
      'လုပ်ငန်း၏ အချက်အလက်များ၊ သင်တန်း (Course Showcase) များနှင့် ဆောင်းပါး (Blog Articles) များကို စနစ်တကျ ပြသပေးနိုင်ပြီး Admin Panel မှတစ်ဆင့် လွယ်ကူစွာ စီမံခန့်ခွဲနိုင်မည့် မိတ်ဆက်စာမျက်နှာ ဖြစ်ပါသည်။',
    features: [
      { icon: Layout, text: 'လုပ်ငန်းမိတ်ဆက်စာမျက်နှာ (About & Overview)' },
      { icon: BookOpen, text: 'သင်တန်းများ ပြသခြင်း (Courses Showcase)' },
      { icon: PenTool, text: 'ဆောင်းပါးများ ရေးသားတင်ခြင်း (Blog & Articles)' },
      { icon: Shield, text: 'အုပ်ချုပ်သူအဖွဲ့ဝင် စီမံခန့်ခွဲရေးစနစ် (Admin Control Panel)' },
      { icon: Search, text: 'ရှာဖွေမှုစနစ် အကောင်းဆုံးဖြစ်အောင် ပြင်ဆင်ခြင်း (SEO Optimization)' },
      { icon: Smartphone, text: 'ဖုန်းနှင့် Tablet များတွင် သပ်ရပ်စွာပြသခြင်း (Responsive Layout)' },
    ],
    Icon: Globe,
  },
  {
    id: 2,
    title: 'BJT Learning Platform',
    subtitle: 'Japanese Language Learning Platform',
    description:
      'BJT (Business Japanese Test) စာမေးပွဲအတွက် အဆင့်သင့်လေ့လာနိုင်သော Platform တစ်ခုဖြစ်ပြီး ၁၂ ပတ်စာ သင်ခန်းစာဇယား (Study Plan)၊ ဗီဒီယိုသင်ခန်းစာများနှင့် စမ်းသပ်စစ်ဆေးမှုများ (Quiz & Exam) ပါဝင်ပါသည်။',
    features: [
      { icon: BookOpen, text: '၁၂ ပတ်စာ သင်ခန်းစာဇယား (12-Week Study Plan)' },
      { icon: Video, text: 'သင်ကြားရေးဗီဒီယိုများ တင်ခြင်း (Video Lessons Upload)' },
      { icon: Brain, text: 'ဝေါဟာရများ လေ့လာဆန်းစစ်ခြင်းစနစ် (Vocab System)' },
      { icon: HelpCircle, text: 'ဉာဏ်စမ်းစနစ် (Quiz System)' },
      { icon: ClipboardCheck, text: 'စာမေးပွဲစစ်ဆေးခြင်းစနစ် (Exam System)' },
      { icon: BarChart3, text: 'လေ့လာမှုတိုးတက်မှု ခြေရာခံခြင်းစနစ် (Progress Tracking)' },
    ],
    Icon: BookOpen,
  },
  {
    id: 3,
    title: 'JLPT N2 Platform',
    subtitle: 'JLPT N2 Level Learning Platform',
    description:
      'JLPT N2 level အတွက် သီးသန့်တည်ဆောက်ထားသော Learning Platform ဖြစ်ပြီး BJT ၏ စနစ်များအပြင် Google Login၊ Device ကန့်သတ်ချက်စနစ်၊ Payment စနစ်များနှင့် Messenger Integration များ ပါဝင်ပါသည်။',
    features: [
      { icon: BookOpen, text: 'BJT Platform ရှိ စနစ်များအားလုံး ပါဝင်ခြင်း' },
      { icon: LogIn, text: 'လုံခြုံစိတ်ချရသော Google ဖြင့် ဝင်ရောက်ခြင်းစနစ် (Google Login)' },
      { icon: MonitorSmartphone, text: 'အကောင့်တစ်ခုတွင် စက်ပစ္စည်းသုံးစွဲမှု ကန့်သတ်ခြင်းစနစ် (Device Limit)' },
      { icon: MessageCircle, text: 'စာမျက်နှာ Messenger သို့ တိုက်ရိုက်ချိတ်ဆက်ခြင်း (Messenger Link)' },
      { icon: CreditCard, text: 'ဝဘ်ဆိုက်အတွင်း ငွေပေးချေမှုစနစ် (Website Payment System)' },
      { icon: Send, text: 'Messenger မှတစ်ဆင့် ငွေပေးချေရန် ခေါ်ယူခြင်း (Messenger Payment)' },
    ],
    Icon: Target,
  },
];

function WebsiteCard({ website, index }: { website: WebsiteData; index: number }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const animClass = index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right';
  const { Icon } = website;

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-8 md:p-10 card-shine glass-hover ${
        isVisible ? animClass : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-5 mb-8">
        <div className="icon-container icon-container-lg">
          <Icon className="w-6 h-6 text-neutral-500" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted/50 font-medium bg-black/[0.03] px-3 py-1 rounded-full border border-black/[0.04]">
              Website {website.id}
            </span>
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary tracking-tight">
            {website.title}
          </h3>
          <p className="text-muted/50 text-sm mt-1">{website.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mm-text text-muted/60 mb-8 text-[15px]">
        {website.description}
      </p>

      {/* Features */}
      <div>
        <h4 className="text-[10px] tracking-[0.25em] uppercase text-muted/40 font-medium mb-5">
          Included Features
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {website.features.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={feature.text}
                className="flex items-start gap-3 group"
              >
                <FeatureIcon className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-secondary" />
                <span className="mm-text-sm text-secondary/60 transition-colors duration-300 group-hover:text-secondary/90">
                  {feature.text}
                </span>
              </div>
            );
          })}
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
          title="ပါဝင်မည့် Websites"
          subtitle="လုပ်ငန်းသုံး Website တစ်ခုချင်းစီအလိုက် လိုအပ်သော စနစ်များအားလုံးကို အကောင်းမွန်ဆုံးနှင့် စနစ်တကျ ထည့်သွင်းပုံဖော်ပေးသွားမည် ဖြစ်သည်။"
        />

        <div className="space-y-6">
          {websites.map((website, index) => (
            <WebsiteCard key={website.id} website={website} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
