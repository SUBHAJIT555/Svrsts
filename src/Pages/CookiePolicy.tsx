import CookieHero from "@/components/CookieHero";

const CookiePolicy = () => {
  return (
    <>
      {/* Fixed full-viewport dashed grid background - matches Terms, About, Contact */}
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
        <CookieHero />

        <section className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Badge - matches site style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm mb-8 sm:mb-10 ring ring-neutral-300 ring-offset-2 md:ring-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cookie text-neutral-700">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 13v.01" />
                <path d="M12 17v.01" />
                <path d="M12 12v.01" />
                <path d="M16 14v.01" />
                <path d="M11 8v.01" />
                <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296q -.745 1.18 -1.024 1.852q -.283 .684 -.66 2.216a3 3 0 0 1 -1.624 1.623q -1.572 .394 -2.216 .661q -.712 .295 -1.852 1.024a3 3 0 0 1 -2.296 0q -1.203 -.754 -1.852 -1.024q -.707 -.292 -2.216 -.66a3 3 0 0 1 -1.623 -1.624q -.397 -1.577 -.661 -2.216q -.298 -.718 -1.024 -1.852a3 3 0 0 1 0 -2.296q .719 -1.116 1.024 -1.852q .257 -.62 .66 -2.216a3 3 0 0 1 1.624 -1.623q 1.547 -.384 2.216 -.661q .687 -.285 1.852 -1.024a3 3 0 0 1 2.296 0" />
              </svg>
              <span className="text-sm md:text-base font-generalsans font-medium text-neutral-700">
                Cookie Policy
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
                    This Cookie Policy explains what cookies are, how SVRS Technical Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies on our website, and your choices regarding cookies.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree with our use of cookies, please disable them in your browser settings or refrain from using our website.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    2. What Are Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    Cookies allow websites to recognize your device and store some information about your preferences or past actions. They help improve your browsing experience by remembering your settings and preferences.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    3. Types of Cookies We Use
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We use the following types of cookies on our website:
                  </p>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    3.1 Essential Cookies
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have requested cannot be provided.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Session management cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    3.2 Analytics Cookies
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website&apos;s performance and user experience.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Google Analytics cookies</li>
                    <li>Page view tracking</li>
                    <li>User behavior analysis</li>
                    <li>Traffic source identification</li>
                  </ul>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    3.3 Functional Cookies
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Language preference cookies</li>
                    <li>Region-based content cookies</li>
                    <li>User interface customization</li>
                  </ul>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    3.4 Marketing Cookies
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    These cookies are used to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Advertising network cookies</li>
                    <li>Social media integration cookies</li>
                    <li>Remarketing cookies</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    4. How We Use Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>To ensure our website functions correctly and securely</li>
                    <li>To remember your preferences and settings</li>
                    <li>To analyze website traffic and user behavior</li>
                    <li>To improve website performance and user experience</li>
                    <li>To personalize content and advertisements</li>
                    <li>To measure the effectiveness of our marketing campaigns</li>
                    <li>To provide social media features</li>
                  </ul>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    5. Third-Party Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality. These third parties may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                    <li><strong>Social Media Platforms:</strong> For social media integration and sharing features</li>
                    <li><strong>Advertising Networks:</strong> For delivering relevant advertisements</li>
                    <li><strong>Content Delivery Networks:</strong> For optimizing website loading speed</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    These third-party cookies are subject to the respective third parties&apos; privacy policies. We do not control these cookies, and you should review the third parties&apos; policies for more information.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    6. Cookie Duration
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    Cookies can be either &quot;session&quot; cookies or &quot;persistent&quot; cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. They are essential for the website to function during your visit.</li>
                    <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them. They help us recognize you when you return to our website and remember your preferences.</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    The duration of persistent cookies varies depending on their purpose. Most analytics and marketing cookies expire after 12-24 months, while essential cookies may have shorter durations.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    7. Managing Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website&apos;s features.
                  </p>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    7.1 Browser Settings
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    You can control cookies through your browser settings. Here are links to instructions for popular browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>Mozilla Firefox: Options → Privacy &amp; Security → Cookies</li>
                    <li>Safari: Preferences → Privacy → Cookies</li>
                    <li>Microsoft Edge: Settings → Privacy, Search, and Services → Cookies</li>
                  </ul>

                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 font-clashdisplay mb-3 mt-6">
                    7.2 Cookie Consent
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    When you first visit our website, you may see a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customize your preferences. You can change your cookie preferences at any time through our cookie settings.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    8. Impact of Disabling Cookies
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    If you choose to disable cookies, some features of our website may not function properly:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans ml-4">
                    <li>You may need to re-enter information each time you visit</li>
                    <li>Some website features may be unavailable</li>
                    <li>Personalized content and recommendations may not be available</li>
                    <li>Website performance may be affected</li>
                  </ul>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    Essential cookies are necessary for the website to function, and disabling them may prevent access to certain parts of our website.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    9. Do Not Track Signals
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. Our website does not currently respond to DNT signals, but we respect your cookie preferences as set through your browser or our cookie consent mechanism.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    10. Updates to Cookie Policy
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our website after changes constitutes acceptance of the updated Cookie Policy.
                  </p>
                </div>

                <div className="mb-8 md:mb-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 font-clashdisplay mb-4">
                    11. Contact Information
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 font-generalsans leading-relaxed mb-4">
                    If you have questions or concerns about our use of cookies or this Cookie Policy, please contact us:
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
                    By using our website, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein, unless you have disabled them in your browser settings.
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

export default CookiePolicy;
