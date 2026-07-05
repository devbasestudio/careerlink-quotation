import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';

const timelineSteps = [
  {
    phase: '၁',
    title: 'ဝဘ်ဆိုက် တည်ဆောက်ခြင်း',
    duration: '၁ ပတ် (၇ ရက်)',
    description:
      'ဝဘ်ဆိုက် သုံးခုလုံးကို ပရော်ဖက်ရှင်နယ်စံနှုန်းဖြင့် တည်ဆောက်ပြီး Sample Data များ ထည့်သွင်းပေးပါမယ်။',
    details: [
      'UI/UX Design & Development',
      'Backend & Database Setup',
      'Feature Implementation',
      'Sample Data ထည့်သွင်းခြင်း',
    ],
  },
  {
    phase: '၂',
    title: 'Client Review & Approval',
    duration: 'ပြီးဆုံးချိန်',
    description:
      'Sample Data ထည့်ထားသော ဝဘ်ဆိုက်ကို Client ထံ ပြသပေးပါမယ်။ Client ကြိုက်နှစ်သက်ပြီး ပြင်ဆင်စရာ မရှိတော့ပါက နောက်အဆင့်သို့ ဆက်လက်ဆောင်ရွက်ပါမယ်။',
    details: [
      'Demo Website ပြသခြင်း',
      'Client Feedback လက်ခံခြင်း',
      'လိုအပ်ပါက ပြင်ဆင်ခြင်း',
      'Final Approval ရယူခြင်း',
    ],
  },
  {
    phase: '၃',
    title: 'Data အစစ် ထည့်သွင်းခြင်း',
    duration: 'အများဆုံး ၂ ပတ်',
    description:
      'Client ရဲ့ တကယ့် Data အစစ်များကို ဝဘ်ဆိုက်ထဲသို့ ထည့်သွင်းပေးပါမယ်။ နည်းချင်လည်း နည်းနိုင်ပါတယ်။',
    details: [
      'Content & Media Upload',
      'Course Data ထည့်သွင်းခြင်း',
      'Testing & Quality Assurance',
      'Final Delivery',
    ],
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Timeline"
          title="လုပ်ဆောင်မည့် အချိန်ကာလ"
          subtitle="ပရောဂျက်ကို အောက်ပါ အဆင့်များအတိုင်း အချိန်မီ ဆောင်ရွက်ပေးပါမယ်"
        />

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[22px] md:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <TimelineCard key={step.phase} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  step,
  index,
}: {
  step: (typeof timelineSteps)[number];
  index: number;
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex gap-6 md:gap-8 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Phase number */}
      <div className="relative z-10 hidden md:block">
        <div className="number-circle bg-surface-elevated text-secondary/80">
          {step.phase}
        </div>
      </div>

      {/* Content card */}
      <div className="flex-1 glass rounded-2xl p-7 md:p-8 card-shine transition-all duration-500 hover:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="number-circle bg-surface-elevated text-secondary/80 md:hidden">
              {step.phase}
            </div>
            <h3 className="font-heading text-lg md:text-xl font-bold text-secondary">
              {step.title}
            </h3>
          </div>
          <span className="text-xs tracking-[0.15em] uppercase text-muted bg-white/5 px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
            {step.duration}
          </span>
        </div>

        <p className="text-muted/70 text-[15px] leading-relaxed mb-6">
          {step.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {step.details.map((detail) => (
            <div key={detail} className="flex items-center gap-2.5 group">
              <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0 transition-all duration-300 group-hover:bg-white/50" />
              <span className="text-sm text-secondary/50 transition-colors duration-300 group-hover:text-secondary/80">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
