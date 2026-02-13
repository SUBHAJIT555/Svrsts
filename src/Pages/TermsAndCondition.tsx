import TermsHero from "@/components/TermsHero";

const TermsAndCondition = () => {
  return (
    <>
      {/* Fixed full-viewport dashed grid background - matches About, Contact */}
      <div
        className="fixed inset-0 h-screen w-full z-0 bg-white pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "5px 5px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div className="relative z-10">
        <TermsHero />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge - matches site style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-text text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                <path d="M9 9l1 0" />
                <path d="M9 13l6 0" />
                <path d="M9 17l6 0" />
              </svg>
              <span className="text-sm md:text-base font-generalsans font-medium text-neutral-700">
                Terms & Conditions
              </span>
            </div>

            {/* Content card - border/ring like other site sections */}
            <div className="relative rounded-xl border border-neutral-200 bg-white ring ring-neutral-300 ring-offset-4 md:ring-offset-8 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="prose prose-neutral max-w-none">
                <p className="text-sm sm:text-base text-neutral-500 font-generalsans mb-8 italic">
                  Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    1. Introduction
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Welcome to SVRS Technical Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our services, including but not limited to exhibition stand building, event decoration, office interiors, custom furniture, woodwork, interior design, painting services, and complete interior solutions across Dubai and the United Arab Emirates.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    By engaging our services, accessing our website, or contacting us for a quote, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    2. Services Provided
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    SVRS Technical Services provides comprehensive solutions including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Exhibition Stand Building</li>
                    <li>Wood Work &amp; Carpentry</li>
                    <li>Event Decoration &amp; Stand Lighting</li>
                    <li>Office Interior Design &amp; Fit-Out</li>
                    <li>Custom Furniture Design &amp; Fabrication</li>
                    <li>Interior Design</li>
                    <li>Painting Services</li>
                    <li>Complete Interior Solutions</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    All services are provided by skilled teams in compliance with applicable regulations and quality standards.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    3. Quotations and Pricing
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    All quotations provided by SVRS Technical Services are valid for 30 days from the date of issue, unless otherwise stated. Prices are subject to change without notice until a formal agreement is signed.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Quotations include standard materials and labor costs. Additional charges may apply for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Premium materials or custom specifications</li>
                    <li>Emergency or after-hours services</li>
                    <li>Additional work not included in the original quotation</li>
                    <li>Permits and regulatory approvals</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    4. Payment Terms
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Payment terms will be specified in the service agreement or quotation. Generally:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>A deposit may be required before work commences (typically 30-50% of the total project value)</li>
                    <li>Progress payments may be required for larger projects</li>
                    <li>Final payment is due upon completion and acceptance of work</li>
                    <li>Payment methods accepted: Cash, Bank Transfer, Cheque, or Credit Card</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    Late payments may incur interest charges as per UAE law. We reserve the right to suspend services for non-payment.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    5. Workmanship and Warranty
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We guarantee our workmanship and materials for a period specified in the service agreement, typically:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Installation work: 12 months from completion date</li>
                    <li>Materials: As per manufacturer&apos;s warranty</li>
                    <li>Repair work: 90 days from completion date</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Warranty coverage excludes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Damage caused by misuse, neglect, or unauthorized modifications</li>
                    <li>Normal wear and tear</li>
                    <li>Damage from external factors beyond our control</li>
                    <li>Work performed by third parties</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    6. Client Responsibilities
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Providing accurate information about the work required</li>
                    <li>Obtaining necessary permits and approvals (where applicable)</li>
                    <li>Ensuring safe access to the work site</li>
                    <li>Protecting personal belongings and valuables</li>
                    <li>Making timely payments as agreed</li>
                    <li>Informing us of any existing issues or concerns before work begins</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    7. Cancellation and Refunds
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Cancellation policies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Cancellation before work commences: Full refund of deposit, minus any costs already incurred</li>
                    <li>Cancellation after work commences: Payment for work completed plus materials ordered</li>
                    <li>Refunds will be processed within 14 business days</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    We reserve the right to cancel services if payment is not received or if site conditions pose safety risks.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    8. Liability and Insurance
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    SVRS Technical Services maintains appropriate insurance coverage for our operations. However:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Our liability is limited to the value of the work performed</li>
                    <li>We are not liable for indirect, consequential, or incidental damages</li>
                    <li>Clients are advised to maintain their own insurance coverage</li>
                    <li>We are not responsible for damage to existing structures unless caused by our negligence</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    9. Safety and Compliance
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    All work is performed in compliance with applicable regulations, UAE building codes and standards, international safety standards, and industry best practices.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    We maintain all necessary licenses and certifications. Our teams are trained in their respective fields.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    10. Dispute Resolution
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    In the event of any dispute:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Parties agree to first attempt to resolve disputes through good faith negotiation</li>
                    <li>If negotiation fails, disputes will be resolved through mediation</li>
                    <li>As a last resort, disputes will be subject to the exclusive jurisdiction of Dubai courts</li>
                    <li>UAE law shall govern these Terms</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    11. Privacy and Data Protection
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We respect your privacy and handle personal information in accordance with UAE data protection laws. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    12. Changes to Terms
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    13. Contact Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    For questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-neutral-100 rounded-lg border border-neutral-200 p-4 sm:p-6 ring ring-neutral-200 ring-offset-2">
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans mb-2">
                      <strong>SVRS Technical Services</strong>
                    </p>
                    <a
                      href="https://www.google.com/maps/place/SVRS+TECHNICAL+SERVICES/@25.1387876,55.2405537,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f694290ecd519:0xe9f7398a1c26f38c!8m2!3d25.1387828!4d55.2431286!16s%2Fg%2F11vbdm9smw?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans mb-2 hover:text-neutral-900 transition-colors block"
                    >
                      BB-6 - Warehouse No,<br />
                      Al quoz Industrial Area 2,<br />
                      Dubai, United Arab Emirates.
                    </a>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans">
                      Email: <a href="mailto:info@svrsts.com" className="hover:text-neutral-900 transition-colors">info@svrsts.com</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-neutral-100 rounded-lg border border-neutral-200 ring ring-neutral-200 ring-offset-2">
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsAndCondition;
