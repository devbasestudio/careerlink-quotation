import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeader } from './SectionHeader';
import { Code2, MessageSquareMore, FileInput, type LucideIcon } from 'lucide-react';

interface TimelineStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
  Icon: LucideIcon;
}

const timelineSteps: TimelineStep[] = [
  {
    phase: '01',
    title: 'Development Phase',
    duration: '1 Week (7 Days)',
    description:
      'Website သုံးခုလုံးကို Professional Standard နဲ့ Develop လုပ်ပြီး Sample Data တွေ ထည့်သွင်းပေးပါမယ်။',
    details: [
      'UI/UX Design & Development',
      'Backend & Database Setup',
      'Feature Implementation',
      'Sample Data Integration',
    ],
    Icon: Code2,
  },
  {
    phase: '02',
    title: 'Review & Approval',
    duration: 'Upon Completion',
    description:
      'Sample Data ထည့်ထားတဲ့ Website ကို Client ထံ Demo ပြသပေးပါမယ်။ Feedback ရပြီး လိုအပ်ရင် ပြင်ဆင်ပေးပါမယ်။ Approve ဖြစ်ရင် Next Phase ကို ဆက်သွားပါမယ်။',
    details: [
      'Demo Website Presentation',
      'Client Feedback Collection',
      'Revision & Adjustment',
      'Final Approval',
    ],
    Icon: MessageSquareMore,
  },
  {
    phase: '03',
    title: 'Data Integration',
    duration: 'Max 2 Weeks',
    description:
      'Client ရဲ့ Real Data တွေကို Website ထဲ ထည့်သွင်းပေးပါမယ်။ Content, Media Files, Course Data အားလုံး Upload လုပ်ပြီး Testing ပြုလုပ်ပါမယ်။',
    details: [
      'Content & Media Upload',
      'Course Data Entry',
      'Testing & QA',
      'Final Delivery',
    ],
    Icon: FileInput,
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Timeline"
          title="Project Timeline"
          subtitle="Project ကို အောက်ပါ Phase တွေအတိုင်း Schedule အတိအကျ ဆောင်ရွက်ပေးပါမယ်"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-black/10 via-black/5 to-transparent hidden md:block" />

          <div className="space-y-6">
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
  step: TimelineStep;
  index: number;
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const { Icon } = step;

  return (
    <div
      ref={ref}
      className={`flex gap-6 md:gap-8 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Phase indicator */}
      <div className="relative z-10 hidden md:block">
        <div className="number-circle">
          <span className="text-secondary/60">{step.phase}</span>
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 glass rounded-2xl p-7 md:p-9 card-shine glass-hover group">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div className="flex items-center gap-4">
            {/* Mobile phase indicator */}
            <div className="number-circle md:hidden">
              <span className="text-secondary/60">{step.phase}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="icon-container md:block hidden">
                <Icon className="w-5 h-5 text-neutral-400 transition-colors duration-300 group-hover:text-secondary" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-secondary tracking-tight">
                {step.title}
              </h3>
            </div>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted/50 bg-black/[0.02] px-4 py-2 rounded-full font-medium whitespace-nowrap border border-black/[0.05]">
            {step.duration}
          </span>
        </div>

        <p className="mm-text text-muted/50 text-[15px] mb-6">
          {step.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {step.details.map((detail) => (
            <div key={detail} className="flex items-center gap-3 group/item">
              <div className="feature-dot" />
              <span className="text-sm text-secondary/40 transition-colors duration-300 group-hover/item:text-secondary/70">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
