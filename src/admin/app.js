const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    ru: {
      'app.components.LeftMenu.navbrand.title': 'Tangem CMS',
      "Auth.form.welcome.subtitle": "Log in to your Tangem CMS account",
      "Auth.form.welcome.title": "Welcome to Tangem CMS!",
    },
    en: {
      'app.components.LeftMenu.navbrand.title': 'Tangem CMS',
      "Auth.form.welcome.subtitle": "Log in to your Tangem CMS account",
      "Auth.form.welcome.title": "Welcome to Tangem CMS!",
    },
  },
};

const bootstrap = app => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
