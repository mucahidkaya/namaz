const iftitahTextMale = `Ellerin baş parmakları kulak yumuşaklarına değdirilir, avuç içleri kıble istikametine dönük şekilde parmak araları açılır ve "Allahu Ekber" diyerek tekbir getirilir.`;
const iftitahTextFemale = `Ellerimiz omuz hizalarına kadar kaldırır, avuç içleri kıble istikametine açılır ve "Allahu Ekber" diyerek tekbir getirilir.`;

const kiyamTextMale =
  'Eller göbek altında sağ el sol elin üzerine bağlanır. Sağ elin küçük parmağıyla başparmak, sol elin bileğini halka gibi kavramış şekilde tutulur.';
const kiyamTextFemale =
  'Eller göğüs hizasında sağ el sol elin üzerine bağlanır. Sağ elin küçük parmağıyla başparmak, sol elin bileğini halka gibi kavramış şekilde iki el beraber göğüs üzerinde tutulur. Parmaklarını açmazlar ve düz olarak sağ eli sol elin üzerine koyarlar.';

const rekatText1 = `Eller bağlandıktan sonra, gözlerimiz secde edilecek yerden ayrılmadan "Sübhaneke" okunur. Sonra "Euzü Besmele" çekilerek "Fatiha Suresi" okunur ve Amin denir. Peşinden bir "Sure" okunur.`;
const rekatText2 = `Eller bağlandıktan sonra, gözlerimiz secde edilecek yerden ayrılmadan "Euzü Besmele" çekilerek "Fatiha Suresi" okunur ve Amin denir. Peşinden bir "Sure" okunur.`;
const rekatText3 = `Eller bağlandıktan sonra, gözlerimiz secde edilecek yerden ayrılmadan "Euzü Besmele" çekilerek "Fatiha Suresi" okunur ve Amin denir.`;
const rekatText4 = `Eller bağlandıktan sonra, gözlerimiz secde edilecek yerden ayrılmadan "Euzü Besmele" çekilerek "Fatiha Suresi" okunur ve Amin denir.`;

const rukuTextMale = `Sure okunduktan sonra "Allahü Ekber" diyerek rükua eğilinir. Ellerle parmak araları açık olarak diz kapakları kaplanır, bel yerle paralel olacak şekilde düz tutulur, bacak ile kollar gergin olur ve gözler ayak uçlarına bakar. Dizler bükülmeden dik tutulmalıdır. Rükuda iken üç defa "Sübhane Rabbiye'l-Azim (Azim olan rabbim her türlü kusurdan uzaktır)" denir.`;
const rukuTextFemale = `Sure okunduktan sonra "Allahü Ekber" diyerek rükua eğilinir. Ayaklar az açık, baş sırt hizasına gelmeyecek kadar az eğik, dizler ile dirsekler hafif bükük ve gözler ayak uçlarına bakar. El parmak aralarını açmazlar ve dizlerini tutmazlar, sadece ellerini dizin üzerine gelecek şekilde baldıra koyarlar.Rükuda iken üç defa "Sübhane Rabbiye'l-Azim (Azim olan rabbim her türlü kusurdan uzaktır)" denir.`;

const rukuKalkisText = `Rükudan doğrulurken "Semi Allahü Limen Hamideh (Allah, kendisine hamd edenleri işitir)" denir, tam dik durunca ise "Rabbena Lekel Hamd (Rabbimiz, hamd sanadır)" denir.`;

const secdeTextMale = `Ayakta kısa bir süre durduktan sonra "Allahü Ekber" diyerek secdeye gidilir. Secdeye inerken önce dizler, sonra eller yere konur. Başımız iki elimiz arasında, alın ve burun yere değecek ve parmaklar kıbleye doğru. Dirseklerimiz yere değmiyecek ve vücuda yapışık olmayacak. Ayak parmakları kıbleye dönük, topuklar bitişik duracak. Secdede iken üç defa "Sübhane Rabbiyel-a'lâ (Yüce olan rabbim her türlü kusurdan uzaktır)" denir.`;
const secdeTextFemale = `Ayakta kısa bir süre durduktan sonra "Allahü Ekber" diyerek secdeye gidilir. Başımız iki elimiz arasında, alın ve burun yere değecek ve parmaklar kıbleye doğru ve el parmaklarını birleştirir. Dirseklerimiz yere değecek ve vücuda yapışık olacak. Ayakların üstü yere gelmiş şekilde ve her iki ayak sağa yatık şekilde duracak. Secdede iken üç defa "Sübhane Rabbiyel-a'lâ (Yüce olan rabbim her türlü kusurdan uzaktır)" denir`;

const secdeKalkisTextMale = `Sonra, "Allahü Ekber" diyerek oturuşa geçilir. Sol ayak yere yatık, sağ ayak dik olacak şekilde parmakları kıble istikametinde bükülür ve uylukların üzerinde oturulur. Avuçlar, dizin üzerine konur ve parmaklar serbest bırakılır.`;
const secdeKalkisTextFemale = `Sonra, "Allahü Ekber" diyerek oturuşa geçilir. Ayaklarımız sağa çıkarılmış şekilde ayaklar üzerine değil yere oturulur. Avuçlar, dizin üzerine konur ve parmaklar serbest bırakılır`;

const oturusText = `İkinci secdeden sonra "Allahü Ekber" diyerek ayağa kalkmayıp oturuşa geçilir. Oturuşta "Ettehıyyatü" duası okunur. Sonra "Allahü Ekber" diyerek 3. rekat için ayağa kalkılır.`;

const sonOturusText = `İkinci secdeden sonra "Allahü Ekber" diyerek ayağa kalkmayıp oturuşa geçilir. Oturuşta "Ettehıyyatü", "Allahümme Salli", "Allahümme Barik" ve "Rabbena" dualarını okuduruz.`;

const selamText = `Başımız önce sağa çevrilmiş  ve gözler omuza bakacak şekilde "Esselamü Aleyküm Ve Rahmetullah" diye selam verilir, sonra sola çevrilmiş ve gözler omuza bakacak şekilde "Esselamü Aleyküm Ve Rahmetullah" diye tekrar selam verilerek namaz tamamlanır.`;

const getRekatTextByCount = (rekatCount) => {
  return rekatCount == 1
    ? rekatText1
    : rekatCount == 2
      ? rekatText2
      : rekatCount == 3
        ? rekatText3
        : rekatText4;
};

const niyetFunc = (gender, time) => {
  return {
    title: 'Niyet',
    imgs: [`/images/${gender}/handsFree.png`],
    text: [
      gender == 'male'
        ? `Abdest aldıktan sonra, namaz kılınacak yerin ve üzerimizin temiz olmasına dikkat edilirek Kıble'ye karşı dönülür, ayaklar birbirinden dört parmak kadar açık tutulur. (Erkekler farz namazlardan önce kamet getirirler)`
        : "Abdest aldıktan sonra, namaz kılınacak yerin ve üzerimizin temiz olmasına dikkat edilirek Kıble'ye karşı dönülür, ayaklar az açık tutulur.",
      `Niyet edilir (Hangi namaz kılınıyorsa ona niyet edilir). Örneğin: "Niyet ettim Allah rızası için bugünkü ${time} namazının farzını kılmaya"`,
    ],
  };
};

const iftitahFunc = (gender) => {
  return {
    title: 'Tekbir',
    imgs: [`/images/${gender}/tekbir.png`],
    text: [gender == 'male' ? iftitahTextMale : iftitahTextFemale],
    sound: ['tekbir'],
  };
};

const kiyamFunc = (gender, rekatCount) => {
  const rekatText = getRekatTextByCount(rekatCount);
  return {
    title: `${rekatCount}. Rekat`,
    imgs: [`/images/${gender}/kiyam.png`],
    text: [gender == 'male' ? kiyamTextMale : kiyamTextFemale, rekatText],
  };
};

const rukuFunc = (gender) => {
  return {
    title: 'Rüku',
    imgs: [`/images/${gender}/ruku.png`],
    text: [gender == 'male' ? rukuTextMale : rukuTextFemale],
  };
};

const rukuKalkisFunc = (gender) => {
  return {
    title: 'Rükudan Kalkış',
    imgs: [`/images/${gender}/handsFree.png`],
    text: [rukuKalkisText],
  };
};

const secdeFunc = (gender) => {
  return {
    title: 'Secde',
    imgs: [`/images/${gender}/secde.png`],
    text: [gender == 'male' ? secdeTextMale : secdeTextFemale],
  };
};

const secdeKalkisFunc = (gender) => {
  return {
    title: 'Oturuş',
    imgs: [`/images/${gender}/oturus.png`],
    text: [gender == 'male' ? secdeKalkisTextMale : secdeKalkisTextFemale],
  };
};

const oturusFunc = (gender) => {
  return {
    title: 'Oturuş',
    imgs: [`/images/${gender}/oturus.png`, `/images/${gender}/oturus2.png`],
    text: [oturusText],
  };
};

const sonOturusFunc = (gender) => {
  return {
    title: 'Son Oturuş',
    imgs: [`/images/${gender}/oturus.png`],
    text: [sonOturusText],
  };
};

const selamFunc = (gender) => {
  return {
    title: 'Selam',
    imgs: [`/images/${gender}/selam-sag.png`, `/images/${gender}/selam-sol.png`],
    text: [selamText],
  };
};
export {
  niyetFunc,
  iftitahFunc,
  kiyamFunc,
  rukuFunc,
  rukuKalkisFunc,
  secdeFunc,
  secdeKalkisFunc,
  oturusFunc,
  sonOturusFunc,
  selamFunc,
};
