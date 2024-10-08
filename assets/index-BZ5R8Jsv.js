(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) c(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && c(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function c(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = s(n);
    fetch(n.href, i);
  }
})();
const p = document.querySelector(".switch"),
  m = document.querySelector(".language-option.ru"),
  T = document.querySelector(".language-option.en"),
  f = document.querySelectorAll(".menuLinkAnchor"),
  k = document.querySelectorAll(".aboutUs"),
  C = document.querySelectorAll(".roadMap"),
  M = document.querySelectorAll(".tokenomic"),
  B = document.querySelectorAll(".howToBuy"),
  b = document.querySelectorAll(".slotM"),
  A = document.querySelectorAll(".connectWallet__text"),
  W = document.querySelectorAll(".tokenomicTitle3"),
  N = document.querySelectorAll(".tokenomicsText6"),
  v = document.querySelectorAll(".tokenomicsText7"),
  g = document.querySelectorAll(".tokenomicTitle4"),
  q = document.querySelectorAll(".tokenomicsText8"),
  D = document.querySelectorAll(".runStroke"),
  F = document.querySelector("#roadmapInfo8"),
  u = document.querySelector(".menu__btn"),
  x = document.querySelector(".header__wrapper"),
  H = document.querySelector(".top__timer"),
  U = document.querySelector("#seconds"),
  a = document.querySelector(".modal__copy");
setTimeout(() => {
  H.classList.add("anim"), U.classList.add("anim"), a.classList.add("loaded");
}, 1500);
f.forEach((t) => {
  t.addEventListener("click", () => {
    u.classList.remove("active"), x.classList.remove("active");
  });
});
u.addEventListener("click", () => {
  u.classList.toggle("active"), x.classList.toggle("active");
});
function y(t) {
  (p.className = "switch"), p.classList.add(t);
}
m.addEventListener("click", () => {
  y("ruL"), m.classList.add("active"), T.classList.remove("active"), h("ru");
});
T.addEventListener("click", () => {
  y("enL"), T.classList.add("active"), m.classList.remove("active"), h("en");
});
function P(t) {
  const o = document.getElementById("countdown"),
    s = document.getElementById("days"),
    c = document.getElementById("hours"),
    n = document.getElementById("minutes"),
    i = document.getElementById("seconds");
  function l() {
    const E = new Date().getTime(),
      r = t - E;
    if (r >= 0) {
      const L = Math.floor(r / 864e5),
        O = Math.floor((r % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
        S = Math.floor((r % (1e3 * 60 * 60)) / (1e3 * 60)),
        I = Math.floor((r % (1e3 * 60)) / 1e3);
      (s.textContent = L.toString().padStart(2, "0")),
        (c.textContent = O.toString().padStart(2, "0")),
        (n.textContent = S.toString().padStart(2, "0")),
        (i.textContent = I.toString().padStart(2, "0"));
    } else clearInterval(w), (o.textContent = "Time's up!");
  }
  const w = setInterval(l, 1e3);
}
const R = new Date().getTime() + 46 * 24 * 60 * 60 * 1e3;
P(R);
const e = {
  en: {
    translation: {
      welcome: `How can <span>MELL</span> -
      <br>  not blow up?)))`,
      topDescrText: "DON'T BLOW THE STACK!",
      aboutUs: "About US",
      roadMap: "RoadMap",
      tokenomics: "Tokenomics",
      howToBuy: "How to Buy",
      slots: "Slot",
      soldText: "Tokens sold:",
      connectWalletText: "Connect Wallet",
      topText:
        "Wallet access will be available in <span>90 days</span>. <br/> STAY TUNED FOR UPDATES!",
      aboutTitle: " ABOUT <span>US</span>",
      aboutTitleMob: " ABOUT <span>US</span>",
      aboutFirst:
        "MELL - the meme guy himself. Gambling, hype, provocativeness, speed, money - these are the buzzwords of a successful crypto token... and that’s exactly what we’ve done! Let the CHAOS begin!",
      aboutSecond:
        "Why are we so sure about the jackpot? By investing in MELL, you’re betting on the destruction of the industry! MELL's marketing strategy is based on the tactics of our idol, which will take us to the TOP ONE MEME COIN IN THE TON NETWORK!",
      roadmapTitle1: "Planning the promotion of MELL",
      roadmapTitle2: "Developing the website and smart contract for MELL",
      roadmapTitle3: "MELL presale",
      roadmapTitle4: "MELL sell-out, listing on ByBit, OKX, Huobi, BingX, Mexc",
      roadmapTitle5: "Creating custom MELL slots",
      roadmapTitle6: "Integrating MELL with all licensed casinos",
      roadmapTitle7:
        "Becoming the top meme coin in crypto history by dominating the gaming industry",
      roadmapTitle: "RoadMap",
      roadmapTitleMob: "RoadMap",
      roadmapInfo8:
        "DO YOU UNDERSTAND <br/> WHAT A SKID IS WAITING FOR US ALL?",
      tokenomicTitle3: "Total Supply:",
      tokenomicTitle4: "Token Allocation:",
      tokenomicTitle5: "Usage of Funds:",
      tokenomicsText6:
        "Dive into the economics behind MELL tokens and discover how they power our unique ecosystem. Our tokenomics strategy is designed to ensure stability, growth, and rewards for our community.",
      tokenomicsText7: "100,000,000 MELL Tokens",
      tokenomicsText8: `<span>Presale:</span> 30% 
                  <li>Early investors get exclusive access to discounted tokens.</li>
                  <span>Main Sale:</span> 40% 
                  <li>Available for public purchase during the main sale.</li>
                  <span>Team & Development:</span> 15% 
                  <li>Reserved for the core team, developers, and future hires.</li>
                  <span>Marketing & Partnerships:</span> 10% 
                  <li> Dedicated to promotional activities and strategic collaborations.</li>
                  <span>Staking & Rewards:</span> 5% 
                  <li>Used for staking rewards and community incentives.</li>   `,
      tokenomicsText9: ` <span>
                    Development: 50%
                  </span>
                  <li>Continuous improvement of the platform and creation of new features.</li>
                  Marketing: 30%
                  <li>Expanding our reach through aggressive marketing campaigns.</li>
                  Operations:: 10%
                  <li>Ensuring smooth daily operations and team expansion.</li>
                  Legal & Security: 5%
                  <li>Compliance with regulations and enhancing platform security.</li>
                  Reserve: 5%
                  <li>Funds kept for unforeseen expenses and future opportunities.</li>`,
      howTitle: "How <br/> to buy?",
      howTitle1: "Connect Your Wallet",
      howTitle2: "Choose Your Token Package:",
      howTitle3: "Confirm Your Purchase:",
      howTitle4: "Receive Your MELL Tokens:",
      howTitle5: "ЗSecure Your Investment:",
      howText1:
        'Click on the "Connect Wallet" button in the navigation header.',
      howText2:
        "Choose your preferred wallet provider (e.g., MetaMask, Trust Wallet).",
      howText3: "Follow the prompts to connect your wallet securely",
      howText4: "Select the amount of MELL tokens you want to purchase.",
      howText5: "Review the current presale rates and bonuses.",
      howText6:
        "Ensure your wallet has enough funds (ETH, BNB, or USDT) for the transaction.",
      howText7: "Confirm the transaction in your wallet.",
      howText8: "Wait for the transaction to be processed on the blockchain.",
      howText9:
        "Once the transaction is confirmed, MELL tokens will be sent to your wallet.",
      howText10: "You can view your tokens directly in your wallet interface.",
      howText11:
        "Consider staking your MELL tokens to earn rewards and benefits.",
      howText12:
        "Stay updated with our latest news and announcements by joining our community on social media.",
      slotTitle: "Slot Demo",
      slotTitle1: "We're developing the MELL SLOT!",
      slotTitle2: "Two tokens:",
      slotTitle3: "Win Big with MELL:",
      slotTitle4: "Prepare for the Full Experience:",
      slotTitle5: "Two Tokens:",
      slotText1: "The bonus we're gonna get – it's gonna blow your fking mind!",
      slotText3: "By investing in MELL, you get tokens to play in our slot!",
      slotText4:
        "Playing with these tokens gives you a chance to win even more MELL!",
      slotText44:
        "Invite friends through the referral system and get more tokens you can use to play!",
      slotText5: "MELL Token: The main currency for purchases and gameplay",
      slotText6:
        "Free Spin Token: Special tokens for free spins, which can be exchanged for MELL tokens.",
      footerMenu: "menu",
      footerCallback: "Request a call",
      footerTitle:
        "If you didn’t find the products you are interested in or have questions?",
      footerForm: " Just send us your contact email and we will contact you.",
      footerFormText: "Your email",
      runStroke:
        " SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | WAIT | SOON | ",
      howSubTitle:
        "During presale, tokens can be purchased directly by sending to the SC address.",
      tokenSolds: "Tokens sold:",
      modalCopy: "Address copied",
    },
  },
  ru: {
    translation: {
      welcome: "Как <span>MELL</span> -<br> может не стрельнуть?)))",
      topDescrText: "НЕ ПРОЕБИ ЗАНОС",
      aboutUs: "О Нас",
      roadMap: "Дорожная карта",
      tokenomics: "Токеномика",
      howToBuy: "Как купить",
      slots: "Слот",
      soldText: "Продано токенов:",
      connectWalletText: "Подключить кошелек",
      topText:
        " Доступ к Кошельку будет открыт через <span>90 дней</span>.    <br>   СЛЕДИТЕ ЗА ОБНОВЛЕНИЯМИ!",
      aboutTitle: "О <span>НАС</span>",
      aboutTitleMob: "О <span>НАС</span>",
      aboutFirst:
        "MELL - он же человек-мем. Лудка, хайп, провокационность, скорость, деньги - это синоним собирательного образа успешного крипто-токена…что мы и сделали! Пошла ВОЗНЯ!",
      aboutSecond:
        "Почему мы уверены в заносе? Вкладываясь в МЕЛЛА ты вкладываешься в разьеб индустрии! Стратегия маркетинга Мелла основанная на стратегии нашего кумира, что приведет нас к ТОП ОДИН МЕМ КОИНУ В СЕТИ ТОН!",
      roadmapTitle1: " Планирование продвижения MELL",
      roadmapTitle2: "Создание сайта и смарт-контракта для MELL",
      roadmapTitle3: "Предпродажа MELL",
      roadmapTitle4:
        "Распродажа MELL, Listing on ByBit, OKX, Huobi, BingX, Mexc",
      roadmapTitle5: "Создания своего слота на MELL",
      roadmapTitle6: "Подключить MELL ко всем лицензированным казино.",
      roadmapTitle7:
        "Стать ТОП МЕМ КОИНОМ В ИСТОРИИ КРИПТОРЫНКА ЗАХВАТИВ ИГРОВУЮ ИНДИСТРИЮ",
      roadmapTitle: "Дорожная карта",
      roadmapTitleMob: "Дорожная карта",
      roadmapInfo8: "ТЫ ПОНИМАЕШЬ <br/> КАКОЙ ЗАНОС НАС ВСЕХ ЖДЕТ?",
      tokenomicTitle3: "Общий запас:",
      tokenomicTitle4: "Распределение Токенов:",
      tokenomicTitle5: "Использование средств:",
      tokenomicsText6:
        "Погрузитесь в экономику токенов MELL и узнайте, как они поддерживают нашу уникальную экосистему. Наш Стратегия токеномики призвана обеспечить стабильность, рост и вознаграждение для нашего сообщества.",
      tokenomicsText7: "100 000 000 токенов MELL",
      tokenomicsText8: ` <span> Предпродажа:</span> 30% 
                  <li>Ранние инвесторы получают эксклюзивный доступ к токенам со скидкой.</li>
                  <span>Основная распродажа:</span> 40% 
                  <li>Доступно для публичной покупки в рамках основной распродажи.</li>
                  <span>Команда и развитие:</span> 15% 
                  <li>Зарезервировано для основной команды, разработчиков и будущих сотрудников.</li>
                  <span> Маркетинг и партнерство:</span> 10% 
                  <li>Занимается рекламной деятельностью и стратегическим сотрудничеством.</li>
                  <span> Ставки и вознаграждения:</span> 5% 
                  <li>Используется для вознаграждений за ставки и поощрений сообщества.</li>`,
      tokenomicsText9: ` <span>
                    Разработка: 50%
                  </span>
                  <li>Постоянное улучшение платформы и создание новых функций.</li>
                  Маркетинг: 30%
                  <li>Расширение нашего охвата с помощью агрессивных маркетинговых кампаний.</li>
                  Операционные расходы: 10%
                  <li>Обеспечение бесперебойной работы и расширение команды.</li>
                  Юридические и безопасность: 5%
                  <li>Соблюдение нормативных требований и повышение безопасности платформы.</li>
                  Резерв: 5%
                  <li>Средства, зарезервированные на непредвиденные расходы и будущие возможности.</li>`,
      howTitle: "Как <br/> купить?",
      howTitle1: "Подключите ваш кошелек",
      howTitle2: "Выберите ваш пакет токенов:",
      howTitle3: "Подтвердите вашу покупку:",
      howTitle4: "Получите ваши MELL токены:",
      howTitle5: "Защитите свою инвестицию:",
      howText1: 'Нажмите на кнопку "Подключить кошелек" в навигационном меню.',
      howText2:
        "Выберите вашего предпочтительного провайдера кошелька (например, MetaMask, Trust Wallet).",
      howText3:
        "Следуйте инструкциям для безопасного подключения вашего кошелька.",
      howText4: "Выберите количество MELL токенов, которое хотите приобрести.",
      howText5: "Просмотрите текущие пресейл ставки и бонусы.",
      howText6:
        "Убедитесь, что в вашем кошельке достаточно средств (ETH, BNB или USDT) для транзакции.",
      howText7: "Подтвердите транзакцию в вашем кошельке.",
      howText8: "Дождитесь обработки транзакции в блокчейне.",
      howText9:
        "После подтверждения транзакции MELL токены будут отправлены на ваш кошелек.",
      howText10:
        "Вы можете просмотреть свои токены непосредственно в интерфейсе вашего кошелька.",
      howText11:
        "Рассмотрите возможность стейкинга ваших MELL токенов для получения вознаграждений и бонусов.",
      howText12:
        "Будьте в курсе последних новостей и объявлений, присоединившись к нашему сообществу в социальных  сетях.",
      slotTitle: "Демонстрация слота",
      slotTitle1: "Мы разрабатываем MELL СЛОТ!",
      slotTitle2: "Два токена:",
      slotTitle3: "Выигрывайте по-крупному с MELL:",
      slotTitle4: "Готовьтесь к полному погружению:",
      slotTitle5: "Два токена:",
      slotText1: "А КАКАЯ БОНУСКА У НАС БУДЕТ - ТЫ ПРОСТО АХУЕЕШЬ!",
      slotText3: "Вкладывая в MELL ты получаешь токены для игры в нашем слоте!",
      slotText4:
        "Играя на эти токены у тебя есть шанс выиграть еще больше MELL !",
      slotText44:
        "Приводи друзей по реферальной системе и так же получай токены на которые можешь играть!",
      slotText5: "Токен MELL: Основная валюта для покупок и игры.",
      slotText6:
        "Токен бесплатных спинов: Специальные токены для бесплатных спинов, которые можно обменять на токены MELL.",
      footerMenu: "меню",
      footerCallback: "Запросить звонок",
      footerTitle:
        "Если вы не нашли интересующие вас продукты или у вас есть вопросы,",
      footerForm:
        "Просто отправьте нам свой контактный email, и мы с вами свяжемся.",
      footerFormText: "Ваш email",
      runStroke:
        "ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ | СКОРО | ЖДИ |",
      howSubTitle: "На стадии пресейла покупка токенов напрямую на адрес СА",
      tokenSolds: "Токенов продано:",
      modalCopy: "Адресс скопирован",
    },
  },
};
function h(t) {
  k.forEach((o) => {
    o.textContent = e[t].translation.aboutUs;
  }),
    C.forEach((o) => {
      o.textContent = e[t].translation.roadMap;
    }),
    M.forEach((o) => {
      o.textContent = e[t].translation.tokenomics;
    }),
    B.forEach((o) => {
      o.textContent = e[t].translation.howToBuy;
    }),
    b.forEach((o) => {
      o.textContent = e[t].translation.slots;
    }),
    A.forEach((o) => {
      o.textContent = e[t].translation.connectWalletText;
    }),
    W.forEach((o) => {
      o.textContent = e[t].translation.tokenomicTitle3;
    }),
    N.forEach((o) => {
      o.textContent = e[t].translation.tokenomicsText6;
    }),
    v.forEach((o) => {
      o.textContent = e[t].translation.tokenomicsText7;
    }),
    g.forEach((o) => {
      o.textContent = e[t].translation.tokenomicTitle4;
    }),
    q.forEach((o) => {
      o.innerHTML = e[t].translation.tokenomicsText8;
    }),
    D.forEach((o) => {
      o.textContent = e[t].translation.runStroke;
    }),
    (document.getElementById("topTitle").innerHTML = e[t].translation.welcome),
    (document.getElementById("aboutTitle").innerHTML =
      e[t].translation.aboutTitle),
    (document.getElementById("aboutTitleMob").innerHTML =
      e[t].translation.aboutTitleMob),
    (document.getElementById("topText").innerHTML = e[t].translation.topText),
    (document.getElementById("topDescrText").textContent =
      e[t].translation.topDescrText),
    (document.getElementById("soldText").textContent =
      e[t].translation.soldText),
    (document.getElementById("aboutFirst").textContent =
      e[t].translation.aboutFirst),
    (document.getElementById("aboutSecond").textContent =
      e[t].translation.aboutSecond),
    (document.getElementById("roadmapTitle").textContent =
      e[t].translation.roadmapTitle),
    (document.getElementById("roadmapTitleMob").textContent =
      e[t].translation.roadmapTitleMob),
    (F.innerHTML = e[t].translation.roadmapInfo8),
    (document.getElementById("tokenomicTitle5").textContent =
      e[t].translation.tokenomicTitle5),
    (document.getElementById("tokenomicsText9").innerHTML =
      e[t].translation.tokenomicsText9),
    (document.getElementById("howTitle").innerHTML = e[t].translation.howTitle),
    (document.getElementById("howTitle1").textContent =
      e[t].translation.howTitle1),
    (document.getElementById("howTitle2").textContent =
      e[t].translation.howTitle2),
    (document.getElementById("howTitle3").textContent =
      e[t].translation.howTitle3),
    (document.getElementById("howTitle4").textContent =
      e[t].translation.howTitle4),
    (document.getElementById("howTitle5").textContent =
      e[t].translation.howTitle5),
    (document.getElementById("howText1").textContent =
      e[t].translation.howText1),
    (document.getElementById("howText2").textContent =
      e[t].translation.howText2),
    (document.getElementById("howText3").textContent =
      e[t].translation.howText3),
    (document.getElementById("howText4").textContent =
      e[t].translation.howText4),
    (document.getElementById("howText5").textContent =
      e[t].translation.howText5),
    (document.getElementById("howText6").textContent =
      e[t].translation.howText6),
    (document.getElementById("howText7").textContent =
      e[t].translation.howText7),
    (document.getElementById("howText8").textContent =
      e[t].translation.howText8),
    (document.getElementById("howText9").textContent =
      e[t].translation.howText9),
    (document.getElementById("howText10").textContent =
      e[t].translation.howText10),
    (document.getElementById("howText11").textContent =
      e[t].translation.howText11),
    (document.getElementById("howText12").textContent =
      e[t].translation.howText12),
    (document.getElementById("slotTitle").textContent =
      e[t].translation.slotTitle),
    (document.getElementById("slotTitle1").textContent =
      e[t].translation.slotTitle1),
    (document.getElementById("slotTitle2").textContent =
      e[t].translation.slotTitle2),
    (document.getElementById("slotText1").innerHTML =
      e[t].translation.slotText1),
    (document.getElementById("slotText3").textContent =
      e[t].translation.slotText3),
    (document.getElementById("slotText4").textContent =
      e[t].translation.slotText4),
    (document.getElementById("slotText44").textContent =
      e[t].translation.slotText44),
    (document.getElementById("slotText5").textContent =
      e[t].translation.slotText5),
    (document.getElementById("slotText6").textContent =
      e[t].translation.slotText6),
    (document.getElementById("roadmapTitle1").textContent =
      e[t].translation.roadmapTitle1),
    (document.getElementById("roadmapTitle2").textContent =
      e[t].translation.roadmapTitle2),
    (document.getElementById("roadmapTitle3").textContent =
      e[t].translation.roadmapTitle3),
    (document.getElementById("roadmapTitle4").textContent =
      e[t].translation.roadmapTitle4),
    (document.getElementById("roadmapTitle5").textContent =
      e[t].translation.roadmapTitle5),
    (document.getElementById("roadmapTitle6").textContent =
      e[t].translation.roadmapTitle6),
    (document.getElementById("roadmapTitle7").textContent =
      e[t].translation.roadmapTitle7),
    (document.getElementById("howSubTitle").textContent =
      e[t].translation.howSubTitle),
    (document.getElementById("modalCopy").textContent =
      e[t].translation.modalCopy);
}
h("ru");
document.body.addEventListener("click", _);
function _(t) {
  if ((console.log(t.target), !t.target.classList.contains("collaps-button")))
    return;
  const o = t.target.getAttribute("data-toggle"),
    s = document.querySelector("#" + o);
  s && s.classList.toggle("hide"), console.log(s);
}
let d = !1;
const Y = document.querySelector(".copyBtn");
Y.addEventListener("click", () => {
  let t = "0xA12BcD34eF567890FaBc1234567890DEFabC1234";
  d ||
    ((d = !0),
    navigator.clipboard
      .writeText(t)
      .then(() => {
        console.log("Текст скопирован в буфер обмена: ", t),
          a.classList.add("show"),
          setTimeout(() => {
            a.classList.add("hide");
          }, 2e3),
          setTimeout(() => {
            a.classList.remove("show"),
              setTimeout(() => {
                a.classList.remove("hide"), (d = !1);
              }, 1e3);
          }, 3e3);
      })
      .catch((o) => {
        console.error("Ошибка при копировании текста: ", o);
      }));
});
