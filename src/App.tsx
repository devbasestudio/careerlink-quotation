import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SharedFeaturesSection } from './components/SharedFeaturesSection';
import { PricingSection } from './components/PricingSection';
import { TimelineSection } from './components/TimelineSection';
import { PaymentSection } from './components/PaymentSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-secondary overflow-x-hidden">
      {/* Floating nav dot indicator */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {[
          { href: '#hero', label: 'Hero' },
          { href: '#features', label: 'Features' },
          { href: '#shared-features', label: 'Shared' },
          { href: '#pricing', label: 'Pricing' },
          { href: '#timeline', label: 'Timeline' },
          { href: '#payment', label: 'Payment' },
          { href: '#maintenance', label: 'Support' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 justify-end"
            aria-label={item.label}
          >
            <span className="text-[10px] tracking-[0.15em] uppercase text-muted/0 transition-all duration-300 group-hover:text-muted/60 translate-x-2 group-hover:translate-x-0">
              {item.label}
            </span>
            <span className="w-2 h-2 rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
          </a>
        ))}
      </nav>

      <HeroSection />
      <FeaturesSection />
      <SharedFeaturesSection />
      <PricingSection />
      <TimelineSection />
      <PaymentSection />
      <MaintenanceSection />
      <Footer />
    </div>
  );
}

export default App;
