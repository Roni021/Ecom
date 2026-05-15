"use client";
import Link from "next/link";

export default function categoris() {
  return (
    <div className="theme-page theme-text dark:theme-text font-display">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* <!-- Top Navigation Bar --> */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-theme-surface dark:border-slate-800 theme-page px-6 md:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 theme-accent-text">
              <div className="size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">storefront</span>
              </div>
              <h2 className="theme-text dark:theme-text text-lg font-bold leading-tight tracking-[-0.015em]">DigitalMarket</h2>
            </div>
            <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="theme-text dark:theme-text flex border-none theme-surface theme-surface items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input ..."
                  placeholder="Search templates..."
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end gap-8 items-center">
            <nav className="hidden lg:flex items-center gap-9">
              <a className="theme-text dark:theme-text text-sm font-medium hover:theme-accent-text transition-colors" href="#">Templates</a>
              <a className="theme-text dark:theme-text text-sm font-medium hover:theme-accent-text transition-colors" href="#">Graphics</a>
              <a className="theme-text dark:theme-text text-sm font-medium hover:theme-accent-text transition-colors" href="#">Fonts</a>
              <a className="theme-text dark:theme-text text-sm font-medium hover:theme-accent-text transition-colors" href="#">Tools</a>
            </nav>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-xl h-10 w-10 theme-surface theme-surface theme-text dark:theme-text hover:theme-accent/10 transition-colors">
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
              <button className="flex items-center justify-center rounded-xl h-10 w-10 theme-surface theme-surface theme-text dark:theme-text hover:theme-accent/10 transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex flex-1 flex-col md:flex-row max-w-[1440px] mx-auto w-full">
          {/* <!-- Sidebar Navigation & Filters --> */}
          <aside className="w-full md:w-64 lg:w-72 border-r border-theme-surface dark:border-slate-800 p-6 flex flex-col gap-8">
            {/* <!-- Breadcrumbs & Title --> */}
            <div className="flex flex-col gap-1">
              <nav className="flex items-center gap-1 text-xs theme-text dark:theme-text mb-2">
                <a className="hover:theme-accent-text" href="#">Home</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <a className="hover:theme-accent-text" href="#">Digital Products</a>
              </nav>
              <h1 className="text-xl font-bold">Email Templates</h1>
              <p className="theme-text text-sm">1,200+ designs</p>
            </div>
            {/* <!-- Navigation Links --> */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl theme-accent/10 theme-accent-text">
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-semibold">All Templates</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 rounded-xl cursor-pointer">
                <span className="material-symbols-outlined">star</span>
                <p className="text-sm font-medium">Best Sellers</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 theme-text dark:theme-text hover:theme-surface dark:hover:bg-slate-800 rounded-xl cursor-pointer">
                <span className="material-symbols-outlined">schedule</span>
                <p className="text-sm font-medium">New Arrivals</p>
              </div>
            </div>
            <div className="h-px bg-slate-200 theme-surface"></div>
            {/* <!-- Platform Filters --> */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold uppercase tracking-wider theme-text dark:theme-text">Platform</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 theme-surface theme-surface rounded-full text-xs font-medium cursor-pointer hover:theme-accent hover:text-white transition-colors">Mailchimp</span>
                <span className="px-3 py-1 theme-accent text-white rounded-full text-xs font-medium cursor-pointer">HubSpot</span>
                <span className="px-3 py-1 theme-surface theme-surface rounded-full text-xs font-medium cursor-pointer hover:theme-accent hover:text-white transition-colors">Klaviyo</span>
                <span className="px-3 py-1 theme-surface theme-surface rounded-full text-xs font-medium cursor-pointer hover:theme-accent hover:text-white transition-colors">SendGrid</span>
                <span className="px-3 py-1 theme-surface theme-surface rounded-full text-xs font-medium cursor-pointer hover:theme-accent hover:text-white transition-colors">Monitor</span>
              </div>
            </div>
            {/* <!-- Template Type --> */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold uppercase tracking-wider theme-text dark:theme-text">Template Type</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  {/* <input checked="" className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox"/> */}
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Newsletter</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Transactional</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Welcome Series</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Promotional</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Abandoned Cart</span>
                </label>
              </div>
            </div>
            {/* <!-- Style --> */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold uppercase tracking-wider theme-text dark:theme-text">Style</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Minimal</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Bold</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Corporate</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded border-slate-300 theme-accent-text focus:ring-primary h-4 w-4 bg-transparent" type="checkbox" />
                  <span className="text-sm theme-text dark:theme-text group-hover:theme-accent-text">Playful</span>
                </label>
              </div>
            </div>
            {/* <!-- Price Range Slider --> */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider theme-text dark:theme-text">Price Range</h3>
              <div className="px-2">
                <div className="relative h-1 bg-slate-200 theme-surface rounded-full mb-6">
                  <div className="absolute h-full w-2/3 left-0 theme-accent rounded-full"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 h-4 w-4 theme-accent border-2 border-white dark:border-background-dark rounded-full shadow-md cursor-pointer"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-2/3 h-4 w-4 theme-accent border-2 border-white dark:border-background-dark rounded-full shadow-md cursor-pointer"></div>
                </div>
                <div className="flex justify-between text-xs theme-text">
                  <span>$0</span>
                  <span>$250+</span>
                </div>
              </div>
            </div>
          </aside>
          {/* <!-- Main Product Grid --> */}
          <section className="flex-1 p-6 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm theme-text font-medium">Showing 1-12 of 1,248 results</p>
              <div className="flex items-center gap-2">
                <span className="text-sm theme-text">Sort by:</span>
                <select className="form-select bg-transparent border-theme-surface dark:border-slate-800 text-sm rounded-lg focus:ring-primary focus:border-theme-accent">
                  <option>Popularity</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* <!-- Product 1 --> */}
              <div className="group flex flex-col theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-4/3 relative overflow-hidden theme-surface theme-surface">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Modern geometric newsletter email template preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtE8XIM8kf_ecer1uFePqJUPI4unXFwomaPgD87uGblW9J_z9eM7iao6EmEedE2CuF6LsENDQiS8b1x_Lm_JRo-A0WcaFHLYT2y8jTe68p2tsSWgvs5mDEFqb8Y4mKmkIg9Zuv6kWqsf_JBG3aenRRHhUWk65g7oPvAUCH2cURk_X97fqfIgXHD_PWUZFpfOMnTyM9hy5hhWlRPPF4gIPEzpIRAQ7xGDjhLPFcvcuXwZRbMYRgTbqtbfD8B9GmjlY28ztjvqVWO8ie" />
                  <div className="absolute top-3 right-3">
                    <span className="theme-surface/90 theme-surface/90 theme-accent-text text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">Hot</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold theme-text dark:theme-text uppercase tracking-widest">Mailchimp &amp; HubSpot</span>
                    <div className="flex items-center gap-1 theme-accent-text">
                      <span className="material-symbols-outlined text-sm font-fill">star</span>
                      <span className="text-xs font-bold theme-text dark:theme-text">4.9</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:theme-accent-text transition-colors">Modern Newsletter Pack</h3>
                  <p className="text-xs theme-text mb-4 line-clamp-1">15+ high-conversion blocks for lifestyle brands.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold theme-accent-text">$29.00</span>
                    <button className="flex items-center justify-center theme-surface theme-surface theme-text dark:theme-text h-9 w-9 rounded-lg hover:theme-accent hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Product 2 --> */}
              <div className="group flex flex-col theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-4/3 relative overflow-hidden theme-surface theme-surface">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="E-commerce welcome series email template with product shots" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhx5NIfoaDBP5bHeFv4c_ZPwpY6ncGsgbv-TuF25biIPphiNaAozcmbwq-A0WWk454tOJtfI6gyJZcnyK_k1KXydgqGFqVO3eVoZ2ZRDpyo76KG3KKiEDrbkedugfEjezKkhoMYbm89uUSNusCBmpfKMy6UQP-bDL14NzjUeg1BukfaOk1utgCXqafBmLYuU8csjZERpD_5pv-l8nlztmZoRwvM9d4TXIFAC16jUKFP7aipKFYrG3K2sGkhwGNP3oRf_Y1ELpFV1b9" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold theme-text dark:theme-text uppercase tracking-widest">Klaviyo Expert</span>
                    <div className="flex items-center gap-1 theme-accent-text">
                      <span className="material-symbols-outlined text-sm font-fill">star</span>
                      <span className="text-xs font-bold theme-text dark:theme-text">4.8</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:theme-accent-text transition-colors">E-commerce Welcome Series</h3>
                  <p className="text-xs theme-text mb-4 line-clamp-1">Automated 5-email flow for online stores.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold theme-accent-text">$45.00</span>
                    <button className="flex items-center justify-center theme-surface theme-surface theme-text dark:theme-text h-9 w-9 rounded-lg hover:theme-accent hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Product 3 --> */}
              <div className="group flex flex-col theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-4/3 relative overflow-hidden theme-surface theme-surface">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Minimalist corporate email template design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_AO38q6okmDwJN1cDF3wRQxolMPCwR_gHGZZgJzHhw6dXKrOyqm3V6fGBIGc30WBszCMz4QOr4IkpJF09y65r9OgJW0AmvgaNQiUfrDAuMmFUvra3tujBMD3PtgUZIwFmWlDgvJPi59YDUv7Uj-tZWBAAhJkOjWi5K7x6TXIA7Ix7Bie_N9YniV8ERWfxeT_IHfuxvYhFaACDgJAbS2Xz0v8E71gDseIGBCktSDzGw3agvP0xHPYTAID8w1JDZ737-xEtaLZDxgYY" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold theme-text dark:theme-text uppercase tracking-widest">Universal HTML</span>
                    <div className="flex items-center gap-1 theme-accent-text">
                      <span className="material-symbols-outlined text-sm font-fill">star</span>
                      <span className="text-xs font-bold theme-text dark:theme-text">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:theme-accent-text transition-colors">Corporate Minimalist v2</h3>
                  <p className="text-xs theme-text mb-4 line-clamp-1">Clean and professional for B2B communications.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold theme-accent-text">$19.00</span>
                    <button className="flex items-center justify-center theme-surface theme-surface theme-text dark:theme-text h-9 w-9 rounded-lg hover:theme-accent hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Product 4 --> */}
              <div className="group flex flex-col theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-4/3 relative overflow-hidden theme-surface theme-surface">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Bold promotional email template with bright colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtRDrKsWFEDGt1ExYFOzEvbmbkXKvUJ9_rcO721QMlcy5K87ljsLbQTIHy6u8pztZXcbYlsMjfew0OcPK8Efr6olXHVup70DKtbPfrGQpLI3ysg3rAsls57TljeZKyZDCNgKthfjAZ-sW95WO0nIvWVD_DvGTyD4jzEXLvJOEsbWw75qTq7CV1Ceo48R2gUshOWDueXt_yYnrYqwUOUE-iaz5cb__SIg_J-qiC0kj5e6jbaPmgaVK0Tjf3ytSS2GPk0BKSGWqKfOGs" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold theme-text dark:theme-text uppercase tracking-widest">Campaign Monitor</span>
                    <div className="flex items-center gap-1 theme-accent-text">
                      <span className="material-symbols-outlined text-sm font-fill">star</span>
                      <span className="text-xs font-bold theme-text dark:theme-text">4.7</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:theme-accent-text transition-colors">Bold Sale Promotion</h3>
                  <p className="text-xs theme-text mb-4 line-clamp-1">Attention-grabbing layouts for flash sales.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold theme-accent-text">$34.00</span>
                    <button className="flex items-center justify-center theme-surface theme-surface theme-text dark:theme-text h-9 w-9 rounded-lg hover:theme-accent hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Product 5 --> */}
              <div className="group flex flex-col theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-4/3 relative overflow-hidden theme-surface theme-surface">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Abandoned cart reminder email template with cart icons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDohz0kK2HaWe8OBzNpCISEwzZUSohBA48GrpFY_7pr7dhFjLwEqcelDWeri7E9HWHlcHxdrjuL2Tl8zpiWFB1kGc-1B8J51MIAhXrnsGimDo9AU_wUoyp7s9OH8L5FZN4U-uUL58rNeHYZoQDzl6nc-vbo_rpnV6yWNgh76Z_tN4B0rfaF0HS2OVC-p1OqLpKcPi-jkGctg7R_47F9kZxcBBIVIjI3YPn52pXipFs6G82lJ6ciGNoyUJJpHnQjQ-kj3e-T6N28k3Z6" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold theme-text dark:theme-text uppercase tracking-widest">Mailchimp &amp; Klaviyo</span>
                    <div className="flex items-center gap-1 theme-accent-text">
                      <span className="material-symbols-outlined text-sm font-fill">star</span>
                      <span className="text-xs font-bold theme-text dark:theme-text">4.9</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:theme-accent-text transition-colors">Recover Abandoned Carts</h3>
                  <p className="text-xs theme-text mb-4 line-clamp-1">Optimized templates to win back customers.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold theme-accent-text">$39.00</span>
                    <button className="flex items-center justify-center theme-surface theme-surface theme-text dark:theme-text h-9 w-9 rounded-lg hover:theme-accent hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Product 6 --> */}
              <div className="group flex flex-col theme-surface theme-surface rounded-xl overflow-hidden border border-theme-surface dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-4/3 relative overflow-hidden theme-surface theme-surface">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Playful colorful email template for children brands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8-XqIQT7-Jb2iHqSESfUTWSkd5stgUVL83BJb5rYVVczKCik3tCG3Z2xGSgBw35xdFgJSormxTuhC7i0SQuuWzhNrfy38U6sJUlwhHIbeR_gdOeFR_RkkPZgSHqVDfgSIWColjEc2Zk5vi-n3ulvmLpYRvXC7V7Um0TNQvQEW0PYuSpKUcaUfCCUTVZumbsjS0YhiPwM7evFiX7ijLQw3hApfmvTf4d2HRB4Pkb6jmB_8Ko_OXO5zP6WedzN0D5N8V6wGh9FR3gAz" />
                  <div className="absolute top-3 right-3">
                    <span className="theme-accent/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">New</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold theme-text dark:theme-text uppercase tracking-widest">Multiple Platforms</span>
                    <div className="flex items-center gap-1 theme-accent-text">
                      <span className="material-symbols-outlined text-sm font-fill">star</span>
                      <span className="text-xs font-bold theme-text dark:theme-text">4.6</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:theme-accent-text transition-colors">Playful Brand Kit</h3>
                  <p className="text-xs theme-text mb-4 line-clamp-1">Fun, energetic designs for creative agencies.</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold theme-accent-text">$25.00</span>
                    <button className="flex items-center justify-center theme-surface theme-surface theme-text dark:theme-text h-9 w-9 rounded-lg hover:theme-accent hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Pagination --> */}
            <div className="mt-12 flex justify-center items-center gap-2">
              <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-theme-surface dark:border-slate-800 theme-text dark:theme-text hover:theme-accent/10 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-xl theme-accent text-white font-bold">1</button>
              <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-theme-surface dark:border-slate-800 theme-text dark:theme-text hover:theme-accent/10 transition-colors">2</button>
              <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-theme-surface dark:border-slate-800 theme-text dark:theme-text hover:theme-accent/10 transition-colors">3</button>
              <span className="theme-text mx-1">...</span>
              <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-theme-surface dark:border-slate-800 theme-text dark:theme-text hover:theme-accent/10 transition-colors">42</button>
              <button className="h-10 w-10 flex items-center justify-center rounded-xl border border-theme-surface dark:border-slate-800 theme-text dark:theme-text hover:theme-accent/10 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
);
}
