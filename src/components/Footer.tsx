import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="mm-text-sm text-muted/30 mb-8">
          ဤ Quotation သည် Website Development Project အတွက် ဖြစ်ပါသည်
        </p>

        <div className="divider max-w-24 mx-auto mb-8" />

        <div className="flex items-center justify-center gap-1.5 mb-3">
          <span className="text-muted/40 text-sm">Built with</span>
          <Heart className="w-3.5 h-3.5 text-white/25" />
          <span className="text-muted/40 text-sm">by</span>
        </div>

        <p className="text-sm mb-4">
          <span className="text-secondary/60 font-medium">Phyo Zin Ko</span>
          <span className="text-muted/30 mx-2">&</span>
          <span className="text-secondary/60 font-medium">Zwe Nyi Lin</span>
        </p>

        <p className="text-muted/20 text-xs tracking-[0.15em]">
          © {currentYear} — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
