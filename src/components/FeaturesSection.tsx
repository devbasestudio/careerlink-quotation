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
      'လုပ်ငန်းရဲ့ အကြောင်းအရာ၊ Course Catalog၊ Blog System နဲ့ Admin Control Panel ပါဝင်တဲ့ ပြည့်စုံတဲ့ Landing Page ဖြစ်ပါတယ်။',
    features: [
      { icon: Layout, text: 'Business Introduction Page' },
      { icon: BookOpen, text: 'Course Catalog Display' },
      { icon: PenTool, text: 'Blog Writing & Publishing' },
      { icon: Shield, text: 'Admin Control Panel' },
      { icon: Search, text: 'SEO Optimized' },
      { icon: Smartphone, text: 'Mobile Responsive Design' },
    ],
    Icon: Globe,
  },
  {
    id: 2,
    title: 'BJT Learning Platform',
    subtitle: 'Japanese Language Learning Platform',
    description:
      'BJT (Business Japanese Test) အတွက် ရည်ရွယ်ထားတဲ့ ပြည့်စုံတဲ့ Learning Platform ဖြစ်ပြီး 12-Week Study Plan၊ Video Lessons နဲ့ Quiz System တွေ ပါဝင်ပါတယ်။',
    features: [
      { icon: BookOpen, text: '12-Week Study Plan' },
      { icon: Video, text: 'Video Lessons Upload' },
      { icon: Brain, text: 'Vocabulary Learning System' },
      { icon: HelpCircle, text: 'Quiz System' },
      { icon: ClipboardCheck, text: 'Exam System' },
      { icon: BarChart3, text: 'Progress Tracking' },
    ],
    Icon: BookOpen,
  },
  {
    id: 3,
    title: 'JLPT N2 Platform',
    subtitle: 'JLPT N2 Level Learning Platform',
    description:
      'JLPT N2 Level အတွက် ရည်ရွယ်ထားတဲ့ Learning Platform ဖြစ်ပြီး BJT Platform ရဲ့ Feature အားလုံးအပြင် Authentication၊ Payment Integration နဲ့ Messenger Integration တွေ ထပ်မံပါဝင်ပါတယ်။',
    features: [
      { icon: BookOpen, text: 'BJT Platform ရဲ့ Feature အားလုံး' },
      { icon: LogIn, text: 'Google Login Authentication' },
      { icon: MonitorSmartphone, text: 'Device Limit Control' },
      { icon: MessageCircle, text: 'Messenger Link Integration' },
      { icon: CreditCard, text: 'Website Payment System' },
      { icon: Send, text: 'Messenger Payment Redirect' },
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
          <Icon className="w-6 h-6 text-white/50" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted/50 font-medium bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.04]">
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
                <FeatureIcon className="w-4 h-4 text-white/20 mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-white/50" />
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
          subtitle="Website သုံးခုလုံးကို Security အပြည့်၊ Performance အမြင့်ဆုံးနဲ့ Production-Ready ဖြစ်တဲ့အထိ တည်ဆောက်ပေးပါမယ်"
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
