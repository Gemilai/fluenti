// --- START: CONFIGURATION & I1N ---
const DEFAULT_WEB_MODEL = "gemini-2.5-flash";
const DEFAULT_PROXY_URL = "https://middleman.mattew.workers.dev";
const MODELS = ['gemini-3.5-flash', 'gemini-3-flash-preview', 'gemini-3.1-flash-lite', 'gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash', 'gemini-2.0-flash-lite'];
const LANGUAGES = [{ value: "auto", text: "Auto-detect Language", i18nKey: "lang_auto" }, { value: "Afrikaans", text: "Afrikaans", i18nKey: "lang_af" }, { value: "Albanian", text: "Albanian", i18nKey: "lang_sq" }, { value: "Amharic", text: "Amharic", i18nKey: "lang_am" }, { value: "Arabic", text: "Arabic", i18nKey: "lang_ar" }, { value: "Armenian", text: "Armenian", i18nKey: "lang_hy" }, { value: "Assamese", text: "Assamese", i18nKey: "lang_as" }, { value: "Aymara", text: "Aymara", i18nKey: "lang_ay" }, { value: "Azerbaijani", text: "Azerbaijani", i18nKey: "lang_az" }, { value: "Bambara", text: "Bambara", i18nKey: "lang_bm" }, { value: "Basque", text: "Basque", i18nKey: "lang_eu" }, { value: "Belarusian", text: "Belarusian", i18nKey: "lang_be" }, { value: "Bengali", text: "Bengali", i18nKey: "lang_bn" }, { value: "Bhojpuri", text: "Bhojpuri", i18nKey: "lang_bho" }, { value: "Bosnian", text: "Bosnian", i18nKey: "lang_bs" }, { value: "Bulgarian", text: "Bulgarian", i18nKey: "lang_bg" }, { value: "Catalan", text: "Catalan", i18nKey: "lang_ca" }, { value: "Cebuano", text: "Cebuano", i18nKey: "lang_ceb" }, { value: "Chichewa", text: "Chichewa (Nyanja)", i18nKey: "lang_ny" }, { value: "Chinese (Simplified)", text: "Chinese (Simplified)", i18nKey: "lang_zh-CN" }, { value: "Chinese (Traditional)", text: "Chinese (Traditional)", i18nKey: "lang_zh-TW" }, { value: "Corsican", text: "Corsican", i18nKey: "lang_co" }, { value: "Croatian", text: "Croatian", i18nKey: "lang_hr" }, { value: "Czech", text: "Czech", i18nKey: "lang_cs" }, { value: "Danish", text: "Danish", i18nKey: "lang_da" }, { value: "Dhivehi", text: "Dhivehi", i18nKey: "lang_dv" }, { value: "Dogri", text: "Dogri", i18nKey: "lang_doi" }, { value: "Dutch", text: "Dutch", i18nKey: "lang_nl" }, { value: "English", text: "English", i18nKey: "lang_en" }, { value: "Esperanto", text: "Esperanto", i18nKey: "lang_eo" }, { value: "Estonian", text: "Estonian", i18nKey: "lang_et" }, { value: "Ewe", text: "Ewe", i18nKey: "lang_ee" }, { value: "Filipino", text: "Filipino (Tagalog)", i18nKey: "lang_tl" }, { value: "Finnish", text: "Finnish", i18nKey: "lang_fi" }, { value: "French", text: "French", i18nKey: "lang_fr" }, { value: "Frisian", text: "Frisian", i18nKey: "lang_fy" }, { value: "Galician", text: "Galician", i18nKey: "lang_gl" }, { value: "Georgian", text: "Georgian", i18nKey: "lang_ka" }, { value: "German", text: "German", i18nKey: "lang_de" }, { value: "Greek", text: "Greek", i18nKey: "lang_el" }, { value: "Guarani", text: "Guarani", i18nKey: "lang_gn" }, { value: "Gujarati", text: "Gujarati", i18nKey: "lang_gu" }, { value: "Haitian Creole", text: "Haitian Creole", i18nKey: "lang_ht" }, { value: "Hausa", text: "Hausa", i18nKey: "lang_ha" }, { value: "Hawaiian", text: "Hawaiian", i18nKey: "lang_haw" }, { value: "Hebrew", text: "Hebrew", i18nKey: "lang_iw" }, { value: "Hindi", text: "Hindi", i18nKey: "lang_hi" }, { value: "Hmong", text: "Hmong", i18nKey: "lang_hmn" }, { value: "Hungarian", text: "Hungarian", i18nKey: "lang_hu" }, { value: "Icelandic", text: "Icelandic", i18nKey: "lang_is" }, { value: "Igbo", text: "Igbo", i18nKey: "lang_ig" }, { value: "Ilocano", text: "Ilocano", i18nKey: "lang_ilo" }, { value: "Indonesian", text: "Indonesian", i18nKey: "lang_id" }, { value: "Irish", text: "Irish", i18nKey: "lang_ga" }, { value: "Italian", text: "Italian", i18nKey: "lang_it" }, { value: "Japanese", text: "Japanese", i18nKey: "lang_ja" }, { value: "Javanese", text: "Javanese", i18nKey: "lang_jw" }, { value: "Kannada", text: "Kannada", i18nKey: "lang_kn" }, { value: "Kazakh", text: "Kazakh", i18nKey: "lang_kk" }, { value: "Khmer", text: "Khmer", i18nKey: "lang_km" }, { value: "Kinyarwanda", text: "Kinyarwanda", i18nKey: "lang_rw" }, { value: "Konkani", text: "Konkani", i18nKey: "lang_gom" }, { value: "Korean", text: "Korean", i18nKey: "lang_ko" }, { value: "Krio", text: "Krio", i18nKey: "lang_kri" }, { value: "Kurdish (Kurmanji)", text: "Kurdish (Kurmanji)", i18nKey: "lang_ku" }, { value: "Kurdish (Sorani)", text: "Kurdish (Sorani)", i18nKey: "lang_ckb" }, { value: "Kyrgyz", text: "Kyrgyz", i18nKey: "lang_ky" }, { value: "Lao", text: "Lao", i18nKey: "lang_lo" }, { value: "Latin", text: "Latin", i18nKey: "lang_la" }, { value: "Latvian", text: "Latvian", i18nKey: "lang_lv" }, { value: "Lingala", text: "Lingala", i18nKey: "lang_ln" }, { value: "Lithuanian", text: "Lithuanian", i18nKey: "lang_lt" }, { value: "Luganda", text: "Luganda", i18nKey: "lang_lg" }, { value: "Luxembourgish", text: "Luxembourgish", i18nKey: "lang_lb" }, { value: "Macedonian", text: "Macedonian", i18nKey: "lang_mk" }, { value: "Maithili", text: "Maithili", i18nKey: "lang_mai" }, { value: "Malagasy", text: "Malagasy", i18nKey: "lang_mg" }, { value: "Malay", text: "Malay", i18nKey: "lang_ms" }, { value: "Malayalam", text: "Malayalam", i18nKey: "lang_ml" }, { value: "Maltese", text: "Maltese", i18nKey: "lang_mt" }, { value: "Maori", text: "Maori", i18nKey: "lang_mi" }, { value: "Marathi", text: "Marathi", i18nKey: "lang_mr" }, { value: "Meiteilon (Manipuri)", text: "Meiteilon (Manipuri)", i18nKey: "lang_mni-Mtei" }, { value: "Mizo", text: "Mizo", i18nKey: "lang_lus" }, { value: "Mongolian", text: "Mongolian", i18nKey: "lang_mn" }, { value: "Myanmar (Burmese)", text: "Myanmar (Burmese)", i18nKey: "lang_my" }, { value: "Nepali", text: "Nepali", i18nKey: "lang_ne" }, { value: "Norwegian", text: "Norwegian", i18nKey: "lang_no" }, { value: "Odia (Oriya)", text: "Odia (Oriya)", i18nKey: "lang_or" }, { value: "Oromo", text: "Oromo", i18nKey: "lang_om" }, { value: "Pashto", text: "Pashto", i18nKey: "lang_ps" }, { value: "Persian", text: "Persian", i18nKey: "lang_fa" }, { value: "Polish", text: "Polish", i18nKey: "lang_pl" }, { value: "Portuguese", text: "Portuguese", i18nKey: "lang_pt" }, { value: "Punjabi", text: "Punjabi", i18nKey: "lang_pa" }, { value: "Quechua", text: "Quechua", i18nKey: "lang_qu" }, { value: "Romanian", text: "Romanian", i18nKey: "lang_ro" }, { value: "Russian", text: "Russian", i18nKey: "lang_ru" }, { value: "Samoan", text: "Samoan", i18nKey: "lang_sm" }, { value: "Sanskrit", text: "Sanskrit", i18nKey: "lang_sa" }, { value: "Scots Gaelic", text: "Scots Gaelic", i18nKey: "lang_gd" }, { value: "Sepedi", text: "Sepedi", i18nKey: "lang_nso" }, { value: "Serbian", text: "Serbian", i18nKey: "lang_sr" }, { value: "Sesotho", text: "Sesotho", i18nKey: "lang_st" }, { value: "Shona", text: "Shona", i18nKey: "lang_sn" }, { value: "Sindhi", text: "Sindhi", i18nKey: "lang_sd" }, { value: "Sinhala", text: "Sinhala", i18nKey: "lang_si" }, { value: "Slovak", text: "Slovak", i18nKey: "lang_sk" }, { value: "Slovenian", text: "Slovenian", i18nKey: "lang_sl" }, { value: "Somali", text: "Somali", i18nKey: "lang_so" }, { value: "Spanish", text: "Spanish", i18nKey: "lang_es" }, { value: "Sundanese", text: "Sundanese", i18nKey: "lang_su" }, { value: "Swahili", text: "Swahili", i18nKey: "lang_sw" }, { value: "Swedish", text: "Swedish", i18nKey: "lang_sv" }, { value: "Tajik", text: "Tajik", i18nKey: "lang_tg" }, { value: "Tamil", text: "Tamil", i18nKey: "lang_ta" }, { value: "Tatar", text: "Tatar", i18nKey: "lang_tt" }, { value: "Telugu", text: "Telugu", i18nKey: "lang_te" }, { value: "Thai", text: "Thai", i18nKey: "lang_th" }, { value: "Tigrinya", text: "Tigrinya", i18nKey: "lang_ti" }, { value: "Tsonga", text: "Tsonga", i18nKey: "lang_ts" }, { value: "Turkish", text: "Turkish", i18nKey: "lang_tr" }, { value: "Turkmen", text: "Turkmen", i18nKey: "lang_tk" }, { value: "Twi", text: "Twi (Akan)", i18nKey: "lang_ak" }, { value: "Ukrainian", text: "Ukrainian", i18nKey: "lang_uk" }, { value: "Urdu", text: "Urdu", i18nKey: "lang_ur" }, { value: "Uyghur", text: "Uyghur", i18nKey: "lang_ug" }, { value: "Uzbek", text: "Uzbek", i18nKey: "lang_uz" }, { value: "Vietnamese", text: "Vietnamese", i18nKey: "lang_vi" }, { value: "Welsh", text: "Welsh", i18nKey: "lang_cy" }, { value: "Xhosa", text: "Xhosa", i18nKey: "lang_xh" }, { value: "Yiddish", text: "Yiddish", i18nKey: "lang_yi" }, { value: "Yoruba", text: "Yoruba", i18nKey: "lang_yo" }, { value: "Zulu", text: "Zulu", i18nKey: "lang_zu" }];
const JOB_FIELDS = [{ value: "None", text: "None (General)", i18nKey: "job_None" }, { value: "Medical", text: "Medical / Healthcare", i18nKey: "job_Medical" }, { value: "Legal", text: "Legal / Law", i18nKey: "job_Legal" }, { value: "Engineering", text: "Engineering (General)", i18nKey: "job_Engineering" }, { value: "IT", text: "Information Technology / Software", i18nKey: "job_IT" }, { value: "Finance", text: "Finance / Banking", i18nKey: "job_Finance" }, { value: "Academic", text: "Academic / Research", i18nKey: "job_Academic" }, { value: "Marketing", text: "Marketing / Business", i18nKey: "job_Marketing" }, { value: "Cinema", text: "Cinema / TV Series", i18nKey: "job_Cinema" }];
const TONES = [{ value: "Default", text: "Default", i18nKey: "tone_Default" }, { value: "Formal", text: "Formal", i18nKey: "tone_Formal" }, { value: "Informal", text: "Informal", i18nKey: "tone_Informal" }, { value: "Poetic", text: "Poetic", i18nKey: "tone_Poetic" }, { value: "Technical", text: "Technical", i18nKey: "tone_Technical" }, { value: "Simplify", text: "Simple / Easy to read", i18nKey: "tone_Simplify" }, { value: "Custom", text: "Custom...", i18nKey: "tone_Custom" }];
const RTL_LANGUAGES = new Set(['Arabic', 'Hebrew', 'Persian', 'Urdu', 'Yiddish', 'Dhivehi', 'Sindhi', 'Pashto', 'Uyghur', 'Kurdish (Sorani)']);
const TRANSLATIONS = {
    en: { appTitle: "Fluentify", tabText: "Text", tabImage: "Image", tabPDF: "PDF", tabSubtitle: "Subtitle", tabVideo: "Video", swapBtnLabel: "Swap languages", textInputPlaceholder: "Enter text to translate...", youtubeSectionTitle: "Load from YouTube URL", youtubeUrlPlaceholder: "Enter YouTube Video URL...", youtubeLangPlaceholder: "lang", youtubeFetchBtn: "Fetch", youtubeNotice: ``, fileDragDrop: "Drag & drop a file", fileOr: "or", fileChooseBtn: "Choose File", fileHintImage: "PNG, JPG, WEBP, GIF (MAX. 20MB)", fileHintPDF: "PDF (MAX. 20MB)", fileHintSubtitle: "SRT, VTT, SSA, ASS (MAX. 20MB)", removeFileBtnLabel: "Remove file", pdfSelectPagesTitle: "Select Pages to Translate", pdfSelectAll: "Select All", pdfDeselectAll: "Deselect All", pdfPageCounter: "{count} pages selected", pdfCombinePages: "Combine selected pages before translation", pdfBatchWarning: "Translation may take up to {seconds} seconds to complete.", subtitleEditorTitle: "Subtitle Editor", subtitleLinesPerRequest: "Lines / Request", subtitleBreakLinesBtnLabel: "Break Long Lines", subtitleFindReplaceBtnLabel: "Find & Replace", subtitleExportBtnLabel: "Export as subtitle file", subtitleSavedProgress: "Saved progress found for this file.", subtitleLoadProgress: "Load Progress", subtitleClearHistory: "Clear History", breakLinesPanelTitle: "Max chars / line:", breakLinesApply: "Apply Changes", findInputPlaceholder: "Find text...", replaceInputPlaceholder: "Replace with...", findCaseSensitive: "Case Sensitive", replaceAllBtn: "Replace All", subtitleTableHeaderNum: "#", subtitleTableHeaderTime: "Timestamp", subtitleTableHeaderOrig: "Original Text", subtitleTableHeaderTrans: "Translated Text", progressLabelTranslating: "Translating...", progressCancel: "Cancel", advSettingsBtn: "Settings", translateBtn: "Translate", settingsModel: "AI Model", settingsSpecialization: "Translation Specialization", settingsTone: "Translation Tone", settingsCustomToneLabel: "Custom Tone Instruction", settingsCustomTonePlaceholder: "e.g., 'Translate this in the style of a pirate.'", settingsCreativity: "Creativity (Temperature)", settingsRequestDelay: "Request Delay (seconds)", settingsApiKey: "Google AI API Key(s)", settingsApiKeyPlaceholder: "Enter your API Keys, one per line.", settingsApiKeyHint: "Enter multiple keys to distribute load or as backups.", settingsUseProxy: "Use Proxy", settingsCustomProxyLabel: "Custom Proxy URL (Optional)", settingsCustomProxyHint: `Deploy your own proxy using <a href="https://github.com/yebekhe/middleman" target="_blank" rel="noopener noreferrer" class="underline hover:text-sky-500">Middleman</a>.`, settingsUseCustomPrompt: "Use Custom Prompt", settingsCustomPromptPlaceholder: "Enter your custom prompt. Use {text}, {source_lang}, and {target_lang} as placeholders.", settingsOptimizePrompt: "Optimize", settingsOcr: "Use OCR for scanned PDF pages", settingsSave: "Save all settings in this browser", outputPlaceholder: "Translation will appear here...", copyBtnLabel: "Copy output", exportTextBtnLabel: "Export as TXT file", refineToolbarTitle: "Refine:", refineShorten: "Make Shorter", refineExpand: "Expand", refineSummarize: "Summarize", styleToolbarTitle: "Change Style:", styleFormal: "Formal", styleInformal: "Informal", stylePoetic: "Poetic", styleSimplify: "Simplify", logTitle: "Live Activity Log", footerText: `Created with <i class="fas fa-heart text-red-500 mx-1"></i> by YEBEKHE`, pageTitle: "Fluentify - Modern AI Translator", howToUseBtnLabel: "How to use", howToUseModalTitle: "How to Use Fluentify", searchLanguagesPlaceholder: "Search languages...",
        lang_auto: "Auto-detect Language", lang_af: "Afrikaans", lang_sq: "Albanian", lang_am: "Amharic", lang_ar: "Arabic", lang_hy: "Armenian", lang_as: "Assamese", lang_ay: "Aymara", lang_az: "Azerbaijani", lang_bm: "Bambara", lang_eu: "Basque", lang_be: "Belarusian", lang_bn: "Bengali", lang_bho: "Bhojpuri", lang_bs: "Bosnian", lang_bg: "Bulgarian", lang_ca: "Catalan", lang_ceb: "Cebuano", lang_ny: "Chichewa (Nyanja)", "lang_zh-CN": "Chinese (Simplified)", "lang_zh-TW": "Chinese (Traditional)", lang_co: "Corsican", lang_hr: "Croatian", lang_cs: "Czech", lang_da: "Danish", lang_dv: "Dhivehi", lang_doi: "Dogri", lang_nl: "Dutch", lang_en: "English", lang_eo: "Esperanto", lang_et: "Estonian", lang_ee: "Ewe", lang_tl: "Filipino (Tagalog)", lang_fi: "Finnish", lang_fr: "French", lang_fy: "Frisian", lang_gl: "Galician", lang_ka: "Georgian", lang_de: "German", lang_el: "Greek", lang_gn: "Guarani", lang_gu: "Gujarati", lang_ht: "Haitian Creole", lang_ha: "Hausa", lang_haw: "Hawaiian", lang_iw: "Hebrew", lang_hi: "Hindi", lang_hmn: "Hmong", lang_hu: "Hungarian", lang_is: "Icelandic", lang_ig: "Igbo", lang_ilo: "Ilocano", lang_id: "Indonesian", lang_ga: "Irish", lang_it: "Italian", lang_ja: "Japanese", lang_jw: "Javanese", lang_kn: "Kannada", lang_kk: "Kazakh", lang_km: "Khmer", lang_rw: "Kinyarwanda", lang_gom: "Konkani", lang_ko: "Korean", lang_kri: "Krio", lang_ku: "Kurdish (Kurmanji)", lang_ckb: "Kurdish (Sorani)", lang_ky: "Kyrgyz", lang_lo: "Lao", lang_la: "Latin", lang_lv: "Latvian", lang_ln: "Lingala", lang_lt: "Lithuanian", lang_lg: "Luganda", lang_lb: "Luxembourgish", lang_mk: "Macedonian", lang_mai: "Maithili", lang_mg: "Malagasy", lang_ms: "Malay", lang_ml: "Malayalam", lang_mt: "Maltese", lang_mi: "Maori", lang_mr: "Marathi", "lang_mni-Mtei": "Meiteilon (Manipuri)", lang_lus: "Mizo", lang_mn: "Mongolian", lang_my: "Myanmar (Burmese)", lang_ne: "Nepali", lang_no: "Norwegian", lang_or: "Odia (Oriya)", lang_om: "Oromo", lang_ps: "Pashto", lang_fa: "Persian", lang_pl: "Polish", lang_pt: "Portuguese", lang_pa: "Punjabi", lang_qu: "Quechua", lang_ro: "Romanian", lang_ru: "Russian", lang_sm: "Samoan", lang_sa: "Sanskrit", lang_gd: "Scots Gaelic", lang_nso: "Sepedi", lang_sr: "Serbian", lang_st: "Sesotho", lang_sn: "Shona", lang_sd: "Sindhi", lang_si: "Sinhala", lang_sk: "Slovak", lang_sl: "Slovenian", lang_so: "Somali", lang_es: "Spanish", lang_su: "Sundanese", lang_sw: "Swahili", lang_sv: "Swedish", lang_tg: "Tajik", lang_ta: "Tamil", lang_tt: "Tatar", lang_te: "Telugu", lang_th: "Thai", lang_ti: "Tigrinya", lang_ts: "Tsonga", lang_tr: "Turkish", lang_tk: "Turkmen", lang_ak: "Twi (Akan)", lang_uk: "Ukrainian", lang_ur: "Urdu", lang_ug: "Uyghur", lang_uz: "Uzbek", lang_vi: "Vietnamese", lang_cy: "Welsh", lang_xh: "Xhosa", lang_yi: "Yiddish", lang_yo: "Yoruba", lang_zu: "Zulu",
        job_None: "None (General)", job_Medical: "Medical / Healthcare", job_Legal: "Legal / Law", job_Engineering: "Engineering (General)", job_IT: "Information Technology / Software", job_Finance: "Finance / Banking", job_Academic: "Academic / Research", job_Marketing: "Marketing / Business", job_Cinema: "Cinema / TV Series",
        tone_Default: "Default", tone_Formal: "Formal", tone_Informal: "Informal", tone_Poetic: "Poetic", tone_Technical: "Technical", tone_Simplify: "Simple / Easy to read", tone_Custom: "Custom..." },
    fa: { appTitle: "فلوئنتیفای", tabText: "متن", tabImage: "تصویر", tabPDF: "PDF", tabSubtitle: "زیرنویس", tabVideo: "ویدئو", swapBtnLabel: "جابجایی زبان‌ها", textInputPlaceholder: "متن را برای ترجمه وارد کنید...", youtubeSectionTitle: "بارگذاری از آدرس یوتیوب", youtubeUrlPlaceholder: "آدرس ویدیوی یوتیوب را وارد کنید...", youtubeLangPlaceholder: "زبان", youtubeFetchBtn: "دریافت", youtubeNotice: ``, fileDragDrop: "فایل را بکشید و رها کنید", fileOr: "یا", fileChooseBtn: "انتخاب فایل", fileHintImage: "PNG, JPG, WEBP, GIF (حداکثر ۲۰ مگابایت)", fileHintPDF: "PDF (حداکثر ۲۰ مگابایت)", fileHintSubtitle: "SRT, VTT, SSA, ASS (حداکثر ۲۰ مگابایت)", removeFileBtnLabel: "حذف فایل", pdfSelectPagesTitle: "انتخاب صفحات برای ترجمه", pdfSelectAll: "انتخاب همه", pdfDeselectAll: "لغو انتخاب همه", pdfPageCounter: "{count} صفحه انتخاب شد", pdfCombinePages: "ادغام صفحات انتخاب شده قبل از ترجمه", pdfBatchWarning: "ترجمه ممکن است تا {seconds} ثانیه طول بکشد.", subtitleEditorTitle: "ویرایشگر زیرنویس", subtitleLinesPerRequest: "خط / درخواست", subtitleBreakLinesBtnLabel: "شکستن خطوط طولانی", subtitleFindReplaceBtnLabel: "جستجو و جایگزینی", subtitleExportBtnLabel: "خروجی به عنوان فایل زیرنویس", subtitleSavedProgress: "پیشرفت ذخیره شده برای این فایل پیدا شد.", subtitleLoadProgress: "بارگذاری پیشرفت", subtitleClearHistory: "پاک کردن تاریخچه", breakLinesPanelTitle: "حداکثر کاراکتر / خط:", breakLinesApply: "اعمال تغییرات", findInputPlaceholder: "جستجوی متن...", replaceInputPlaceholder: "جایگزینی با...", findCaseSensitive: "حساس به حروف بزرگ و کوچک", replaceAllBtn: "جایگزینی همه", subtitleTableHeaderNum: "#", subtitleTableHeaderTime: "برچسب زمانی", subtitleTableHeaderOrig: "متن اصلی", subtitleTableHeaderTrans: "متن ترجمه شده", progressLabelTranslating: "در حال ترجمه...", progressCancel: "لغو", advSettingsBtn: "تنظیمات", translateBtn: "ترجمه", settingsModel: "مدل هوش مصنوعی", settingsSpecialization: "تخصص ترجمه", settingsTone: "لحن ترجمه", settingsCustomToneLabel: "دستورالعمل لحن سفارشی", settingsCustomTonePlaceholder: "مثال: 'این متن را به سبک دزدان دریایی ترجمه کن.'", settingsCreativity: "خلاقیت (Temperature)", settingsRequestDelay: "تأخیر درخواست (ثانیه)", settingsApiKey: "کلید(های) API گوگل", settingsApiKeyPlaceholder: "کلیدهای API خود را وارد کنید، هر کدام در یک خط.", settingsApiKeyHint: "چندین کلید برای توزیع بار یا به عنوان پشتیبان وارد کنید.", settingsUseProxy: "استفاده از پروکسی", settingsCustomProxyLabel: "آدرس پروکسی سفارشی (اختیاری)", settingsCustomProxyHint: `پروکسی خود را با استفاده از <a href="https://github.com/yebekhe/middleman" target="_blank" rel="noopener noreferrer" class="underline hover:text-sky-500">Middleman</a> مستقر کنید.`, settingsUseCustomPrompt: "استفاده از پرامپت سفارشی", settingsCustomPromptPlaceholder: "پرامپت سفارشی خود را وارد کنید. از {text}، {source_lang} و {target_lang} به عنوان متغیر استفاده کنید.", settingsOptimizePrompt: "بهینه‌سازی", settingsOcr: "استفاده از OCR برای صفحات PDF اسکن شده", settingsSave: "ذخیره تمام تنظیمات در این مرورگر", outputPlaceholder: "ترجمه در اینجا نمایش داده خواهد شد...", copyBtnLabel: "کپی خروجی", exportTextBtnLabel: "خروجی به عنوان فایل TXT", refineToolbarTitle: "اصلاح:", refineShorten: "کوتاه‌تر کردن", refineExpand: "گسترش دادن", refineSummarize: "خلاصه کردن", styleToolbarTitle: "تغییر سبک:", styleFormal: "رسمی", styleInformal: "غیررسمی", stylePoetic: "شاعرانه", styleSimplify: "ساده‌سازی", logTitle: "گزارش فعالیت زنده", footerText: `ساخته شده با <i class="fas fa-heart text-red-500 mx-1"></i> توسط YEBEKHE`, pageTitle: "Fluentify - مترجم مدرن هوش مصنوعی", howToUseBtnLabel: "راهنمای استفاده", howToUseModalTitle: "راهنمای استفاده از Fluentify", searchLanguagesPlaceholder: "جستجوی زبان‌ها...",
        lang_auto: "تشخیص خودکار زبان", lang_af: "آفریکانس", lang_sq: "آلبانیایی", lang_am: "امهری", lang_ar: "عربی", lang_hy: "ارمنی", lang_as: "آسامی", lang_ay: "آیمارا", lang_az: "آذربایجانی", lang_bm: "بامبارا", lang_eu: "باسکی", lang_be: "بلاروسی", lang_bn: "بنگالی", lang_bho: "بوجپوری", lang_bs: "بوسنیایی", lang_bg: "بلغاری", lang_ca: "کاتالان", lang_ceb: "سبوانو", lang_ny: "چیچوا", "lang_zh-CN": "چینی (ساده شده)", "lang_zh-TW": "چینی (سنتی)", lang_co: "کرسی", lang_hr: "کرواتی", lang_cs: "چکی", lang_da: "دانمارکی", lang_dv: "دیوهی", lang_doi: "دوگری", lang_nl: "هلندی", lang_en: "انگلیسی", lang_eo: "اسپرانتو", lang_et: "استونیایی", lang_ee: "اوه", lang_tl: "فیلیپینی (تاگالوگ)", lang_fi: "فنلاندی", lang_fr: "فرانسوی", lang_fy: "فریزی", lang_gl: "گالیسی", lang_ka: "گرجی", lang_de: "آلمانی", lang_el: "یونانی", lang_gn: "گوارانی", lang_gu: "گجراتی", lang_ht: "کریول هائیتی", lang_ha: "هوسا", lang_haw: "هاوایی", lang_iw: "عبری", lang_hi: "هندی", lang_hmn: "همونگ", lang_hu: "مجاری", lang_is: "ایسلندی", lang_ig: "ایگبو", lang_ilo: "ایلوکانو", lang_id: "اندونزیایی", lang_ga: "ایرلندی", lang_it: "ایتالیایی", lang_ja: "ژاپنی", lang_jw: "جاوه‌ای", lang_kn: "کانارا", lang_kk: "قزاقی", lang_km: "خمر", lang_rw: "کینیارواندا", lang_gom: "کونکانی", lang_ko: "کره‌ای", lang_kri: "کریو", lang_ku: "کردی (کرمانجی)", lang_ckb: "کردی (سورانی)", lang_ky: "قرقیزی", lang_lo: "لائوسی", lang_la: "لاتین", lang_lv: "لتونیایی", lang_ln: "لینگالا", lang_lt: "لیتوانیایی", lang_lg: "لوگاندا", lang_lb: "لوکزامبورگی", lang_mk: "مقدونی", lang_mai: "مایتهیلی", lang_mg: "مالاگاسی", lang_ms: "مالایی", lang_ml: "مالایالام", lang_mt: "مالتی", lang_mi: "مائوری", lang_mr: "مراتی", "lang_mni-Mtei": "می‌تیلون (مانیپوری)", lang_lus: "میزو", lang_mn: "مغولی", lang_my: "میانماری (برمه‌ای)", lang_ne: "نپالی", lang_no: "نروژی", lang_or: "اوریا", lang_om: "اورومو", lang_ps: "پشتو", lang_fa: "فارسی", lang_pl: "لهستانی", lang_pt: "پرتغالی", lang_pa: "پنجابی", lang_qu: "کچوآ", lang_ro: "رومانیایی", lang_ru: "روسی", lang_sm: "ساموآیی", lang_sa: "سانسکریت", lang_gd: "گیلی اسکاتلندی", lang_nso: "سپدی", lang_sr: "صربی", lang_st: "سسوتو", lang_sn: "شونا", lang_sd: "سندی", lang_si: "سینهالی", lang_sk: "اسلواکی", lang_sl: "اسلوونیایی", lang_so: "سومالیایی", lang_es: "اسپانیایی", lang_su: "سوندانی", lang_sw: "سواحیلی", lang_sv: "سوئدی", lang_tg: "تاجیکی", lang_ta: "تامیلی", lang_tt: "تاتاری", lang_te: "تلوگو", lang_th: "تایلندی", lang_ti: "تیگرینیا", lang_ts: "تسونگا", lang_tr: "ترکی", lang_tk: "ترکمنی", lang_ak: "توی (آکان)", lang_uk: "اوکراینی", lang_ur: "اردو", lang_ug: "اویغوری", lang_uz: "ازبکی", lang_vi: "ویتنامی", lang_cy: "ولزی", lang_xh: "خوسا", lang_yi: "ییدیش", lang_yo: "یوروبا", lang_zu: "زولو",
        job_None: "هیچکدام (عمومی)", job_Medical: "پزشکی / بهداشت", job_Legal: "حقوقی / قانون", job_Engineering: "مهندسی (عمومی)", job_IT: "فناوری اطلاعات / نرم‌افزار", job_Finance: "مالی / بانکداری", job_Academic: "دانشگاهی / تحقیقاتی", job_Marketing: "بازاریابی / کسب و کار", job_Cinema: "سینما / سریال تلویزیونی",
        tone_Default: "پیش‌فرض", tone_Formal: "رسمی", tone_Informal: "غیررسمی", tone_Poetic: "شاعرانه", tone_Technical: "فنی", tone_Simplify: "ساده / روان", tone_Custom: "سفارشی..." },
    ru: { appTitle: "Fluentify", tabText: "Текст", tabImage: "Изображение", tabPDF: "PDF", tabSubtitle: "Субтитры", tabVideo: "Видео", swapBtnLabel: "Поменять языки", textInputPlaceholder: "Введите текст для перевода...", youtubeSectionTitle: "Загрузить с YouTube URL", youtubeUrlPlaceholder: "Введите URL видео YouTube...", youtubeLangPlaceholder: "язык", youtubeFetchBtn: "Получить", youtubeNotice: ``, fileDragDrop: "Перетащите файл", fileOr: "или", fileChooseBtn: "Выберите файл", fileHintImage: "PNG, JPG, WEBP, GIF (МАКС. 20МБ)", fileHintPDF: "PDF (МАКС. 20МБ)", fileHintSubtitle: "SRT, VTT, SSA, ASS (МАКС. 20МБ)", removeFileBtnLabel: "Удалить файл", pdfSelectPagesTitle: "Выберите страницы для перевода", pdfSelectAll: "Выбрать все", pdfDeselectAll: "Снять выбор", pdfPageCounter: "Выбрано страниц: {count}", pdfCombinePages: "Объединить выбранные страницы перед переводом", pdfBatchWarning: "Перевод может занять до {seconds} секунд.", subtitleEditorTitle: "Редактор субтитров", subtitleLinesPerRequest: "Строк / запрос", subtitleBreakLinesBtnLabel: "Разбить длинные строки", subtitleFindReplaceBtnLabel: "Найти и заменить", subtitleExportBtnLabel: "Экспортировать как файл субтитров", subtitleSavedProgress: "Найден сохраненный прогресс для этого файла.", subtitleLoadProgress: "Загрузить прогресс", subtitleClearHistory: "Очистить историю", breakLinesPanelTitle: "Макс. символов / строка:", breakLinesApply: "Применить изменения", findInputPlaceholder: "Найти текст...", replaceInputPlaceholder: "Заменить на...", findCaseSensitive: "Учитывать регистр", replaceAllBtn: "Заменить все", subtitleTableHeaderNum: "#", subtitleTableHeaderTime: "Временная метка", subtitleTableHeaderOrig: "Оригинальный текст", subtitleTableHeaderTrans: "Переведенный текст", progressLabelTranslating: "Перевод...", progressCancel: "Отмена", advSettingsBtn: "Настройки", translateBtn: "Перевести", settingsModel: "Модель ИИ", settingsSpecialization: "Специализация перевода", settingsTone: "Тон перевода", settingsCustomToneLabel: "Инструкция для пользовательского тона", settingsCustomTonePlaceholder: "напр., 'Переведи это в стиле пирата.'", settingsCreativity: "Креативность (Temperature)", settingsRequestDelay: "Задержка запроса (секунды)", settingsApiKey: "Ключ(и) API Google AI", settingsApiKeyPlaceholder: "Введите ваши ключи API, по одному на строку.", settingsApiKeyHint: "Введите несколько ключей для распределения нагрузки или как резервные.", settingsUseProxy: "Использовать прокси", settingsCustomProxyLabel: "Пользовательский URL прокси (необязательно)", settingsCustomProxyHint: `Разверните свой собственный прокси с помощью <a href="https://github.com/yebekhe/middleman" target="_blank" rel="noopener noreferrer" class="underline hover:text-sky-500">Middleman</a>.`, settingsUseCustomPrompt: "Использовать свой промпт", settingsCustomPromptPlaceholder: "Введите свой промпт. Используйте {text}, {source_lang} и {target_lang} как переменные.", settingsOptimizePrompt: "Оптимизировать", settingsOcr: "Использовать OCR для сканированных PDF", settingsSave: "Сохранить все настройки в этом браузере", outputPlaceholder: "Перевод появится здесь...", copyBtnLabel: "Копировать результат", exportTextBtnLabel: "Экспортировать в TXT", refineToolbarTitle: "Улучшить:", refineShorten: "Сделать короче", refineExpand: "Расширить", refineSummarize: "Суммировать", styleToolbarTitle: "Изменить стиль:", styleFormal: "Формальный", styleInformal: "Неформальный", stylePoetic: "Поэтический", styleSimplify: "Упростить", logTitle: "Журнал активности", footerText: `Создано с <i class="fas fa-heart text-red-500 mx-1"></i> YEBEKHE`, pageTitle: "Fluentify - Современный ИИ-переводчик", howToUseBtnLabel: "Как использовать", howToUseModalTitle: "Как использовать Fluentify", searchLanguagesPlaceholder: "Поиск языков...",
        lang_auto: "Автоопределение языка", lang_af: "Африкаанс", lang_sq: "Албанский", lang_am: "Амхарский", lang_ar: "Арабский", lang_hy: "Армянский", lang_as: "Ассамский", lang_ay: "Аймара", lang_az: "Азербайджанский", lang_bm: "Бамбара", lang_eu: "Баскский", lang_be: "Белорусский", lang_bn: "Бенгальский", lang_bho: "Бходжпури", lang_bs: "Боснийский", lang_bg: "Болгарский", lang_ca: "Каталанский", lang_ceb: "Себуанский", lang_ny: "Чичева", "lang_zh-CN": "Китайский (упрощенный)", "lang_zh-TW": "Китайский (традиционный)", lang_co: "Корсиканский", lang_hr: "Хорватский", lang_cs: "Чешский", lang_da: "Датский", lang_dv: "Дивехи", lang_doi: "Догри", lang_nl: "Голландский", lang_en: "Английский", lang_eo: "Эсперанто", lang_et: "Эстонский", lang_ee: "Эве", lang_tl: "Филиппинский (тагальский)", lang_fi: "Финский", lang_fr: "Французский", lang_fy: "Фризский", lang_gl: "Галисийский", lang_ka: "Грузинский", lang_de: "Немецкий", lang_el: "Греческий", lang_gn: "Гуарани", lang_gu: "Гуджарати", lang_ht: "Гаитянский креольский", lang_ha: "Хауса", lang_haw: "Гавайский", lang_iw: "Иврит", lang_hi: "Хинди", lang_hmn: "Хмонг", lang_hu: "Венгерский", lang_is: "Исландский", lang_ig: "Игбо", lang_ilo: "Илоканский", lang_id: "Индонезийский", lang_ga: "Ирландский", lang_it: "Итальянский", lang_ja: "Японский", lang_jw: "Яванский", lang_kn: "Каннада", lang_kk: "Казахский", lang_km: "Кхмерский", lang_rw: "Киньяруанда", lang_gom: "Конкани", lang_ko: "Корейский", lang_kri: "Крио", lang_ku: "Курдский (курманджи)", lang_ckb: "Курдский (сорани)", lang_ky: "Киргизский", lang_lo: "Лаосский", lang_la: "Латинский", lang_lv: "Латышский", lang_ln: "Лингала", lang_lt: "Литовский", lang_lg: "Луганда", lang_lb: "Люксембургский", lang_mk: "Македонский", lang_mai: "Майтхили", lang_mg: "Малагасийский", lang_ms: "Малайский", lang_ml: "Малаялам", lang_mt: "Мальтийский", lang_mi: "Маори", lang_mr: "Маратхи", "lang_mni-Mtei": "Меитеилон (манипури)", lang_lus: "Мизо", lang_mn: "Монгольский", lang_my: "Бирманский", lang_ne: "Непальский", lang_no: "Норвежский", lang_or: "Ория", lang_om: "Оромо", lang_ps: "Пушту", lang_fa: "Персидский (фарси)", lang_pl: "Польский", lang_pt: "Португальский", lang_pa: "Панджаби", lang_qu: "Кечуа", lang_ro: "Румынский", lang_ru: "Русский", lang_sm: "Самоанский", lang_sa: "Санскрит", lang_gd: "Шотландский гэльский", lang_nso: "Сепеди", lang_sr: "Сербский", lang_st: "Сесото", lang_sn: "Шона", lang_sd: "Синдхи", lang_si: "Сингальский", lang_sk: "Словацкий", lang_sl: "Словенский", lang_so: "Сомалийский", lang_es: "Испанский", lang_su: "Сунданский", lang_sw: "Суахили", lang_sv: "Шведский", lang_tg: "Таджикский", lang_ta: "Тамильский", lang_tt: "Татарский", lang_te: "Телугу", lang_th: "Тайский", lang_ti: "Тигринья", lang_ts: "Тсонга", lang_tr: "Турецкий", lang_tk: "Туркменский", lang_ak: "Тви (акан)", lang_uk: "Украинский", lang_ur: "Урду", lang_ug: "Уйгурский", lang_uz: "Узбекский", lang_vi: "Вьетнамский", lang_cy: "Валлийский", lang_xh: "Коса", lang_yi: "Идиш", lang_yo: "Йоруба", lang_zu: "Зулу",
        job_None: "Нет (общий)", job_Medical: "Медицина / Здравоохранение", job_Legal: "Юриспруденция / Право", job_Engineering: "Инженерия (общая)", job_IT: "ИТ / Программное обеспечение", job_Finance: "Финансы / Банковское дело", job_Academic: "Наука / Исследования", job_Marketing: "Маркетинг / Бизнес", job_Cinema: "Кино / Сериалы",
        tone_Default: "По умолчанию", tone_Formal: "Формальный", tone_Informal: "Неформальный", tone_Poetic: "Поэтический", tone_Technical: "Технический", tone_Simplify: "Простой / Легко читаемый", tone_Custom: "Пользовательский..." }
};
const HOW_TO_USE_CONTENT = {
    en: `<div class="space-y-6 text-slate-700 dark:text-slate-300"><div><h3 class="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">1. Initial Setup (API Key)</h3><p class="mb-2">Before you can translate, you need a Google AI API Key.</p><ol class="list-decimal list-inside space-y-2 pl-4"><li>Go to <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" class="text-sky-500 underline">Google AI Studio</a> and sign in.</li><li>Click <strong>"Get API key"</strong>, then <strong>"Create API key in new project"</strong>.</li><li>Copy the generated key.</li><li>In Fluentify, navigate to the <strong>Settings</strong> page using the gear icon (<i class="fas fa-cog inline-block"></i>) in the top right (desktop) or bottom tab bar (mobile).</li><li>Paste your key into the <strong>"Google AI API Key(s)"</strong> field.</li><li>(Recommended) Check the <strong>"Save all settings in this browser"</strong> box to store your key securely for future use.</li></ol></div><div><h3 class="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">2. Translating Content</h3><p class="mb-3">Select your desired input type from the navigation tabs.</p><div class="space-y-4 pl-4 border-l-2 dark:border-slate-600"><div><h4 class="font-semibold">📝 Text Translation</h4><p>Select the <strong>Text</strong> tab, choose languages, enter your text, and click <strong>Translate</strong>. Use the <strong>Refine</strong> and <strong>Change Style</strong> buttons to enhance the output.</p></div><div><h4 class="font-semibold">🖼️ Image Translation</h4><p>Select the <strong>Image</strong> tab, choose your target language, and drop an image file. The app will perform OCR to extract the text and then translate it.</p></div><div><h4 class="font-semibold">📄 PDF Translation</h4><p>Upload a PDF. Click on the pages you want to translate. For scanned PDFs, enable <strong>"Use OCR for scanned PDF pages"</strong> in Settings. Click <strong>Translate</strong>.</p></div><div><h4 class="font-semibold">🎬 Subtitle Translation</h4><p class="mb-2">Either upload a subtitle file (SRT, VTT, etc.) or paste a YouTube URL and click <strong>Fetch</strong> to load subtitles into the editor.</p><ul class="list-disc list-inside space-y-1"><li><strong>Translate:</strong> Click the main "Translate" button to translate all untranslated lines in batches.</li><li><strong>Edit:</strong> Click directly on any translated text to edit it manually.</li><li><strong>Tools:</strong> Use the Find & Replace and Break Long Lines tools for advanced editing.</li><li><strong>Export:</strong> Click the export button in the editor's header to download your translated file.</li></ul></div></div></div></div>`,
    fa: `<div class="space-y-6 text-slate-700 dark:text-slate-300 text-right"><div><h3 class="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">۱. راه‌اندازی اولیه (کلید API)</h3><p class="mb-2">قبل از شروع ترجمه، به یک کلید API از Google AI نیاز دارید.</p><ol class="list-decimal list-inside space-y-2 pr-4"><li>به <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" class="text-sky-500 underline">Google AI Studio</a> بروید و وارد شوید.</li><li>روی <strong>"Get API key"</strong> و سپس <strong>"Create API key in new project"</strong> کلیک کنید.</li><li>کلید تولید شده را کپی کنید.</li><li>در Fluentify، با استفاده از آیکون چرخ‌دنده (<i class="fas fa-cog inline-block"></i>) در بالا سمت راست (دسکتاپ) یا نوار پایین (موبایل) به صفحه <strong>تنظیمات</strong> بروید.</li><li>کلید خود را در فیلد <strong>"کلید(های) API گوگل"</strong> الصاق کنید.</li><li>(توصیه‌شده) تیک گزینه <strong>"ذخیره تمام تنظیمات در این مرورگر"</strong> را بزنید تا کلید شما برای استفاده‌های بعدی ذخیره شود.</li></ol></div><div><h3 class="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">۲. ترجمه محتوا</h3><p class="mb-3">نوع ورودی مورد نظر خود را از تب‌های ناوبری انتخاب کنید.</p><div class="space-y-4 pr-4 border-r-2 dark:border-slate-600"><div><h4 class="font-semibold">📝 ترجمه متن</h4><p>تب <strong>متن</strong> را انتخاب کنید، زبان مبدأ و مقصد را انتخاب کنید، متن خود را وارد کرده و روی <strong>ترجمه</strong> کلیک کنید. از دکمه‌های <strong>اصلاح</strong> و <strong>تغییر سبک</strong> برای بهبود خروجی استفاده کنید.</p></div><div><h4 class="font-semibold">🖼️ ترجمه تصویر</h4><p>تب <strong>تصویر</strong> را انتخاب کنید، زبان مقصد خود را برگزینید و یک فایل تصویر را رها کنید. برنامه متن را با OCR استخراج کرده و سپس آن را ترجمه می‌کند.</p></div><div><h4 class="font-semibold">📄 ترجمه PDF</h4><p>یک فایل PDF آپلود کنید. روی صفحاتی که می‌خواهید ترجمه شوند کلیک کنید. برای PDFهای اسکن شده، گزینه <strong>"استفاده از OCR"</strong> را در تنظیمات فعال کنید. روی <strong>ترجمه</strong> کلیک کنید.</p></div><div><h4 class="font-semibold">🎬 ترجمه زیرنویس</h4><p class="mb-2">می‌توانید یک فایل زیرنویس (SRT, VTT, و غیره) آپلود کنید یا یک آدرس یوتیوب را وارد کرده و روی <strong>دریافت</strong> کلیک کنید تا زیرنویس‌ها در ویرایشگر بارگذاری شوند.</p><ul class="list-disc list-inside space-y-1"><li><strong>ترجمه:</strong> روی دکمه اصلی «ترجمه» کلیک کنید تا تمام خطوط ترجمه نشده به صورت دسته‌ای ترجمه شوند.</li><li><strong>ویرایش:</strong> برای ویرایش دستی، مستقیماً روی متن ترجمه شده کلیک کنید.</li><li><strong>ابزارها:</strong> از ابزارهای جستجو و جایگزینی و شکستن خطوط طولانی برای ویرایش پیشرفته استفاده کنید.</li><li><strong>خروجی:</strong> برای دانلود فایل ترجمه شده، روی دکمه خروجی در هدر ویرایشگر کلیک کنید.</li></ul></div></div></div></div>`,
    ru: `<div class="space-y-6 text-slate-700 dark:text-slate-300"><div><h3 class="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">1. Начальная настройка (API-ключ)</h3><p class="mb-2">Перед началом работы вам понадобится API-ключ от Google AI.</p><ol class="list-decimal list-inside space-y-2 pl-4"><li>Перейдите в <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" class="text-sky-500 underline">Google AI Studio</a> и войдите в систему.</li><li>Нажмите <strong>"Get API key"</strong>, затем <strong>"Create API key in new project"</strong>.</li><li>Скопируйте сгенерированный ключ.</li><li>В Fluentify перейдите на страницу <strong>Настройки</strong>, используя иконку шестеренки (<i class="fas fa-cog inline-block"></i>) в правом верхнем углу (настольная версия) или на нижней панели (мобильная версия).</li><li>Вставьте ваш ключ в поле <strong>"Ключ(и) API Google AI"</strong>.</li><li>(Рекомендуется) Установите флажок <strong>"Сохранить все настройки в этом браузере"</strong>, чтобы безопасно сохранить ваш ключ для будущего использования.</li></ol></div><div><h3 class="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">2. Перевод контента</h3><p class="mb-3">Выберите желаемый тип ввода на вкладках навигации.</p><div class="space-y-4 pl-4 border-l-2 dark:border-slate-600"><div><h4 class="font-semibold">📝 Перевод текста</h4><p>Выберите вкладку <strong>Текст</strong>, выберите языки, введите текст и нажмите <strong>Перевести</strong>. Используйте кнопки <strong>Улучшить</strong> и <strong>Изменить стиль</strong> для доработки результата.</p></div><div><h4 class="font-semibold">🖼️ Перевод изображений</h4><p>Выберите вкладку <strong>Изображение</strong>, укажите целевой язык и перетащите файл изображения. Приложение выполнит OCR для извлечения текста, а затем переведет его.</p></div><div><h4 class="font-semibold">📄 Перевод PDF</h4><p>Загрузите PDF. Нажмите на страницы, которые вы хотите перевести. Для сканированных PDF включите опцию <strong>"Использовать OCR"</strong> в Настройках. Нажмите <strong>Перевести</strong>.</p></div><div><h4 class="font-semibold">🎬 Перевод субтитров</h4><p class="mb-2">Вы можете загрузить файл субтитров (SRT, VTT и т.д.) или вставить URL-адрес YouTube и нажать <strong>Получить</strong>, чтобы загрузить субтитры в редактор.</p><ul class="list-disc list-inside space-y-1"><li><strong>Перевести:</strong> Нажмите главную кнопку «Перевести», чтобы перевести все непереведенные строки пакетами.</li><li><strong>Редактировать:</strong> Нажмите прямо на переведенный текст, чтобы отредактировать его вручную.</li><li><strong>Инструменты:</strong> Используйте инструменты "Найти и заменить" и "Разбить длинные строки" для расширенного редактирования.</li><li><strong>Экспорт:</strong> Нажмите кнопку экспорта в заголовке редактора, чтобы скачать переведенный файл.</li></ul></div></div></div></div>`
};
// --- START: DOM Element Selection ---
const dom = {
    html: document.documentElement,
    form: document.getElementById('translate-form'),
    desktopTabs: document.getElementById('desktop-tabs'),
    mobileNav: document.getElementById('mobile-nav'),
    translationView: document.getElementById('translation-view'),
    settingsView: document.getElementById('settings-view'),
    textInputSection: document.getElementById('text-input-section'),
    youtubeInputSection: document.getElementById('youtube-input-section'),
    youtubeUrlInput: document.getElementById('youtube-url-input'),
    youtubeLangInput: document.getElementById('youtube-lang-input'),
    fetchYoutubeSubsBtn: document.getElementById('fetch-youtube-subs-btn'),
    fetchYoutubeBtnText: document.getElementById('fetch-youtube-btn-text'),
    fetchYoutubeBtnSpinner: document.getElementById('fetch-youtube-btn-spinner'),
    fileInputSection: document.getElementById('file-input-section'),
    dropzoneContainer: document.getElementById('dropzone-container'),
    dropzonePrompt: document.getElementById('dropzone-prompt'),
    filePreviewContainer: document.getElementById('file-preview-container'),
    imagePreview: document.getElementById('image-preview'),
    subtitlePreview: document.getElementById('subtitle-preview'),
    subtitleFilename: document.getElementById('subtitle-filename'),
    removeFileBtn: document.getElementById('remove-file-btn'),
    chooseFileBtn: document.getElementById('choose-file-btn'),
    fileUpload: document.getElementById('file-upload'),
    fileUploadHint: document.getElementById('file-upload-hint'),
    pdfViewerSection: document.getElementById('pdf-viewer-section'),
    pdfPageViewer: document.getElementById('pdf-page-viewer'),
    pageSelectionCounter: document.getElementById('page-selection-counter'),
    batchWarning: document.getElementById('batch-warning'),
    combinePagesCheckbox: document.getElementById('combine-pages-checkbox'),
    selectAllPagesBtn: document.getElementById('select-all-pages-btn'),
    deselectAllPagesBtn: document.getElementById('deselect-all-pages-btn'),
    subtitleEditorSection: document.getElementById('subtitle-editor-section'),
    subtitleTableBody: document.getElementById('subtitle-table-body'),
    retryFailedSubsBtn: document.getElementById('retry-failed-subs-btn'),
    subtitleBatchSizeInput: document.getElementById('subtitle-batch-size'),
    videoGeneratorSection: document.getElementById('video-generator-section'),
    textInput: document.getElementById('text-input'),
    sourceLangSelect: document.getElementById('source_lang'),
    targetLangSelect: document.getElementById('target_lang'),
    swapBtn: document.getElementById('swap-btn'),
    charCounter: document.getElementById('char-counter'),
    mainOutputSection: document.getElementById('main-output-section'),
    output: document.getElementById('output'),
    copyBtn: document.getElementById('copy-btn'),
    exportBtn: document.getElementById('export-btn'),
    exportTextBtn: document.getElementById('export-text-btn'),
    copyIconDefault: document.getElementById('copy-icon-default'),
    copyIconSuccess: document.getElementById('copy-icon-success'),
    enhancementsToolbar: document.getElementById('enhancements-toolbar'),
    translateBtn: document.getElementById('translate-btn'),
    translateBtnText: document.getElementById('translate-btn-text'),
    translateBtnSpinner: document.getElementById('translate-btn-spinner'),
    errorDisplay: document.getElementById('error-display'),
    settingsBtn: document.getElementById('settings-btn'),
    modelSelect: document.getElementById('model'),
    jobFieldSelect: document.getElementById('job_field'),
    translationToneSelect: document.getElementById('translation_tone'),
    customToneContainer: document.getElementById('custom-tone-container'),
    customToneInput: document.getElementById('custom-tone-input'),
    temperatureSlider: document.getElementById('temperature'),
    temperatureValue: document.getElementById('temperature-value'),
    requestDelayInput: document.getElementById('request_delay'),
    apiKeyInput: document.getElementById('api_key'),
    saveSettingsCheckbox: document.getElementById('save-settings-checkbox'),
    themeToggleBtn: document.getElementById('theme-toggle'),
    themeIconLight: document.getElementById('theme-icon-light'),
    themeIconDark: document.getElementById('theme-icon-dark'),
    useProxyCheckbox: document.getElementById('use-proxy-checkbox'),
    customProxyContainer: document.getElementById('custom-proxy-container'),
    customProxyInput: document.getElementById('custom-proxy-input'),
    useCustomPromptCheckbox: document.getElementById('use-custom-prompt-checkbox'),
    customPromptContainer: document.getElementById('custom-prompt-container'),
    customPromptInput: document.getElementById('custom-prompt-input'),
    pdfOcrCheckbox: document.getElementById('pdf-ocr-checkbox'),
    optimizePromptBtn: document.getElementById('optimize-prompt-btn'),
    optimizePromptBtnText: document.getElementById('optimize-prompt-btn-text'),
    optimizePromptSpinner: document.getElementById('optimize-prompt-spinner'),
    progressContainer: document.getElementById('progress-container'),
    progressLabel: document.getElementById('progress-label'),
    progressPercentage: document.getElementById('progress-percentage'),
    progressBarInner: document.getElementById('progress-bar-inner'),
    cancelTranslationBtn: document.getElementById('cancel-translation-btn'),
    logViewer: document.getElementById('log-viewer'),
    logToggleBtn: document.getElementById('log-toggle-btn'),
    logContent: document.getElementById('log-content'),
    logOutput: document.getElementById('log-output'),
    findReplaceToggleBtn: document.getElementById('find-replace-toggle-btn'),
    breakLinesToggleBtn: document.getElementById('break-lines-toggle-btn'),
    findReplacePanel: document.getElementById('find-replace-panel'),
    breakLinesPanel: document.getElementById('break-lines-panel'),
    findInput: document.getElementById('find-input'),
    replaceInput: document.getElementById('replace-input'),
    findCaseSensitive: document.getElementById('find-case-sensitive'),
    replaceAllBtn: document.getElementById('replace-all-btn'),
    breakLinesMaxChars: document.getElementById('break-lines-max-chars'),
    breakLinesApplyBtn: document.getElementById('break-lines-apply-btn'),
    savedProgressNotification: document.getElementById('saved-progress-notification'),
    loadProgressBtn: document.getElementById('load-progress-btn'),
    clearProgressBtn: document.getElementById('clear-progress-btn'),
    languageSwitcher: document.getElementById('language-switcher'),
    howToUseBtn: document.getElementById('how-to-use-btn'),
    howToUseModal: document.getElementById('how-to-use-modal'),
    howToUseContent: document.getElementById('how-to-use-content'),
    howToUseTitle: document.getElementById('how-to-use-title'),
    howToUseCloseBtn: document.getElementById('how-to-use-close-btn'),
    languageSearch: document.getElementById('language-search'),
};
// --- START: State Management ---
let pdfDoc = null;
let selectedPages = new Set();
let currentFile = null;
let currentFileHash = null;
let subtitleData = null;
let translationAbortController = null;
let currentLanguage = 'en';
let currentMode = 'text';
let currentView = 'translation';
// --- START: State Management ---
// ... (متغیرهای دیگر مثل pdfDoc سر جای خود بمانند)

const apiKeyManager = {
    keys: [],
    
    // بارگذاری اولیه کلیدها از ورودی
    refreshKeys() {
        const rawKeys = dom.apiKeyInput.value.split('\n').map(k => k.trim()).filter(Boolean);
        // اگر کلیدهای فعلی خالی هستند یا تعداد تغییر کرده، لیست را آپدیت کن
        // اما اگر کلید داریم، سعی میکنیم ترتیب فعلی (چرخش شده) را حفظ کنیم مگر اینکه کاربر کلیدها را عوض کرده باشد
        if (this.keys.length === 0 || rawKeys.length !== this.keys.length) {
            this.keys = rawKeys;
        }
    },

    // گرفتن کلید اول صف (بدون چرخش)
    getCurrentKey() {
        if (this.keys.length === 0) this.refreshKeys();
        if (this.keys.length === 0) return null;
        return this.keys[0];
    },

    // چرخش کلید: اولی را برمی‌دارد و می‌گذارد آخر صف
    rotateKey() {
        if (this.keys.length > 1) {
            const usedKey = this.keys.shift();
            this.keys.push(usedKey);
        }
    },

    // حذف کلید نامعتبر
    invalidateKey(key) {
        const index = this.keys.indexOf(key);
        if (index > -1) {
            this.keys.splice(index, 1);
            log(`Removed invalid API Key ending in ...${key.slice(-4)}. ${this.keys.length} key(s) remaining.`, 'warn');
        }
    }
};
// --- END: State Management ---
// --- START: UI Mode Management ---
function updateUI() {
    // 1. Handle main view visibility
    dom.translationView.classList.toggle('hidden', currentView !== 'translation');
    dom.settingsView.classList.toggle('hidden', currentView !== 'settings');
    // 2. Handle input visibility within translation view
    const isTextMode = currentMode === 'text';
    const isImageMode = currentMode === 'image';
    const isPdfMode = currentMode === 'pdf';
    const isSubtitleMode = currentMode === 'subtitle';
    const isVideoMode = currentMode === 'video';
    const isFileMode = isImageMode || isPdfMode || isSubtitleMode;
    // Check for file compatibility and reset if necessary
    if (currentFile) {
        const fileType = currentFile.type;
        const fileName = currentFile.name.toLowerCase();
        const isCompatible = (isImageMode && fileType.startsWith('image/')) ||
            (isPdfMode && fileType === 'application/pdf') ||
            (isSubtitleMode && (fileName.endsWith('.srt') || fileName.endsWith('.vtt') || fileName.endsWith('.ssa') || fileName.endsWith('.ass')));
        if (isFileMode && !isCompatible) {
            // File is loaded, but we switched to an incompatible file-based mode. Reset.
            resetFileInput(false); // Pass false to prevent recursive updateUI call
        }
    }
    // Show/hide main sections based on mode
    dom.textInputSection.classList.toggle('hidden', !isTextMode);
    dom.fileInputSection.classList.toggle('hidden', !isFileMode);
    dom.videoGeneratorSection.classList.toggle('hidden', !isVideoMode);
    // Manage file input UI state
    if (isFileMode) {
        if (currentFile) {
            dom.dropzonePrompt.classList.add('hidden');
            dom.filePreviewContainer.classList.remove('hidden');
            // Toggle visibility of specific previews based on mode
            dom.imagePreview.classList.toggle('hidden', !isImageMode);
            dom.subtitlePreview.classList.toggle('hidden', !isSubtitleMode);
        }
        else {
            dom.dropzonePrompt.classList.remove('hidden');
            dom.filePreviewContainer.classList.add('hidden');
        }
    }
    // Show/hide sub-sections
    dom.youtubeInputSection.classList.toggle('hidden', !isSubtitleMode);
    dom.pdfViewerSection.classList.toggle('hidden', !isPdfMode || !pdfDoc);
    dom.subtitleEditorSection.classList.toggle('hidden', !isSubtitleMode || !subtitleData);
    // Show/hide shared elements
    dom.mainOutputSection.classList.toggle('hidden', isSubtitleMode || isVideoMode);
    dom.translateBtn.parentElement.classList.toggle('hidden', isVideoMode); // Hides the main translate button and error display row
    dom.form.querySelector('.grid').classList.toggle('hidden', isVideoMode); // Hides language selectors and swap button
    // Configure UI elements based on mode
    dom.sourceLangSelect.disabled = !isTextMode;
    if (!isTextMode)
        dom.sourceLangSelect.value = 'auto';
    if (isImageMode) {
        dom.fileUpload.accept = "image/png, image/jpeg, image/webp, image/gif";
        dom.fileUploadHint.textContent = TRANSLATIONS[currentLanguage].fileHintImage;
    }
    else if (isPdfMode) {
        dom.fileUpload.accept = "application/pdf";
        dom.fileUploadHint.textContent = TRANSLATIONS[currentLanguage].fileHintPDF;
    }
    else if (isSubtitleMode) {
        dom.fileUpload.accept = ".srt,.vtt,.ssa,.ass";
        dom.fileUploadHint.textContent = TRANSLATIONS[currentLanguage].fileHintSubtitle;
    }
    // 3. Update active state of nav buttons
    document.querySelectorAll('.mobile-nav-btn, .desktop-tab-btn, #settings-btn').forEach(btn => {
        const htmlBtn = btn;
        const isActive = (htmlBtn.dataset.mode === currentMode && currentView === 'translation') || (htmlBtn.dataset.view === currentView);
        btn.classList.toggle('active', isActive);
    });
    validateForm();
}
// --- START: I1N & Language Switching ---
function filterAndRepopulateLanguages() {
    const searchTerm = dom.languageSearch.value.toLowerCase();
    const translations = TRANSLATIONS[currentLanguage];
    const languageFilter = (opt) => {
        const translatedText = translations[opt.i18nKey] || opt.text;
        return translatedText.toLowerCase().includes(searchTerm);
    };
    const sourceFilter = (opt) => opt.value === 'auto' || languageFilter(opt);
    const targetFilter = (opt) => opt.value !== 'auto' && languageFilter(opt);
    populateSelect(dom.sourceLangSelect, LANGUAGES, dom.sourceLangSelect.value, sourceFilter);
    populateSelect(dom.targetLangSelect, LANGUAGES, dom.targetLangSelect.value, targetFilter);
}
function setLanguage(lang) {
    currentLanguage = lang;
    const translations = TRANSLATIONS[lang];
    if (!translations) {
        console.error(`No translations found for language: ${lang}`);
        return;
    }
    dom.html.lang = lang;
    dom.html.dir = lang === 'fa' || lang === 'ar' ? 'rtl' : 'ltr'; // Basic RTL for Persian/Arabic
    document.title = translations.pageTitle;
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const htmlEl = el;
        const key = htmlEl.dataset.i18nKey;
        const translation = translations[key];
        if (translation) {
            if ('i18nHtml' in htmlEl.dataset) {
                el.innerHTML = translation;
            }
            else {
                el.textContent = translation;
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder-key]').forEach(el => {
        const htmlEl = el;
        const key = htmlEl.dataset.i18nPlaceholderKey;
        if (translations[key])
            el.placeholder = translations[key];
    });
    document.querySelectorAll('[data-i18n-title-key]').forEach(el => {
        const htmlEl = el;
        const key = htmlEl.dataset.i18nTitleKey;
        if (translations[key]) {
            htmlEl.title = translations[key];
            el.setAttribute('aria-label', translations[key]);
        }
    });
    filterAndRepopulateLanguages();
    populateSelect(dom.jobFieldSelect, JOB_FIELDS, dom.jobFieldSelect.value);
    populateSelect(dom.translationToneSelect, TONES, dom.translationToneSelect.value);
    videoGen_populateLanguages();
    dom.howToUseContent.innerHTML = HOW_TO_USE_CONTENT[lang] || '';
    localStorage.setItem('fluentify_language_v1', lang);
    updatePageSelectionCounter();
    updateCharCounter();
    validateForm();
}
// --- START: Logging ---
function log(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    const timeEl = document.createElement('span');
    timeEl.className = 'log-timestamp';
    timeEl.textContent = `[${timestamp}]`;
    const msgEl = document.createElement('span');
    msgEl.className = `log-message ${type}`;
    msgEl.textContent = message;
    entry.appendChild(timeEl);
    entry.appendChild(msgEl);
    dom.logOutput.appendChild(entry);
    dom.logContent.scrollTop = dom.logContent.scrollHeight;
}
async function apiCallWithRetry(buildRequest, signal) {
    apiKeyManager.refreshKeys();
    
    // تعداد تلاش‌ها: مثلا اگر ۱۰ تا کلید داریم، تا ۲۰ بار تلاش میکنیم که اگر چندتا پشت هم لیمیت بودن رد بشه
    let maxAttempts = Math.max(apiKeyManager.keys.length * 2, 5); 
    let attempts = 0;
    let lastError = null;

    while (attempts < maxAttempts) {
        // همیشه کلید اول صف را برمی‌داریم
        const key = apiKeyManager.getCurrentKey();
        
        if (!key) throw new Error("An API Key is required.");

        try {
            const { url, payload } = buildRequest(key);
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal
            });

            // مدیریت خطای 429 (Quota Limit)
            if (response.status === 429) {
                log(`Key ending in ...${key.slice(-4)} hit Rate Limit (429). Rotating to end of queue...`, 'warn');
                // کلید را می‌فرستیم ته صف
                apiKeyManager.rotateKey();
                attempts++;
                // «continue» باعث میشه بلافاصله بره اول حلقه و با کلید جدید (که الان اومده اول صف) ریکوئست بزنه
                continue; 
            }

            const responseBody = await response.json();

            if (!response.ok) {
                const errorDetails = responseBody?.error || { message: 'Unknown API error' };
                
                // اگر کلید کلاً نامعتبر بود (نه لیمیت)، حذفش میکنیم
                if (errorDetails.message.includes("API key not valid") || errorDetails.message.includes("key expired")) {
                    apiKeyManager.invalidateKey(key);
                    attempts++;
                    continue; // تلاش مجدد با کلید بعدی
                }

                throw new Error(`API Error: ${errorDetails.message}`);
            }

            // *** موفقیت آمیز بود ***
            // کلید را می‌چرخانیم تا برای چانک بعدی (در فراخوانی بعدی تابع) از کلید بعدی استفاده شود
            // این باعث توزیع بار (Round Robin) در حالت عادی می‌شود
            apiKeyManager.rotateKey();
            
            return responseBody;

        } catch (error) {
            lastError = error;
            
            if (error.name === 'AbortError') {
                throw new Error('Translation was cancelled by the user.');
            }

            // اگر خطای شبکه بود (نه خطای API)، شاید بخواهید باز هم تلاش کنید یا ارور دهید
            // در اینجا فرض بر این است که اگر fetch فیل شد (مثلا اینترنت قطع شد) ارور بدهیم
            if (!error.message.includes("API key")) { 
                 throw error;
            }
        }
    }

    throw new Error(`Failed to complete request after multiple attempts. Last error: ${lastError?.message || 'Unknown'}`);
}
async function callGoogleAI(prompt, model, useProxy, customProxyUrl, signal, temperature = 0.7) {
    log(`Calling Google AI model: ${model}...`);
    const buildRequest = (apiKey) => {
        const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const targetUrl = useProxy ? (customProxyUrl.trim() || DEFAULT_PROXY_URL) : directUrl;
        let payload = {
            contents: [{ parts: [{ text: prompt }] }],
            safetySettings: [{ category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }],
            generationConfig: {
                responseMimeType: "text/plain",
                temperature: parseFloat(temperature)
            }
        };
        if (useProxy) {
            payload = { endpoint: directUrl, ...payload };
        }
        return { url: targetUrl, payload };
    };
    const responseBody = await apiCallWithRetry(buildRequest, signal);
    const candidate = responseBody.candidates?.[0];
    if (!candidate) {
        const blockReason = responseBody.promptFeedback?.blockReason;
        if (blockReason)
            throw new Error(`Request blocked due to safety settings: ${blockReason}`);
        throw new Error("Invalid response structure from AI.");
    }
    if (candidate.finishReason && !["STOP", "MAX_TOKENS"].includes(candidate.finishReason)) {
        if (candidate.finishReason === "SAFETY")
            throw new Error(`Translation blocked for safety reasons.`);
        log(`AI processing stopped unexpectedly: ${candidate.finishReason}`, 'warn');
    }
    const resultText = candidate.content?.parts?.[0]?.text?.trim() ?? "";
    log('Successfully received response from AI.', 'success');
    return resultText;
}
async function callGoogleAIBatch(itemsToTranslate, sourceLang, targetLang, jobField, model, useProxy, customProxyUrl, signal, temperature = 0.7) {
    log(`Starting batch translation for ${itemsToTranslate.length} lines...`);
    const useCustomPrompt = dom.useCustomPromptCheckbox.checked;
    const customPromptText = dom.customPromptInput.value.trim();
    let prompt;
    if (useCustomPrompt && customPromptText) {
        let finalCustomPrompt = customPromptText
            .replace(/\{source_lang\}/g, sourceLang === 'auto' ? 'the auto-detected language' : sourceLang)
            .replace(/\{target_lang\}/g, targetLang);
        let translationInstruction = finalCustomPrompt.includes('{text}')
            ? `The core instruction is: "${finalCustomPrompt.replace('{text}', 'the text to translate')}". You must apply this instruction to the "original" field of each JSON object.`
            : `${finalCustomPrompt}\nYour task is to translate the "original" field of each JSON object according to these instructions.`;
        prompt = `You are an expert translation model... \nInput JSON:\n${JSON.stringify(itemsToTranslate)}`.trim();
    }
    else {
        const jobFieldText = JOB_FIELDS.find(f => f.value === jobField)?.text || 'General';
        const specializationContext = (jobField && jobField !== "None") ? `Pay close attention to specialized terms in the field of **${jobFieldText}**.` : "";
        let toneContext = '';
        const selectedTone = dom.translationToneSelect.value;
        const customToneText = dom.customToneInput.value.trim();
        if (selectedTone === 'Custom' && customToneText) {
            toneContext = `Adopt the following tone and style: "${customToneText}".`;
        }
        else if (selectedTone !== 'Default' && selectedTone !== 'Custom') {
            const toneInstructions = { 'Formal': 'Translate with a formal tone.', 'Informal': 'Translate with a casual tone.', 'Poetic': 'Translate in a poetic style.', 'Technical': 'Translate with technical precision.', 'Simplify': 'Translate to be simple and easy to understand.' };
            toneContext = toneInstructions[selectedTone] || '';
        }
        prompt = `You are an expert subtitle translator... Translate from ${sourceLang === 'auto' ? 'the auto-detected language' : sourceLang} to **${targetLang}**.\n${specializationContext}\n${toneContext}\n...Input JSON:\n${JSON.stringify(itemsToTranslate)}`.trim();
    }
    const responseSchema = { type: 'ARRAY', items: { type: 'OBJECT', properties: { id: { type: 'INTEGER' }, translation: { type: 'STRING' } }, required: ['id', 'translation'] } };
    const buildRequest = (apiKey) => {
        const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const targetUrl = useProxy ? (customProxyUrl.trim() || DEFAULT_PROXY_URL) : directUrl;
        let payload = { contents: [{ parts: [{ text: prompt }] }], safetySettings: [{ category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }], generationConfig: { responseMimeType: "application/json", responseSchema: responseSchema, temperature: parseFloat(temperature) } };
        if (useProxy) {
            payload = { endpoint: directUrl, ...payload };
        }
        return { url: targetUrl, payload };
    };
    try {
        const responseBody = await apiCallWithRetry(buildRequest, signal);
        const candidate = responseBody.candidates?.[0];
        if (!candidate) {
            const blockReason = responseBody.promptFeedback?.blockReason;
            if (blockReason)
                throw new Error(`Request blocked due to safety settings: ${blockReason}`);
            throw new Error("Invalid response structure from AI.");
        }
        if (candidate.finishReason === "MAX_TOKENS") {
            throw new Error("The request was too large and the AI's response was cut short. Please reduce the 'Lines / Request' value and try again.");
        }
        const responseText = candidate.content?.parts?.[0]?.text?.trim() ?? "";
        const cleanedResponse = responseText.replace(/^```json\s*|```\s*$/g, '');
        const translatedObjects = JSON.parse(cleanedResponse);
        if (!Array.isArray(translatedObjects))
            throw new Error("AI response was not a valid JSON array.");
        log('Successfully received and processed batch translation.', 'success');
        return translatedObjects;
    }
    catch (error) {
        log(`Batch API call failed: ${error.message}`, 'error');
        if (error instanceof SyntaxError)
            throw new Error("The AI returned an invalid response format for batch translation.");
        throw error;
    }
}
async function performOcr(base64Image, mimeType, model, useProxy, customProxyUrl, signal) {
    log('Performing OCR on image...');
    const prompt = "Extract all text content from this image. Output ONLY the text found, preserving line breaks as accurately as possible. If no text is found, output nothing.";
    const buildRequest = (apiKey) => {
        const promptParts = [{ text: prompt }, { inline_data: { mime_type: mimeType, data: base64Image } }];
        const directUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const targetUrl = useProxy ? (customProxyUrl.trim() || DEFAULT_PROXY_URL) : directUrl;
        let payload = {
            contents: [{ parts: promptParts }],
            safetySettings: [{ category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }],
            generationConfig: { responseMimeType: "text/plain" }
        };
        if (useProxy) {
            payload = { endpoint: directUrl, ...payload };
        }
        return { url: targetUrl, payload };
    };
    const responseBody = await apiCallWithRetry(buildRequest, signal);
    const text = responseBody.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
    log(text ? 'OCR completed successfully.' : 'OCR completed, but no text was found.', text ? 'success' : 'warn');
    return text;
}
async function extractTextFromPdfPage(pageNumber, ocrOptions) {
    if (!pdfDoc)
        return null;
    const page = await pdfDoc.getPage(pageNumber);
    const textContent = await page.getTextContent();
    let extractedText = textContent.items.map(item => item.str).join(' ').trim();
    if (ocrOptions.useOcr && extractedText.length < 20) {
        log(`Page ${pageNumber} has little text. Attempting OCR...`, 'info');
        try {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement('canvas');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
            const base64Image = canvas.toDataURL('image/jpeg').split(',')[1];
            return await performOcr(base64Image, 'image/jpeg', ocrOptions.model, ocrOptions.useProxy, ocrOptions.customProxyUrl, ocrOptions.signal);
        }
        catch (error) {
            log(`OCR failed for page ${pageNumber}: ${error.message}`, 'error');
            return extractedText || `(OCR failed for page ${pageNumber})`;
        }
    }
    return extractedText;
}
function getPrompt(text, sourceLang, targetLang, jobField, customPrompt) {
    if (dom.useCustomPromptCheckbox.checked && customPrompt && customPrompt.trim()) {
        log('Using custom prompt.');
        return customPrompt
            .replace(/\{text\}/g, text)
            .replace(/\{source_lang\}/g, sourceLang === 'auto' ? 'the auto-detected language' : sourceLang)
            .replace(/\{target_lang\}/g, targetLang);
    }
    const jobFieldText = JOB_FIELDS.find(f => f.value === jobField)?.text || 'General';
    const specializationContext = (jobField && jobField !== "None") ? `Pay close attention to specialized terms in the field of **${jobFieldText}**.` : "";
    let toneContext = '';
    const selectedTone = dom.translationToneSelect.value;
    const customToneText = dom.customToneInput.value.trim();
    if (selectedTone === 'Custom' && customToneText) {
        toneContext = `Adopt the following tone and style: "${customToneText}".`;
    }
    else if (selectedTone !== 'Default' && selectedTone !== 'Custom') {
        const toneInstructions = { 'Formal': 'Translate the text using a formal, professional tone.', 'Informal': 'Translate the text using a casual, informal, and friendly tone.', 'Poetic': 'Translate the text in a more poetic and artistic style. Use metaphors and evocative language where appropriate.', 'Technical': 'Translate the text with a technical and precise tone, ensuring accuracy for domain-specific terminology.', 'Simplify': 'Translate the text to be very simple and easy to understand, as if explaining it to a child.' };
        toneContext = toneInstructions[selectedTone] || '';
    }
    return `You are an expert translator... Translate the following text from ${sourceLang === 'auto' ? 'the auto-detected language' : sourceLang} into **${targetLang}**:\n---\n${text}\n---`.trim();
}
async function translateText(text, sourceLang, targetLang, jobField, model, useProxy, customProxyUrl, signal, customPrompt = '', temperature = 0.7) {
    const prompt = getPrompt(text, sourceLang, targetLang, jobField, customPrompt);
    return callGoogleAI(prompt, model, useProxy, customProxyUrl, signal, temperature);
}
async function enhanceText(text, action, targetLang, model, useProxy, customProxyUrl, signal, temperature = 0.7) {
    let actionInstruction = '';
    switch (action) {
        case 'shorten':
            actionInstruction = `Rewrite to be more concise in ${targetLang}.`;
            break;
        case 'expand':
            actionInstruction = `Expand on this text in ${targetLang}.`;
            break;
        // ... (other cases)
        default: return text;
    }
    const prompt = `${actionInstruction}\n\n---\n${text}\n---`;
    return callGoogleAI(prompt, model, useProxy, customProxyUrl, signal, temperature);
}
// --- START: Progress & Cancellation ---
function showProgress(label) { dom.progressContainer.classList.remove('hidden'); dom.progressLabel.textContent = label; updateProgress(0, 1); }
function updateProgress(current, total) { const percentage = total > 0 ? Math.round((current / total) * 100) : 0; dom.progressBarInner.style.width = `${percentage}%`; dom.progressPercentage.textContent = `${percentage}%`; }
function hideProgress() { dom.progressContainer.classList.add('hidden'); }
function cancelTranslation() { if (translationAbortController) {
    translationAbortController.abort();
    log('Cancellation request sent.', 'warn');
} }
// --- START: PDF Smart Translation ---
async function translatePdfPagesRecursively(pagesToTranslate, translationOptions) {
    const { signal } = translationOptions;
    if (signal.aborted)
        throw new Error("Translation was cancelled.");
    const combinedText = pagesToTranslate.map(p => p.text).join('\n\n');
    if (!combinedText.trim()) {
        return pagesToTranslate.map(p => ({ pageNum: p.pageNum, translatedText: "(No text found or page is empty)" }));
    }
    try {
        const translatedText = await translateText(combinedText, 'auto', translationOptions.targetLang, translationOptions.jobField, translationOptions.model, translationOptions.useProxy, translationOptions.customProxyUrl, signal, dom.customPromptInput.value, translationOptions.temperature);
        const pageNumbers = pagesToTranslate.map(p => p.pageNum).join('-');
        return [{ pageNum: pageNumbers, translatedText: translatedText }];
    }
    catch (error) {
        if (signal.aborted)
            throw error;
        if (pagesToTranslate.length <= 1) {
            return [{ pageNum: pagesToTranslate[0]?.pageNum, translatedText: `(Error: Translation failed for this page)` }];
        }
        const midPoint = Math.ceil(pagesToTranslate.length / 2);
        const firstHalf = await translatePdfPagesRecursively(pagesToTranslate.slice(0, midPoint), translationOptions);
        await new Promise(resolve => setTimeout(resolve, parseFloat(dom.requestDelayInput.value) * 1000 || 2000));
        const secondHalf = await translatePdfPagesRecursively(pagesToTranslate.slice(midPoint), translationOptions);
        return [...firstHalf, ...secondHalf];
    }
}
// --- START: Subtitle Parsers & Editor ---
function parseSrt(data) { const lines = []; const blocks = data.trim().replace(/\r\n/g, '\n').split(/\n\n+/); for (const block of blocks) {
    const blockLines = block.split('\n');
    if (blockLines.length < 2)
        continue;
    let lineIndex = 0;
    let id = lines.length + 1;
    if (/^\d+$/.test(blockLines[0].trim())) {
        lineIndex = 1;
    }
    const timecodeLine = blockLines[lineIndex];
    if (!timecodeLine || !timecodeLine.includes('-->'))
        continue;
    const timeMatch = timecodeLine.match(/(\d{1,2}:\d{2}:\d{2}[,.]\d{1,3})\s*-->\s*(\d{1,2}:\d{2}:\d{2}[,.]\d{1,3})/);
    if (!timeMatch)
        continue;
    const text = blockLines.slice(lineIndex + 1).join('\n').trim();
    if (!text)
        continue;
    lines.push({ id: id, startTime: timeMatch[1].replace('.', ','), endTime: timeMatch[2].replace('.', ','), text: text });
} return { lines, type: 'srt' }; }
function reconstructSrt(parsedData, translatedLines) { return parsedData.lines.map((line, index) => `${line.id}\n${line.startTime} --> ${line.endTime}\n${translatedLines[index] || line.text}`).join('\n\n') + '\n\n'; }
function parseVtt(data) { const blocks = data.trim().split(/\r?\n\r?\n/); const header = blocks.shift() || 'WEBVTT'; const lines = []; const timecodePattern = /(\d{2}:\d{2}:\d{2}\.\d{3}\s-->\s\d{2}:\d{2}:\d{2}\.\d{3}.*)/; for (const block of blocks) {
    const blockLines = block.split(/\r?\n/);
    const timecodeIndex = blockLines.findIndex(l => timecodePattern.test(l));
    if (timecodeIndex !== -1) {
        const timecode = blockLines[timecodeIndex].match(timecodePattern)[1];
        const text = blockLines.slice(timecodeIndex + 1).join('\n');
        const [startTime, endTime] = timecode.split(' --> ')[0].split(' ')[0];
        lines.push({ startTime: startTime.replace('.', ','), endTime: endTime.replace('.', ','), text, timecode });
    }
} return { header, lines, type: 'vtt' }; }
function reconstructVtt(parsedData, translatedLines) { const body = parsedData.lines.map((line, index) => `${line.timecode}\n${translatedLines[index] || line.text}`).join('\n\n'); return `${parsedData.header}\n\n${body}`; }
function parseSsaAss(data) { const sections = data.split(/\[(.*?)\]/); const result = { info: '', styles: '', events: { format: null, lines: [] }, type: 'ass' }; for (let i = 1; i < sections.length; i += 2) {
    const sectionName = sections[i].trim().toLowerCase();
    const sectionContent = sections[i + 1].trim();
    if (sectionName.startsWith('script info')) {
        result.info = sectionContent;
    }
    else if (sectionName.endsWith('styles')) {
        result.styles = sectionContent;
    }
    else if (sectionName === 'events') {
        const lines = sectionContent.split(/\r?\n/);
        const formatLine = lines.find(l => l.toLowerCase().startsWith('format:'));
        if (!formatLine)
            continue;
        result.events.format = formatLine;
        const formatFields = formatLine.split(':')[1].trim().split(',').map(f => f.trim());
        const textIndex = formatFields.findIndex(f => f.toLowerCase() === 'text');
        if (textIndex === -1)
            continue;
        lines.forEach(line => { if (line.toLowerCase().startsWith('dialogue:')) {
            const parts = line.split(',');
            const meta = parts.slice(0, textIndex).join(',');
            const text = parts.slice(textIndex).join(',');
            result.events.lines.push({ meta, text });
        } });
    }
} return result; }
function reconstructSsaAss(parsedData, translatedLines) { const eventsHeader = `[Events]\n${parsedData.events.format}\n`; const eventLines = parsedData.events.lines.map((line, index) => `Dialogue: ${line.meta},${translatedLines[index] || line.text}`).join('\n'); let scriptInfoSection = parsedData.info ? `[Script Info]\n${parsedData.info}\n\n` : ''; let stylesSection = parsedData.styles ? `[V4+ Styles]\n${parsedData.styles}\n\n` : ''; return `${scriptInfoSection}${stylesSection}${eventsHeader}${eventLines}`; }
function processAndDisplaySubtitles(fileContent, fileName, preservedTranslations = null) {
    try {
        if (fileContent) {
            log(`Processing subtitle content from: ${fileName}`);
            const fileExt = fileName.split('.').pop().toLowerCase();
            let parser;
            switch (fileExt) {
                case 'srt':
                    parser = parseSrt;
                    break;
                case 'vtt':
                    parser = parseVtt;
                    break;
                case 'ass':
                case 'ssa':
                    parser = parseSsaAss;
                    break;
                default: throw new Error(`Unsupported subtitle format: .${fileExt}`);
            }
            subtitleData = parser(fileContent);
        }
        const lines = subtitleData.lines || subtitleData.events.lines;
        if (!lines || lines.length === 0) {
            throw new Error(`No subtitle entries found in the file.`);
        }
        log(`Rendering ${lines.length} subtitle entries.`);
        dom.subtitleTableBody.innerHTML = '';
        const fragment = document.createDocumentFragment();
        lines.forEach((line, index) => {
            const row = document.createElement('tr');
            row.dataset.originalIndex = String(index);
            let timestamp = '';
            if (line.startTime && line.endTime)
                timestamp = `${line.startTime} --> ${line.endTime}`;
            else if (line.timecode)
                timestamp = line.timecode;
            else if (line.meta)
                timestamp = line.meta.split(',').slice(1, 3).join(' -> ');
            row.innerHTML = `<td class="text-center">${line.id || index + 1}</td> 
                             <td>${timestamp}</td> 
                             <td>${line.text.replace(/\n/g, '<br>')}</td> 
                             <td class="translated-text" contenteditable="true">${preservedTranslations ? (preservedTranslations[index] || '') : ''}</td>`;
            fragment.appendChild(row);
        });
        dom.subtitleTableBody.appendChild(fragment);
        if (fileName) {
            dom.dropzonePrompt.classList.add('hidden');
            dom.filePreviewContainer.classList.remove('hidden');
            dom.subtitlePreview.classList.remove('hidden');
            dom.imagePreview.classList.add('hidden');
            dom.subtitleFilename.textContent = fileName;
        }
        validateForm();
        updateUI();
    }
    catch (error) {
        showError(error.message);
        log(error.message, 'error');
        resetFileInput();
    }
}
async function renderSubtitleEditor(file) {
    currentFile = file;
    const fileContent = await fileToString(file);
    currentFileHash = await calculateFileHash(file);
    const savedProgressRaw = localStorage.getItem(`fluentify_progress_${currentFileHash}`);
    dom.savedProgressNotification.classList.add('hidden');
    if (savedProgressRaw) {
        try {
            const savedProgress = JSON.parse(savedProgressRaw);
            if (savedProgress && savedProgress.translations) {
                dom.savedProgressNotification.classList.remove('hidden');
            }
        }
        catch (e) {
            log('Could not parse saved progress.', 'warn');
            localStorage.removeItem(`fluentify_progress_${currentFileHash}`);
        }
    }
    processAndDisplaySubtitles(fileContent, file.name);
}
// --- START: UI and Event Handlers ---
function populateSelect(selectElement, options, defaultValue, filter = (opt) => true) {
    const translations = TRANSLATIONS[currentLanguage];
    selectElement.innerHTML = options.filter(filter).map(opt => `<option value="${opt.value}" ${opt.value === defaultValue ? 'selected' : ''}>${translations[opt.i18nKey] || opt.text}</option>`).join('');
}
function resetFileInput(shouldUpdateUI = true) {
    dom.fileUpload.value = '';
    dom.dropzonePrompt.classList.remove('hidden');
    dom.filePreviewContainer.classList.add('hidden');
    dom.imagePreview.src = '';
    dom.subtitlePreview.classList.add('hidden');
    dom.subtitleFilename.textContent = '';
    dom.youtubeUrlInput.value = '';
    currentFile = null;
    currentFileHash = null;
    dom.pdfPageViewer.innerHTML = '';
    pdfDoc = null;
    selectedPages.clear();
    dom.subtitleTableBody.innerHTML = '';
    subtitleData = null;
    dom.savedProgressNotification.classList.add('hidden');
    dom.retryFailedSubsBtn.classList.add('hidden');
    updatePageSelectionCounter();
    validateForm();
    clearOutput();
    if (shouldUpdateUI) {
        updateUI();
    }
}
function swapLanguages() { const sourceVal = dom.sourceLangSelect.value; const targetVal = dom.targetLangSelect.value; if (sourceVal === 'auto')
    return; dom.sourceLangSelect.value = targetVal; dom.targetLangSelect.value = sourceVal; validateForm(); if (dom.output.value)
    dom.output.dir = RTL_LANGUAGES.has(dom.targetLangSelect.value) ? 'rtl' : 'ltr'; }
function validateForm() {
    let hasInput = false;
    const isApiKeyValid = dom.apiKeyInput.value.trim().length > 0;
    if (currentMode === 'text') {
        hasInput = dom.textInput.value.trim().length > 0 && dom.textInput.value.length <= 10000;
    }
    else if (currentMode === 'image') {
        hasInput = currentFile !== null;
    }
    else if (currentMode === 'pdf') {
        hasInput = selectedPages.size > 0;
    }
    else if (currentMode === 'subtitle') {
        const hasSubs = subtitleData !== null && (subtitleData.lines?.length > 0 || subtitleData.events?.lines.length > 0);
        hasInput = hasSubs;
        dom.exportBtn.disabled = !hasSubs;
        dom.findReplaceToggleBtn.disabled = !hasSubs;
        dom.breakLinesToggleBtn.disabled = !hasSubs || subtitleData.type === 'ass';
    }
    else if (currentMode === 'video') {
        // Video form has its own validation and button
        hasInput = false; // Prevents main translate button from enabling
    }
    dom.translateBtn.disabled = !hasInput || !isApiKeyValid;
    dom.swapBtn.disabled = dom.sourceLangSelect.value === 'auto' || currentMode !== 'text';
}
function updateCharCounter() { const len = dom.textInput.value.length; dom.charCounter.textContent = `${len} / 5000`; dom.charCounter.classList.toggle('text-red-500', len > 5000); dom.charCounter.classList.toggle('dark:text-red-400', len > 5000); }
function showError(message) { dom.errorDisplay.textContent = message; }
function clearOutput() { dom.output.value = ''; dom.copyBtn.disabled = true; dom.exportTextBtn.disabled = true; dom.enhancementsToolbar.classList.add('hidden', 'opacity-0', '-translate-y-2'); showError(''); }
async function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) {
        resetFileInput();
        return;
    }
    log(`File selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`);
    if (file.size > 20 * 1024 * 1024) {
        showError("File size exceeds 20MB limit.");
        log("File size exceeds 20MB limit.", 'error');
        resetFileInput();
        return;
    }
    if (currentMode === 'image') {
        currentFile = file;
        dom.dropzonePrompt.classList.add('hidden');
        dom.filePreviewContainer.classList.remove('hidden');
        dom.subtitlePreview.classList.add('hidden');
        dom.imagePreview.classList.remove('hidden');
        dom.imagePreview.src = URL.createObjectURL(file);
    }
    else if (currentMode === 'pdf') {
        currentFile = file;
        dom.filePreviewContainer.classList.add('hidden');
        await renderPdf(file);
    }
    else if (currentMode === 'subtitle') {
        await renderSubtitleEditor(file);
    }
    validateForm();
}
async function renderPdf(file) {
    try {
        log('Loading PDF...');
        dom.pdfPageViewer.innerHTML = '<div class="spinner w-8 h-8 text-sky-500 mx-auto col-span-full"></div>';
        const typedarray = new Uint8Array(await file.arrayBuffer());
        if (typeof pdfjsLib === 'undefined') {
            throw new Error("pdf.js library is not loaded.");
        }
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`;
        pdfDoc = await pdfjsLib.getDocument({ data: typedarray }).promise;
        log(`PDF loaded with ${pdfDoc.numPages} pages.`, 'success');
        updateUI();
        dom.pdfPageViewer.innerHTML = '';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const placeholder = entry.target;
                    const pageNum = parseInt(placeholder.dataset.pageNumber, 10);
                    createPdfPageView(pageNum).then(pageView => {
                        placeholder.parentNode.replaceChild(pageView, placeholder);
                    });
                    observer.unobserve(placeholder);
                }
            });
        }, { root: dom.pdfPageViewer, rootMargin: '200px' });
        for (let i = 1; i <= pdfDoc.numPages; i++) {
            const placeholder = document.createElement('div');
            placeholder.className = "pdf-page-placeholder";
            placeholder.style.minHeight = '300px';
            placeholder.dataset.pageNumber = String(i);
            dom.pdfPageViewer.appendChild(placeholder);
            observer.observe(placeholder);
        }
    }
    catch (error) {
        console.error("Error rendering PDF:", error);
        showError("Could not load or render the PDF file.");
        log(`Failed to render PDF: ${error instanceof Error ? error.message : String(error)}`, 'error');
        dom.pdfPageViewer.innerHTML = '<p class="text-center text-red-500 col-span-full">Failed to load PDF</p>';
    }
}
async function createPdfPageView(pageNum) {
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.2 });
    const canvas = document.createElement('canvas');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    canvas.className = "w-full h-auto block";
    await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
    const pageContainer = document.createElement('div');
    pageContainer.className = "pdf-page-item relative cursor-pointer border-2 border-slate-400 dark:border-slate-600 rounded-lg overflow-hidden bg-white";
    pageContainer.dataset.pageNumber = String(pageNum);
    pageContainer.title = `Page ${pageNum}`;
    if (selectedPages.has(pageNum))
        pageContainer.classList.add('selected');
    const pageNumberLabel = document.createElement('div');
    pageNumberLabel.className = "absolute bottom-2 left-2 rtl:left-auto rtl:right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded";
    pageNumberLabel.textContent = `Page ${pageNum}`;
    pageContainer.appendChild(canvas);
    pageContainer.appendChild(pageNumberLabel);
    pageContainer.addEventListener('click', () => togglePageSelection(pageNum));
    return pageContainer;
}
function togglePageSelection(pageNumber) { const thumbElement = dom.pdfPageViewer.querySelector(`.pdf-page-item[data-page-number="${pageNumber}"]`); if (selectedPages.has(pageNumber)) {
    selectedPages.delete(pageNumber);
    thumbElement?.classList.remove('selected');
}
else {
    selectedPages.add(pageNumber);
    thumbElement?.classList.add('selected');
} updatePageSelectionCounter(); validateForm(); }
function updatePageSelectionCounter() {
    const translations = TRANSLATIONS[currentLanguage];
    if (!translations)
        return;
    const count = selectedPages.size;
    dom.pageSelectionCounter.textContent = (translations.pdfPageCounter || '').replace('{count}', String(count));
    const delay = parseFloat(dom.requestDelayInput.value) || 2;
    const timeEstimate = Math.round(count * delay);
    dom.batchWarning.textContent = count > 1 && !dom.combinePagesCheckbox.checked ? (translations.pdfBatchWarning || '').replace('{seconds}', String(timeEstimate)) : '';
}
async function handleFormSubmit(event) {
    event.preventDefault();
    if (dom.translateBtn.disabled)
        return;
    showError('');
    clearOutput();
    dom.translateBtn.disabled = true;
    dom.translateBtnText.classList.add('hidden');
    dom.translateBtnSpinner.classList.remove('hidden');
    translationAbortController = new AbortController();
    const { signal } = translationAbortController;
    const model = dom.modelSelect.value;
    const targetLang = dom.targetLangSelect.value;
    const sourceLang = dom.sourceLangSelect.value;
    const jobField = dom.jobFieldSelect.value;
    const useProxy = dom.useProxyCheckbox.checked;
    const customProxyUrl = dom.customProxyInput.value;
    const temperature = dom.temperatureSlider.value;
    try {
        if (currentMode === 'pdf') {
            const sortedPages = Array.from(selectedPages).sort((a, b) => a - b);
            showProgress(`${TRANSLATIONS[currentLanguage].progressLabelTranslating} ${sortedPages.length} pages...`);
            dom.output.value = `Extracting text from ${sortedPages.length} pages...`;
            const pageData = [];
            const usePdfOcr = dom.pdfOcrCheckbox.checked;
            for (const pageNum of sortedPages) {
                if (signal.aborted)
                    throw new Error("Translation cancelled.");
                const ocrOptions = { useOcr: usePdfOcr, model, useProxy, customProxyUrl, signal };
                pageData.push({ pageNum: pageNum, text: await extractTextFromPdfPage(pageNum, ocrOptions) || "" });
                updateProgress(pageData.length, sortedPages.length * 2);
            }
            const translationOptions = { model, targetLang, jobField, useProxy, customProxyUrl, signal, temperature };
            log('Text extraction complete. Starting translation...');
            const translatedPageChunks = await translatePdfPagesRecursively(pageData, translationOptions);
            const combinePages = dom.combinePagesCheckbox.checked;
            dom.output.value = combinePages ? translatedPageChunks.map(p => p.translatedText).join('\n\n') : translatedPageChunks.map(p => `--- PAGE ${p.pageNum} ---\n${p.translatedText}`).join('\n\n');
        }
        else if (currentMode === 'text' || currentMode === 'image') {
            let textToTranslate;
            if (currentMode === 'text') {
                textToTranslate = dom.textInput.value.trim();
            }
            else { // Image mode
                if (!currentFile)
                    throw new Error("Please select an image file.");
                dom.output.value = 'Extracting text from image...';
                const base64Image = await fileToBase64(currentFile);
                textToTranslate = await performOcr(base64Image, currentFile.type, model, useProxy, customProxyUrl, signal);
                if (!textToTranslate) {
                    dom.output.value = "(No text detected)";
                    throw new Error("No text detected in image");
                }
            }
            dom.output.value = TRANSLATIONS[currentLanguage].progressLabelTranslating;
            dom.output.value = await translateText(textToTranslate, sourceLang, targetLang, jobField, model, useProxy, customProxyUrl, signal, dom.customPromptInput.value, temperature);
        }
        else if (currentMode === 'subtitle') {
            await startSubtitleTranslation(row => !row.cells[3].textContent.trim());
        }
        if (currentMode !== 'subtitle') {
            dom.output.dir = RTL_LANGUAGES.has(targetLang) ? 'rtl' : 'ltr';
            if (dom.output.value) {
                dom.copyBtn.disabled = false;
                dom.exportTextBtn.disabled = false;
                dom.enhancementsToolbar.classList.remove('hidden');
                setTimeout(() => dom.enhancementsToolbar.classList.remove('opacity-0', '-translate-y-2'), 10);
            }
        }
    }
    catch (error) {
        console.error("Translation failed:", error);
        showError(error.message);
        if (currentMode !== 'subtitle')
            dom.output.value = '';
    }
    finally {
        dom.translateBtnText.classList.remove('hidden');
        dom.translateBtnSpinner.classList.add('hidden');
        hideProgress();
        validateForm();
        translationAbortController = null;
    }
}
async function handleEnhancement(action) {
    const currentText = dom.output.value;
    if (!currentText) {
        showError("Nothing to enhance.");
        return;
    }
    showError('');
    const originalBtnText = {};
    dom.enhancementsToolbar.querySelectorAll('.enhancement-btn').forEach(btn => { const htmlBtn = btn; originalBtnText[htmlBtn.dataset.action] = btn.innerHTML; htmlBtn.disabled = true; if (htmlBtn.dataset.action === action) {
        btn.innerHTML = '<div class="spinner w-4 h-4 mx-auto"></div>';
    } });
    translationAbortController = new AbortController();
    const model = dom.modelSelect.value;
    const useProxy = dom.useProxyCheckbox.checked;
    const customProxyUrl = dom.customProxyInput.value;
    const targetLang = dom.targetLangSelect.value;
    const temperature = dom.temperatureSlider.value;
    try {
        const enhancedText = await enhanceText(currentText, action, targetLang, model, useProxy, customProxyUrl, translationAbortController.signal, temperature);
        dom.output.value = enhancedText;
    }
    catch (error) {
        showError(error.message);
    }
    finally {
        dom.enhancementsToolbar.querySelectorAll('.enhancement-btn').forEach(btn => { const htmlBtn = btn; htmlBtn.disabled = false; btn.innerHTML = originalBtnText[htmlBtn.dataset.action]; });
        translationAbortController = null;
    }
}
// --- START: Local Storage and Settings ---
const LS_SETTINGS_KEY = 'fluentify_settings_v9';
function saveSettings() {
    if (!dom.saveSettingsCheckbox.checked) {
        localStorage.removeItem(LS_SETTINGS_KEY);
        return;
    }
    apiKeyManager.refreshKeys();
    const settings = {
        apiKey: dom.apiKeyInput.value,
        model: dom.modelSelect.value,
        sourceLang: dom.sourceLangSelect.value,
        targetLang: dom.targetLangSelect.value,
        jobField: dom.jobFieldSelect.value,
        theme: dom.html.classList.contains('dark') ? 'dark' : 'light',
        useProxy: dom.useProxyCheckbox.checked,
        customProxyUrl: dom.customProxyInput.value,
        useCustomPrompt: dom.useCustomPromptCheckbox.checked,
        customPrompt: dom.customPromptInput.value,
        temperature: dom.temperatureSlider.value,
        requestDelay: dom.requestDelayInput.value,
        translationTone: dom.translationToneSelect.value,
        customTone: dom.customToneInput.value,
        pdfOcr: dom.pdfOcrCheckbox.checked,
        language: currentLanguage
    };
    localStorage.setItem(LS_SETTINGS_KEY, JSON.stringify(settings));
}
function loadSettings() {
    try {
        const savedSettings = localStorage.getItem(LS_SETTINGS_KEY);
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            dom.apiKeyInput.value = settings.apiKey || '';
            dom.sourceLangSelect.value = settings.sourceLang || 'auto';
            dom.targetLangSelect.value = settings.targetLang || 'Persian';
            applyTheme(settings.theme || 'dark');
            dom.useProxyCheckbox.checked = settings.useProxy || false;
            dom.customProxyInput.value = settings.customProxyUrl || DEFAULT_PROXY_URL;
            dom.useCustomPromptCheckbox.checked = settings.useCustomPrompt || false;
            dom.customPromptInput.value = settings.customPrompt || '';
            dom.temperatureSlider.value = settings.temperature || 0.7;
            dom.temperatureValue.textContent = settings.temperature || 0.7;
            dom.requestDelayInput.value = settings.requestDelay || 4;
            dom.pdfOcrCheckbox.checked = settings.pdfOcr || false;
            dom.saveSettingsCheckbox.checked = true;
            currentLanguage = settings.language || 'en';
        }
        else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
            dom.customProxyInput.value = DEFAULT_PROXY_URL;
            currentLanguage = navigator.language.startsWith('fa') ? 'fa' : (navigator.language.startsWith('ru') ? 'ru' : 'en');
        }
    }
    catch (e) {
        console.error("Failed to load settings", e);
        localStorage.removeItem(LS_SETTINGS_KEY);
    }
}
const LS_TRANSLATION_KEY = 'fluentify_translation_settings_v1';
function saveTranslationSettings() {
    const data = {
        model: dom.modelSelect.value,
        jobField: dom.jobFieldSelect.value,
        translationTone: dom.translationToneSelect.value,
        customTone: dom.customToneInput.value
    };
    localStorage.setItem(LS_TRANSLATION_KEY, JSON.stringify(data));
}
function loadTranslationSettings() {
    try {
        const raw = localStorage.getItem(LS_TRANSLATION_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (data.model) dom.modelSelect.value = data.model;
        if (data.jobField) dom.jobFieldSelect.value = data.jobField;
        if (data.translationTone) dom.translationToneSelect.value = data.translationTone;
        if (data.customTone) dom.customToneInput.value = data.customTone;
        dom.customToneContainer.classList.toggle('hidden', dom.translationToneSelect.value !== 'Custom');
    } catch (e) {
        console.error("Failed to load translation settings", e);
        localStorage.removeItem(LS_TRANSLATION_KEY);
    }
}
// --- START: Theme Management ---
function applyTheme(theme) { dom.html.classList.toggle('dark', theme === 'dark'); dom.themeIconLight.classList.toggle('hidden', theme === 'dark'); dom.themeIconDark.classList.toggle('hidden', theme !== 'dark'); }
function toggleTheme() { const newTheme = dom.html.classList.contains('dark') ? 'light' : 'dark'; applyTheme(newTheme); saveSettings(); }
// --- START: Helper Functions ---
function fileToString(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.readAsText(file); reader.onload = () => resolve(reader.result); reader.onerror = (error) => reject(error); }); }
function fileToBase64(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.readAsDataURL(file); reader.onload = () => resolve(reader.result.split(',')[1]); reader.onerror = (error) => reject(error); }); }
async function calculateFileHash(file) { const buffer = await file.arrayBuffer(); const hashBuffer = await crypto.subtle.digest('SHA-256', buffer); const hashArray = Array.from(new Uint8Array(hashBuffer)); return hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); }
function copyToClipboard() { if (!dom.output.value)
    return; navigator.clipboard.writeText(dom.output.value).then(() => { dom.copyIconDefault.classList.add('hidden'); dom.copyIconSuccess.classList.remove('hidden'); setTimeout(() => { dom.copyIconDefault.classList.remove('hidden'); dom.copyIconSuccess.classList.add('hidden'); }, 2000); }).catch(err => { console.error('Failed to copy text:', err); showError('Could not copy text.'); }); }
function exportOutput() {
    let content = dom.output.value;
    let filename = 'translation.txt';
    if (currentMode === 'subtitle' && subtitleData) {
        log('Reconstructing subtitle file for export...');
        const translatedLines = Array.from(dom.subtitleTableBody.querySelectorAll('tr')).map(row => row.cells[3].textContent);
        let reconstructor;
        switch (subtitleData.type) {
            case 'srt':
                reconstructor = reconstructSrt;
                break;
            case 'vtt':
                reconstructor = reconstructVtt;
                break;
            case 'ass':
                reconstructor = reconstructSsaAss;
                break;
        }
        if (reconstructor) {
            content = reconstructor(subtitleData, translatedLines);
            const originalName = (currentFile?.name || 'youtube_export').substring(0, (currentFile?.name || 'youtube_export').lastIndexOf('.'));
            const ext = subtitleData.type;
            filename = `${originalName}.translated.${ext}`;
            log(`Exporting as ${filename}`, 'success');
        }
        else {
            log('Could not find reconstructor for subtitle format.', 'error');
            return;
        }
    }
    if (!content)
        return;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function parseVideoIdFromUrl(url) { const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/; const match = url.match(regex); return match ? match[1] : null; }
function formatSrtTimestamp(totalSeconds) { const hours = Math.floor(totalSeconds / 3600), minutes = Math.floor((totalSeconds % 3600) / 60), seconds = Math.floor(totalSeconds % 60), milliseconds = Math.round((totalSeconds - Math.floor(totalSeconds)) * 1000); const pad = (num, len = 2) => String(num).padStart(len, '0'); return `${pad(hours)}:${pad(minutes)}:${pad(seconds)},${pad(milliseconds, 3)}`; }
function generateSrtFromYT(subtitles) { return subtitles.map((line, index) => { const startSeconds = parseFloat(line.start); const endSeconds = startSeconds + parseFloat(line.dur); const startTime = formatSrtTimestamp(startSeconds); const endTime = formatSrtTimestamp(endSeconds); return `${index + 1}\n${startTime} --> ${endTime}\n${line.text}\n`; }).join('\n'); }
async function handleFetchYouTubeSubs() {
    const url = dom.youtubeUrlInput.value;
    const videoId = parseVideoIdFromUrl(url);
    const langCode = dom.youtubeLangInput.value.trim();
    if (!videoId) {
        showError('Invalid YouTube URL. Please check and try again.');
        return;
    }
    if (!langCode) {
        showError('Please enter a language code (e.g., "en").');
        return;
    }
    dom.fetchYoutubeBtnText.classList.add('hidden');
    dom.fetchYoutubeBtnSpinner.classList.remove('hidden');
    dom.fetchYoutubeSubsBtn.disabled = true;
    resetFileInput();
    try {
        const targetApiUrl = `https://youtube-caption-extractor.vercel.app/api/videoDetails?videoID=${videoId}&lang=${langCode}`;
        const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(targetApiUrl)}`;
        log(`Fetching YouTube subtitles via: ${targetApiUrl}`);
        const response = await fetch(proxyUrl);
        if (!response.ok)
            throw new Error(`API error: ${response.statusText}`);
        const proxyData = await response.json();
        if (!proxyData)
            throw new Error('Empty response from proxy.');
        const data = (typeof proxyData === 'string') ? JSON.parse(proxyData) : proxyData;
        const details = data.videoDetails;
        if (data.error || !details || !details.subtitles || details.subtitles.length === 0) {
            throw new Error(`No subtitles found for language code "${langCode}".`);
        }
        log(`Successfully fetched ${details.subtitles.length} lines for video: ${details.title}`, 'success');
        const srtContent = generateSrtFromYT(details.subtitles);
        const fileName = `${details.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.srt`;
        const mockFile = new File([srtContent], fileName, { type: 'text/plain' });
        await renderSubtitleEditor(mockFile);
    }
    catch (error) {
        let errorMessage = error instanceof Error ? error.message : String(error);
        if (error instanceof SyntaxError) {
            errorMessage = 'Failed to parse API response. The API or proxy may be down.';
        }
        showError(errorMessage);
        log(errorMessage, 'error');
    }
    finally {
        dom.fetchYoutubeBtnText.classList.remove('hidden');
        dom.fetchYoutubeBtnSpinner.classList.add('hidden');
        dom.fetchYoutubeSubsBtn.disabled = false;
    }
}
async function startSubtitleTranslation(rowFilter) {
    translationAbortController = new AbortController();
    const { signal } = translationAbortController;
    const model = dom.modelSelect.value;
    const targetLang = dom.targetLangSelect.value;
    const jobField = dom.jobFieldSelect.value;
    const useProxy = dom.useProxyCheckbox.checked;
    const customProxyUrl = dom.customProxyInput.value;
    const temperature = dom.temperatureSlider.value;
    const allRows = Array.from(dom.subtitleTableBody.querySelectorAll('tr'));
    const rowsToTranslate = allRows.filter(rowFilter).map(row => ({
        row: row,
        targetCell: row.cells[3],
        originalText: (subtitleData.lines || subtitleData.events.lines)[parseInt(row.dataset.originalIndex)].text,
        originalIndex: parseInt(row.dataset.originalIndex)
    }));
    if (rowsToTranslate.length === 0) {
        log('All subtitles are already translated or none selected.', 'info');
        showError('');
        return;
    }
    const batchSize = parseInt(dom.subtitleBatchSizeInput.value, 10) || 100;
    const chunks = [];
    for (let i = 0; i < rowsToTranslate.length; i += batchSize) {
        chunks.push(rowsToTranslate.slice(i, i + batchSize));
    }
    showProgress(`${TRANSLATIONS[currentLanguage].progressLabelTranslating} ${rowsToTranslate.length} subtitle lines...`);
    let totalTranslated = 0;
    try {
        for (let i = 0; i < chunks.length; i++) {
            if (signal.aborted)
                throw new Error("Translation cancelled.");
            const chunk = chunks[i];
            log(`Translating batch ${i + 1} of ${chunks.length} (${chunk.length} lines)...`);
            const itemsToTranslate = chunk.map(item => ({ id: item.originalIndex, original: item.originalText }));
            const translatedObjects = await callGoogleAIBatch(itemsToTranslate, 'auto', targetLang, jobField, model, useProxy, customProxyUrl, signal, temperature);
            if (signal.aborted)
                throw new Error("Translation cancelled.");
            const translationMap = new Map(translatedObjects.map(item => [item.id, item.translation]));
            chunk.forEach(item => {
                const translatedText = translationMap.get(item.originalIndex);
                if (translatedText !== null && translatedText !== undefined) {
                    item.targetCell.textContent = translatedText;
                    item.targetCell.classList.remove('failed-translation');
                }
                else {
                    item.targetCell.textContent = '(Translation failed)';
                    item.targetCell.classList.add('failed-translation');
                }
            });
            totalTranslated += chunk.length;
            updateProgress(totalTranslated, rowsToTranslate.length);
            saveCurrentSubtitleProgress();
            if (i < chunks.length - 1) {
                const delay = parseFloat(dom.requestDelayInput.value) * 1000 || 2000;
                log(`Waiting for ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        log('Batch translation complete.', 'success');
    }
    finally {
        const failedRows = allRows.filter(row => row.cells[3].textContent === '(Translation failed)');
        dom.retryFailedSubsBtn.classList.toggle('hidden', failedRows.length === 0);
    }
}
// --- START: Subtitle Editor Tools ---
function highlightMatchesInSubtitles() { const findText = dom.findInput.value; const isCaseSensitive = dom.findCaseSensitive.checked; const flags = isCaseSensitive ? 'g' : 'gi'; const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags); dom.subtitleTableBody.querySelectorAll('td.translated-text').forEach(cell => { const originalText = cell.textContent; if (findText) {
    cell.innerHTML = originalText.replace(regex, match => `<mark>${match}</mark>`);
}
else {
    cell.innerHTML = originalText;
} }); }
function handleReplaceAllInSubtitles() { const findText = dom.findInput.value; if (!findText) {
    showError("Please enter text to find.");
    return;
} const replaceText = dom.replaceInput.value; const isCaseSensitive = dom.findCaseSensitive.checked; const flags = isCaseSensitive ? 'g' : 'gi'; const regex = new RegExp(findText, flags); let replacements = 0; dom.subtitleTableBody.querySelectorAll('td.translated-text').forEach(cell => { if (cell.textContent.match(regex)) {
    cell.textContent = cell.textContent.replace(regex, replaceText);
    replacements++;
} }); log(`Replaced ${replacements} instance(s).`, 'success'); dom.findInput.value = ''; highlightMatchesInSubtitles(); saveCurrentSubtitleProgress(); }
function timeToMs(time) { const parts = time.split(/[:,.]/); return parseInt(parts[0], 10) * 3600000 + parseInt(parts[1], 10) * 60000 + parseInt(parts[2], 10) * 1000 + parseInt(parts[3], 10); }
function msToTime(ms, isVTT) { const d = new Date(ms); const pad = (n) => n.toString().padStart(2, '0'); const padMs = (n) => n.toString().padStart(3, '0'); const separator = isVTT ? '.' : ','; return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}${separator}${padMs(d.getUTCMilliseconds())}`; }
function handleBreakLongLines() { if (!subtitleData || !subtitleData.lines)
    return; if (!confirm('This will permanently modify your subtitle data by splitting long lines. This action cannot be undone. Are you sure?'))
    return; const maxLength = parseInt(dom.breakLinesMaxChars.value, 10); if (isNaN(maxLength) || maxLength < 10) {
    showError("Max characters must be a number greater than 10.");
    return;
} log(`Breaking lines longer than ${maxLength} characters...`); const translatedLines = Array.from(dom.subtitleTableBody.querySelectorAll('tr')).map(row => row.cells[3].textContent); const newLines = []; const isVTT = subtitleData.type === 'vtt'; let hasChanges = false; subtitleData.lines.forEach((line, index) => { const currentTranslatedText = translatedLines[index] || ''; if (currentTranslatedText.length <= maxLength) {
    newLines.push({ ...line, translatedText: currentTranslatedText });
    return;
} const startMs = timeToMs(line.startTime.replace(',', '.')); const endMs = timeToMs(line.endTime.replace(',', '.')); const durationMs = endMs - startMs; if (durationMs < 1000) {
    newLines.push({ ...line, translatedText: currentTranslatedText });
    return;
} hasChanges = true; const words = currentTranslatedText.split(' '); let currentLineText = ''; const chunks = []; words.forEach(word => { if ((currentLineText + ' ' + word).trim().length > maxLength) {
    chunks.push(currentLineText.trim());
    currentLineText = word;
}
else {
    currentLineText = (currentLineText + ' ' + word).trim();
} }); chunks.push(currentLineText.trim()); const chunkDuration = durationMs / chunks.length; chunks.forEach((chunk, chunkIndex) => { const newStartMs = startMs + (chunkIndex * chunkDuration); const newEndMs = newStartMs + chunkDuration; newLines.push({ ...line, startTime: msToTime(newStartMs, isVTT), endTime: msToTime(newEndMs, isVTT), id: null, translatedText: chunk }); }); }); if (!hasChanges) {
    log('No lines needed to be split.', 'info');
    return;
} if (subtitleData.type === 'srt') {
    newLines.forEach((line, index) => { line.id = index + 1; });
} subtitleData.lines = newLines.map(({ translatedText, ...rest }) => rest); const newTranslations = newLines.map(line => line.translatedText); log(`Split complete. Total lines are now ${newLines.length}. Re-rendering table.`); processAndDisplaySubtitles(null, null, newTranslations); saveCurrentSubtitleProgress(); }
function saveCurrentSubtitleProgress() { if (!currentFileHash || !subtitleData)
    return; const translatedLines = Array.from(dom.subtitleTableBody.querySelectorAll('tr')).map(row => row.cells[3].textContent); const progress = { originalFileName: currentFile.name, translations: translatedLines, }; localStorage.setItem(`fluentify_progress_${currentFileHash}`, JSON.stringify(progress)); log('Translation progress saved.', 'info'); }
// --- START: VIDEO SUBTITLE GENERATOR ---
const dom_video = {
    outputLanguageSelect: document.getElementById('video-gen-output-language'),
    outputFormatSelect: document.getElementById('video-gen-output-format'),
    generateBtn: document.getElementById('video-gen-generate-btn'),
    previewBtn: document.getElementById('video-gen-preview-btn'),
    btnText: document.getElementById('video-gen-btn-text'),
    spinner: document.getElementById('video-gen-spinner'),
    cancelBtn: document.getElementById('video-gen-cancel-btn'),
    progressContainer: document.getElementById('video-gen-progress-container'),
    progressBar: document.getElementById('video-gen-progress-bar'),
    progressStatus: document.getElementById('video-gen-progress-status'),
    progressPercentage: document.getElementById('video-gen-progress-percentage'),
    outputContainer: document.getElementById('video-gen-output-container'),
    statusContainer: document.getElementById('video-gen-status-container'),
    statusMessage: document.getElementById('video-gen-status-message'),
    resultsWrapper: document.getElementById('video-gen-results-wrapper'),
    subtitleOutput: document.getElementById('video-gen-subtitle-output'),
    copyBtn: document.getElementById('video-gen-copy-btn'),
    downloadBtn: document.getElementById('video-gen-download-btn'),
    exportVideoBtn: document.getElementById('video-gen-export-video-btn'),
    exportProgressContainer: document.getElementById('video-gen-export-progress-container'),
    exportProgressBar: document.getElementById('video-gen-export-progress-bar'),
    exportProgressPercentage: document.getElementById('video-gen-export-progress-percentage'),
    exportCancelBtn: document.getElementById('video-gen-export-cancel-btn'),
    retryBtn: document.getElementById('video-gen-retry-btn'),
    editBtn: document.getElementById('video-gen-edit-btn'),
    timestampBtn: document.getElementById('video-gen-timestamp-btn'),
    videoPreview: document.getElementById('video-gen-video-preview'),
    timestampModal: document.getElementById('video-gen-timestamp-modal'),
    offsetSecondsInput: document.getElementById('video-gen-offset-seconds'),
    scaleFactorInput: document.getElementById('video-gen-scale-factor'),
    cancelTimestampBtn: document.getElementById('video-gen-cancel-timestamp'),
    applyTimestampBtn: document.getElementById('video-gen-apply-timestamp'),
    subtitleOverlay: document.getElementById('video-gen-subtitle-overlay'),
    subtitleText: document.getElementById('video-gen-subtitle-text'),
    videoContainer: document.getElementById('video-gen-container'),
    tabButtons: {
        youtube: document.getElementById('video-gen-tab-youtube'),
        upload: document.getElementById('video-gen-tab-upload'),
        url: document.getElementById('video-gen-tab-url')
    },
    tabContents: {
        youtube: document.getElementById('video-gen-content-youtube'),
        upload: document.getElementById('video-gen-content-upload'),
        url: document.getElementById('video-gen-content-url')
    },
    youtubeUrlInput: document.getElementById('video-gen-youtube-url'),
    urlError: document.getElementById('video-gen-url-error'),
    videoUploadInput: document.getElementById('video-gen-video-upload'),
    fileUploadText: document.getElementById('video-gen-file-upload-text'),
    directUrlInput: document.getElementById('video-gen-direct-url'),
    durationContainer: document.getElementById('video-gen-duration-container'),
    videoDurationInput: document.getElementById('video-gen-video-duration'),
    localPlayer: document.getElementById('video-gen-local-video-player'),
    ytPlayerContainer: document.getElementById('video-gen-yt-player-container'),
};
let videoGen_finalSubtitleContent = '';
let videoGen_abortController = null;
let videoGen_exportAbortController = null;
let videoGen_player = null; // For YT duration check
let videoGen_isYTAPILoaded = false;
let videoGen_parsedSubtitles = [];
let videoGen_subtitleSyncInterval = null;
let videoGen_previewPlayer = null;
let videoGen_currentInputMode = 'youtube';
let videoGen_uploadedFile = {
    base64: null,
    mimeType: null,
    name: null,
    fileObject: null,
};
window.onYouTubeIframeAPIReady = () => { videoGen_isYTAPILoaded = true; };
function videoGen_populateLanguages() {
    const translations = TRANSLATIONS[currentLanguage];
    dom_video.outputLanguageSelect.innerHTML = LANGUAGES.map(lang => `<option value="${lang.value}">${translations[lang.i18nKey] || lang.text}</option>`).join('');
    dom_video.outputLanguageSelect.value = 'en';
}
function videoGen_setupEventListeners() {
    dom_video.generateBtn.addEventListener('click', videoGen_handleGeneration);
    dom_video.previewBtn.addEventListener('click', videoGen_toggleVideoPreview);
    dom_video.cancelBtn.addEventListener('click', () => {
        if (videoGen_abortController) {
            videoGen_abortController.abort();
            videoGen_toggleLoading(false);
            videoGen_showStatus('Generation was cancelled', 'info');
        }
    });
    dom_video.copyBtn.addEventListener('click', videoGen_copyToClipboard);
    dom_video.downloadBtn.addEventListener('click', videoGen_downloadSubtitleFile);
    dom_video.exportVideoBtn.addEventListener('click', videoGen_startVideoExport);
    dom_video.exportCancelBtn.addEventListener('click', () => {
        if (videoGen_exportAbortController) {
            videoGen_exportAbortController.abort('User cancelled export.');
        }
    });
    dom_video.retryBtn.addEventListener('click', videoGen_handleGeneration);
    dom_video.editBtn.addEventListener('click', videoGen_toggleEditMode);
    dom_video.timestampBtn.addEventListener('click', () => dom_video.timestampModal.classList.remove('hidden'));
    dom_video.cancelTimestampBtn.addEventListener('click', () => dom_video.timestampModal.classList.add('hidden'));
    dom_video.applyTimestampBtn.addEventListener('click', videoGen_adjustTimestamps);
    Object.keys(dom_video.tabButtons).forEach(key => { dom_video.tabButtons[key].addEventListener('click', () => videoGen_switchTab(key)); });
    dom_video.youtubeUrlInput.addEventListener('input', videoGen_validateYouTubeUrl);
    dom_video.youtubeUrlInput.addEventListener('change', videoGen_handleUrlInputChange);
    dom_video.videoUploadInput.addEventListener('change', videoGen_handleFileUpload);
    dom_video.directUrlInput.addEventListener('change', videoGen_handleDirectUrlChange);
    dom_video.localPlayer.addEventListener('timeupdate', () => { videoGen_updateSubtitles(dom_video.localPlayer.currentTime); });
    dom_video.localPlayer.addEventListener('seeked', () => { videoGen_updateSubtitles(dom_video.localPlayer.currentTime); });
    dom_video.localPlayer.addEventListener('play', videoGen_onPlayerReady);
}
function videoGen_showStatus(message, type = 'info', isTransient = false) {
    dom_video.outputContainer.classList.remove('hidden');
    dom_video.statusContainer.classList.remove('hidden');
    if (!isTransient) {
        dom_video.resultsWrapper.classList.add('hidden');
    }
    dom_video.statusMessage.textContent = message;
    const classes = {
        success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700',
        error: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700',
        info: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-700',
        warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
    };
    dom_video.statusContainer.className = `text-center p-4 rounded-lg mb-4 ${classes[type] || classes.info}`;
    if (isTransient) {
        setTimeout(() => {
            if (dom_video.statusMessage.textContent === message) {
                dom_video.statusContainer.classList.add('hidden');
            }
        }, 3000);
    }
}
function videoGen_toggleLoading(isLoading) {
    dom_video.generateBtn.disabled = isLoading;
    dom_video.spinner.classList.toggle('hidden', !isLoading);
    dom_video.btnText.classList.toggle('hidden', isLoading);
    dom_video.cancelBtn.classList.toggle('hidden', !isLoading);
    // Disable form elements while loading
    dom_video.outputLanguageSelect.disabled = isLoading;
    dom_video.outputFormatSelect.disabled = isLoading;
    dom_video.youtubeUrlInput.disabled = isLoading;
    dom_video.videoUploadInput.disabled = isLoading;
    dom_video.directUrlInput.disabled = isLoading;
    Object.values(dom_video.tabButtons).forEach(btn => btn.disabled = isLoading);
}
function videoGen_copyToClipboard() {
    if (!dom_video.subtitleOutput.value)
        return;
    navigator.clipboard.writeText(dom_video.subtitleOutput.value).then(() => {
        videoGen_showStatus('Copied to clipboard!', 'success', true);
    }).catch(err => {
        console.error('Failed to copy text:', err);
        videoGen_showStatus('Could not copy text.', 'error');
    });
}
function videoGen_downloadSubtitleFile() {
    if (!videoGen_finalSubtitleContent) {
        videoGen_showStatus('No subtitle content to download.', 'warning');
        return;
    }
    const format = dom_video.outputFormatSelect.value;
    const extension = format.toLowerCase();
    const mimeType = `text/${extension === 'txt' ? 'plain' : extension}`;
    const originalName = videoGen_uploadedFile.name || 'video';
    const filename = `${originalName.substring(0, originalName.lastIndexOf('.')) || originalName}.${extension}`;
    const blob = new Blob([videoGen_finalSubtitleContent], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function videoGen_normalizeTimestamp(ts, format = 'srt') {
    const sep = format === 'vtt' ? '.' : ',';
    if (!ts || typeof ts !== 'string')
        return `00:00:00${sep}000`;
    const parts = ts.split(/[:.,]/).map(p => parseInt(p, 10) || 0);
    let h = 0, m = 0, s = 0, ms = 0;
    if (parts.length === 4)
        [h, m, s, ms] = parts;
    else if (parts.length === 3)
        [h, m, s] = parts;
    else if (parts.length === 2)
        [m, s] = parts;
    let totalMs = h * 3600000 + m * 60000 + s * 1000 + ms;
    const nH = Math.floor(totalMs / 3600000);
    totalMs %= 3600000;
    const nM = Math.floor(totalMs / 60000);
    totalMs %= 60000;
    const nS = Math.floor(totalMs / 1000);
    return `${String(nH).padStart(2, '0')}:${String(nM).padStart(2, '0')}:${String(nS).padStart(2, '0')}${sep}${String(totalMs % 1000).padStart(3, '0')}`;
}
function videoGen_filterAndValidateSubtitles(data) {
    if (!Array.isArray(data)) {
        return [];
    }
    // Filter for basic structural validity and positive duration
    const validItems = data.filter(item => {
        if (!item || typeof item.text !== 'string' || !item.startTime || !item.endTime) {
            return false;
        }
        const startTimeSec = videoGen_timeStringToSeconds(item.startTime);
        const endTimeSec = videoGen_timeStringToSeconds(item.endTime);
        return endTimeSec > startTimeSec;
    });
    // Sort by start time to correct any model-induced ordering issues
    validItems.sort((a, b) => {
        const aStart = videoGen_timeStringToSeconds(a.startTime);
        const bStart = videoGen_timeStringToSeconds(b.startTime);
        return aStart - bStart;
    });
    return validItems;
}
function videoGen_formatSubtitlesFromJSON(data, format) {
    if (!Array.isArray(data))
        return "Error: Invalid subtitle data.";
    switch (format) {
        case 'srt': return data.map((item, i) => `${i + 1}\n${videoGen_normalizeTimestamp(item.startTime, 'srt')} --> ${videoGen_normalizeTimestamp(item.endTime, 'srt')}\n${(item.text || "").trim()}`).join('\n\n');
        case 'vtt': return "WEBVTT\n\n" + data.map(item => `${videoGen_normalizeTimestamp(item.startTime, 'vtt')} --> ${videoGen_normalizeTimestamp(item.endTime, 'vtt')}\n${(item.text || "").trim()}`).join('\n\n');
        case 'txt': return data.map(item => (item.text || "").trim()).join(' ');
        default: return "Unsupported format";
    }
}
async function videoGen_handleGeneration() {
    apiKeyManager.refreshKeys();
    if (apiKeyManager.keys.length === 0) {
        videoGen_showStatus("An API Key is required. Please add one in the main settings page.", 'error');
        return;
    }
    let videoPart = null;
    if (videoGen_currentInputMode === 'youtube') {
        const url = dom_video.youtubeUrlInput.value.trim();
        if (!videoGen_validateYouTubeUrl()) {
            videoGen_showStatus('Please enter a valid YouTube URL.', 'error');
            return;
        }
        videoPart = { "fileData": { "mimeType": "video/mp4", "fileUri": url } };
    }
    else if (videoGen_currentInputMode === 'upload') {
        if (!videoGen_uploadedFile.base64 || !videoGen_uploadedFile.mimeType) {
            videoGen_showStatus('Please select a file to upload first.', 'error');
            return;
        }
        videoPart = { "inlineData": { "mimeType": videoGen_uploadedFile.mimeType, "data": videoGen_uploadedFile.base64 } };
    }
    else if (videoGen_currentInputMode === 'url') {
        const url = dom_video.directUrlInput.value.trim();
        if (!url) {
            videoGen_showStatus('Please enter a direct video URL.', 'error');
            return;
        }
        videoPart = { "fileData": { "mimeType": "video/mp4", "fileUri": url } };
    }
    if (!videoPart) {
        videoGen_showStatus('No valid video source selected.', 'error');
        return;
    }
    videoGen_abortController = new AbortController();
    const { signal } = videoGen_abortController;
    // Reset UI for new generation
    dom_video.outputContainer.classList.remove('hidden');
    dom_video.statusContainer.classList.add('hidden');
    dom_video.resultsWrapper.classList.add('hidden');
    dom_video.retryBtn.classList.add('hidden');
    dom_video.subtitleOutput.value = '';
    videoGen_finalSubtitleContent = '';
    videoGen_parsedSubtitles = [];
    dom_video.exportVideoBtn.disabled = true;
    dom_video.exportVideoBtn.title = 'Generate subtitles first to enable export.';
    videoGen_toggleLoading(true);
    dom_video.progressContainer.classList.remove('hidden');
    dom_video.progressBar.style.width = `0%`;
    dom_video.progressStatus.textContent = 'Initializing...';
    dom_video.progressPercentage.textContent = `0%`;
    videoGen_showStatus('Sending request to Gemini API...', 'info');
    const model = dom.modelSelect.value;
    const useProxy = dom.useProxyCheckbox.checked;
    const customProxyUrl = dom.customProxyInput.value.trim();
    const targetLanguageOption = dom_video.outputLanguageSelect.options[dom_video.outputLanguageSelect.selectedIndex];
    const targetLanguage = targetLanguageOption.text;
    const duration = dom_video.videoDurationInput.value.trim();
    const responseSchema = { type: 'ARRAY', items: { type: 'OBJECT', properties: { startTime: { type: 'STRING' }, endTime: { type: 'STRING' }, text: { type: 'STRING' } }, required: ["startTime", "endTime", "text"] } };
    let langInstruction = targetLanguageOption.value === 'auto' ? 'Your task is to transcribe the video in its original language.' : `CRITICAL: Your primary task is to TRANSLATE the video's audio into ${targetLanguage} and generate subtitles. The final output MUST be in ${targetLanguage}.`;
    let finalOutputInstruction = `The 'text' field must contain the final ${targetLanguageOption.value === 'auto' ? 'transcribed' : 'TRANSLATED'} text.`;
    const durationInstruction = duration ? `The video duration is ${duration}. Timestamps must not exceed this.` : '';
    const promptText = `You are an expert transcriptionist. Your main task is: ${langInstruction} ${durationInstruction} Create a precise, time-stamped transcript. Strict rules: NO REPETITION. SHORT SEGMENTS under 45 characters. SEQUENTIAL TIMESTAMPS. ACCURATE JSON: Output a single, valid JSON array of objects matching the schema. ${finalOutputInstruction} No extra text or markdown. Ensure 100% fidelity to the audio content. Use HH:MM:SS.mmm format for timestamps.`;
    const baseRequestBody = {
        contents: [{ "role": "user", "parts": [videoPart, { "text": promptText }] }],
        generationConfig: { "responseMimeType": "application/json", "responseSchema": responseSchema }
    };
    let key = apiKeyManager.getNextKey();
    if (!key) {
        videoGen_showStatus("API Key not found.", 'error');
        videoGen_toggleLoading(false);
        return;
    }
    const directApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${key}`;
    const API_URL = useProxy ? customProxyUrl : directApiUrl;
    const finalRequestBody = useProxy ? { endpoint: directApiUrl, ...baseRequestBody } : baseRequestBody;
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalRequestBody),
            signal: signal
        });
        if (!response.ok) {
            const errText = await response.text();
            try {
                const errJson = JSON.parse(errText);
                throw new Error(`API Error (${response.status}): ${errJson.error?.message || 'Unknown'}`);
            }
            catch {
                throw new Error(`API Error (${response.status}): ${errText}`);
            }
        }
        dom_video.progressStatus.textContent = 'Receiving response...';
        dom_video.progressBar.style.width = '20%';
        dom_video.progressPercentage.textContent = '20%';
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '', finalSubtitleJsonString = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done)
                break;
            buffer += decoder.decode(value, { stream: true });
            let lineEndIndex;
            while ((lineEndIndex = buffer.indexOf('\n')) >= 0) {
                const line = buffer.substring(0, lineEndIndex).trim();
                buffer = buffer.substring(lineEndIndex + 1);
                if (line.startsWith('data: ')) {
                    try {
                        const jsonText = line.substring(5).trim();
                        if (jsonText) {
                            const jsonChunk = JSON.parse(jsonText);
                            const textPart = jsonChunk?.candidates?.[0]?.content?.parts?.[0]?.text;
                            if (textPart)
                                finalSubtitleJsonString += textPart;
                        }
                    }
                    catch (e) {
                        console.warn("Skipping invalid JSON chunk:", line, e);
                    }
                }
            }
            const progress = Math.min(90, 20 + (finalSubtitleJsonString.length / 500));
            dom_video.progressStatus.textContent = 'Processing transcription...';
            dom_video.progressBar.style.width = `${progress}%`;
            dom_video.progressPercentage.textContent = `${Math.round(progress)}%`;
        }
        try {
            const cleanedJsonString = finalSubtitleJsonString.replace(/^```json\s*/, '').replace(/\s*```$/, '');
            const rawData = JSON.parse(cleanedJsonString);
            const subtitleData = videoGen_filterAndValidateSubtitles(rawData);
            videoGen_finalSubtitleContent = videoGen_formatSubtitlesFromJSON(subtitleData, dom_video.outputFormatSelect.value);
            dom_video.subtitleOutput.value = videoGen_finalSubtitleContent;
            videoGen_parsedSubtitles = videoGen_parseSubtitlesForPlayback(videoGen_finalSubtitleContent);
            if (videoGen_currentInputMode === 'upload' && videoGen_parsedSubtitles.length > 0) {
                dom_video.exportVideoBtn.disabled = false;
                dom_video.exportVideoBtn.title = 'Export video with burned-in subtitles';
            }
            dom_video.progressStatus.textContent = 'Complete!';
            dom_video.progressBar.style.width = '100%';
            dom_video.progressPercentage.textContent = '100%';
            dom_video.resultsWrapper.classList.remove('hidden');
            videoGen_showStatus('Subtitle generation complete!', 'success', true);
        }
        catch (jsonError) {
            videoGen_showStatus(`Failed to parse final response. Error: ${jsonError.message}`, 'error');
            dom_video.subtitleOutput.value = `--- PARSING FAILED ---\n${finalSubtitleJsonString}`;
            dom_video.retryBtn.classList.remove('hidden');
        }
    }
    catch (error) {
        if (error.name !== 'AbortError') {
            videoGen_showStatus(`An error occurred: ${error.message}.`, 'error');
            dom_video.retryBtn.classList.remove('hidden');
        }
    }
    finally {
        videoGen_toggleLoading(false);
        videoGen_abortController = null;
        setTimeout(() => { dom_video.progressContainer.classList.add('hidden'); }, 2000);
    }
}
function videoGen_switchTab(mode) {
    videoGen_currentInputMode = mode;
    Object.keys(dom_video.tabButtons).forEach(key => {
        dom_video.tabButtons[key].classList.toggle('active', key === mode);
        dom_video.tabContents[key].classList.toggle('active', key === mode);
        dom_video.tabContents[key].classList.toggle('hidden', key !== mode);
    });
    dom_video.previewBtn.disabled = !(mode === 'youtube' || mode === 'upload');
    dom_video.exportVideoBtn.disabled = true;
    dom_video.exportVideoBtn.title = 'Video export is only available for uploaded files.';
    videoGen_destroyPlayers();
    dom_video.durationContainer.classList.add('hidden');
    if (mode === 'youtube' && dom_video.youtubeUrlInput.value)
        videoGen_handleUrlInputChange();
    if (mode === 'url' && dom_video.directUrlInput.value)
        videoGen_handleDirectUrlChange();
}
function videoGen_validateYouTubeUrl() {
    const url = dom_video.youtubeUrlInput.value.trim();

    // Regex to match YouTube videos, shorts, live, playlists, clips, embeds, and youtu.be links
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|shorts\/|live\/|playlist\?list=|clip\/)|youtu\.be\/)[\w-]{11,}/;

    const isValid = url && youtubeRegex.test(url);
    dom_video.urlError.classList.toggle('hidden', isValid || !url);
    return isValid;
}
function videoGen_formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
function videoGen_getVideoDuration(source) {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = () => {
        if (video.src.startsWith('blob:'))
            window.URL.revokeObjectURL(video.src);
        if (video.duration && isFinite(video.duration)) {
            dom_video.videoDurationInput.value = videoGen_formatDuration(video.duration);
            dom_video.durationContainer.classList.remove('hidden');
        }
    };
    video.onerror = () => {
        if (video.src.startsWith('blob:'))
            window.URL.revokeObjectURL(video.src);
        videoGen_showStatus('Could not get video duration.', 'warning');
    };
    if (source instanceof File)
        video.src = URL.createObjectURL(source);
    else
        video.src = source;
}
function videoGen_getYouTubeVideoDuration(videoId) {
    if (!videoGen_isYTAPILoaded) {
        setTimeout(() => videoGen_getYouTubeVideoDuration(videoId), 500);
        return;
    }
    if (videoGen_player) {
        videoGen_player.destroy();
        videoGen_player = null;
    }
    videoGen_player = new YT.Player('video-gen-yt-player-hidden', {
        height: '0', width: '0', videoId,
        events: {
            'onReady': (event) => {
                const duration = event.target.getDuration();
                if (duration > 0) {
                    dom_video.videoDurationInput.value = videoGen_formatDuration(duration);
                    dom_video.durationContainer.classList.remove('hidden');
                }
                event.target.destroy();
                videoGen_player = null;
            },
            'onError': () => { if (videoGen_player) {
                videoGen_player.destroy();
                videoGen_player = null;
            } }
        }
    });
}
function videoGen_handleUrlInputChange() {
    const url = dom_video.youtubeUrlInput.value.trim();
    if (videoGen_validateYouTubeUrl()) {
        const match = url.match(/(?:v=|be\/|embed\/)([\w-]{11})/);
        if (match && match[1]) {
            dom_video.durationContainer.classList.add('hidden');
            videoGen_getYouTubeVideoDuration(match[1]);
        }
    }
    else {
        dom_video.durationContainer.classList.add('hidden');
    }
}
function videoGen_handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file)
        return;
    dom_video.youtubeUrlInput.value = '';
    dom_video.directUrlInput.value = '';
    videoGen_uploadedFile.name = file.name;
    videoGen_uploadedFile.mimeType = file.type;
    videoGen_uploadedFile.fileObject = file;
    dom_video.fileUploadText.textContent = file.name;
    dom_video.fileUploadText.classList.remove('text-slate-500', 'dark:text-slate-400');
    dom_video.fileUploadText.classList.add('text-slate-900', 'dark:text-white');
    videoGen_getVideoDuration(file);
    const reader = new FileReader();
    reader.onload = (e) => { videoGen_uploadedFile.base64 = e.target.result.split(',')[1]; };
    reader.onerror = () => { videoGen_showStatus('Error reading the selected file.', 'error'); videoGen_uploadedFile.base64 = null; };
    reader.readAsDataURL(file);
}
function videoGen_handleDirectUrlChange() {
    const url = dom_video.directUrlInput.value.trim();
    if (!url)
        return;
    dom_video.youtubeUrlInput.value = '';
    dom_video.videoUploadInput.value = '';
    dom_video.fileUploadText.textContent = 'Click to choose a video file';
    videoGen_uploadedFile = { base64: null, mimeType: null, name: null, fileObject: null };
    videoGen_getVideoDuration(url);
}
function videoGen_toggleVideoPreview() {
    if (dom_video.videoPreview.classList.contains('hidden')) { // SHOW PLAYER
        if (videoGen_currentInputMode === 'youtube') {
            const url = dom_video.youtubeUrlInput.value.trim();
            if (!videoGen_validateYouTubeUrl()) {
                videoGen_showStatus('Please enter a valid YouTube URL first', 'error');
                return;
            }
            const match = url.match(/(?:v=|be\/|embed\/)([\w-]{11})/);
            if (match && match[1]) {
                videoGen_setupYouTubePlayer(match[1]);
                dom_video.previewBtn.innerHTML = '<i class="fa-solid fa-eye-slash w-4"></i>';
            }
            else {
                videoGen_showStatus('Could not extract video ID from URL', 'error');
            }
        }
        else if (videoGen_currentInputMode === 'upload') {
            if (!videoGen_uploadedFile.fileObject) {
                videoGen_showStatus('Please select a file first to preview.', 'error');
                return;
            }
            videoGen_setupLocalPlayer(videoGen_uploadedFile.fileObject);
            dom_video.previewBtn.innerHTML = '<i class="fa-solid fa-eye-slash w-4"></i>';
        }
    }
    else { // HIDE PLAYER
        videoGen_destroyPlayers();
        dom_video.previewBtn.innerHTML = '<i class="fa-solid fa-play w-4"></i>';
    }
}
function videoGen_setupYouTubePlayer(videoId) {
    videoGen_destroyPlayers();
    dom_video.videoPreview.classList.remove('hidden');
    dom_video.localPlayer.classList.add('hidden');
    dom_video.ytPlayerContainer.classList.remove('hidden');
    videoGen_previewPlayer = new YT.Player('video-gen-yt-player-container', {
        height: '100%', width: '100%', videoId,
        playerVars: { 'playsinline': 1, 'rel': 0, 'fs': 1, 'controls': 1 },
        events: { 'onReady': videoGen_onPlayerReady, 'onStateChange': videoGen_onPlayerStateChange }
    });
}
function videoGen_setupLocalPlayer(file) {
    videoGen_destroyPlayers();
    dom_video.videoPreview.classList.remove('hidden');
    dom_video.ytPlayerContainer.classList.add('hidden');
    dom_video.localPlayer.classList.remove('hidden');
    const fileURL = URL.createObjectURL(file);
    dom_video.localPlayer.src = fileURL;
    videoGen_onPlayerReady();
}
function videoGen_destroyPlayers() {
    if (videoGen_previewPlayer && typeof videoGen_previewPlayer.destroy === 'function') {
        videoGen_previewPlayer.destroy();
    }
    videoGen_previewPlayer = null;
    if (dom_video.localPlayer.src) {
        dom_video.localPlayer.pause();
        URL.revokeObjectURL(dom_video.localPlayer.src);
        dom_video.localPlayer.removeAttribute('src');
        dom_video.localPlayer.load();
    }
    dom_video.localPlayer.classList.add('hidden');
    dom_video.ytPlayerContainer.classList.remove('hidden');
    if (videoGen_subtitleSyncInterval)
        clearInterval(videoGen_subtitleSyncInterval);
    videoGen_subtitleSyncInterval = null;
    dom_video.videoPreview.classList.add('hidden');
    dom_video.subtitleText.innerHTML = '&nbsp;';
}
function videoGen_timeStringToSeconds(timeString) {
    if (!timeString)
        return 0;
    const [timePart, msPart] = timeString.split(/[,.]/);
    if (!timePart)
        return 0;
    const timeParts = timePart.split(':').map(Number);
    let seconds = 0;
    if (timeParts.length === 3)
        seconds = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];
    else if (timeParts.length === 2)
        seconds = timeParts[0] * 60 + timeParts[1];
    return seconds + (parseInt(msPart || '0', 10) / 1000);
}
function videoGen_parseSubtitlesForPlayback(content) {
    if (!content)
        return [];
    const lines = content.trim().split(/\r?\n/);
    const subtitles = [];
    const startIndex = lines[0] && lines[0].toUpperCase().startsWith('WEBVTT') ? 1 : 0;
    for (let i = startIndex; i < lines.length; i++) {
        if (lines[i] && lines[i].includes('-->')) {
            const [startStr, endStr] = lines[i].split(' --> ');
            const textLines = [];
            let j = i + 1;
            while (j < lines.length && lines[j]) {
                textLines.push(lines[j]);
                j++;
            }
            subtitles.push({
                start: videoGen_timeStringToSeconds(startStr?.trim()),
                end: videoGen_timeStringToSeconds(endStr?.trim().split(' ')[0]),
                text: textLines.join('<br>')
            });
            i = j;
        }
    }
    return subtitles;
}
function videoGen_updateSubtitles(currentTime) {
    if (!videoGen_parsedSubtitles || videoGen_parsedSubtitles.length === 0)
        return;
    const currentSubtitle = videoGen_parsedSubtitles.find(sub => currentTime >= sub.start && currentTime <= sub.end);
    let newHtml = currentSubtitle && currentSubtitle.text
        ? currentSubtitle.text.split('<br>').map(line => `<div dir="auto"><span class="subtitle-line">${line}</span></div>`).join('')
        : '&nbsp;';
    if (dom_video.subtitleText.innerHTML !== newHtml)
        dom_video.subtitleText.innerHTML = newHtml;
}
function videoGen_onPlayerReady() {
    if (videoGen_parsedSubtitles && videoGen_parsedSubtitles.length > 0) {
        dom_video.subtitleOverlay.classList.remove('hidden');
    } else {
        dom_video.subtitleOverlay.classList.add('hidden');
    }
    const selectedLanguage = dom_video.outputLanguageSelect.value;
    if (RTL_LANGUAGES.has(selectedLanguage)) {
        dom_video.subtitleOverlay.classList.add('text-right');
        dom_video.subtitleOverlay.classList.remove('text-center');
    }
    else {
        dom_video.subtitleOverlay.classList.remove('text-right');
        dom_video.subtitleOverlay.classList.add('text-center');
    }
}
function videoGen_onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        if (videoGen_subtitleSyncInterval)
            clearInterval(videoGen_subtitleSyncInterval);
        videoGen_subtitleSyncInterval = window.setInterval(() => {
            if (videoGen_previewPlayer && typeof videoGen_previewPlayer.getCurrentTime === 'function') {
                videoGen_updateSubtitles(videoGen_previewPlayer.getCurrentTime());
            }
        }, 100);
    }
    else {
        if (videoGen_subtitleSyncInterval) {
            clearInterval(videoGen_subtitleSyncInterval);
            videoGen_subtitleSyncInterval = null;
        }
        if (event.data !== YT.PlayerState.PAUSED)
            dom_video.subtitleText.innerHTML = '&nbsp;';
    }
}
function videoGen_toggleEditMode() {
    const isReadOnly = dom_video.subtitleOutput.readOnly;
    dom_video.subtitleOutput.readOnly = !isReadOnly;
    dom_video.subtitleOutput.classList.toggle('bg-slate-100', isReadOnly);
    dom_video.subtitleOutput.classList.toggle('dark:bg-slate-900', isReadOnly);
    dom_video.subtitleOutput.classList.toggle('bg-slate-200', !isReadOnly);
    dom_video.subtitleOutput.classList.toggle('dark:bg-slate-700', !isReadOnly);
    dom_video.editBtn.innerHTML = `<i class="fa-solid ${!isReadOnly ? 'fa-save' : 'fa-edit'}"></i> ${!isReadOnly ? 'Save' : 'Edit'}`;
    if (!isReadOnly)
        dom_video.subtitleOutput.focus();
    else {
        videoGen_finalSubtitleContent = dom_video.subtitleOutput.value;
        videoGen_parsedSubtitles = videoGen_parseSubtitlesForPlayback(videoGen_finalSubtitleContent);
        videoGen_showStatus('Subtitles updated locally', 'success', true);
    }
}
function videoGen_adjustTimestamps() {
    const offset = parseFloat(dom_video.offsetSecondsInput.value) || 0;
    const scale = parseFloat(dom_video.scaleFactorInput.value) || 1.0;
    if (videoGen_finalSubtitleContent) {
        const adjusted = videoGen_adjustTimestampsInContent(videoGen_finalSubtitleContent, offset, scale);
        dom_video.subtitleOutput.value = adjusted;
        videoGen_finalSubtitleContent = adjusted;
        videoGen_parsedSubtitles = videoGen_parseSubtitlesForPlayback(videoGen_finalSubtitleContent);
        videoGen_showStatus('Timestamps adjusted successfully', 'success', true);
    }
    dom_video.timestampModal.classList.add('hidden');
}
function videoGen_adjustTimestampsInContent(content, offset, scale) {
    if (dom_video.outputFormatSelect.value === 'txt')
        return content;
    const timeToSeconds = (timeStr) => {
        const [timePart, msPart] = timeStr.split(/[,.]/);
        const timeSegments = timePart.split(':').map(Number);
        const hours = timeSegments.length > 2 ? timeSegments[0] : 0;
        const minutes = timeSegments.length > 1 ? timeSegments[timeSegments.length - 2] : 0;
        const seconds = timeSegments.length > 0 ? timeSegments[timeSegments.length - 1] : 0;
        const milliseconds = parseInt(msPart || '0', 10);
        return (hours * 3600) + (minutes * 60) + seconds + (milliseconds / 1000);
    };
    const secondsToTime = (totalSeconds, separator = ',') => {
        if (totalSeconds < 0)
            totalSeconds = 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const milliseconds = Math.round((totalSeconds - Math.floor(totalSeconds)) * 1000);
        const pad = (num, len = 2) => String(num).padStart(len, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}${separator}${String(milliseconds).padStart(3, '0')}`;
    };
    const timeRegex = /(\d{1,2}:\d{2}:\d{2}[,.]\d{3})\s*-->\s*(\d{1,2}:\d{2}:\d{2}[,.]\d{3})/;
    return content.split(/\r?\n/).map(line => {
        const match = line.match(timeRegex);
        if (match) {
            const [, startStr, endStr] = match;
            const separator = startStr.includes(',') ? ',' : '.';
            const startSeconds = timeToSeconds(startStr);
            const endSeconds = timeToSeconds(endStr);
            const newStart = startSeconds * scale + offset;
            const newEnd = endSeconds * scale + offset;
            const newStartStr = secondsToTime(newStart, separator);
            const newEndStr = secondsToTime(newEnd, separator);
            return line.replace(timeRegex, `${newStartStr} --> ${newEndStr}`);
        }
        return line;
    }).join('\n');
}

async function videoGen_startVideoExport() {
    if (!videoGen_uploadedFile.fileObject) {
        videoGen_showStatus('No local video file found for export.', 'error');
        return;
    }
    if (videoGen_parsedSubtitles.length === 0) {
        videoGen_showStatus('No subtitles available to export.', 'error');
        return;
    }

    videoGen_exportAbortController = new AbortController();
    const signal = videoGen_exportAbortController.signal;

    dom_video.exportProgressContainer.classList.remove('hidden');
    dom_video.resultsWrapper.classList.add('hidden'); // Hide the main results buttons
    
    const updateExportProgress = (percentage) => {
        const p = Math.min(100, Math.max(0, Math.round(percentage)));
        dom_video.exportProgressBar.style.width = `${p}%`;
        dom_video.exportProgressPercentage.textContent = `${p}%`;
    };
    updateExportProgress(0);

    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let mediaRecorder;
    const recordedChunks = [];
    
    const cleanup = () => {
        video.pause();
        video.src = '';
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        dom_video.exportProgressContainer.classList.add('hidden');
        dom_video.resultsWrapper.classList.remove('hidden');
    };
    
    signal.addEventListener('abort', () => {
        log(`Video export cancelled by user.`, 'warn');
        videoGen_showStatus('Video export cancelled.', 'info');
        cleanup();
    });

    try {
        log('Starting video export process...');
        video.src = URL.createObjectURL(videoGen_uploadedFile.fileObject);
        await new Promise((resolve, reject) => {
            video.onloadedmetadata = resolve;
            video.onerror = () => reject(new Error('Failed to load video metadata.'));
            if (signal.aborted) reject(new Error(signal.reason));
        });

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const canvasStream = canvas.captureStream(30);

        // Use Web Audio API for robust audio capture
        const audioContext = new AudioContext();
        const sourceNode = audioContext.createMediaElementSource(video);
        const destinationNode = audioContext.createMediaStreamDestination();
        sourceNode.connect(destinationNode);
        
        const finalStream = new MediaStream([
            ...canvasStream.getVideoTracks(),
            ...destinationNode.stream.getAudioTracks()
        ]);
        
        const MimeTypes = [
            'video/webm; codecs=vp9,opus',
            'video/webm; codecs=vp8,opus',
            'video/webm',
        ];
        const supportedType = MimeTypes.find(type => MediaRecorder.isTypeSupported(type));

        if (!supportedType) {
            throw new Error('Your browser does not support the required MediaRecorder codecs for video export with audio.');
        }

        log(`Using supported MIME type for recording: ${supportedType}`);
        mediaRecorder = new MediaRecorder(finalStream, { mimeType: supportedType });
        
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            if (signal.aborted) return;
            log('MediaRecorder stopped. Creating final video file.');
            const blob = new Blob(recordedChunks, { type: supportedType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const originalName = videoGen_uploadedFile.name.substring(0, videoGen_uploadedFile.name.lastIndexOf('.'));
            a.download = `${originalName}_subtitled.webm`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            videoGen_showStatus('Video export successful!', 'success');
            cleanup();
        };
        
        video.volume = 0; // Use volume=0 instead of muted=true to ensure audio is captured
        await video.play();
        mediaRecorder.start();

        let lastTime = -1;
        const renderFrame = (now) => {
            if (signal.aborted || video.ended || video.paused) {
                if (!video.ended && !signal.aborted) {
                    video.play().catch(e => console.error("Could not resume video", e));
                }
                if (video.ended) {
                   cleanup();
                }
                return;
            }

            if (video.currentTime !== lastTime) {
                lastTime = video.currentTime;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                const currentSub = videoGen_parsedSubtitles.find(s => video.currentTime >= s.start && video.currentTime <= s.end);
                if (currentSub) {
                    const fontSize = Math.max(20, canvas.height * 0.04);
                    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    const textLines = currentSub.text.split('<br>');
                    const padding = fontSize * 0.4;
                    
                    textLines.forEach((line, index) => {
                        const y = canvas.height - ((textLines.length - 1 - index) * (fontSize + padding)) - padding * 2;
                        
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                        const textMetrics = ctx.measureText(line);
                        ctx.fillRect(
                            canvas.width / 2 - textMetrics.width / 2 - padding,
                            y - fontSize - padding / 2,
                            textMetrics.width + padding * 2,
                            fontSize + padding
                        );

                        ctx.fillStyle = 'white';
                        ctx.fillText(line, canvas.width / 2, y);
                    });
                }
                updateExportProgress((video.currentTime / video.duration) * 100);
            }
            requestAnimationFrame(renderFrame);
        };
        requestAnimationFrame(renderFrame);
        
    } catch (error) {
        if (!signal.aborted) {
            log(`Video export failed: ${error.message}`, 'error');
            videoGen_showStatus(`Video export failed: ${error.message}`, 'error');
        }
        cleanup();
    }
}

// --- START: App Initialization ---
function init() {
    // Populate static dropdowns first
    dom.modelSelect.innerHTML = MODELS.map(model => `<option value="${model}">${model}</option>`).join('');
    loadSettings();
    loadTranslationSettings();
    setLanguage(currentLanguage);
    // Main event listeners
    document.querySelectorAll('[data-mode]').forEach(btn => btn.addEventListener('click', () => {
        currentMode = btn.dataset.mode;
        currentView = 'translation';
        updateUI();
    }));
    document.querySelectorAll('[data-view]').forEach(btn => btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (view === 'settings' && currentView === 'settings') {
            currentView = 'translation';
        }
        else {
            currentView = view;
        }
        updateUI();
    }));
    dom.swapBtn.addEventListener('click', swapLanguages);
    dom.textInput.addEventListener('input', () => { updateCharCounter(); validateForm(); });
    dom.sourceLangSelect.addEventListener('change', () => {
        validateForm();
        saveSettings();
    });
    dom.targetLangSelect.addEventListener('change', () => {
        if (dom.output.value)
            dom.output.dir = RTL_LANGUAGES.has(dom.targetLangSelect.value) ? 'rtl' : 'ltr';
        saveSettings();
    });
    dom.form.addEventListener('submit', handleFormSubmit);
    dom.copyBtn.addEventListener('click', copyToClipboard);
    dom.exportBtn.addEventListener('click', exportOutput);
    dom.exportTextBtn.addEventListener('click', exportOutput);
    dom.cancelTranslationBtn.addEventListener('click', cancelTranslation);
    dom.enhancementsToolbar.querySelectorAll('.enhancement-btn').forEach(btn => btn.addEventListener('click', () => handleEnhancement(btn.dataset.action)));
    dom.themeToggleBtn.addEventListener('click', toggleTheme);
    dom.apiKeyInput.addEventListener('input', validateForm);
    dom.languageSearch.addEventListener('input', filterAndRepopulateLanguages);
    // File input listeners
    dom.dropzoneContainer.addEventListener('dragover', (e) => { e.preventDefault(); e.stopPropagation(); dom.dropzoneContainer.classList.add('bg-slate-200', 'dark:bg-slate-600'); });
    dom.dropzoneContainer.addEventListener('dragleave', (e) => { e.preventDefault(); e.stopPropagation(); dom.dropzoneContainer.classList.remove('bg-slate-200', 'dark:bg-slate-600'); });
    dom.dropzoneContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dom.dropzoneContainer.classList.remove('bg-slate-200', 'dark:bg-slate-600');
        const file = e.dataTransfer.files[0];
        if (file) {
            dom.fileUpload.files = e.dataTransfer.files;
            dom.fileUpload.dispatchEvent(new Event('change'));
        }
    });
    dom.chooseFileBtn.addEventListener('click', () => dom.fileUpload.click());
    dom.fileUpload.addEventListener('change', handleFileChange);
    dom.removeFileBtn.addEventListener('click', () => resetFileInput());
    // PDF listeners
    dom.selectAllPagesBtn.addEventListener('click', () => { if (!pdfDoc)
        return; selectedPages = new Set(Array.from({ length: pdfDoc.numPages }, (_, i) => i + 1)); dom.pdfPageViewer.querySelectorAll('.pdf-page-item').forEach(el => el.classList.add('selected')); updatePageSelectionCounter(); validateForm(); });
    dom.deselectAllPagesBtn.addEventListener('click', () => { selectedPages.clear(); dom.pdfPageViewer.querySelectorAll('.pdf-page-item').forEach(el => el.classList.remove('selected')); updatePageSelectionCounter(); validateForm(); });
    dom.combinePagesCheckbox.addEventListener('change', updatePageSelectionCounter);
    // Subtitle listeners
    dom.fetchYoutubeSubsBtn.addEventListener('click', handleFetchYouTubeSubs);
    // Subtitle Editor Tools listeners
    dom.retryFailedSubsBtn.addEventListener('click', () => startSubtitleTranslation(row => row.cells[3].textContent === '(Translation failed)'));
    dom.subtitleTableBody.addEventListener('input', saveCurrentSubtitleProgress);
    dom.findReplaceToggleBtn.addEventListener('click', () => dom.findReplacePanel.classList.toggle('hidden'));
    dom.breakLinesToggleBtn.addEventListener('click', () => dom.breakLinesPanel.classList.toggle('hidden'));
    dom.findInput.addEventListener('input', highlightMatchesInSubtitles);
    dom.findCaseSensitive.addEventListener('change', highlightMatchesInSubtitles);
    dom.replaceAllBtn.addEventListener('click', handleReplaceAllInSubtitles);
    dom.breakLinesApplyBtn.addEventListener('click', handleBreakLongLines);
    dom.loadProgressBtn.addEventListener('click', () => {
        const savedProgressRaw = localStorage.getItem(`fluentify_progress_${currentFileHash}`);
        if (savedProgressRaw) {
            const savedProgress = JSON.parse(savedProgressRaw);
            processAndDisplaySubtitles(null, null, savedProgress.translations);
            dom.savedProgressNotification.classList.add('hidden');
        }
    });
    dom.clearProgressBtn.addEventListener('click', () => {
        localStorage.removeItem(`fluentify_progress_${currentFileHash}`);
        dom.savedProgressNotification.classList.add('hidden');
        log('Cleared saved progress.', 'info');
    });
    // Settings listeners
    dom.modelSelect.addEventListener('change', saveTranslationSettings);
    dom.jobFieldSelect.addEventListener('change', saveTranslationSettings);
    dom.translationToneSelect.addEventListener('change', () => {
        dom.customToneContainer.classList.toggle('hidden', dom.translationToneSelect.value !== 'Custom');
        saveTranslationSettings();
    });
    dom.customToneInput.addEventListener('input', saveTranslationSettings);
    dom.temperatureSlider.addEventListener('input', () => {
        dom.temperatureValue.textContent = dom.temperatureSlider.value;
        saveTranslationSettings();
    });
    dom.useProxyCheckbox.addEventListener('change', () => dom.customProxyContainer.classList.toggle('hidden', !dom.useProxyCheckbox.checked));
    dom.useCustomPromptCheckbox.addEventListener('change', () => dom.customPromptContainer.classList.toggle('hidden', !dom.useCustomPromptCheckbox.checked));
    document.querySelectorAll('#settings-view input, #settings-view select, #settings-view textarea').forEach(el => {
        if (el.id === 'model' || el.id === 'job_field' || el.id === 'translation_tone' || el.id === 'custom-tone-input') {
            el.addEventListener('change', saveTranslationSettings);
            el.addEventListener('input', saveTranslationSettings);
        } else {
            el.addEventListener('change', saveSettings);
            el.addEventListener('input', saveSettings);
        }
    });
    dom.optimizePromptBtn.addEventListener('click', async () => {
        const currentPrompt = dom.customPromptInput.value;
        if (!currentPrompt)
            return;
        dom.optimizePromptBtnText.classList.add('hidden');
        dom.optimizePromptSpinner.classList.remove('hidden');
        dom.optimizePromptBtn.disabled = true;
        try {
            const optimizationPrompt = `You are a prompt engineering expert. Analyze and improve the following custom prompt for an AI translation task. The goal is to make it clearer, more effective, and less ambiguous. The final output should ONLY be the improved prompt text, without any explanations or markdown. The original prompt is:\n\n---\n${currentPrompt}\n---`;
            const model = dom.modelSelect.value;
            const useProxy = dom.useProxyCheckbox.checked;
            const customProxyUrl = dom.customProxyInput.value;
            const optimizedPrompt = await callGoogleAI(optimizationPrompt, model, useProxy, customProxyUrl, new AbortController().signal, 0.5);
            dom.customPromptInput.value = optimizedPrompt;
            log('Prompt optimized successfully.', 'success');
        }
        catch (error) {
            log(`Prompt optimization failed: ${error.message}`, 'error');
            showError(`Prompt optimization failed: ${error.message}`);
        }
        finally {
            dom.optimizePromptBtnText.classList.remove('hidden');
            dom.optimizePromptSpinner.classList.add('hidden');
            dom.optimizePromptBtn.disabled = false;
        }
    });
    dom.logToggleBtn.addEventListener('click', () => {
        const icon = dom.logToggleBtn.querySelector('i');
        const isHidden = dom.logViewer.classList.contains('max-h-0');
        if (isHidden) {
            dom.logViewer.classList.remove('max-h-0');
            dom.logViewer.style.maxHeight = dom.logContent.scrollHeight + 'px';
            icon.classList.add('rotate-180');
        }
        else {
            dom.logViewer.style.maxHeight = '0';
            setTimeout(() => dom.logViewer.classList.add('max-h-0'), 500); // Wait for transition
            icon.classList.remove('rotate-180');
        }
    });
    dom.languageSwitcher.addEventListener('change', (e) => setLanguage(e.target.value));
    // Modal listeners
    dom.howToUseBtn.addEventListener('click', () => dom.howToUseModal.classList.remove('hidden'));
    dom.howToUseCloseBtn.addEventListener('click', () => dom.howToUseModal.classList.add('hidden'));
    // Initialize Video Generator
    videoGen_setupEventListeners();
    document.getElementById('reset_translation_settings_btn').addEventListener('click', () => {
        if (!confirm('Reset translation-only settings?')) return;
        localStorage.removeItem(LS_TRANSLATION_KEY);
        dom.modelSelect.selectedIndex = 0;
        dom.jobFieldSelect.selectedIndex = 0;
        dom.translationToneSelect.selectedIndex = 0;
        dom.customToneInput.value = '';
        dom.customToneContainer.classList.add('hidden');
        log('Translation settings reset.', 'info');
    });
    document.getElementById('clear_browser_storage_btn').addEventListener('click', () => {
        if (!confirm('Clear ALL saved browser settings for this website?')) return;
        localStorage.clear();
        sessionStorage.clear();
        alert('Browser storage cleared.');
        location.reload();
    });
    updateUI();
    validateForm();
}
document.addEventListener('DOMContentLoaded', init);


document.addEventListener('DOMContentLoaded', init);
