export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-muted/40 text-sm">
            ဤ Quotation သည် ဝဘ်ဆိုက် တည်ဆောက်ရေး ပရောဂျက်အတွက် ဖြစ်ပါသည်
          </p>
        </div>

        <div className="divider max-w-32 mx-auto mb-8" />

        <div className="space-y-3">
          <p className="text-muted/50 text-sm">
            Built by{' '}
            <span className="text-secondary/70 font-medium">Phyo Zin Ko</span>
            {' '}&{' '}
            <span className="text-secondary/70 font-medium">Zwe Nyi Lin</span>
          </p>
          <p className="text-muted/30 text-xs tracking-wide">
            © {currentYear} — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
