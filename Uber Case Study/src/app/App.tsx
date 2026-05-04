export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-6 flex items-center gap-4 text-gray-400">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
              Product Design
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
              UX Research
            </span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
              Case Study
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Uber Re-Dispatch Case Study
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            Product Teardown & UI/UX Redesign
          </p>
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
            An analytical product case study examining the
            friction between back-end algorithmic dispatch logic
            and human user experience during time-sensitive,
            high-stakes trips.
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Role
              </div>
              <div className="text-gray-900">
                Product Designer & Analyst
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Deliverables
              </div>
              <div className="text-gray-900">
                Product Essay, UI Mockups, Design System
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Tools
              </div>
              <div className="text-gray-900">
                Figma, User Research, Data Analysis
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Problem Section */}
        <section className="mb-24">
          <div className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            01 — Problem
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            The Silent Switch Problem
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-8">
            <p className="text-xl text-gray-900 leading-relaxed">
              Users face anxiety and missed appointments when
              algorithms silently re-dispatch drivers without
              clear communication or user consent.
            </p>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Uber's dispatch algorithm optimizes for
              marketplace efficiency—matching drivers and riders
              to minimize overall wait times and maximize
              utilization. However, this optimization happens
              invisibly to end users.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Real User Scenarios
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Airport trips:</strong> Driver
                      shown as "2 min away" suddenly becomes "8
                      min away" with no explanation, risking
                      flight check-in deadlines.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Medical appointments:</strong>{" "}
                      Users watching their driver approach only
                      to see them reassigned, causing panic
                      about missing critical appointments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Business meetings:</strong> Lack
                      of arrival time certainty makes it
                      impossible to plan with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hypothesis Section */}
        <section className="mb-24">
          <div className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            02 — Hypothesis
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            The Efficiency vs. Trust Trade-off
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-8 mb-8 rounded-lg">
            <p className="text-xl text-gray-900 mb-4 font-semibold">
              Re-dispatch logic over-indexes on global
              marketplace efficiency at the cost of individual
              trip reliability and user trust.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While re-dispatch may improve system-wide metrics,
              it creates a psychological contract violation for
              individual users who believe they have a committed
              driver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                System Perspective (Algorithm)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    Optimizes for average wait times across all
                    riders
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    Maximizes driver utilization and earnings
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    Reduces total miles driven (environmental
                    benefit)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Improves marketplace liquidity</span>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                User Perspective (Individual)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span>
                    Feels abandoned when driver is reassigned
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span>Loses trust in ETA accuracy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span>
                    Cannot plan with certainty for time-critical
                    trips
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600">✗</span>
                  <span>
                    No control or visibility into
                    decision-making
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-24">
          <div className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            03 — Solution
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Designing for Trust & Transparency
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            A two-pronged approach combining transparency alerts
            with user-controlled trip-lock functionality to
            balance marketplace efficiency with rider trust.
          </p>

          {/* Feature 1: Transparency Alerts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Feature 1: Re-Dispatch Transparency Alerts
            </h3>
            <div className="bg-gray-900 rounded-lg p-8 mb-6">
              <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">
                      Driver Reassigned
                    </div>
                    <p className="text-sm text-gray-600">
                      We found you a closer driver to reduce
                      your wait time.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">
                      Previous ETA:
                    </span>
                    <span className="font-semibold text-gray-900">
                      8 min
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      New ETA:
                    </span>
                    <span className="font-semibold text-green-600">
                      3 min
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  Your new driver is Sarah • Honda Civic • ABC
                  123
                </div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>Design Principle:</strong> Make the
                invisible visible. When re-dispatch occurs,
                inform users immediately with clear before/after
                comparison.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Show both previous and new ETA for
                  transparency
                </li>
                <li>
                  Explain why the change happened ("closer
                  driver found")
                </li>
                <li>
                  Display new driver details to rebuild trust
                </li>
                <li>
                  Only show when re-dispatch increases wait time
                  significantly
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2: Trip Lock */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Feature 2: Trip-Lock for High-Stakes Rides
            </h3>
            <div className="bg-gray-900 rounded-lg p-8 mb-6">
              <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-2xl">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">
                        Pickup in
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        4 min
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        MK
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    Marcus K. • Toyota Camry
                  </div>
                  <div className="text-sm text-gray-500">
                    XYZ 789 • 4.9 ★
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm mb-1">
                          Trip Lock Active
                        </div>
                        <div className="text-xs text-gray-600">
                          Marcus is committed to your trip. He
                          won't be reassigned.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold text-sm">
                    Disable Trip Lock
                  </button>
                </div>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>Design Principle:</strong> Give users
                control over commitment level for critical
                trips.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
                <p className="text-gray-900 font-semibold mb-2">
                  How Trip-Lock Works:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>
                    User can enable "Trip Lock" before or after
                    driver is matched
                  </li>
                  <li>
                    When locked, the algorithm will NOT
                    re-dispatch that driver to another rider
                  </li>
                  <li>
                    User accepts that they may wait slightly
                    longer initially for optimal match
                  </li>
                  <li>
                    Provides peace of mind for airports, medical
                    appointments, and business meetings
                  </li>
                </ol>
              </div>
              <p className="text-gray-700">
                This feature acknowledges that not all trips are
                equal—some require guaranteed reliability over
                marketplace optimization.
              </p>
            </div>
          </div>

          {/* Feature 3: Smart Defaults */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Feature 3: Context-Aware Defaults
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="font-semibold text-gray-900 mb-3">
                  Auto-Enable Trip Lock For:
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Airport pickups/drop-offs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Scheduled rides booked in advance
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Premium service tiers (Uber Black, XL)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>
                      Trips during peak demand periods
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="font-semibold text-gray-900 mb-3">
                  Keep Flexible For:
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400">○</span>
                    <span>
                      Casual trips with no time pressure
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400">○</span>
                    <span>Short-distance UberX rides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400">○</span>
                    <span>
                      Users who historically don't cancel
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400">○</span>
                    <span>Low-demand time windows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Metrics Section */}
        <section className="mb-24">
          <div className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            04 — Expected Impact
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Success Metrics
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
              <div className="text-4xl font-bold text-green-700 mb-2">
                ↑ 25%
              </div>
              <div className="text-gray-700 font-semibold mb-1">
                User Trust Score
              </div>
              <div className="text-sm text-gray-600">
                Measured via post-ride NPS and "reliability"
                rating
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-700 mb-2">
                ↓ 40%
              </div>
              <div className="text-gray-700 font-semibold mb-1">
                Re-Dispatch Complaints
              </div>
              <div className="text-sm text-gray-600">
                Support tickets related to driver switching
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-lg border border-purple-200">
              <div className="text-4xl font-bold text-purple-700 mb-2">
                ↑ 15%
              </div>
              <div className="text-gray-700 font-semibold mb-1">
                Premium Tier Adoption
              </div>
              <div className="text-sm text-gray-600">
                Users upgrading for guaranteed reliability
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-4">
              A/B Test Framework
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex gap-3">
                <span className="font-semibold text-gray-900">
                  Control:
                </span>
                <span>Current silent re-dispatch behavior</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-gray-900">
                  Variant A:
                </span>
                <span>
                  Transparency alerts only (no trip-lock)
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-gray-900">
                  Variant B:
                </span>
                <span>
                  Trip-lock with opt-in (manual activation)
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-gray-900">
                  Variant C:
                </span>
                <span>
                  Full solution (alerts + smart defaults for
                  trip-lock)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights Section */}
        <section className="mb-24">
          <div className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            05 — Key Insights
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Design Principles
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                1. Algorithmic efficiency ≠ User satisfaction
              </h3>
              <p className="text-gray-700">
                What's optimal for the system may feel like a
                betrayal to the individual. Product design must
                bridge this gap with transparency and control.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                2. Context determines user needs
              </h3>
              <p className="text-gray-700">
                A casual ride home has different psychological
                requirements than an airport trip. Smart
                defaults can predict and serve these varying
                needs.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                3. Transparency builds trust, even in failures
              </h3>
              <p className="text-gray-700">
                Users are more forgiving when they understand
                why something happened. Silent changes erode
                trust faster than explained delays.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                4. Give users agency in high-stakes moments
              </h3>
              <p className="text-gray-700">
                When outcomes truly matter, users should have
                the ability to prioritize reliability over
                optimization—even at a cost.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section>
          <div className="mb-3 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            06 — Reflection
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            What I Learned
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This case study reinforced that great product
              design lives at the intersection of business
              logic, technical constraints, and human
              psychology. Uber's re-dispatch algorithm is
              mathematically sound—but it fails the "does this
              feel right?" test for users in high-pressure
              scenarios.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The proposed solutions don't require rebuilding
              the algorithm. Instead, they add a thin layer of
              UX that acknowledges the emotional contract
              between user and platform. Sometimes the most
              impactful design work isn't adding complexity—it's
              making complex systems feel human.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Next steps:</strong> User testing with
              prototypes, quantitative analysis of re-dispatch
              patterns, and collaboration with data science
              teams to model the business impact of trip-lock
              adoption.
            </p>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
            Interested in discussing product design, UX
            research, or case study methodologies? I'd love to
            hear from you.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Portfolio
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}