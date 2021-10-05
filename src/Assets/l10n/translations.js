import expPro from "./ExperiencesPro";
import presentation from "./Presentation";

const translations = {
  fr: {
    switchLang: "English version",
    home: {
      catchphrase: "Aspirant développeur web"
    },
    expPro: expPro.fr,
    presentation: presentation.fr,
    moreLater: "Plus de contenu à venir..."
  },
  en: {
    switchLang: "Version française",
    home: {
      catchphrase: "Aspiring web developer"
    },
    expPro: expPro.en,
    presentation: presentation.en,
    moreLater: "More content to come..."
  }
};

export default translations;
