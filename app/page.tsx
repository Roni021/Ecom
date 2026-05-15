import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="theme-page font-display  antialiased">

      {/* <!-- Hero Section --> */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-accent/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                New Assets Added Daily
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
                Create Once. <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-(--primary) to-purple-600">Sell Forever.</span>
              </h1>
              <p className="text-lg lg:text-xl theme-text dark:theme-text mb-10 max-w-xl leading-relaxed">
                High-quality templates, greeting cards, and premium design assets to kickstart your creative projects and scale your digital business effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <!-- Explore Products Button --> */}
                <Link
                  href="/products"
                  className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Explore Products
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>

                {/* <!-- Start Selling Button --> */}
                <Link
                  href="/signup"
                  className="theme-surface theme-surface border border-theme-surface border-theme-surface px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-colors flex items-center justify-center gap-2"
                >
                  Start Selling
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden shadow-2xl -rotate-2">
                    <img alt="Design Mockup" className="w-full h-auto" data-alt="Abstract blue and purple gradient 3D shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUxr7Lim0nqidCfkLch-Mk5h-YJ__Ybv88tlWnGvIHpGMD4IfdcpbilhjOoG7OaqmEM9M4ENsOhCy6jJ5tIZepJ-B_IIC-K1rnBgQu6adKz2vbQTzKPabmf3qIeyFBSJb5jzXOCQf1BshAynjcx1oAe3hmw276szWZNNhGlAWMoITX2nCTKKB-ovpSHL8-PkJM_fY-1lhzD9HSpMmVvltOOJA3Q8TXTxvWoavLxgDepRFXJinPB3EKTDI5sJEA4EKH2tcfpQEfcfG" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl rotate-3">
                    <img alt="Design Mockup" className="w-full h-auto" data-alt="Vibrant abstract colorful wave patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb2xzjBwYYbprXAc6yDC2XOCEsvllheeBdgQuw6jExhvlTB-_6sIe2Df_cgCxnyJadUVu9J7AqY_mA5SWPIt7BPpVrcH2TBUUCUty4_C6MfDmU73TIkd43uvooKw1YqbeqPaRK7l6fHc3gtnSIpGhiR7qMHVx0-TaUf4wH1Wzx_Gb5Y-rMIonqb1_jVZ2uRnWXVFOLX6w_ZEKjlYW8cKqFhPKEBBBnY_SHkxAQ2plKcj6hCpeYyUkFi4-LzfCSk-JmCSiHIOMaBKw5" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2">
                    <img alt="Design Mockup" className="w-full h-auto" data-alt="Minimalist purple aesthetic landscape wallpaper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhYPR2OXgwMXMRJmc0PxTP5Y_rds7mj1qLAA6_iJgkLtZJTgRSfvmgM0iaAJow6D_G0Gu7v6to_yRZkor5TqHibDyYLI2jYbmAQeQX9ITMZTa7QWs0Wv1VB3OtD4mJoMgyvRnSCmWUXRR-M7G6y8fDusQw8rGDLdXAr1aIJForxZ7T-VAMSP5xwhF9eduSgOel_TtcDeaS3WbsuvjxHa6ByJAq_nHSrP-DsSf_pZvZGvGALG_Mq1xBxEaYkDgmx7Yk0pvPLoLIMkxg" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl -rotate-3">
                    <img alt="Design Mockup" className="w-full h-auto" data-alt="High tech blue circuit board background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_qHTjut6U6MR_24dOfJsjWD-UpsrqvU94HhayAHevH6AUjG3SeY3atr0HQESqFpy2M2u1Q9pbmGwMUlAcrAceAlI8GnEozUK0F_QZs3yVLgAIvRGiXAmJl0vW6HRBBlxUDSmcnHO16fbp1w36iPmW1bKAHW--Sf9hiYHPPwH03V-XYXmHexLB4vLXDChbhkgDx12jsxdCgEoFPjX6YdsQRdKga0JOFZoRwcjM0gy_a5Qi92OpHoF-2RfnJRZAxzm2ijuZAOYtk-t" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] theme-accent/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Section --> */}
      <section className="py-24 theme-surface dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Browse by Category</h2>
              <p className="theme-text dark:theme-text">Everything you need for your next masterpiece.</p>
            </div>
            <a className="text-[var(--primary)] font-semibold hover:underline flex items-center gap-1" href="#">
              See All
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Category Card 1 --> */}
            <a className="group relative aspect-square overflow-hidden rounded-2xl theme-surface theme-surface" href="#">
              <img alt="Templates" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Clean corporate website template mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5NSawv0RAGTtgzqo6xQCFDO1txCkqYYf1VeG9e09Dtb4eHa8RD6KMpe-jtGcDPxw8Ivo7C37uHjyhFtBB94eBs3_Uw09mY_bVScpBrPnDLFAPK_oP4hfJvAzqMGDBO-jSZdqbqqdvPP63E7VY-27dzuzHs3iHH9PNb_u9RjkQgM9d2Jbc43oWM4Bb_VSSRB5crUHRsAxXvQ0E8yUdcXmaDm2mKRtikSjyVYx9egZE62UjBlMdoYTTnk_PipB23M3u6chcMGYFY4UF" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Templates</h3>
                <p className="text-white/70 text-sm">1.2k+ Assets</p>
              </div>
            </a>
            {/* <!-- Category Card 2 --> */}
            <a className="group relative aspect-square overflow-hidden rounded-2xl theme-surface theme-surface" href="#">
              <img alt="Greeting Cards" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Beautiful floral wedding invitation cards" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkuM4LNAW4I44BMsn07Fevljsb_-jW-BG9nw5pZbJ1E28M9m3kBWMyEweP-ZCm-2n_D0uV3_-gq6OzDSwchIfnO75zctfmco0n1tj_m3btLTA7CgGLl1sRN6DF3ITGcInXoCMQjGSyfhL9FxzcxKrWLQhjgDYSdndD8PqODm4pyU3ZGKKHlfL63cm5TB3eFxDnDnFzHX6rCR6dzJXMvOcl12F1TtpZS3vOLcXyXOlBUzqkdQ3s9V6LRoVYj1BNA5E6AbdqYu1motbh" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Greeting Cards</h3>
                <p className="text-white/70 text-sm">850+ Assets</p>
              </div>
            </a>
            {/* <!-- Category Card 3 --> */}
            <a className="group relative aspect-square overflow-hidden rounded-2xl theme-surface theme-surface" href="#">
              <img alt="UI Kits" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern mobile app UI components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAJ0psdP9jBrGIc8D6JgxuzTSpy_vJPLGTJlIMkIEQ1T2fYNhe0fu7rnd8_e6GesN3BixJOwbQJTPGe19VH_DtwGAcbn2Fw6WQUd58NLQCq_aJ1eZ6IUNujsVW6qyhYqbXmDMhfY5OSUoSsHKIVkSLRkV31_ZwGVmlVTR1C75Ra-1FEf2Xmk-cZway0yZ_AHfNyP19sC58OLgXGl09g52WeSQwWZL_3nRgubUWqRkfjR6X9582ZbAqaIAEJephf5d17pHYE6ORGLb" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">UI Kits</h3>
                <p className="text-white/70 text-sm">430+ Assets</p>
              </div>
            </a>
            {/* <!-- Category Card 4 --> */}
            <a className="group relative aspect-square overflow-hidden rounded-2xl theme-surface theme-surface" href="#">
              <img alt="Social Media" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Colorful social media post templates grid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYFQkX7ATEvuHJhKhdTMwwxTD3PdVS6SGQ14IZU-vsvTKOtjf8JZtH2CJDdJ0EJAVRszk-d-ujlVLGKRnv7rP6XJa0Ga-0PvuO0yFmiORCxg49_mitYbUWXlV5A-sZmD0NQARM6mwRUJPW4AJwGF3nb4ZM1ccWFm5w8EXeRH_jG-cmhsdhG9z6y7bmRwWpP3jmD3MFixNSfc4PaddP3A7x_FHbeKfzTbiWv1sJsc1cJrpmnBYyfu8LSYui0mEPf2wmADxXzKBrmO_4" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Social Media</h3>
                <p className="text-white/70 text-sm">2.4k+ Assets</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Featured Products --> */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg theme-surface theme-surface border border-theme-surface border-theme-surface text-sm font-semibold hover:bg-slate-50">Newest</button>
              <button className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold">Popular</button>
              <button className="px-4 py-2 rounded-lg theme-surface theme-surface border border-theme-surface border-theme-surface text-sm font-semibold hover:bg-slate-50">Free</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Product Card 1 --> */}
            <div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Product 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Blue abstract 3D shape composition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFUmTw61A9eVz2ha2aiiaOJYVlSdU_FyrlV9ZhYyNJaU5wYFHlB0aULHHaGaA9o9SJUSlF8sPIIyBQ9tSgBcw5rn4tgr3x4YhG_pi3nPdXTy4EXdfRt2meHE8hvAYQnP4t9MnYcGNlhqVgO3fJbCK9s86roEeW39MEqYZKUwvyZzQklro19lA8N8p2SIiQdMGx4WrNV64e91IOLJoxj9xd0e37zNtavvu4cpnU88JcTZRX5eaA3UjUnSp_fB5Yh_VaMrYBD3Xu6op2" />
                <div className="absolute top-4 right-4 theme-surface/90 theme-surface/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                  $24.00
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2 text-amber-500">
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="text-xs font-bold theme-text dark:theme-text">4.9</span>
                  <span className="text-xs theme-text font-normal">(128 reviews)</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">Neo-Minimalist UI Framework</h3>
                <p className="theme-text dark:theme-text text-sm mb-6 line-clamp-2">Complete design system with 500+ customizable components for SaaS products.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <img alt="Author" data-alt="Portrait of a young creative designer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoXHghwEpE8rEOv6JCc9tXgrwS5DNpESRGg08M7AT1MK7eK7VInZv0qqd_JwePeyW-BSxtsAKewmBasQoRtES7UmNGZTNG7C2VdfCka2Gfp2W3JewqIBjGUBE-ueRKSENwB_of8VXf1mHnjkgeK5RkUH67SDVm4tjHbkZOkkH1P51SPFfPZ8QkID_hM5En56M7XFZWOYWQI0IMy1nN9dTJr0s-yOadrKtUWXYiXDPdJQSgqj3JrTDGKCRwV2VRCUoyZRRA8wU-065O" />
                    </div>
                    <span className="text-xs font-medium theme-text dark:theme-text">Alex Rivers</span>
                  </div>
                  <button className="theme-accent/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">Buy Now</button>
                </div>
              </div>
            </div>
            {/* <!-- Product Card 2 --> */}
            <div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Product 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Black and gold pattern texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsWFbkUN_r9UevEOQIH2zd-m4vX4mVB6ZP_Bvubh8bSxUyDVgZSFC744wunbz9x-zNDm6z9GMqTnGdzHMwicURqalbKQ3y1iU9j7fPsQYZ0EAacSuWuJB8a5u7rwrdxuyX62NFeybDKmyN6kBxe1V_WEQkp8RVtx_9C3JqRPbYHH1svpli_cqorp_Rd6QMTZQURwcc8xKT5YyTElwXPxUUyc948LlNWVtpAxdU0PY-8jfW1_vptO3n7wmAYT_RE-ZwPc_kaMvnYbpa" />
                <div className="absolute top-4 right-4 theme-surface/90 theme-surface/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                  $12.00
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2 text-amber-500">
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="text-xs font-bold theme-text dark:theme-text">4.8</span>
                  <span className="text-xs theme-text font-normal">(94 reviews)</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">Gold Foil Greeting Bundle</h3>
                <p className="theme-text dark:theme-text text-sm mb-6 line-clamp-2">Luxury invitation templates with realistic gold foil textures for all occasions.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <img alt="Author" data-alt="Portrait of a woman smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3H_h_65pK-XZmKSIsJmyPOlloJnrqbp33kIyLtvb7eCSzY3tq7XkASQY5pb75AvbJRkr41q4-VMKqYA9F_uVno7RQ-QvPRHDfzdq1yPXbBSe2_v6BgOsSuvfGco3YwLLGlpOfI00iS-6HXxwd1gZB1gQND3yAMLsvj2R5JfRIz_Yl5WicBUXLCewi1X38YAz97EqtJ3QMVf7BKiIGEeIJ6-yjOnpjEREWqA45FK-GkGQjZnsRTml4Alj9yhScZItEZ66myWraYvFa" />
                    </div>
                    <span className="text-xs font-medium theme-text dark:theme-text">Sarah Chen</span>
                  </div>
                  <button className="theme-accent/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">Buy Now</button>
                </div>
              </div>
            </div>
            {/* <!-- Product Card 3 --> */}
            <div className="group theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Product 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Social media app icon grid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAiIPGNt16QW41T-tGTMfxKnfubYKarPXO9XjTKAhZfD-p5FDQ_S3Ml3Tuaq8ipX-SmL0vYaXetjRppEtEWDOT-mxIU7py1QXQEvG3QfGSz0KfS9pqy8ysTt0WVwRZmFj_zKuBoJKLtp8Lg3r6GezdOBxDeFlp8V8vabOWEYDyZURNbt23DaaG4IN7320olka8zHUKXVIsPzt46n86Pp4h4fXnS8AN4n0UF2Gv8xTDvWLNSAZzf2g_jmJdI577IYRbwKQbQZbqxiyu" />
                <div className="absolute top-4 right-4 theme-surface/90 theme-surface/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                  $18.00
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2 text-amber-500">
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="text-xs font-bold theme-text dark:theme-text">5.0</span>
                  <span className="text-xs theme-text font-normal">(210 reviews)</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">Creator Social Kit 2024</h3>
                <p className="theme-text dark:theme-text text-sm mb-6 line-clamp-2">Viral-ready post and story templates designed for maximum engagement.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <img alt="Author" data-alt="Man with glasses and beard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgua6ND7Q8OLjgLWtvW289MxGX2k2giigYOzkmo_1Y5DbuhcLM2IDWl5h5g8xjbgJBP7CrhwwchtkAbFlDierf1vZbnZQzt1vUOSRY5yfxM1_nwFVn5oXqm32e7ugu9niSU8iUE2P09zwdIVJQVLmymLKQzKmJ042YTozSyL5d0zSoQqTTkJautF1kAT0quVxXYpH28hIvVoIZ1ouUvSlG6fkDCo3t9RtvyJ992bIxMWWHhQk1lOLSM51e9bFaInK5j0_62vCjJoo1" />
                    </div>
                    <span className="text-xs font-medium theme-text dark:theme-text">Marcus Wright</span>
                  </div>
                  <button className="theme-accent/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- How It Works --> */}
      <section className="py-24 bg-slate-50 dark:bg-background-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="theme-text dark:theme-text max-w-2xl mx-auto">Get your hands on world-className design assets in three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-slate-200 dark:bg-slate-700 -z-10"></div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 theme-accent/10 text-[var(--primary)] rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/5">
                <span className="material-symbols-outlined text-4xl">search_check</span>
              </div>
              <h3 className="text-xl font-bold mb-3">1. Choose</h3>
              <p className="theme-text dark:theme-text">Browse thousands of premium digital products from top creators.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 theme-accent/10 text-[var(--primary)] rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/5">
                <span className="material-symbols-outlined text-4xl">shopping_cart_checkout</span>
              </div>
              <h3 className="text-xl font-bold mb-3">2. Purchase</h3>
              <p className="theme-text dark:theme-text">Secure checkout with various payment options and global coverage.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 theme-accent/10 text-[var(--primary)] rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/5">
                <span className="material-symbols-outlined text-4xl">download_for_offline</span>
              </div>
              <h3 className="text-xl font-bold mb-3">3. Download</h3>
              <p className="theme-text dark:theme-text">Instant access to high-resolution source files for your projects.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Trust Section --> */}
      <section className="py-12 border-y border-theme-surface dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-[var(--primary)] text-3xl">bolt</span>
              <div>
                <h4 className="font-bold text-sm">Instant Download</h4>
                <p className="theme-text dark:theme-text text-xs">Access files immediately after payment</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-[var(--primary)] text-3xl">verified_user</span>
              <div>
                <h4 className="font-bold text-sm">Secure Payment</h4>
                <p className="theme-text dark:theme-text text-xs">Fully encrypted transaction processing</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-[var(--primary)] text-3xl">all_inclusive</span>
              <div>
                <h4 className="font-bold text-sm">Lifetime Access</h4>
                <p className="theme-text dark:theme-text text-xs">Re-download your purchases anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials --> */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Loved by Creative Teams</h2>
            <p className="theme-text dark:theme-text">Join over 50,000 designers who use our assets daily.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface shadow-sm">
              <div className="flex text-amber-500 mb-4">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
              </div>
              <p className="theme-text dark:theme-text italic mb-6 leading-relaxed">"The quality of the UI kits here is unmatched. They&apos;ve saved our agency hundreds of hours on production work."</p>
              <div className="flex items-center gap-4">
                <img alt="Customer" className="w-12 h-12 rounded-full" data-alt="Business woman portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8CN2UP9YDMX20yjpU8vWL9L9IsG3jZ_X0QEGtejib26QUNqM6dqQRBollQy9sB_e6deYq-sfLceJVMZBS9aIM-IGtHgYbuP1lLfEJJT5Qe1khn5McXYOSveeVFQk_ApuJbKF7bwCKv5zTpZ6C1-r9vflfNb70ggOzHtAaS6KQ_Vlc0a6dsOm553OxFd2VWVAYhiBtgLrY1Vumnfcj5G-vmqqq2sSvhaRgi8EbLjwIl79B0JQ9wnBeqtQvaCndbu348tndiFfGEVl-" />
                <div>
                  <h4 className="font-bold text-sm">Elena Rodriguez</h4>
                  <p className="theme-text dark:theme-text text-xs">Creative Director, PixelPoint</p>
                </div>
              </div>
            </div>
            <div className="p-8 theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface shadow-sm">
              <div className="flex text-amber-500 mb-4">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
              </div>
              <p className="theme-text dark:theme-text italic mb-6 leading-relaxed">"Finding unique greeting card templates used to be a chore. Now it&apos;s my first stop for every holiday season."</p>
              <div className="flex items-center gap-4">
                <img alt="Customer" className="w-12 h-12 rounded-full" data-alt="Young man with cool haircut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDh4MWeibg-NWcTvLRHrM7ySAoYM0UK9Z0GdQOu-ZyYHmWJhuK9whbtzxBh4CzxqXniXfCLFL1WGw_Tn6hrbrAyD163t7iGN_OjmeRFoQDILaco02vzk3UsKxu-9KkcImtkg5XRiCxHooBhKhMEPQBg1Hf_ozd-9J6V-I6X7MadBHKidVd9-i1Ibsr1nJ77vzi9l2lvKHQ6avtBNO0TX0Q7Bg9LQIk5pNQBmv9Nd7ptUShNz1KzzWycBluux3bJiKCENCCG4k_1nG" />
                <div>
                  <h4 className="font-bold text-sm">Jordan Smith</h4>
                  <p className="theme-text dark:theme-text text-xs">Freelance Illustrator</p>
                </div>
              </div>
            </div>
            <div className="p-8 theme-surface theme-surface rounded-2xl border border-theme-surface border-theme-surface shadow-sm">
              <div className="flex text-amber-500 mb-4">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="material-symbols-outlined text-sm fill-1">star</span>
              </div>
              <p className="theme-text dark:theme-text italic mb-6 leading-relaxed">"As a seller, the platform is incredibly intuitive. The &apos;sell forever&apos; promise is real &ndash; my passive income is growing monthly!"</p>
              <div className="flex items-center gap-4">
                <img alt="Customer" className="w-12 h-12 rounded-full" data-alt="Woman with artistic style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQjt15luCrzOgTHwC_N1M0225F7kQTR1sEydLJAfKZD4AKU1KU9b2urI-ZtZnxmGohJ9jhlnmXZ6lmp_Bq4EYVkt0ni9lLWcI3NRyDs5reDAu0xcrIB0BP3marDbU6Js9iwNKv2Zqp1VpAoIX4ZHqHnB58eq-QKUZy_v-bahOS1vGs8UPfTyYAzU2rJVCy7vQoCvYWP06MPvX3nQfCPttXsFNHQz53PbwwKLrjPteRg-I3gl6nCV6Z1tz5MAIUwaY4jbe8aiJKoiQx" />
                <div>
                  <h4 className="font-bold text-sm">Sophie Laurent</h4>
                  <p className="theme-text dark:theme-text text-xs">Premium Content Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[var(--primary)] rounded-4xl overflow-hidden p-8 md:p-16 lg:p-24 text-center">
            <div className="absolute inset-0 bg-linear-to-br from-primary via-(--primary) to-purple-600 opacity-90"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to boost your creative workflow?</h2>
              <p className="text-[var(--primary)]-100 text-lg text-white/80 mb-10">Join our community of creators today and get 20% off your first purchase.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">


                <Link
                  href="/login"
                  className="cursor-pointer inline-block theme-surface theme-surface text-[var(--primary)] px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-black/10 hover:scale-105 transition-all"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/about"
                  className="cursor-pointer theme-accent/20 border border-white/30 border-theme-surface text-white px-10 py-4 rounded-xl font-bold text-lg hover:theme-surface/10 theme-surface/10 hover:scale-105 transition-all inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* <!-- Background blobs --> */}
            <div className="absolute -top-24 -left-24 w-96 h-96 theme-surface/10 theme-surface/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

    </div>
  );
}
