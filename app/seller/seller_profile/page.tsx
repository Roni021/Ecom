import React from 'react';

// NOTE: This page was previously raw HTML. It has been converted into a valid
// Next.js App Router page component while preserving the existing markup,
// classes, and content.

export default function SellerSignUpPage() {
  return (
    <>
      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-8">
        {/* Seller Header Section */}
        <section className="mb-10">
          <div className="relative w-full h-[240px] md:h-[320px] rounded-xl overflow-hidden bg-surface-dim shadow-soft">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="A clean and professional abstract background featuring soft gradients of blue and white, with subtle geometric patterns and a premium tech aesthetic. The lighting is bright and ethereal, perfectly matching a modern light-mode interface for a high-end digital marketplace. The composition is expansive and minimalist, evoking a sense of creativity and organized professionalism."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbyXMLDGKdoyHC-KRx0Vox_LoQZ9MH2LIkg8lK22w0jXncEspydGWib_rRb4JULWo_gkvE-4C3NytSmETLfPwbaBtAuQNhojJ9K6kYo666crdUXp8qIeFBJFA6qBXQy9zlL137_KTXSDND3WRG2UMfxtL8paHybLmtGdCl1lRZUUurilqg5Pu_CLL05nysjmWDKQpPAnstcCAcvu2rbY0cQqPSYcHYxHjevxvNkqW51OZdPSIQCO78TNP38h3nSO4RIxReNnXZwO1s')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <div className="relative -mt-16 md:-mt-20 px-6 flex flex-col md:flex-row items-end md:items-center gap-6">
            <div className="relative">
              <div className="size-32 md:size-40 rounded-full border-4 border-surface-container-lowest overflow-hidden bg-surface-container shadow-lg">
                <img
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                  data-alt="A professional and friendly portrait of a digital artist in a modern, brightly lit studio setting. The subject has a warm expression and is dressed in contemporary creative attire. The background is slightly blurred, showing glimpses of high-end design equipment and a clean white workspace. The overall lighting is soft and natural, emphasizing a trustworthy and expert persona for a top-tier digital creator."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0Q9EToV3O1UdaUp2VG85mLvF08XsZSLzyuOzz2CJvOFKFdPg6iFYQLgPyMfr6HQiw8UEvUPHRiXH3TSflTnEEA-iB_GArLiX3uEYn1WDeK5_AHTnZWRpi6ICJX03xYIG1XN46T317wB7MvgD8CHwHLaZwyM_fxO15TM4JwmYJQz9iQrN-PUIETiRSKo3rXL5sSrqu-kkZbcRT7uCk-nhpJ-54Mrm0rqzlK-gQ6UQ3MODfXLIlHWFe-KKjB1OYU-93nsOgRZgJSoRN"
                />
              </div>
              <div className="absolute bottom-2 right-2 size-6 bg-success-green border-2 border-white rounded-full"></div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-end w-full pb-2">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-on-surface tracking-tight">PixelCraft Studios</h1>
                <p className="text-on-surface-variant flex items-center gap-2 font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  Elite Digital Creator
                </p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0">
                <button className="px-6 h-12 bg-surface-container-lowest border border-surface-border text-on-surface font-semibold rounded-xl hover:bg-surface-container transition-colors flex items-center gap-2 shadow-soft">
                  <span className="material-symbols-outlined">person_add</span> Follow
                </button>
                <button className="px-6 h-12 bg-primary text-on-primary font-semibold rounded-xl hover:bg-primary-container transition-colors flex items-center gap-2 shadow-soft">
                  <span className="material-symbols-outlined">mail</span> Message
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 px-6 max-w-3xl">
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Crafting premium UI kits, 3D assets, and design systems for forward-thinking developers. We specialize in minimalist aesthetics that don't compromise on functionality. Based in San Francisco, serving creators worldwide.
            </p>
            <div className="flex gap-4 mt-4">
              <a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
                <span className="material-symbols-outlined text-[20px]">language</span> portfolio.pixelcraft.com
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </section>

        {/* Key Performance Metrics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-border shadow-soft">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Sales</p>
            <p className="text-headline-md text-on-surface">12,482</p>
            <div className="flex items-center gap-1 mt-2 text-success-green">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              <span className="text-label-sm">+12% this month</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-border shadow-soft">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Average Rating</p>
            <div className="flex items-center gap-2">
              <p className="text-headline-md text-on-surface">4.9</p>
              <div className="flex text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star_half
                </span>
              </div>
            </div>
            <p className="text-label-sm text-on-surface-variant mt-2">1,240 Verified Reviews</p>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-border shadow-soft">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Followers</p>
            <p className="text-headline-md text-on-surface">8,215</p>
            <div className="flex -space-x-2 mt-2">
              <div className="size-6 rounded-full border-2 border-white bg-slate-200"></div>
              <div className="size-6 rounded-full border-2 border-white bg-slate-300"></div>
              <div className="size-6 rounded-full border-2 border-white bg-slate-400"></div>
              <div className="size-6 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[8px] text-white">+8k</div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-border shadow-soft">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Response Time</p>
            <p className="text-headline-md text-on-surface"> 2 hours</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="size-2 bg-success-green rounded-full"></span>
              <span className="text-label-sm text-on-surface-variant">Highly Responsive</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Product Catalog (Main Content) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-headline-md text-on-surface">Digital Catalog</h3>
              <div className="flex gap-2">
                <button className="p-2 border border-surface-border rounded-lg bg-surface-container-lowest">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <select className="form-select border-surface-border rounded-lg bg-surface-container-lowest text-sm font-medium focus:ring-primary focus:border-primary">
                  <option>Newest First</option>
                  <option>Highest Rated</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-border shadow-soft group hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-surface-container">
                  <img
                    alt="Modern UI Kit"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="A clean and sophisticated UI design system displayed on multiple screens, featuring minimalist layouts, vibrant primary blue accents, and elegant typography. The presentation is organized and professional, showing various components like buttons, charts, and navigation bars in a cohesive, high-key light mode environment. The overall aesthetic is ultra-modern, crisp, and high-quality."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTXeeLjD1l1Yx5SZn1ixYi4h76jxUc1uUrMHts7oTbqAMQQ26Fvk-bEC4r29y9NxSsGjEwk1ZX8KpeIHPnyh_BFGkbvR2XusbRv4vI2eX8VnxE12vPWX7QOolOif2vrSYVTkI2XlfIr6dALo0fdoYpENXMTMyvBlzQJYOKHr-API0DzsiLH6df1g2b77QGqdaEZRjCNZWwVDOWhVSwQ-cVfC6PX6j9jojtCngARCH0KWKR-c75RfcUkLdWiNEauWggkv_8l8h9COM2"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-primary">UI Kit</div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-on-surface mb-1 group-hover:text-primary transition-colors">Modern Dashboard UI Kit</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-primary scale-75 origin-left">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    </div>
                    <span className="text-label-sm text-on-surface-variant">(48)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-on-surface">$49.00</span>
                    <button className="flex items-center justify-center size-10 rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-colors">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-border shadow-soft group hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-surface-container">
                  <img
                    alt="3D Icon Pack"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="A collection of playful and polished 3D icons floating in a clean, minimalist space. The icons represent tech and business themes, rendered with soft clay-like textures and vibrant blue and white colors. The lighting is diffused and professional, highlighting the depth and high-quality modeling of each individual element. The background is a soft light gray, maintaining a premium and creative feel."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeWFqaFEPUwkV1GbCXpqe6law4vLfJtkyJ7VVMsHMVafjBXMHwjy2HalEZ8V724LY6H5bVBf179U4p936dIKVhneSZKXVAO_y-hSV4r_f2UXiWzpJTod7M24ky57xuEzE3bi5GkJKUctWotbSdodqsj8jS_AFKebb8fS7eTgE3EH12mxrjD9uegnJn10zjcXm3NMHzwhnlO3UG19fGK2q_jJs64bn2YJRyrSYPiVUV5QmvibZMWESFEcxkiXkaYLM59suMKPQzF-zG"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-primary">3D Assets</div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-on-surface mb-1 group-hover:text-primary transition-colors">Flux 3D Icon Bundle</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-primary scale-75 origin-left">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <span className="text-label-sm text-on-surface-variant">(102)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-on-surface">$24.00</span>
                    <button className="flex items-center justify-center size-10 rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-colors">
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-surface-container rounded-xl text-primary font-bold hover:bg-surface-container-high transition-colors">
              View All 42 Products
            </button>
          </div>

          {/* Reviews Sidebar Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-headline-md text-on-surface">Recent Reviews</h3>
              <a className="text-sm font-bold text-primary hover:underline" href="#">
                See All
              </a>
            </div>

            <div className="space-y-6">
              {/* Review 1 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-border shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-full bg-surface-container">
                    <img
                      alt="User"
                      className="w-full h-full object-cover rounded-full"
                      data-alt="A portrait of a satisfied young professional in a creative office environment, with a clean and modern aesthetic. The subject is smiling warmly, looking directly at the camera, projecting trust and community. The background features soft bokeh with glimpses of high-tech design tools. The color palette is composed of natural skin tones and professional corporate neutrals, maintaining a light-mode friendly appearance."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC77SrdRcqK8OyXIakvpVEmT4TYn61N3AVOEQZ10D5v7XmaPSn5rKueExK4wBv8UNLM-6jBzH3Yo4m7f7b4CDnHkLIzIyK4ENUPntxuT73pZ_80kxYmFhymx6UYfXWU-Q4XRpMYcUg7LVKhXIzAeZ806sOXLXjo2soczugfnaRoQTDSzfBuKzhtbdevijLpJyT_cQwBUrYsWSG0CiC9tC6815OjFE6cL5tiCiwtQ1EZmD7yyGJBAkahr7zBB5n-Jpbu19H88A2DCdRK"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm">Alex Rivera</p>
                    <div className="flex text-primary scale-75 origin-left">
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    </div>
                  </div>
                  <p className="ml-auto text-label-sm text-on-surface-variant">2d ago</p>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  "The Modern UI kit saved me weeks of work. Every component is meticulously designed and easy to customize. Highly recommend PixelCraft for any serious developer."
                </p>
              </div>

              {/* Review 2 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-border shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-full bg-surface-container">
                    <img
                      alt="User"
                      className="w-full h-full object-cover rounded-full"
                      data-alt="A professional woman smiling in a bright, modern office space. She is dressed in creative business casual attire, reflecting a high-end designer or developer persona. The lighting is soft and airy, creating a clean white-themed aesthetic. The background is minimally decorated with design-related items, emphasizing a clean and high-quality professional atmosphere for a modern web application."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBijXvqxhK2s2MytxhgNlA3jAZdLLIVgAMiW8FOiSmbFWVO5omTMXD1qCz89M7ZWLNRykp6OJMWnIv4yvX2Y-VT7i4n24iALAyKmAZx8KvQLZSrd2WN2iXuAusBb091qipVfWOdsPwWCDdIa-jSeKSXv1GRXriMBy-ojBVWuS80-4a5dpAA56ZnHaKKDoGbrtR5jPPQN0iVjvyvMlzqnZOnOSrL9cJzSqBFnojr902WijfQsSqWMl9h6pLJm2EoIfTp3YKzgRlQs1mq"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm">Sarah Jenkins</p>
                    <div className="flex text-primary scale-75 origin-left">
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    </div>
                  </div>
                  <p className="ml-auto text-label-sm text-on-surface-variant">1w ago</p>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  "Excellent support. I had a question about the 3D assets and they got back to me within the hour. Quality of the icons is top-notch!"
                </p>
              </div>

              {/* Review 3 */}
              <div className="bg-surface-container-lowest p-5 rounded-xl border border-surface-border shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-full bg-surface-container">
                    <img
                      alt="User"
                      className="w-full h-full object-cover rounded-full"
                      data-alt="A portrait of a cheerful, tech-savvy male creator in a minimalist workspace. He is wearing headphones and sitting in front of a high-end monitor. The room is filled with soft, natural light, highlighting a clean and modern professional lifestyle. The color palette is dominated by whites and soft blues, creating a consistent and trustworthy brand image for a digital marketplace reviewer."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnSU1Df8iZcZQ2HZSNd-Bw_Fv0RSpEmMiajFNC3HznkEKniXbXoblOnahg06_h9obuqLM1-o57aZ70LZ7iopEysmGrMtsag8uxwpX5cGp9hsnR-cNoJ_5R6Yxl39YvteKmnMT1pSniLKV8T5Esocl9VmeZB5sXna3XNKC1N6TsxELySMAVXC3GjeuskIXPXnR5Ra3-hre1JA3mRyspLlt2e4EdDScPght2teB8WIEbCaQi0xYDlZp2BUKfQFscewgRD4UoT464AweZ"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm">David Chen</p>
                    <div className="flex text-primary scale-75 origin-left">
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                  </div>
                  <p className="ml-auto text-label-sm text-on-surface-variant">2w ago</p>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  "Clean code and great documentation. Very happy with the purchase."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

