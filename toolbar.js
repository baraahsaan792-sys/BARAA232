/* ============================================================
   Loving Homes — Toolbar v7
   Languages: AR (العربية) | EN (English) | ZH (廣東話)
   Features: Theme, Font, Search, Favorites, Language, Interactive Map
   ============================================================ */
(function () {
  'use strict';

  const LANGS = {
    ar: {
      dir: 'rtl', lang: 'ar', label: 'العربية 🇯🇴',
      nav_home:'الرئيسية', nav_about:'من نحن', nav_services:'الخدمات', nav_packages:'الحزم',
      nav_gallery:'معرض الصور', nav_videos:'🎬 الفيديوهات', nav_team:'فريقنا',
      nav_testimonials:'آراء العملاء', nav_faq:'الأسئلة', nav_blog:'المدونة',
      nav_pricing:'الأسعار', nav_contact:'تواصل معنا', nav_booking:'احجز الآن',
      footer_pages:'الصفحات', footer_more:'المزيد', footer_contact:'تواصل معنا',
      footer_copyright:'جميع الحقوق محفوظة.', footer_tagline:'نوفر أرقى تجربة رعاية لكلبك في بيئة آمنة ومحبة.',
      hero_badge:'الرعاية الأفضل لصديقك المخلص', hero_line1:'مكان آمن ومريح', hero_line2:'لكلبك المميز',
      hero_line3:'✦ رعاية فاخرة على مدار الساعة ✦', hero_sub:'نوفر أرقى تجربة إقامة لكلبك، بخدمات بيطرية متميزة وبيئة آمنة ومريحة',
      hero_btn1:'📅 احجز إقامة الآن', hero_btn2:'🎁 استعرض الحزم',
      stat_happy:'كلب سعيد', stat_years:'سنوات من الخبرة', stat_care:'رعاية مستمرة', stat_satisfaction:'رضا العملاء',
      feat_tag:'لماذا نحن الأفضل؟', feat_title:'مميزات تجعلنا', feat_title_hl:'الخيار الأول',
      feat_sub:'نلتزم بتوفير أعلى معايير الرعاية والراحة لكلبك في بيئة آمنة ومحبة',
      card1_title:'رعاية بيطرية 24/7', card1_text:'طاقم طبي بيطري متخصص متاح على مدار الساعة',
      card2_title:'مراعي خارجية آمنة', card2_text:'مساحات خضراء واسعة ومؤمنة لكلبك',
      card3_title:'تحديثات يومية', card3_text:'نرسل لك صوراً وتقارير يومية عن كلبك',
      card4_title:'تدفئة وتبريد', card4_text:'غرف مزودة بأنظمة تدفئة وتبريد',
      card5_title:'خدمة التوصيل', card5_text:'نوفر خدمة التوصيل من وإلى منزلك',
      card6_title:'ترفيه وراحة', card6_text:'غرف مجهزة بتلفزيون وواي فاي',
      pkg_tag:'حزمنا المميزة', pkg_title:'اختر الحزمة', pkg_title_hl:'المناسبة لكلبك',
      pkg_sub:'حزم متنوعة تناسب جميع احتياجات كلبك وميزانيتك',
      pkg1_name:'الحزمة الأساسية', pkg2_name:'الحزمة المتوسطة', pkg3_name:'الحزمة المميزة',
      pkg_btn:'احجز الآن', pkg_view_all:'استعرض جميع الحزم والتفاصيل ←',
      cta_title:'هل كلبك يستحق', cta_title_hl:'الأفضل؟',
      cta_sub:'احجز إقامة فاخرة الآن وامنح كلبك تجربة لا تُنسى',
      cta_btn1:'📅 احجز الآن مجاناً', cta_btn2:'📞 تواصل معنا',
      contact_form_title:'أرسل لنا', contact_form_title_hl:'رسالة',
      contact_info_title:'معلومات', contact_info_title_hl:'التواصل',
      contact_name_label:'الاسم الكامل *', contact_name_ph:'محمد أحمد',
      contact_phone_label:'رقم الهاتف *', contact_phone_ph:'07xxxxxxxx',
      contact_email_label:'البريد الإلكتروني *', contact_subject_label:'موضوع الرسالة',
      contact_msg_label:'رسالتك *', contact_msg_ph:'اكتب رسالتك هنا...', contact_send_btn:'📤 إرسال الرسالة',
      map_title:'📍 موقعنا في هونغ كونغ', map_open_google:'🗺️ افتح في خرائط جوجل',
      map_open_apple:'🍎 خرائط آبل', map_location_label:'هونغ كونغ',
      ph_about_tag:'قصتنا', ph_about_h1:'من نحن؟', ph_about_sub:'فريق متخصص يجمعه شغف حقيقي برعاية الكلاب وتوفير أفضل تجربة لها',
      ph_services_tag:'خدماتنا', ph_services_h1:'خدماتنا المتميزة', ph_services_sub:'نقدم طيفاً واسعاً من الخدمات لتلبية احتياجات كلبك',
      ph_packages_tag:'حزمنا', ph_packages_h1:'الحزم والأسعار', ph_packages_sub:'حزم متنوعة تناسب جميع احتياجات كلبك وميزانيتك',
      ph_gallery_tag:'معرضنا', ph_gallery_h1:'معرض الصور', ph_gallery_sub:'لحظات سعيدة من حياة كلابنا المدللة',
      ph_videos_tag:'🎬 فيديوهات', ph_videos_h1:'فيديوهاتنا', ph_videos_sub:'لحظات ممتعة وتدريبات ونصائح مفيدة',
      ph_team_tag:'فريقنا', ph_team_h1:'فريقنا المتخصص', ph_team_sub:'محترفون متخصصون في رعاية وتدريب الكلاب',
      ph_testimonials_tag:'آراء العملاء', ph_testimonials_h1:'ماذا يقول عملاؤنا', ph_testimonials_sub:'قصص نجاح حقيقية من عائلات سعيدة',
      ph_faq_tag:'الأسئلة الشائعة', ph_faq_h1:'الأسئلة والأجوبة', ph_faq_sub:'كل ما تحتاج لمعرفته عن خدماتنا',
      ph_blog_tag:'مدونتنا', ph_blog_h1:'المدونة', ph_blog_sub:'نصائح ومقالات مفيدة لأصحاب الكلاب',
      ph_pricing_tag:'الأسعار', ph_pricing_h1:'خطط الأسعار', ph_pricing_sub:'أسعار واضحة وشفافة بدون رسوم مخفية',
      ph_contact_tag:'نحن هنا دائماً', ph_contact_h1:'تواصل معنا', ph_contact_sub:'هل لديك سؤال أو تريد معرفة المزيد؟ نحن هنا للمساعدة',
      ph_booking_tag:'حجز الآن', ph_booking_h1:'احجز إقامة لكلبك', ph_booking_sub:'خطوات بسيطة لحجز إقامة فاخرة لكلبك',
      tb_title:'إعدادات الموقع', tb_lang:'اللغة', tb_theme:'المظهر', tb_font:'الخط',
      tb_search:'بحث', tb_favorites:'المفضلة', tb_search_ph:'ابحث في الصفحات...', tb_no_fav:'لا توجد مفضلة بعد',
    },
    en: {
      dir: 'ltr', lang: 'en', label: 'English 🇬🇧',
      nav_home:'Home', nav_about:'About Us', nav_services:'Services', nav_packages:'Packages',
      nav_gallery:'Gallery', nav_videos:'🎬 Videos', nav_team:'Our Team',
      nav_testimonials:'Reviews', nav_faq:'FAQ', nav_blog:'Blog',
      nav_pricing:'Pricing', nav_contact:'Contact Us', nav_booking:'Book Now',
      footer_pages:'Pages', footer_more:'More', footer_contact:'Contact Us',
      footer_copyright:'All rights reserved.', footer_tagline:'We provide the finest care experience for your dog in a safe and loving environment.',
      hero_badge:'The Best Care for Your Loyal Friend', hero_line1:'A Safe & Comfortable', hero_line2:'Home for Your Dog',
      hero_line3:'✦ Luxury Care Around the Clock ✦', hero_sub:'We provide the finest stay experience for your dog, with premium veterinary services and a safe, comfortable environment',
      hero_btn1:'📅 Book a Stay Now', hero_btn2:'🎁 Browse Packages',
      stat_happy:'Happy Dogs', stat_years:'Years of Experience', stat_care:'Continuous Care', stat_satisfaction:'Client Satisfaction',
      feat_tag:'Why Are We the Best?', feat_title:'Features That Make Us', feat_title_hl:'the #1 Choice',
      feat_sub:'We are committed to providing the highest standards of care and comfort for your dog',
      card1_title:'24/7 Veterinary Care', card1_text:'Specialized veterinary team available around the clock',
      card2_title:'Safe Outdoor Pastures', card2_text:'Spacious and secured green areas for your dog',
      card3_title:'Daily Updates', card3_text:'We send you daily photos and reports about your dog',
      card4_title:'Heating & Cooling', card4_text:'Rooms equipped with heating and cooling systems',
      card5_title:'Delivery Service', card5_text:'We offer pickup and drop-off service to your home',
      card6_title:'Entertainment & Comfort', card6_text:'Rooms equipped with TV and Wi-Fi',
      pkg_tag:'Our Premium Packages', pkg_title:'Choose the Right', pkg_title_hl:'Package for Your Dog',
      pkg_sub:"Diverse packages to suit all your dog's needs and your budget",
      pkg1_name:'Basic Package', pkg2_name:'Standard Package', pkg3_name:'Premium Package',
      pkg_btn:'Book Now', pkg_view_all:'View All Packages & Details →',
      cta_title:'Does Your Dog Deserve', cta_title_hl:'the Best?',
      cta_sub:'Book a luxury stay now and give your dog an unforgettable experience',
      cta_btn1:'📅 Book Now for Free', cta_btn2:'📞 Contact Us',
      contact_form_title:'Send Us a', contact_form_title_hl:'Message',
      contact_info_title:'Contact', contact_info_title_hl:'Information',
      contact_name_label:'Full Name *', contact_name_ph:'John Smith',
      contact_phone_label:'Phone Number *', contact_phone_ph:'+852 xxxx xxxx',
      contact_email_label:'Email Address *', contact_subject_label:'Message Subject',
      contact_msg_label:'Your Message *', contact_msg_ph:'Write your message here...', contact_send_btn:'📤 Send Message',
      map_title:'📍 Our Location in Hong Kong', map_open_google:'🗺️ Open in Google Maps',
      map_open_apple:'🍎 Apple Maps', map_location_label:'Hong Kong',
      ph_about_tag:'Our Story', ph_about_h1:'About Us', ph_about_sub:'A specialized team united by a genuine passion for caring for dogs',
      ph_services_tag:'Our Services', ph_services_h1:'Our Premium Services', ph_services_sub:"We offer a wide range of services to meet your dog's needs",
      ph_packages_tag:'Our Packages', ph_packages_h1:'Packages & Pricing', ph_packages_sub:"Diverse packages to suit all your dog's needs and your budget",
      ph_gallery_tag:'Our Gallery', ph_gallery_h1:'Photo Gallery', ph_gallery_sub:'Happy moments from the lives of our pampered dogs',
      ph_videos_tag:'🎬 Videos', ph_videos_h1:'Our Videos', ph_videos_sub:'Fun moments, training sessions and useful tips',
      ph_team_tag:'Our Team', ph_team_h1:'Our Specialist Team', ph_team_sub:'Professionals specializing in dog care and training',
      ph_testimonials_tag:'Client Reviews', ph_testimonials_h1:'What Our Clients Say', ph_testimonials_sub:'Real success stories from happy families',
      ph_faq_tag:'Frequently Asked Questions', ph_faq_h1:'Questions & Answers', ph_faq_sub:'Everything you need to know about our services',
      ph_blog_tag:'Our Blog', ph_blog_h1:'Blog', ph_blog_sub:'Useful tips and articles for dog owners',
      ph_pricing_tag:'Pricing', ph_pricing_h1:'Pricing Plans', ph_pricing_sub:'Clear and transparent pricing with no hidden fees',
      ph_contact_tag:"We're Always Here", ph_contact_h1:'Contact Us', ph_contact_sub:"Have a question or want to know more? We're here to help",
      ph_booking_tag:'Book Now', ph_booking_h1:'Book a Stay for Your Dog', ph_booking_sub:'Simple steps to book a luxury stay for your dog',
      tb_title:'Site Settings', tb_lang:'Language', tb_theme:'Theme', tb_font:'Font',
      tb_search:'Search', tb_favorites:'Favorites', tb_search_ph:'Search pages...', tb_no_fav:'No favorites yet',
    },
    zh: {
      dir: 'ltr', lang: 'zh-HK', label: '廣東話 🇭🇰',
      nav_home:'主頁', nav_about:'關於我們', nav_services:'服務', nav_packages:'套餐',
      nav_gallery:'相片庫', nav_videos:'🎬 影片', nav_team:'我們的團隊',
      nav_testimonials:'客戶評價', nav_faq:'常見問題', nav_blog:'部落格',
      nav_pricing:'價格', nav_contact:'聯絡我們', nav_booking:'立即預訂',
      footer_pages:'頁面', footer_more:'更多', footer_contact:'聯絡我們',
      footer_copyright:'版權所有。', footer_tagline:'我們在安全友愛的環境中為您的愛犬提供最優質的護理體驗。',
      hero_badge:'為您忠實朋友提供最好的照顧', hero_line1:'安全舒適的', hero_line2:'愛犬之家',
      hero_line3:'✦ 全天候頂級護理 ✦', hero_sub:'我們為您的愛犬提供最優質的住宿體驗，配備優質獸醫服務及安全舒適的環境',
      hero_btn1:'📅 立即預訂', hero_btn2:'🎁 瀏覽套餐',
      stat_happy:'快樂的狗狗', stat_years:'年經驗', stat_care:'全天候照護', stat_satisfaction:'客戶滿意度',
      feat_tag:'為何我們最出色？', feat_title:'讓我們成為', feat_title_hl:'首選的特色',
      feat_sub:'我們致力在安全友愛的環境中為您的愛犬提供最高標準的照護和舒適',
      card1_title:'24/7獸醫護理', card1_text:'全天候提供專業獸醫團隊服務',
      card2_title:'安全戶外草地', card2_text:'為您的狗狗提供寬敞安全的綠色空間',
      card3_title:'每日更新', card3_text:'每天向您發送愛犬的照片和報告',
      card4_title:'暖氣及冷氣', card4_text:'房間配備暖氣和冷氣系統',
      card5_title:'接送服務', card5_text:'提供接送服務至您家門',
      card6_title:'娛樂及舒適', card6_text:'房間配備電視及Wi-Fi',
      pkg_tag:'我們的優質套餐', pkg_title:'選擇適合', pkg_title_hl:'您愛犬的套餐',
      pkg_sub:'多樣化套餐，滿足您愛犬的所有需求及您的預算',
      pkg1_name:'基本套餐', pkg2_name:'標準套餐', pkg3_name:'尊享套餐',
      pkg_btn:'立即預訂', pkg_view_all:'查看所有套餐及詳情 →',
      cta_title:'您的愛犬是否值得', cta_title_hl:'最好的？',
      cta_sub:'立即預訂豪華住宿，給您的愛犬一個難忘的體驗',
      cta_btn1:'📅 免費立即預訂', cta_btn2:'📞 聯絡我們',
      contact_form_title:'給我們', contact_form_title_hl:'發送訊息',
      contact_info_title:'聯絡', contact_info_title_hl:'資訊',
      contact_name_label:'全名 *', contact_name_ph:'陳大文',
      contact_phone_label:'電話號碼 *', contact_phone_ph:'+852 xxxx xxxx',
      contact_email_label:'電子郵件 *', contact_subject_label:'訊息主題',
      contact_msg_label:'您的訊息 *', contact_msg_ph:'在此輸入您的訊息...', contact_send_btn:'📤 發送訊息',
      map_title:'📍 我們在香港的位置', map_open_google:'🗺️ 在Google地圖中打開',
      map_open_apple:'🍎 Apple地圖', map_location_label:'香港',
      ph_about_tag:'我們的故事', ph_about_h1:'關於我們', ph_about_sub:'一個專業團隊，對照顧狗狗充滿熱情',
      ph_services_tag:'我們的服務', ph_services_h1:'我們的優質服務', ph_services_sub:'我們提供多種服務以滿足您愛犬的需求',
      ph_packages_tag:'我們的套餐', ph_packages_h1:'套餐及價格', ph_packages_sub:'多樣化套餐，滿足您愛犬的所有需求及您的預算',
      ph_gallery_tag:'我們的相片庫', ph_gallery_h1:'相片庫', ph_gallery_sub:'我們嬌貴狗狗的快樂時光',
      ph_videos_tag:'🎬 影片', ph_videos_h1:'我們的影片', ph_videos_sub:'有趣時刻、訓練課程及有用貼士',
      ph_team_tag:'我們的團隊', ph_team_h1:'我們的專業團隊', ph_team_sub:'專業從事狗狗護理和訓練的人員',
      ph_testimonials_tag:'客戶評價', ph_testimonials_h1:'客戶怎麼說', ph_testimonials_sub:'來自快樂家庭的真實成功故事',
      ph_faq_tag:'常見問題', ph_faq_h1:'問題與解答', ph_faq_sub:'關於我們服務您需要知道的一切',
      ph_blog_tag:'我們的部落格', ph_blog_h1:'部落格', ph_blog_sub:'對狗狗主人有用的貼士和文章',
      ph_pricing_tag:'價格', ph_pricing_h1:'價格計劃', ph_pricing_sub:'清晰透明的價格，無隱藏費用',
      ph_contact_tag:'我們隨時為您服務', ph_contact_h1:'聯絡我們', ph_contact_sub:'有問題或想了解更多？我們在這裡幫助您',
      ph_booking_tag:'立即預訂', ph_booking_h1:'為您的愛犬預訂住宿', ph_booking_sub:'簡單步驟為您的愛犬預訂豪華住宿',
      tb_title:'網站設置', tb_lang:'語言', tb_theme:'主題', tb_font:'字型',
      tb_search:'搜尋', tb_favorites:'收藏', tb_search_ph:'搜尋頁面...', tb_no_fav:'尚無收藏',
    }
  };

  const PAGE_HERO_KEYS = {
    about:['ph_about_tag','ph_about_h1','ph_about_sub'],
    services:['ph_services_tag','ph_services_h1','ph_services_sub'],
    packages:['ph_packages_tag','ph_packages_h1','ph_packages_sub'],
    gallery:['ph_gallery_tag','ph_gallery_h1','ph_gallery_sub'],
    videos:['ph_videos_tag','ph_videos_h1','ph_videos_sub'],
    Vido:['ph_videos_tag','ph_videos_h1','ph_videos_sub'],
    team:['ph_team_tag','ph_team_h1','ph_team_sub'],
    testimonials:['ph_testimonials_tag','ph_testimonials_h1','ph_testimonials_sub'],
    faq:['ph_faq_tag','ph_faq_h1','ph_faq_sub'],
    blog:['ph_blog_tag','ph_blog_h1','ph_blog_sub'],
    pricing:['ph_pricing_tag','ph_pricing_h1','ph_pricing_sub'],
    contact:['ph_contact_tag','ph_contact_h1','ph_contact_sub'],
    booking:['ph_booking_tag','ph_booking_h1','ph_booking_sub'],
  };

  const NAV_MAP = {
    'index.html':'nav_home','about.html':'nav_about','services.html':'nav_services',
    'packages.html':'nav_packages','gallery.html':'nav_gallery','videos.html':'nav_videos',
    'Vido.html':'nav_videos','team.html':'nav_team','testimonials.html':'nav_testimonials',
    'faq.html':'nav_faq','blog.html':'nav_blog','pricing.html':'nav_pricing',
    'contact.html':'nav_contact','booking.html':'nav_booking',
  };

  const LS_LANG='lh_lang7', LS_THEME='lh_theme7', LS_FONT='lh_font7', LS_FAV='lh_fav7';
  let currentLang = localStorage.getItem(LS_LANG) || 'ar';
  const ORI_TEXT = new WeakMap();

  function getPage() { return location.pathname.split('/').pop().replace('.html','') || 'index'; }

  function translatePage(lc) {
    const t = LANGS[lc]; if (!t) return;
    currentLang = lc; localStorage.setItem(LS_LANG, lc);
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', t.lang);
    document.body.setAttribute('dir', t.dir);

    // Nav
    document.querySelectorAll('.nav-links a').forEach(a => {
      const k = NAV_MAP[(a.getAttribute('href')||'').split('/').pop()];
      if (k && t[k]) a.textContent = t[k];
    });
    // Footer nav
    document.querySelectorAll('.footer-links a').forEach(a => {
      const k = NAV_MAP[(a.getAttribute('href')||'').split('/').pop()];
      if (k && t[k]) a.textContent = t[k];
    });
    // Footer headings
    document.querySelectorAll('.footer-heading').forEach((el,i) => {
      const keys=['footer_pages','footer_more','footer_contact'];
      if(keys[i]&&t[keys[i]]) el.textContent=t[keys[i]];
    });
    const copyEl=document.querySelector('.footer-copy');
    if(copyEl) copyEl.innerHTML=`© ${new Date().getFullYear()} Loving Homes. ${t.footer_copyright}`;
    const tagEl=document.querySelector('.footer-brand p');
    if(tagEl) tagEl.textContent=t.footer_tagline;

    // Page hero
    const page=getPage();
    const hk=PAGE_HERO_KEYS[page];
    if(hk){
      const tagEl2=document.querySelector('.page-hero .section-tag,.page-hero .hero-tag');
      if(tagEl2&&t[hk[0]]) tagEl2.textContent=t[hk[0]];
      const h1=document.querySelector('.page-hero .hero-title .line-2,.page-hero h1');
      if(h1&&t[hk[1]]) h1.textContent=t[hk[1]];
      const sub=document.querySelector('.page-hero .hero-subtitle');
      if(sub&&t[hk[2]]) sub.textContent=t[hk[2]];
    }

    if(page==='index') translateIndex(t);
    if(page==='contact') translateContact(t);

    document.querySelectorAll('.tb-lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lc));
    updateToolbarLabels(t);
    applyStaticTextTranslations(lc);
  }

  function translateIndex(t){
    const badge=document.querySelector('.hero-badge');
    if(badge) badge.innerHTML=`<span class="dot"></span> ${t.hero_badge}`;
    const l1=document.querySelector('.hero-title .line-1'); if(l1) l1.textContent=t.hero_line1;
    const l2=document.querySelector('.hero-title .line-2'); if(l2) l2.textContent=t.hero_line2;
    const l3=document.querySelector('.hero-title .line-3'); if(l3) l3.textContent=t.hero_line3;
    const sub=document.querySelector('.hero-subtitle'); if(sub) sub.textContent=t.hero_sub;
    const btns=document.querySelectorAll('.hero-actions .btn');
    if(btns[0]) btns[0].textContent=t.hero_btn1;
    if(btns[1]) btns[1].textContent=t.hero_btn2;
    const statLabels=document.querySelectorAll('.stat-label');
    ['stat_happy','stat_years','stat_care','stat_satisfaction'].forEach((k,i)=>{ if(statLabels[i]&&t[k]) statLabels[i].textContent=t[k]; });
    const sectionTags=document.querySelectorAll('.section .section-header .section-tag');
    if(sectionTags[0]) sectionTags[0].textContent=t.feat_tag;
    if(sectionTags[1]) sectionTags[1].textContent=t.pkg_tag;
    const secTitles=document.querySelectorAll('.section .section-header .section-title');
    if(secTitles[0]) secTitles[0].innerHTML=`${t.feat_title} <span class="highlight">${t.feat_title_hl}</span>`;
    if(secTitles[1]) secTitles[1].innerHTML=`${t.pkg_title} <span class="highlight">${t.pkg_title_hl}</span>`;
    const secSubs=document.querySelectorAll('.section .section-header .section-subtitle');
    if(secSubs[0]) secSubs[0].textContent=t.feat_sub;
    if(secSubs[1]) secSubs[1].textContent=t.pkg_sub;
    const cardTitles=document.querySelectorAll('.grid-3 .card-title');
    const cardTexts=document.querySelectorAll('.grid-3 .card-text');
    ['card1_title','card2_title','card3_title','card4_title','card5_title','card6_title'].forEach((k,i)=>{ if(cardTitles[i]&&t[k]) cardTitles[i].textContent=t[k]; });
    ['card1_text','card2_text','card3_text','card4_text','card5_text','card6_text'].forEach((k,i)=>{ if(cardTexts[i]&&t[k]) cardTexts[i].textContent=t[k]; });
    const pkgNames=document.querySelectorAll('.package-name');
    ['pkg1_name','pkg2_name','pkg3_name'].forEach((k,i)=>{ if(pkgNames[i]&&t[k]) pkgNames[i].textContent=t[k]; });
    document.querySelectorAll('.btn-gold').forEach(b=>{ b.textContent=t.pkg_btn; });
    document.querySelectorAll('.pricing-grid .btn').forEach(b=>{ b.textContent=t.pkg_btn; });
    // CTA title
    document.querySelectorAll('.section .section-title').forEach(el=>{
      if(el.textContent.includes('يستحق')||el.textContent.includes('Deserve')||el.textContent.includes('值得')||el.textContent.includes('Merita')) {
        el.innerHTML=`${t.cta_title} <span class="highlight">${t.cta_title_hl}</span>`;
      }
    });
  }

  function translateContact(t){
    const fTitles=document.querySelectorAll('.section .section-title');
    if(fTitles[0]) fTitles[0].innerHTML=`${t.contact_form_title} <span class="highlight">${t.contact_form_title_hl}</span>`;
    if(fTitles[1]) fTitles[1].innerHTML=`${t.contact_info_title} <span class="highlight">${t.contact_info_title_hl}</span>`;
    const labels=document.querySelectorAll('.form-label');
    ['contact_name_label','contact_phone_label','contact_email_label','contact_subject_label','contact_msg_label'].forEach((k,i)=>{ if(labels[i]&&t[k]) labels[i].textContent=t[k]; });
    const ni=document.getElementById('senderName'); if(ni) ni.placeholder=t.contact_name_ph;
    const pi=document.getElementById('senderPhone'); if(pi) pi.placeholder=t.contact_phone_ph;
    const mi=document.getElementById('messageText'); if(mi) mi.placeholder=t.contact_msg_ph;
    const sb=document.querySelector('.contact-form .btn-primary'); if(sb) sb.textContent=t.contact_send_btn;
    const mt=document.getElementById('map-title'); if(mt) mt.textContent=t.map_title;
    const mg=document.getElementById('map-google-btn'); if(mg) mg.textContent=t.map_open_google;
    const ma=document.getElementById('map-apple-btn'); if(ma) ma.textContent=t.map_open_apple;
    const ml=document.getElementById('map-location-label'); if(ml) ml.textContent=t.map_location_label;
  }

  function updateToolbarLabels(t){
    const title=document.getElementById('tb-title-el'); if(title) title.textContent=t.tb_title;
    const ll=document.getElementById('tb-lang-label'); if(ll) ll.textContent=t.tb_lang;
    const tl=document.getElementById('tb-theme-label'); if(tl) tl.textContent=t.tb_theme;
    const fl=document.getElementById('tb-font-label'); if(fl) fl.textContent=t.tb_font;
    const sl=document.getElementById('tb-search-label'); if(sl) sl.textContent=t.tb_search;
    const fvl=document.getElementById('tb-fav-label'); if(fvl) fvl.textContent=t.tb_favorites;
    const si=document.getElementById('tb-search-input'); if(si) si.placeholder=t.tb_search_ph;
    renderFavList();
  }

  function getStaticTranslations(){
    const common = {
      'جاري التحميل...':{en:'Loading...',zh:'載入中...'},
      'جاري تجهيز تجربة فاخرة لكلبك...':{en:'Preparing a luxury experience for your dog...',zh:'正在為您的狗狗準備尊貴體驗...'},
      'حزم الإقامة':{en:'Stay Packages',zh:'住宿套餐'},
      '🎬 فيديوهات':{en:'🎬 Videos',zh:'🎬 影片'},
      'شاهد كلابنا السعيدة':{en:'Watch Our Happy Dogs',zh:'欣賞我們快樂的狗狗'},
      'لحظات ممتعة وتدريبات ونصائح مفيدة لكل صاحب كلب':{en:'Fun moments, training, and useful tips for dog owners',zh:'有趣時刻、訓練與給狗主人的實用貼士'},
      '🎬 شاهد جميع الفيديوهات ←':{en:'🎬 View all videos ←',zh:'🎬 查看所有影片 ←'},
      'تدريب':{en:'Training',zh:'訓練'},
      'لعب':{en:'Play',zh:'玩樂'},
      'مضحك':{en:'Funny',zh:'搞笑'},
      'تدريبات أساسية للكلاب':{en:'Basic training for dogs',zh:'狗狗基礎訓練'},
      'كلاب تلعب في الحديقة':{en:'Dogs playing in the park',zh:'狗狗在公園玩耍'},
      'أطرف المواقف':{en:'Funniest moments',zh:'最有趣的時刻'},
      'عميل راضٍ':{en:'Satisfied Clients',zh:'滿意客戶'},
      'من المتخصصين':{en:'Specialists',zh:'專家'},
      'إقامة متنوعة':{en:'Varied Stays',zh:'多樣住宿'},
      'ليلة إقامة':{en:'Nights of Stay',zh:'住宿晚數'},
      'حزمة اليوم':{en:'Daily Package',zh:'每日套餐'},
      'الحزمة الكلاسيكية':{en:'Classic Package',zh:'經典套餐'},
      'الحزمة المميزة':{en:'Premium Package',zh:'尊享套餐'},
      'الأكثر شيوعاً':{en:'Most Popular',zh:'最受歡迎'},
      'مشي مرتين يومياً':{en:'Walk twice daily',zh:'每日兩次散步'},
      'منطقة لعب خارجية':{en:'Outdoor play area',zh:'戶外遊樂區'},
      'مسار الرشاقة':{en:'Agility course',zh:'敏捷訓練場'},
      'مشي ثلاث مرات يومياً':{en:'Walk three times daily',zh:'每日三次散步'},
      'حظيرة لعب داخلية':{en:'Indoor play pen',zh:'室內遊樂區'},
      'تحديثات يومية':{en:'Daily updates',zh:'每日更新'},
      'مشي أربع مرات يومياً':{en:'Walk four times daily',zh:'每日四次散步'},
      'مساحة عشب خاصة':{en:'Private grass area',zh:'私人草地'},
      'جلسة حلاقة':{en:'Grooming session',zh:'美容服務'},
      'استعرض جميع الحزم والتفاصيل ←':{en:'View all packages and details →',zh:'查看所有套餐與詳情 →'},
      'آراء عملائنا':{en:"Client Reviews",zh:'客戶評價'},
      'ماذا يقول أصحاب الكلاب':{en:"What Dog Owners Say",zh:'狗主怎麼說'},
      'خدمة ممتازة! كلبي ماكس عاد سعيداً.':{en:'Excellent service! My dog Max came back happy.',zh:'服務一流！我的狗狗Max回來很開心。'},
      'أفضل فندق للكلاب في المنطقة!':{en:'The best dog hotel in the area!',zh:'本地最好的狗狗酒店！'},
      'الحزمة المميزة تستحق كل ريال!':{en:'The premium package is worth every penny!',zh:'尊享套餐物超所值！'},
      'صاحب كلب لابرادور':{en:'Labrador owner',zh:'拉布拉多犬主人'},
      'صاحبة كلبة بودل':{en:'Poodle owner',zh:'貴婦犬主人'},
      'صاحب كلب جولدن':{en:'Golden retriever owner',zh:'黃金獵犬主人'},
      'للأعلى':{en:'Top',zh:'置頂'},
      'هونغ كونغ':{en:'Hong Kong',zh:'香港'},
      '24/7 على مدار الساعة':{en:'24/7',zh:'24/7'},
      'احجز الآن':{en:'Book Now',zh:'立即預訂'},
      'تواصل معنا':{en:'Contact Us',zh:'聯絡我們'},
      '← الرئيسية':{en:'← Home',zh:'← 主頁'},
      'الرئيسية':{en:'Home',zh:'主頁'}
    };
    const page=getPage();
    const perPage = {
      services: {
        'الخدمات':{en:'Services',zh:'服務'},
        'خدماتنا':{en:'Our Services',zh:'我們的服務'},
        'خدمات شاملة لكلبك':{en:'Comprehensive Services for Your Dog',zh:'為您的狗狗提供全面服務'},
        'نقدم مجموعة متكاملة من الخدمات المصممة لتوفير أفضل رعاية لكلبك':{en:'We provide a complete set of services designed to offer the best care for your dog',zh:'我們提供完整服務，為您的愛犬帶來最佳照護'},
        'المرافق المتاحة':{en:'Available Amenities',zh:'可用設施'},
        'مرافق عالمية المستوى':{en:'World-Class Amenities',zh:'世界級設施'},
        'تدفئة/تبريد تحت الأرضية':{en:'Underfloor Heating/Cooling',zh:'地暖/地冷'},
        'غرف مزودة بأنظمة متطورة للتحكم بالحرارة طوال العام':{en:'Rooms with advanced systems for year-round temperature control',zh:'客房配備先進系統以全年調節溫度'},
        'تلفزيون وواي فاي':{en:'TV and Wi‑Fi',zh:'電視與Wi‑Fi'},
        'ترفيه مستمر لإبقاء كلبك مشغولاً وسعيداً':{en:'Continuous entertainment to keep your dog engaged and happy',zh:'持續娛樂，讓狗狗開心投入'},
        'مراعي خارجية آمنة':{en:'Safe Outdoor Pastures',zh:'安全戶外草地'},
        'مساحات خضراء واسعة ومؤمنة للعب والاستكشاف':{en:'Spacious, secured green spaces for play and exploration',zh:'寬敞安全的綠地供玩樂與探索'},
        'رعاية بيطرية 24/7':{en:'24/7 Veterinary Care',zh:'24/7獸醫護理'},
        'طاقم طبي متخصص متاح على مدار الساعة':{en:'Specialized medical staff available around the clock',zh:'專業醫療團隊全天候值守'},
        'خدمة التوصيل':{en:'Delivery Service',zh:'接送服務'},
        'استقبال وتوصيل من وإلى منزلك بسيارات مجهزة':{en:'Pickup and drop-off from your home with equipped vehicles',zh:'配備車輛上門接送'},
        'حظيرة لعب داخلية':{en:'Indoor Play Pen',zh:'室內遊樂區'},
        'منطقة لعب داخلية مغطاة متاحة في جميع الأحوال الجوية':{en:'Covered indoor play area available in all weather',zh:'室內覆蓋遊樂區，任何天氣皆可使用'},
        'تحديثات وصور يومية':{en:'Daily Updates & Photos',zh:'每日更新與照片'},
        'نرسل لك صور وتقارير يومية عن نشاط كلبك':{en:'We send daily photos and activity reports of your dog',zh:'每天向您發送狗狗活動與照片'},
        'مساحة عشب خاصة':{en:'Private Grass Area',zh:'私人草地'},
        'حديقة عشبية خاصة لكل كلب في الحزمة المميزة':{en:'A private grass garden for each dog in the premium package',zh:'尊享套餐提供私人草地'},
        'الأنشطة اليومية':{en:'Daily Activities',zh:'每日活動'},
        'يوم مليء بالممتعة والنشاط':{en:'A Day Full of Fun and Activity',zh:'充滿樂趣與活動的一天'},
        'يوم مليء بالمتعة والنشاط':{en:'A Day Full of Fun and Activity',zh:'充滿樂趣與活動的一天'},
        'الصباح (7-9 صباحاً)':{en:'Morning (7–9 AM)',zh:'早上 (7–9)'},
        'وجبة الإفطار المتوازنة + جلسة المشي الصباحية في الهواء الطلق':{en:'Balanced breakfast + outdoor morning walk',zh:'均衡早餐＋戶外晨間散步'},
        'النهار (11-2 ظهراً)':{en:'Midday (11–2 PM)',zh:'中午 (11–2)'},
        'وقت اللعب الحر في حظيرة الألعاب + أنشطة تفاعلية مع الفريق':{en:'Free play in the play pen + interactive activities with the team',zh:'遊樂區自由玩耍＋互動活動'},
        'العصر (4-6 مساءً)':{en:'Afternoon (4–6 PM)',zh:'下午 (4–6)'},
        'جلسة مشي مسائية + وقت استرخاء + فحص صحي يومي':{en:'Evening walk + relaxation time + daily health check',zh:'傍晚散步＋放鬆時間＋每日健康檢查'},
        'المساء (8-10 مساءً)':{en:'Night (8–10 PM)',zh:'晚上 (8–10)'},
        'وجبة العشاء + وقت الراحة في الغرفة المريحة':{en:'Dinner + rest time in a cozy room',zh:'晚餐＋在舒適房間休息'},
        'الخدمات الإضافية':{en:'Additional Services',zh:'額外服務'},
        'جلسة حلاقة وتجميل':{en:'Grooming Session',zh:'美容服務'},
        'مميزة':{en:'Premium',zh:'尊享'},
        'استحمام وتنظيف':{en:'Bath & Cleaning',zh:'洗澡清潔'},
        'متاحة':{en:'Available',zh:'可用'},
        'إعطاء الأدوية':{en:'Medication Administration',zh:'給藥'},
        'على طلب':{en:'On Request',zh:'按需'},
        'تدريب أساسي':{en:'Basic Training',zh:'基礎訓練'},
        'خاصة':{en:'Special',zh:'特別'},
        'مهتم بخدمة بعينها؟':{en:'Interested in a specific service?',zh:'對特定服務感興趣？'},
        'تواصل معنا وسنصمم لك حزمة مخصصة تناسب احتياجات كلبك':{en:'Contact us and we will tailor a package for your dog',zh:'聯絡我們，為您的愛犬定制方案'},
        'استعرض الحزم':{en:'Browse Packages',zh:'瀏覽套餐'}
      },
      packages: {
        'حزم مخصصة':{en:'Custom Packages',zh:'自訂套餐'},
        'اطلب عرضاً مخصصاً':{en:'Request a Custom Quote',zh:'索取自訂報價'}
      }
    };
    return Object.assign({}, common, perPage[page]||{});
  }

  function restoreStaticTexts(){
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{
      if(!n.nodeValue) return NodeFilter.FILTER_REJECT;
      if(!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const p=n.parentElement; if(!p) return NodeFilter.FILTER_REJECT;
      const tn=p.tagName; if(tn==='SCRIPT'||tn==='STYLE'||tn==='NOSCRIPT'||tn==='TITLE'||tn==='META'||tn==='LINK') return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let node=walker.nextNode();
    while(node){
      if(ORI_TEXT.has(node)) node.nodeValue=ORI_TEXT.get(node);
      node=walker.nextNode();
    }
  }

  function applyStaticTextTranslations(lc){
    restoreStaticTexts();
    if(lc==='ar') return;
    const map=getStaticTranslations();
    const lang=lc==='zh'?'zh':'en';
    const keys=Object.keys(map);
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{
      if(!n.nodeValue) return NodeFilter.FILTER_REJECT;
      if(!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const p=n.parentElement; if(!p) return NodeFilter.FILTER_REJECT;
      const tn=p.tagName; if(tn==='SCRIPT'||tn==='STYLE'||tn==='NOSCRIPT'||tn==='TITLE'||tn==='META'||tn==='LINK') return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let node=walker.nextNode();
    while(node){
      let txt=node.nodeValue;
      let changed=false;
      for(let i=0;i<keys.length;i++){
        const k=keys[i];
        if(txt.includes(k)){
          const rep=(map[k][lang]||map[k].en||'').toString();
          if(rep){
            txt=txt.split(k).join(rep);
            changed=true;
          }
        }
      }
      if(changed){
        if(!ORI_TEXT.has(node)) ORI_TEXT.set(node,node.nodeValue);
        node.nodeValue=txt;
      }
      node=walker.nextNode();
    }
  }

  function injectInteractiveMap(){
    if(getPage()!=='contact') return;
    const iframe=document.querySelector('iframe[src*="maps"]');
    if(!iframe) return;
    const wrapper=iframe.closest('div[style*="background"],div[style*="border"]')||iframe.parentElement;
    if(!wrapper) return;
    const t=LANGS[currentLang];
    wrapper.outerHTML=`
<div style="background:var(--gradient-card,rgba(10,22,40,0.9));border:var(--border-card,1px solid rgba(59,111,255,0.2));border-radius:var(--radius-lg,12px);padding:1rem;box-shadow:var(--shadow-card,0 4px 20px rgba(0,0,0,0.4))">
  <h3 id="map-title" style="text-align:center;color:var(--cyan-accent,#00d4ff);margin-bottom:1rem;font-size:1.05rem;">${t.map_title}</h3>
  <div style="position:relative;border-radius:var(--radius-md,8px);overflow:hidden;">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236062.27059179!2d113.98630775!3d22.3526257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332357b%3A0xd6d0a1f8c3a94e21!2sHong%20Kong!5e0!3m2!1sen!2shk!4v1700000000000!5m2!1sen!2shk"
      width="100%" height="280" style="border:0;display:block;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-65%);pointer-events:none;text-align:center;z-index:10;">
      <div style="font-size:2.2rem;animation:lhPinBounce 1.2s ease-in-out infinite;">📍</div>
      <div id="map-location-label" style="background:rgba(0,212,255,0.92);color:#000;padding:3px 10px;border-radius:20px;font-size:0.78rem;font-weight:700;white-space:nowrap;margin-top:3px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">${t.map_location_label}</div>
    </div>
  </div>
  <div style="display:flex;gap:.6rem;justify-content:center;padding-top:1rem;flex-wrap:wrap;">
    <a id="map-google-btn" href="https://www.google.com/maps/place/Hong+Kong" target="_blank" class="btn btn-primary btn-sm" style="text-decoration:none;font-size:0.82rem;">${t.map_open_google}</a>
    <a id="map-apple-btn" href="https://maps.apple.com/?address=Hong+Kong&ll=22.3526,114.1277" target="_blank" class="btn btn-secondary btn-sm" style="text-decoration:none;font-size:0.82rem;">${t.map_open_apple}</a>
  </div>
</div>
<style>@keyframes lhPinBounce{0%,100%{transform:translate(-50%,-65%) translateY(0)}50%{transform:translate(-50%,-65%) translateY(-10px)}}</style>`;
  }

  /* ─── FULL THEME SYSTEM ─── */
  /* Each theme overrides ALL CSS variables for complete site transformation */
  const THEMES = {
    dark: {
      label:'🌑 ليلي', swatch:'linear-gradient(135deg,#050d1a,#3b6fff)',
      '--bg-primary':'#050d1a','--bg-secondary':'#0a1628','--bg-tertiary':'#0f2040',
      '--accent':'#3b6fff','--accent-hover':'#5580ff','--accent-soft':'rgba(59,111,255,0.15)',
      '--cyan-accent':'#00d4ff','--cyan-soft':'rgba(0,212,255,0.12)',
      '--gold-accent':'#ffd700',
      '--white-90':'rgba(255,255,255,0.92)','--white-70':'rgba(255,255,255,0.70)','--white-50':'rgba(255,255,255,0.50)','--white-20':'rgba(255,255,255,0.08)',
      '--text-primary':'#f0f4ff','--text-secondary':'rgba(255,255,255,0.70)',
      '--border-card':'1px solid rgba(59,111,255,0.18)','--border-glow':'1px solid rgba(0,212,255,0.4)',
      '--gradient-card':'linear-gradient(135deg,rgba(10,22,40,0.9),rgba(15,32,64,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#050d1a 0%,#0f2040 50%,#050d1a 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.5)','--shadow-glow':'0 0 30px rgba(59,111,255,0.3)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(5,13,26,0.95)','--footer-bg':'#030a14',
      '--input-bg':'rgba(255,255,255,0.06)','--input-border':'rgba(255,255,255,0.15)',
    },
    light: {
      label:'☀️ نهاري', swatch:'linear-gradient(135deg,#e8f0ff,#2451d1)',
      '--bg-primary':'#eef2fb','--bg-secondary':'#ffffff','--bg-tertiary':'#dce6f7',
      '--accent':'#2451d1','--accent-hover':'#1a3db5','--accent-soft':'rgba(36,81,209,0.10)',
      '--cyan-accent':'#0077cc','--cyan-soft':'rgba(0,119,204,0.10)',
      '--gold-accent':'#c8820a',
      '--white-90':'#0d1b3e','--white-70':'#2a3a6a','--white-50':'#4a5580','--white-20':'rgba(0,0,0,0.07)',
      '--text-primary':'#0d1b3e','--text-secondary':'#2a3a6a',
      '--border-card':'1px solid rgba(36,81,209,0.15)','--border-glow':'1px solid rgba(0,119,204,0.4)',
      '--gradient-card':'linear-gradient(135deg,rgba(255,255,255,0.95),rgba(220,230,247,0.8))',
      '--gradient-hero':'linear-gradient(160deg,#dce6f7 0%,#c8d8f4 50%,#eef2fb 100%)',
      '--shadow-card':'0 4px 20px rgba(36,81,209,0.12)','--shadow-glow':'0 0 24px rgba(36,81,209,0.2)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(238,242,251,0.97)','--footer-bg':'#dce6f7',
      '--input-bg':'rgba(36,81,209,0.05)','--input-border':'rgba(36,81,209,0.25)',
    },
    warm: {
      label:'🔥 دافئ', swatch:'linear-gradient(135deg,#1a0f05,#ff6b00)',
      '--bg-primary':'#140a02','--bg-secondary':'#1f1005','--bg-tertiary':'#2d1808',
      '--accent':'#ff6b00','--accent-hover':'#ff8c2a','--accent-soft':'rgba(255,107,0,0.15)',
      '--cyan-accent':'#ffb347','--cyan-soft':'rgba(255,179,71,0.12)',
      '--gold-accent':'#ffd700',
      '--white-90':'rgba(255,240,220,0.95)','--white-70':'rgba(255,220,180,0.70)','--white-50':'rgba(255,200,150,0.50)','--white-20':'rgba(255,150,50,0.08)',
      '--text-primary':'#fff0dc','--text-secondary':'rgba(255,220,180,0.75)',
      '--border-card':'1px solid rgba(255,107,0,0.20)','--border-glow':'1px solid rgba(255,179,71,0.5)',
      '--gradient-card':'linear-gradient(135deg,rgba(30,16,5,0.9),rgba(45,24,8,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#140a02 0%,#2d1808 50%,#140a02 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.6)','--shadow-glow':'0 0 30px rgba(255,107,0,0.35)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(20,10,2,0.96)','--footer-bg':'#0e0701',
      '--input-bg':'rgba(255,107,0,0.07)','--input-border':'rgba(255,107,0,0.25)',
    },
    cool: {
      label:'❄️ بارد', swatch:'linear-gradient(135deg,#02101f,#00c2e0)',
      '--bg-primary':'#02101f','--bg-secondary':'#071e30','--bg-tertiary':'#0c2d45',
      '--accent':'#00c2e0','--accent-hover':'#00deff','--accent-soft':'rgba(0,194,224,0.12)',
      '--cyan-accent':'#7fe8f8','--cyan-soft':'rgba(127,232,248,0.10)',
      '--gold-accent':'#b8fffd',
      '--white-90':'rgba(220,248,255,0.93)','--white-70':'rgba(180,235,250,0.70)','--white-50':'rgba(140,220,240,0.50)','--white-20':'rgba(0,194,224,0.08)',
      '--text-primary':'#dcf8ff','--text-secondary':'rgba(180,235,250,0.75)',
      '--border-card':'1px solid rgba(0,194,224,0.18)','--border-glow':'1px solid rgba(127,232,248,0.45)',
      '--gradient-card':'linear-gradient(135deg,rgba(7,30,48,0.9),rgba(12,45,69,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#02101f 0%,#0c2d45 50%,#02101f 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.55)','--shadow-glow':'0 0 30px rgba(0,194,224,0.3)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(2,16,31,0.96)','--footer-bg':'#010c16',
      '--input-bg':'rgba(0,194,224,0.06)','--input-border':'rgba(0,194,224,0.20)',
    },
    ocean: {
      label:'🌊 أوشن', swatch:'linear-gradient(135deg,#020b3a,#006aff)',
      '--bg-primary':'#020b3a','--bg-secondary':'#041466','--bg-tertiary':'#06228a',
      '--accent':'#006aff','--accent-hover':'#2e88ff','--accent-soft':'rgba(0,106,255,0.15)',
      '--cyan-accent':'#00d4ff','--cyan-soft':'rgba(0,212,255,0.12)',
      '--gold-accent':'#ffd700',
      '--white-90':'rgba(200,220,255,0.93)','--white-70':'rgba(170,200,255,0.70)','--white-50':'rgba(130,170,240,0.50)','--white-20':'rgba(0,106,255,0.10)',
      '--text-primary':'#c8dcff','--text-secondary':'rgba(170,200,255,0.75)',
      '--border-card':'1px solid rgba(0,106,255,0.20)','--border-glow':'1px solid rgba(0,212,255,0.45)',
      '--gradient-card':'linear-gradient(135deg,rgba(4,20,102,0.9),rgba(6,34,138,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#020b3a 0%,#06228a 50%,#020b3a 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.6)','--shadow-glow':'0 0 30px rgba(0,106,255,0.35)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(2,11,58,0.97)','--footer-bg':'#010828',
      '--input-bg':'rgba(0,106,255,0.07)','--input-border':'rgba(0,106,255,0.25)',
    },
    purple: {
      label:'💜 أرجواني', swatch:'linear-gradient(135deg,#120024,#9b5de5)',
      '--bg-primary':'#0e0020','--bg-secondary':'#1a0035','--bg-tertiary':'#280055',
      '--accent':'#9b5de5','--accent-hover':'#b07ef0','--accent-soft':'rgba(155,93,229,0.15)',
      '--cyan-accent':'#f15bb5','--cyan-soft':'rgba(241,91,181,0.12)',
      '--gold-accent':'#fee440',
      '--white-90':'rgba(240,220,255,0.93)','--white-70':'rgba(220,190,255,0.70)','--white-50':'rgba(195,155,240,0.50)','--white-20':'rgba(155,93,229,0.10)',
      '--text-primary':'#f0dcff','--text-secondary':'rgba(220,190,255,0.75)',
      '--border-card':'1px solid rgba(155,93,229,0.22)','--border-glow':'1px solid rgba(241,91,181,0.50)',
      '--gradient-card':'linear-gradient(135deg,rgba(26,0,53,0.9),rgba(40,0,85,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#0e0020 0%,#280055 50%,#0e0020 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.6)','--shadow-glow':'0 0 30px rgba(155,93,229,0.35)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(14,0,32,0.97)','--footer-bg':'#080016',
      '--input-bg':'rgba(155,93,229,0.07)','--input-border':'rgba(155,93,229,0.28)',
    },
    forest: {
      label:'🌿 غابة', swatch:'linear-gradient(135deg,#061408,#2e7d32)',
      '--bg-primary':'#061408','--bg-secondary':'#0c2010','--bg-tertiary':'#14361a',
      '--accent':'#4caf50','--accent-hover':'#66c46a','--accent-soft':'rgba(76,175,80,0.14)',
      '--cyan-accent':'#a5d6a7','--cyan-soft':'rgba(165,214,167,0.12)',
      '--gold-accent':'#ffee58',
      '--white-90':'rgba(220,255,220,0.93)','--white-70':'rgba(185,235,190,0.70)','--white-50':'rgba(145,210,150,0.50)','--white-20':'rgba(76,175,80,0.10)',
      '--text-primary':'#dcffdc','--text-secondary':'rgba(185,235,190,0.75)',
      '--border-card':'1px solid rgba(76,175,80,0.20)','--border-glow':'1px solid rgba(165,214,167,0.45)',
      '--gradient-card':'linear-gradient(135deg,rgba(12,32,16,0.9),rgba(20,54,26,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#061408 0%,#14361a 50%,#061408 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.55)','--shadow-glow':'0 0 30px rgba(76,175,80,0.30)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(6,20,8,0.97)','--footer-bg':'#030c04',
      '--input-bg':'rgba(76,175,80,0.07)','--input-border':'rgba(76,175,80,0.25)',
    },
    rose: {
      label:'🌹 وردي', swatch:'linear-gradient(135deg,#1a0010,#e91e63)',
      '--bg-primary':'#160010','--bg-secondary':'#26001e','--bg-tertiary':'#3a0030',
      '--accent':'#e91e63','--accent-hover':'#f06292','--accent-soft':'rgba(233,30,99,0.14)',
      '--cyan-accent':'#ff80ab','--cyan-soft':'rgba(255,128,171,0.12)',
      '--gold-accent':'#ffd6e8',
      '--white-90':'rgba(255,220,235,0.93)','--white-70':'rgba(255,190,215,0.70)','--white-50':'rgba(240,150,185,0.50)','--white-20':'rgba(233,30,99,0.10)',
      '--text-primary':'#ffdceb','--text-secondary':'rgba(255,190,215,0.75)',
      '--border-card':'1px solid rgba(233,30,99,0.22)','--border-glow':'1px solid rgba(255,128,171,0.50)',
      '--gradient-card':'linear-gradient(135deg,rgba(38,0,30,0.9),rgba(58,0,48,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#160010 0%,#3a0030 50%,#160010 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.6)','--shadow-glow':'0 0 30px rgba(233,30,99,0.35)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(22,0,16,0.97)','--footer-bg':'#0d000a',
      '--input-bg':'rgba(233,30,99,0.07)','--input-border':'rgba(233,30,99,0.28)',
    },
    gold: {
      label:'✨ ذهبي', swatch:'linear-gradient(135deg,#1a1200,#d4a017)',
      '--bg-primary':'#15100000','--bg-secondary':'#241a00','--bg-tertiary':'#362800',
      '--accent':'#d4a017','--accent-hover':'#f0bc22','--accent-soft':'rgba(212,160,23,0.14)',
      '--cyan-accent':'#ffe066','--cyan-soft':'rgba(255,224,102,0.12)',
      '--gold-accent':'#fff176',
      '--white-90':'rgba(255,245,200,0.93)','--white-70':'rgba(255,230,150,0.72)','--white-50':'rgba(240,205,100,0.52)','--white-20':'rgba(212,160,23,0.10)',
      '--text-primary':'#fff5c8','--text-secondary':'rgba(255,230,150,0.75)',
      '--border-card':'1px solid rgba(212,160,23,0.22)','--border-glow':'1px solid rgba(255,224,102,0.50)',
      '--gradient-card':'linear-gradient(135deg,rgba(36,26,0,0.9),rgba(54,40,0,0.7))',
      '--gradient-hero':'linear-gradient(160deg,#151000 0%,#362800 50%,#151000 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.6)','--shadow-glow':'0 0 30px rgba(212,160,23,0.35)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(21,16,0,0.97)','--footer-bg':'#0e0b00',
      '--input-bg':'rgba(212,160,23,0.07)','--input-border':'rgba(212,160,23,0.28)',
    },
    cb: {
      label:'⬛ عمى الألوان', swatch:'linear-gradient(135deg,#000,#ffdd00)',
      '--bg-primary':'#000000','--bg-secondary':'#111111','--bg-tertiary':'#1a1a1a',
      '--accent':'#ffdd00','--accent-hover':'#ffee55','--accent-soft':'rgba(255,221,0,0.12)',
      '--cyan-accent':'#ffffff','--cyan-soft':'rgba(255,255,255,0.10)',
      '--gold-accent':'#ffdd00',
      '--white-90':'rgba(255,255,255,0.95)','--white-70':'rgba(255,255,255,0.75)','--white-50':'rgba(255,255,255,0.55)','--white-20':'rgba(255,255,255,0.10)',
      '--text-primary':'#ffffff','--text-secondary':'rgba(255,255,255,0.80)',
      '--border-card':'1px solid rgba(255,221,0,0.30)','--border-glow':'1px solid rgba(255,255,255,0.50)',
      '--gradient-card':'linear-gradient(135deg,rgba(20,20,20,0.98),rgba(30,30,30,0.90))',
      '--gradient-hero':'linear-gradient(160deg,#000000 0%,#1a1a1a 50%,#000000 100%)',
      '--shadow-card':'0 4px 24px rgba(0,0,0,0.8)','--shadow-glow':'0 0 30px rgba(255,221,0,0.30)',
      '--radius-sm':'6px','--radius-md':'10px','--radius-lg':'16px','--radius-xl':'24px',
      '--navbar-bg':'rgba(0,0,0,0.99)','--footer-bg':'#000000',
      '--input-bg':'rgba(255,221,0,0.07)','--input-border':'rgba(255,255,255,0.30)',
    },
  };

  function applyTheme(n){
    const theme = THEMES[n] || THEMES.dark;
    const root = document.documentElement;
    // Apply only CSS variable entries (skip label and swatch)
    Object.entries(theme).forEach(([k,val])=>{
      if(k.startsWith('--')) root.style.setProperty(k, val);
    });
    // Fix bg-primary that had a typo in gold
    if(n==='gold') root.style.setProperty('--bg-primary','#151000');
    // Apply body background instantly
    document.body.style.background = `var(--bg-primary)`;
    localStorage.setItem(LS_THEME, n);
    document.querySelectorAll('.tb-theme-swatch').forEach(b=>b.classList.toggle('active', b.dataset.theme===n));
  }

  function applyFont(f){
    document.documentElement.style.setProperty('--font-primary',f);
    document.body.style.fontFamily=`'${f}',sans-serif`;
    localStorage.setItem(LS_FONT,f);
    document.querySelectorAll('.tb-font-btn').forEach(b=>b.classList.toggle('active',b.dataset.font===f));
  }

  const ALL_PAGES = {
    ar:[
      {title:'الرئيسية 🏠',href:'index.html'},{title:'من نحن 👥',href:'about.html'},
      {title:'الخدمات 🛎️',href:'services.html'},{title:'الحزم 📦',href:'packages.html'},
      {title:'معرض الصور 🖼️',href:'gallery.html'},{title:'الفيديوهات 🎬',href:'videos.html'},
      {title:'فريقنا 👨‍⚕️',href:'team.html'},{title:'آراء العملاء ⭐',href:'testimonials.html'},
      {title:'الأسئلة ❓',href:'faq.html'},{title:'المدونة ✍️',href:'blog.html'},
      {title:'الأسعار 💰',href:'pricing.html'},{title:'تواصل معنا 📞',href:'contact.html'},
      {title:'احجز الآن 📅',href:'booking.html'},
    ],
    en:[
      {title:'Home 🏠',href:'index.html'},{title:'About Us 👥',href:'about.html'},
      {title:'Services 🛎️',href:'services.html'},{title:'Packages 📦',href:'packages.html'},
      {title:'Gallery 🖼️',href:'gallery.html'},{title:'Videos 🎬',href:'videos.html'},
      {title:'Our Team 👨‍⚕️',href:'team.html'},{title:'Reviews ⭐',href:'testimonials.html'},
      {title:'FAQ ❓',href:'faq.html'},{title:'Blog ✍️',href:'blog.html'},
      {title:'Pricing 💰',href:'pricing.html'},{title:'Contact Us 📞',href:'contact.html'},
      {title:'Book Now 📅',href:'booking.html'},
    ],
    zh:[
      {title:'主頁 🏠',href:'index.html'},{title:'關於我們 👥',href:'about.html'},
      {title:'服務 🛎️',href:'services.html'},{title:'套餐 📦',href:'packages.html'},
      {title:'相片庫 🖼️',href:'gallery.html'},{title:'影片 🎬',href:'videos.html'},
      {title:'我們的團隊 👨‍⚕️',href:'team.html'},{title:'客戶評價 ⭐',href:'testimonials.html'},
      {title:'常見問題 ❓',href:'faq.html'},{title:'部落格 ✍️',href:'blog.html'},
      {title:'價格 💰',href:'pricing.html'},{title:'聯絡我們 📞',href:'contact.html'},
      {title:'立即預訂 📅',href:'booking.html'},
    ],
  };

  function getPages(){ return ALL_PAGES[currentLang]||ALL_PAGES.ar; }
  function getFavs(){ try{return JSON.parse(localStorage.getItem(LS_FAV))||[];}catch{return [];} }
  function saveFavs(f){ localStorage.setItem(LS_FAV,JSON.stringify(f)); }
  function toggleFav(href){ let f=getFavs(); if(f.includes(href)) f=f.filter(x=>x!==href); else f.push(href); saveFavs(f); }

  function buildToolbar(){
    const el=document.createElement('div');
    el.id='lh-toolbar';
    el.innerHTML=`
<style>
#lh-toolbar-btn{position:fixed;bottom:1.5rem;right:1.5rem;z-index:9999;width:52px;height:52px;border-radius:50%;border:none;background:linear-gradient(135deg,#3b6fff,#00d4ff);color:#fff;font-size:1.4rem;cursor:pointer;box-shadow:0 4px 20px rgba(59,111,255,0.5);transition:transform .2s,box-shadow .2s;display:flex;align-items:center;justify-content:center;}
#lh-toolbar-btn:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(0,212,255,0.6);}
#lh-panel{position:fixed;bottom:4.5rem;right:1.5rem;z-index:9998;width:300px;background:rgba(5,13,26,0.97);border:1px solid rgba(59,111,255,0.3);border-radius:16px;padding:1.2rem;box-shadow:0 8px 40px rgba(0,0,0,0.6);display:none;flex-direction:column;gap:1rem;font-family:'Tajawal','Cairo',sans-serif;backdrop-filter:blur(12px);max-height:85vh;overflow-y:auto;}
#lh-panel.open{display:flex;}
.tb-sec-lbl{font-size:0.7rem;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem;}
.tb-row{display:flex;gap:.4rem;flex-wrap:wrap;}
.tb-btn{flex:1;min-width:55px;padding:.35rem .4rem;border-radius:8px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.8);font-size:0.76rem;cursor:pointer;transition:all .2s;font-family:inherit;text-align:center;}
.tb-btn:hover,.tb-btn.active{background:rgba(59,111,255,0.3);border-color:rgba(59,111,255,0.7);color:#fff;}
.tb-search-input{width:100%;box-sizing:border-box;padding:.5rem .75rem;border-radius:8px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.06);color:#fff;font-size:0.82rem;font-family:inherit;outline:none;}
.tb-search-input:focus{border-color:rgba(59,111,255,0.6);}
.tb-res-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.3rem;}
.tb-res-list li a{display:flex;justify-content:space-between;align-items:center;padding:.4rem .6rem;border-radius:8px;background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.8);text-decoration:none;font-size:0.8rem;border:1px solid transparent;transition:all .2s;}
.tb-res-list li a:hover{background:rgba(59,111,255,0.2);border-color:rgba(59,111,255,0.4);color:#fff;}
.tb-fav-star{cursor:pointer;font-size:0.85rem;padding:0 .3rem;}
.tb-swatches-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:.4rem;}
.tb-theme-swatch{position:relative;width:100%;aspect-ratio:1;border-radius:10px;border:2px solid transparent;cursor:pointer;transition:transform .15s,border-color .15s,box-shadow .2s;overflow:hidden;}
.tb-theme-swatch:hover{transform:scale(1.08);box-shadow:0 3px 14px rgba(0,0,0,0.5);}
.tb-theme-swatch.active{border-color:#fff;box-shadow:0 0 0 2px rgba(255,255,255,0.5),0 4px 16px rgba(0,0,0,0.5);}
.tb-theme-swatch.active::after{content:'✓';position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:1rem;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,0.8);}
.tb-theme-swatch span{position:absolute;bottom:2px;left:0;right:0;text-align:center;font-size:0.52rem;color:rgba(255,255,255,0.9);text-shadow:0 1px 3px rgba(0,0,0,0.9);line-height:1.2;padding:0 1px;}

</style>
<button id="lh-toolbar-btn" title="Settings">⚙️</button>
<div id="lh-panel">
  <div style="display:flex;justify-content:space-between;align-items:center">
    <p class="tb-panel-title" id="tb-title-el">إعدادات الموقع</p>
    <button id="lh-close-btn" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:1.2rem;cursor:pointer;">✕</button>
  </div>
  <hr class="tb-divider">
  <div>
    <div class="tb-sec-lbl" id="tb-lang-label">اللغة</div>
    <div class="tb-row">
      <button class="tb-btn active" data-lang="ar">العربية 🇯🇴</button>
      <button class="tb-btn" data-lang="en">English 🇬🇧</button>
      <button class="tb-btn" data-lang="zh">廣東話 🇭🇰</button>
    </div>
  </div>
  <div>
    <div class="tb-sec-lbl" id="tb-theme-label">المظهر</div>
    <div class="tb-swatches-grid" id="tb-swatches"></div>
  </div>
  <div>
    <div class="tb-sec-lbl" id="tb-font-label">الخط</div>
    <div class="tb-row">
      <button class="tb-btn tb-font-btn active" data-font="Tajawal" style="font-family:'Tajawal'">Tajawal</button>
      <button class="tb-btn tb-font-btn" data-font="Cairo" style="font-family:'Cairo'">Cairo</button>
      <button class="tb-btn tb-font-btn" data-font="Readex Pro" style="font-family:'Readex Pro'">Readex</button>
    </div>
  </div>
  <div>
    <div class="tb-sec-lbl" id="tb-search-label">بحث</div>
    <input type="text" class="tb-search-input" id="tb-search-input" placeholder="ابحث في الصفحات...">
    <ul class="tb-res-list" id="tb-search-results" style="margin-top:.5rem"></ul>
  </div>
  <div>
    <div class="tb-sec-lbl" id="tb-fav-label">المفضلة</div>
    <ul class="tb-res-list" id="tb-fav-list"></ul>
  </div>
</div>`;
    document.body.appendChild(el);

    document.getElementById('lh-toolbar-btn').addEventListener('click',()=>document.getElementById('lh-panel').classList.toggle('open'));
    document.getElementById('lh-close-btn').addEventListener('click',()=>document.getElementById('lh-panel').classList.remove('open'));
    document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>translatePage(b.dataset.lang)));
    document.querySelectorAll('.tb-font-btn').forEach(b=>b.addEventListener('click',()=>applyFont(b.dataset.font)));

    // Build color swatches dynamically
    const swatchGrid = document.getElementById('tb-swatches');
    Object.entries(THEMES).forEach(([key, theme]) => {
      const btn = document.createElement('button');
      btn.className = 'tb-theme-swatch';
      btn.dataset.theme = key;
      btn.title = theme.label;
      btn.style.background = theme.swatch;
      btn.innerHTML = `<span>${theme.label.replace(/[^\u0600-\u06FF\w ]/g,'').trim()||key}</span>`;
      btn.addEventListener('click', () => applyTheme(key));
      swatchGrid.appendChild(btn);
    });

    const si=document.getElementById('tb-search-input');
    si.addEventListener('input',()=>{
      const q=si.value.toLowerCase();
      const pages=getPages();
      renderResults(q?pages.filter(p=>p.title.toLowerCase().includes(q)):[]);
    });
    renderFavList();
  }

  function renderResults(pages){
    const ul=document.getElementById('tb-search-results');
    const favs=getFavs();
    ul.innerHTML=pages.map(p=>`<li><a href="${p.href}"><span>${p.title}</span><span class="tb-fav-star" data-href="${p.href}">${favs.includes(p.href)?'⭐':'☆'}</span></a></li>`).join('');
    ul.querySelectorAll('.tb-fav-star').forEach(s=>s.addEventListener('click',e=>{e.preventDefault();toggleFav(s.dataset.href);renderResults(pages);}));
  }

  function renderFavList(){
    const ul=document.getElementById('tb-fav-list'); if(!ul) return;
    const favs=getFavs();
    const pages=getPages().filter(p=>favs.includes(p.href));
    const t=LANGS[currentLang];
    ul.innerHTML=pages.length===0
      ?`<li style="color:rgba(255,255,255,0.35);font-size:0.8rem;padding:.3rem .6rem">${t.tb_no_fav}</li>`
      :pages.map(p=>`<li><a href="${p.href}"><span>${p.title}</span><span class="tb-fav-star" data-href="${p.href}">⭐</span></a></li>`).join('');
    ul.querySelectorAll('.tb-fav-star').forEach(s=>s.addEventListener('click',e=>{e.preventDefault();toggleFav(s.dataset.href);renderFavList();}));
  }

  function init(){
    buildToolbar();
    applyTheme(localStorage.getItem(LS_THEME)||'dark');
    applyFont(localStorage.getItem(LS_FONT)||'Tajawal');
    injectInteractiveMap();
    translatePage(currentLang);
    document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
