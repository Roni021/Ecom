"use client";

import { useMemo, useState } from "react";

export default function about() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    { type: "idle" | "loading" | "success" | "error"; text?: string }
  >({
    type: "idle",
  });

  const canSubmit = useMemo(() => {
    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      email.trim().length > 0 &&
      subject.trim().length > 0 &&
      message.trim().length > 0 &&
      status.type !== "loading"
    );
  }, [firstName, lastName, email, subject, message, status.type]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setStatus({ type: "loading" });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({ type: "success", text: "Message sent successfully." });
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("General Inquiry");
      setMessage("");
    } catch (err) {
      const text = err instanceof Error ? err.message : "Failed to send message";
      setStatus({ type: "error", text });
    }
  }

  return (
    <div className="theme-page theme-text dark:theme-text font-display">
      <main>
        {/* <!-- Hero Section --> */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-lg theme-text dark:theme-text">
                Have questions about our marketplace or need technical support? Our team is ready to help you scale your digital business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* <!-- Contact Form Card --> */}
              <div className="theme-surface theme-surface p-8 rounded-xl shadow-sm border border-theme-surface dark:border-slate-800">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">First Name</label>
                      <input
                        className="w-full px-4 py-3 rounded-lg border-theme-surface dark:border-slate-800 bg-slate-50 theme-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Jane"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Last Name</label>
                      <input
                        className="w-full px-4 py-3 rounded-lg border-theme-surface dark:border-slate-800 bg-slate-50 theme-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Doe"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Email Address</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border-theme-surface dark:border-slate-800 bg-slate-50 theme-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="jane@company.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Subject</label>
                    <select
                      className="form-select w-full px-4 py-3 rounded-lg border-theme-surface dark:border-slate-800 bg-slate-50 theme-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing &amp; Payments</option>
                      <option>Partnership Opportunities</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border-theme-surface dark:border-slate-800 bg-slate-50 theme-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  {status.type === "success" && (
                    <p className="text-sm text-green-600 font-semibold">{status.text}</p>
                  )}
                  {status.type === "error" && (
                    <p className="text-sm text-red-600 font-semibold">{status.text}</p>
                  )}

                  <button
                    className="w-full theme-accent text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
                    type="submit"
                    disabled={!canSubmit}
                  >
                    {status.type === "loading" ? "Sending..." : "Send Message"}
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">send</span>
                  </button>
                </form>
              </div>

              {/* <!-- Sidebar Info --> */}
              <div className="space-y-12">
                {/* <!-- Contact Info --> */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 theme-accent/10 rounded-lg flex items-center justify-center theme-accent-text shrink-0">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Email Us</h4>
                        <p className="theme-text dark:theme-text">Our support team is online 24/7.</p>
                        <a className="theme-accent-text font-medium hover:underline" href="mailto:support@shopdynamics.com">
                          support@shopdynamics.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 theme-accent/10 rounded-lg flex items-center justify-center theme-accent-text shrink-0">
                        <span className="material-symbols-outlined">call</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Call Us</h4>
                        <p className="theme-text dark:theme-text">Mon-Fri from 8am to 5pm PST.</p>
                        <a className="theme-accent-text font-medium hover:underline" href="tel:+15550000000">
                          +1 (555) 000-0000
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 theme-accent/10 rounded-lg flex items-center justify-center theme-accent-text shrink-0">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Visit Our Office</h4>
                        <p className="theme-text dark:theme-text">Drop by for a cup of coffee.</p>
                        <address className="not-italic font-medium">
                          100 Innovation Way, Suite 400<br />San Francisco, CA 94105
                        </address>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- FAQ Teaser --> */}
                <div className="theme-accent p-8 rounded-xl text-white relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">Looking for quick answers?</h3>
                    <p className="text-white/80 mb-6 text-sm">
                      Browse our comprehensive documentation and help center articles to find what you need instantly.
                    </p>
                    <a
                      className="inline-flex items-center gap-2 theme-surface theme-surface theme-accent-text px-5 py-2.5 rounded-lg font-bold text-sm hover:theme-surface transition-colors"
                      href="#"
                    >
                      Visit Help Center
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <span className="material-symbols-outlined text-9xl">help_center</span>
                  </div>
                </div>

                {/* <!-- Socials --> */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest theme-text mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    <a
                      className="w-10 h-10 border border-theme-surface dark:border-slate-800 rounded-lg flex items-center justify-center hover:theme-accent hover:text-white hover:border-theme-accent transition-all"
                      href="#"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a
                      className="w-10 h-10 border border-theme-surface dark:border-slate-800 rounded-lg flex items-center justify-center hover:theme-accent hover:text-white hover:border-theme-accent transition-all"
                      href="#"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a
                      className="w-10 h-10 border border-theme-surface dark:border-slate-800 rounded-lg flex items-center justify-center hover:theme-accent hover:text-white hover:border-theme-accent transition-all"
                      href="#"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Map Section / Locations --> */}
        <section className="py-16 theme-surface theme-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden h-100 shadow-lg relative bg-slate-300 theme-surface">
              <iframe
                title="Kolkata Sector 5 location map"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Kolkata%20Sector%205&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              />
              <div className="absolute inset-0 theme-accent/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 theme-accent rounded-full animate-ping opacity-25"></div>
                  <div className="w-6 h-6 theme-accent rounded-full border-4 border-white shadow-xl relative z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

