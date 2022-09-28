export const ARTICLES = {
  اشیاء: {
    title: "اشیاء",
    body: `اشیاء جاوا اسکریپت مانند آرایه‌ها هستند، اما مقادیر با ویژگی‌های نام‌گذاری شده قابل دسترسی هستند، نه فقط اعداد. ویژگی یک شی نیز می تواند روی یک تابع تنظیم شود. از آنجایی که آنها با یک شی مرتبط هستند، به این توابع متد می گویند.\n\nبیایید قبل از اینکه یاد بگیرید چگونه یک شی ایجاد کنید و از آن استفاده کنید، نقش آن را در نظر بگیریم. اشیا مانند آرایه ها، اعداد، رشته ها و بولی ها برای مدل سازی دنیای اطراف ما استفاده می شوند. تفاوت این است که اشیاء می توانند هم داده ها و هم توابعی را که داده ها را دستکاری می کنند مدل کنند.\n\nاشیاء مخصوصاً برای ذخیره اطلاعات (و توابعی که از آن اطلاعات استفاده می کنند) در یک مکان مفید هستند.\n\nشما می توانید اشیاء را به عنوان مثال در نظر بگیرید. مجموعه ای از جفت اموال-ارزش. با این حال، مقادیر لازم نیست اعدادی مانند 0، 1 یا 2 باشند، آنها می توانند هر نوع داده و حتی متغیر دیگری باشند.`,
    author: "محمد",
    slug: "اشیاء",
  },
  "سازگاری-با-مرورگر": {
    title: "سازگاری با مرورگر",
    body: `توسعه دهندگان وب اغلب یک مرورگر اینترنتی ترجیحی دارند. به طور طبیعی، همان مرورگر همان مرورگری است که برای پیش نمایش وب سایت ها و برنامه های کاربردی وب در حال توسعه استفاده می شود. با این حال، تعداد زیادی مرورگر (و بسیاری از نسخه‌های آن مرورگرها) وجود دارد که منجر به تجربه‌های متنوعی برای کاربران می‌شود. این یک مشکل برای توسعه دهندگان ایجاد می کند: چگونه می توانیم اطمینان حاصل کنیم که یک وب سایت با بیشترین تعداد مرورگر که ممکن است سازگار است؟ در این مقاله، با قوانین مختلف و پیش‌فرض CSS که مرورگرهای مختلف برای HTML اعمال می‌کنند، نحوه بازنشانی CSS مرورگر پیش‌فرض، و نحوه افزایش سازگاری مرورگر برای وب‌سایت‌ها، آشنا می‌شوید.\n\nهنگام ساختن یک وب‌سایت، احتمالاً متوجه شده‌اند که عناصر عنوان مانند ${"`h1`"} همیشه اندازه (و فونت) پیش‌فرض هستند یا این که لینک‌ها همیشه آبی و زیرخط دار ظاهر می‌شوند، همه اینها قبل از اینکه سبک‌های خود را اضافه کنید. چرا اینطور است؟ و چگونه این اتفاق می‌افتد؟\n\nهمه مرورگرها یک مجموعه پیش‌فرض از قوانین CSS دارند که در HTML اعمال می‌شوند. قوانین پیش‌فرض CSS در یک شیوه نامه مخصوص مرورگر زندگی می‌کنند. شیوه نامه به عنوان _user agent style sheet_ شناخته می شود.\n\nاگر بخواهید یک وب سایت را در بسیاری از مرورگرهای وب مختلف مشاهده کنید، ممکن است متوجه شوید که وب سایت در هر مرورگر متفاوت به نظر می رسد. این به این دلیل است که هر مرورگر دارای شیوه نامه عامل کاربر خود است. این تفاوت در شیوه نامه های عامل کاربر همان چیزی است که ایجاد یک وب سایت سازگار در همه مرورگرها را دشوار می کند.
    `,
    author: "علی",
    slug: "سازگاری-با-مرورگر",
  },
  "دسترسی-و-html": {
    title: "دسترسی و HTML",
    body: `هنگام طراحی و ایجاد صفحات وب، مهم است که صفحات وب برای همه مخاطبان قابل دسترسی باشد. به طور خاص، با توجه به ماهیت بصری و پویای صفحات وبی که می سازید، مهم است که مطمئن شوید که وب سایت شما برای کاربران نابینا یا کم بینا نیز منطقی خواهد بود. بسیاری از کاربران نابینا یا کم بینا با کمک صفحه خوان به صفحات وب دسترسی پیدا می کنند. صفحه‌خوان‌ها HTML صفحه وب شما را تجزیه می‌کنند و محتویات را با صدای بلند می‌خوانند، به دستورات برای پیمایش در صفحه پاسخ می‌دهند و اقداماتی مانند کلیک کردن روی پیوند، تایپ کردن در یک فیلد ورودی یا ارسال فرم انجام می‌دهند. در این منبع، مروری بر چند روش ارائه می‌کنیم که می‌توانید دسترسی به صفحه وب خود را بهبود بخشید و به خوانندگان صفحه کمک کنید تا آن را بهتر تفسیر کنند!\n\nیکی از راه‌های قابل فهم‌تر کردن عناصر صفحه برای خوانندگان صفحه این است. برای ارائه متن جایگزین برای تصاویر. متن جایگزین یا جایگزین به عنوان یک ویژگی برای تگ ${"`<img>`"} ارائه می شود تا تصویر را برای صفحه خوان توصیف کند. حتماً برای هر تصویر در صفحه وب خود توضیحات متن جایگزین مختصری ارائه دهید! \n\nARIA که با نام WAI-ARIA نیز شناخته می‌شود، مخفف عبارت Accessible Rich Internet Applications است. ARIA انواع افزونه‌های نشانه‌گذاری را تعریف می‌کند، معمولاً ویژگی‌های HTML5، که می‌توانند به عناصر اضافه شوند تا به خوانندگان صفحه‌نمایش اطلاعات بیشتری در مورد عنصر بدهند و به کاربران کم‌بینا کمک کنند تا آنچه را که در صفحه وب روی می‌دهد بهتر درک کنند. به عنوان مثال، یک ویژگی مفید ARIA، ویژگی ${"`role`"} است. هنگامی که به یک عنصر اضافه می شود، این صفحه خوان را با زمینه اضافی در مورد عملکرد آن عنصر در زمینه یک صفحه فراهم می کند. بسیاری از توابع دیگر برای ویژگی های ARIA وجود دارد، مانند اطلاع دادن به کاربر در مورد وضعیت فرم ها و چک باکس ها، و حتی جلب توجه او به عنصری در صفحه که به تازگی توسط جاوا اسکریپت تغییر کرده است. ما در این مقاله همه چیز مربوط به ARIA را پوشش نمی‌دهیم، اما می‌توانید مشخصات را [اینجا] (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) بررسی کنید.`,
    author: "محمد",
    slug: "دسترسی-و-html",
  },
  "احراز-هویت-و-تایید": {
    title: "احراز هویت و OAuth",
    body: `در حالی که تصور احراز هویت به عنوان تعامل بین یک کاربر انسانی و یک برنامه معمول است، گاهی اوقات کاربر یک برنامه کاربردی دیگر است. بسیاری از برنامه‌ها رابط‌ها را در قالب یک API (رابط برنامه کاربردی) در معرض اطلاعات خود قرار می‌دهند. به عنوان مثال، API سامانه هواشناسی  تقریباً برای تمام عملکردهای خود نقاط پایانی را ارائه می دهد. این به برنامه‌ها اجازه می‌دهد تا داده‌ها را از وضعیت و پیش‌بینی‌های هواشناسی دریافت کنند و مثلاً زمان مناسب سفر به شهری دیگر را ذخیره‌ کرده، مدیریت و به بازدیدکنندگان خود پیشنهاد کنند. از آنجایی که این درخواست‌های خارجی می‌توانند یک خدمت را تحت الشعاع قرار دهند و همچنین به اطلاعات کاربر دسترسی داشته باشند، باید با استفاده از احراز هویت ایمن شوند.\n\nاصلی‌ترین الگوی دسترسی API از یک برنامه دیگر، استفاده از یک کلید API است. API های عمومی معمولاً یک سامانه توسعه دهنده ارائه می دهند که در آن می توانید برنامه خود را ثبت کرده و یک کلید API مربوطه را ایجاد کنید. سپس این کلید برای برنامه شما منحصر به فرد است. هنگامی که برنامه شما درخواستی می دهد، این کلید به همراه آن ارسال می شود. سپس API می تواند تأیید کند که برنامه شما مجاز به دسترسی است و پاسخ صحیح را بر اساس سطح مجوز برنامه شما ارائه دهد. API می‌تواند نوع و تعداد درخواست‌هایی را که هر برنامه ارسال می‌کند، ردیابی کند. این داده ها می توانند برای کاهش درخواست ها از یک برنامه خاص به سطح از پیش تعریف شده خدمات استفاده شوند. این از ارسال هرزنامه یا سوء استفاده از داده‌های کاربر توسط برنامه‌ها جلوگیری می‌کند، زیرا API می‌تواند به راحتی کلید API آن برنامه را مسدود کند و از استفاده مخرب بیشتر از API توسط آن برنامه جلوگیری کند.`,
    author: "فاطمه",
    slug: "احراز-هویت-و-تایید",
  },
  "برنامه-نویسی-جعبه-سیاه": {
    title: "برنامه نویسی جعبه سیاه",
    body: `با شروع کار با کلاس ها و اشیاء، ممکن است با اصطلاح برنامه نویسی جعبه سیاه مواجه شوید. اغلب اوقات، برنامه نویسان روش هایی را طوری می نویسند که گویی جعبه های سیاه هستند - برنامه نویس می داند که در داخل جعبه چه می گذرد، اما تمام این جزئیات پیاده سازی از کاربر پنهان می شود. کاربر باید از ورودی جعبه سیاه آگاه باشد و باید بتواند خروجی را با توجه به ورودی پیش بینی کند، اما جزئیات نحوه تبدیل آن ورودی به خروجی را می توان از کاربران پنهان کرد.\n\nبیشتر فناوری ها ما این روزها از یک جعبه سیاه تا حدی استفاده می کنیم. یک کنترل از راه دور تلویزیون را در نظر بگیرید — می‌توانیم به کنترل از راه دور مقداری ورودی بدهیم، مانند فشار دادن دکمه «افزایش صدا»، و می‌توانیم انتظار خروجی‌هایی مانند افزایش صدا را داشته باشیم. اما فراتر از آن، تمام کارهای درونی فرآیند از ما پنهان است. ما به عنوان کاربر کنترل از راه دور تلویزیون، واقعاً نمی دانیم که چگونه کنترل از راه دور با تلویزیون ارتباط برقرار می کند یا چگونه تلویزیون با بلندگوهای آن ارتباط برقرار می کند. تنها چیزی که می دانیم فرمت ورودی و خروجی مورد انتظار است. سپس به جعبه سیاه اجازه می دهیم بقیه کارها را انجام دهد.`,
    author: "فاطمه",
    slug: "برنامه-نویسی-جعبه-سیاه",
  },
  "ویژگی-های-یک-آزمون-خوب": {
    title: "ویژگی های یک آزمون خوب",
    body: `مجموعه تست مجموعه ای از تست هایی است که می توانید در برابر یک نرم افزار اجرا کنید. هدف این است که این تست‌ها قبل از اینکه نرم‌افزار شما را در دسترس کاربر نهایی قرار دهید، خطاهای موجود در نرم‌افزار شما را شناسایی کنند.\n\nیک مجموعه آزمایشی خوب، مجموعه‌ای است که زمان زیادی طول نمی‌کشد، و اگر همه تست‌ها موفق باشند، این مجموعه را فراهم می‌کند. شما با اطمینان از اینکه نرم افزار شما مطابق انتظار کار می کند. اگر یک مجموعه آزمایشی خوب با اشکالی مواجه شود، بازخوردی را ارائه می‌کند که می‌تواند به شما در شناسایی منبع مشکل کمک کند و به حل آن کمک کند.\n\nممکن است اجرای یک مجموعه آزمایشی بد زمان زیادی طول بکشد و/یا در صورت قبولی ، به شما اطمینان نمی دهد که نرم افزار شما مطابق انتظار کار می کند. اگر یک مجموعه آزمایشی بد اشکالی پیدا کند، ممکن است بازخورد مفیدی نداشته باشد یا منفی کاذب باشد، که شناسایی منبع مشکل را دشوار می‌کند.`,
    author: "محمد",
    slug: "ویژگی-های-یک-آزمون-خوب",
  },
  "رنگ-های-قابل-دسترس": {
    title: "رنگ های قابل دسترس",
    body: `افراد در توانایی خود در درک رنگ متفاوت هستند. برخی افراد کمتر قادر به تشخیص دو رنگ متضاد هستند. افراد دیگر معمولاً بینایی ضعیفی دارند و برای پیمایش به تضاد بین رنگ‌ها تکیه می‌کنند.\n\nنمی‌توانید هنگام انتخاب رنگ‌هایتان، دسترسی را در نظر بگیرید. از هر دوازده مرد یک نفر و همچنین از هر دویست زن یک نفر به کوررنگی مبتلا می شوند. برای تمام مخاطبان خود به صورت انسانی طراحی کنید. از رنگ ها برای برقراری ارتباط با کاربران خود استفاده کنید، نه اینکه آنها را اشتباه بگیرید. می‌توانید درباره کوررنگی [اینجا] اطلاعات بیشتری کسب کنید (http://www.colourblindawareness.org/colour-blindness/).\n\nبه دلیل انواع اختلالات بینایی، هیچ ابزار درمانی برای اطمینان از رنگ‌های تارنمای شما وجود ندارد. برای همه کاربران کار خواهد کرد. شما می توانید از ابزارهایی مانند [Color Laboratory] (http://colorlab.wickline.org/colorblind/colorlab/) برای تقلید از کوررنگی هنگام تصمیم گیری در مورد رنگ‌بندی خود استفاده کنید.`,
    author: "علی",
    slug: "رنگ-های-قابل-دسترس",
  },
};

export const AUTHORS = {
  محمد: {
    articles: ["دسترسی-و-html", "اشیاء", "ویژگی-های-یک-آزمون-خوب"],
  },
  علی: {
    articles: ["سازگاری-با-مرورگر", "رنگ-های-قابل-دسترس"],
  },
  فاطمه: {
    articles: ["احراز-هویت-و-تایید", "برنامه-نویسی-جعبه-سیاه"],
  },
};

export const CATEGORIES = {
  مفاهیم: [
    "برنامه-نویسی-جعبه-سیاه",
    "احراز-هویت-و-تایید",
    "ویژگی-های-یک-آزمون-خوب",
  ],
  javascript: ["اشیاء"],
  html: ["دسترسی-و-html", "سازگاری-با-مرورگر"],
};
