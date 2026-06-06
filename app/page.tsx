export default function Page() {
  const faqs = [
    {
      q: "How does the AI categorization work?",
      a: "We use OpenAI to analyze your Stripe transaction descriptions and map them to IRS Schedule C business expense categories automatically."
    },
    {
      q: "Is my Stripe data secure?",
      a: "Yes. We connect via Stripe OAuth with read-only access. We never store your payment credentials and all data is encrypted in transit."
    },
    {
      q: "What formats can I export?",
      a: "You can download tax-ready reports as CSV or PDF, formatted for easy hand-off to your accountant or direct use in tax software."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers on Stripe
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-categorize your Stripe invoices{" "}
          <span className="text-[#58a6ff]">for tax filing</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Stripe account, let AI sort every transaction into IRS business expense categories, then export a tax-ready CSV or PDF — in under 2 minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["IRS Categories", "Auto-mapped"],
            ["Stripe OAuth", "Read-only & Secure"],
            ["CSV + PDF", "Export Ready"]
          ].map(([label, sub]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-base">{label}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Stripe transaction imports",
              "AI categorization into IRS Schedule C",
              "CSV & PDF export",
              "Review & override AI suggestions",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8b949e] text-xs mt-12">
          &copy; {new Date().getFullYear()} Stripe Invoice Smart Categorizer. All rights reserved.
        </p>
      </section>
    </main>
  );
}
