const bb = {
  fr: [
    {
      title: "Développeur Full-Stack",
      description: "Bleu Banquise est une entreprise d'infographie proposant historiquement des solutions de design graphique de packaging, affiches événementielles et publicités.<br>\
        <br>\
        Au sein des manchots, ma mission fut de créer un site web permettant à mon entreprise d'avoir un meilleur suivi et vue d'ensemble de ses dossiers (appelé un Workflow). Via ce site web, les clients de Bleu Banquise font leurs demandes, échangent avec les infographistes, comparent les différentes versions des artworks créées, valident la version finale et consultent leurs dossiers archivés.",
      moreDescription: "Créant la partie visible du site web (Front-End) et toute la logique de cet outil (Back-End), il m'a fallu affiner d'avantage mes connaissances en cybersécurité, spécifiquement la sécurité autour des attaques possibles sur le net.<br>\
        <br>\
        Cela comprend la sécurité de la session de l'utilisateur, la gestion des cookies, les mesures de sécurité anti spam et DOS, la bonne méthode de stockage des mots de passe des comptes créés dans la base de données, la vérification systématique des données entrées par l'utilisateur.",
    },
    {
      title: "Administateur Système et Réseau",
      description: "J'ai été en charge de plusieurs tâches importantes :<br>\
        <ul><li>Changer toute la structure du réseau informatique pour y créer un intranet protégé et un extranet</li>\
        <li>Mettre en place un canal de communication sécurisé entre les employés et le réseau de l'entreprise pour rendre possible le télétravail durant le confinement, grâce à un VPN</li>\
        <li>Assister mon collègue/binôme dans le développement de sites webs clients créés sous Wordpress</li>\
        <li>Surveiller et résoudre tout problème technique (que ça soit un programme, un paramétrage, le réseau, une imprimante,&nbsp;...)</li>\
        <li>Mettre en place la téléphonie VoIP</li>\
        <li>Deviser du nouveau matériel, notamment pour équiper une salle de visioconferences</li></ul>",
      moreDescription: "J'ai dû repenser la structure réseau de l'entreprise afin d'y créer un intranet (coupé d'internet à quelques exceptions dictées par le pare-feu), un extranet et une zone d'échange sécurisée et coupée d'internet entre les deux zones, le tout piloté par un serveur-routeur Linux.\
      <br/><br/>\
      Ce serveur comprend un pare-feu, un serveur DNS et un script Python créé par mes soins qui s'occupe de tenir à jour une liste blanche d'adresses IP correspondant aux noms de domaine autorisés à communiquer avec l'intranet de l'entreprise (pour valider les licences des logiciels utilisés, principalement).\
      <br/><br>\
      Accompagné par mon collègue technique et webmaster, nous nous occupions à deux de tenir le parc informatique à jour et sécurisé, renouveler le matériel trop ancien, agrandir le parc en fonction des besoins comme l'arrivée de la téléphonie en VoIP dans l'entreprise ou le développement des visioconférences et d'une salle dédié à cela."
    }
  ],
  en: [
    {
      title: "Full-Stack Developer",
      description: "Bleu Banquise is a graphics design company with a history of providing graphic design solutions for packaging, event publishing, and public advertisements.<br>\
      <br>\
      Among the penguins, my mission was to create a tool allowing my company to have a better follow-up and overview of their folders. This tool is a website through which Bleu Banquise's clients make their requests, chat with the graphic designers, compare one version of the artwork with another, validate the final version and consult their archived folders.",
      moreDescription: "As I created the visible side of the website (Front-End) and the whole logic of this tool (Back-End), I had to fine-tune my knowledge in cybersecurity, especially web-security.<br>\
        <br>\
        This includes user session, cookie managment, security measures against spamming and DOS, finding the correct way to store passwords in the database, verifying and sanitizing all user input.",
    },
    {
      title: "System and Network Admin",
      description: "I have been in charge of several very important tasks :<br>\
        <ul><li>Reorganizing the whole company's network to create a secure intranet and an extranet</li>\
        <li>Setting up a secure way to allow employees to work from home during the COVID lockdown, thanks to a VPN</li>\
        <li>Assisting my coworker in the developement of client websites powered by Wordpress</li>\
        <li>Watching for and fixing any kind of technical issue (may it be a software, the settings, the network, a printer,&nbsp;...)</li>\
        <li>Installing and setup VoIP</li>\
        <li>Establishing a quote for new hardware, such as when we needed to equip a room dedicated to videoconferences</li></ul>",
      moreDescription: "I had to redesign my company's whole network structure in order to create an intranet (having no internet access beside very few exceptions given by the firewall), an extranet and a secure exchange area between the intranet and extranet, the whole structure is driven by a Linux server as the router.\
        <br/><br/>\
        This server includes a firewall, a DNS server and a Python script made by myself which constantly updates the firewall's whitelist with IP addresses corresponding to the domain names allowed to communicate with the company's intranet (mainly to verify software licenses).\
        <br/><br>\
        Along with technical webmaster colleague, we kept the IT infrastructure up-to-date and secured, we expanded it when needed such as when VoIP telephony arrived in the company or when videoconferences became a bigger focus and needed a dedicated room."
    }
  ]
}

export default bb;
