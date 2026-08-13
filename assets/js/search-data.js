// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-one-paper-under-review-at-eacl-2027",
          title: 'One paper under review at EACL 2027',
          description: "",
          section: "News",},{id: "projects-llm-based-automated-library-construction-and-knowledge-graph-extraction-from-construction-documents-llm-기반-라이브러리-및-지식-그래프-추출",
          title: 'LLM-based Automated Library Construction and Knowledge Graph Extraction from Construction Documents (LLM 기반...',
          description: "Korea Institute of Civil Engineering and Building Technology (KICT) (한국건설기술연구원)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-automated-generation-of-veterinary-clinical-documents-through-iterative-information-retrieval-and-multi-agent-collaboration-반복적-검색-및-다중-에이전트-구조를-활용한-수의료-임상-문서-작성-자동화-시스템-개발",
          title: 'Automated Generation of Veterinary Clinical Documents through Iterative Information Retrieval and Multi-Agent Collaboration...',
          description: "Petobio (페토바이오), MOE of Korea (교육부) and Gyeonggi Province (경기도)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-constructing-veterinary-knowledge-graph-and-developing-graphrag-based-llm-services-수의료-지식그래프-구축을-통한-graphrag-기반-수의료-llm-서비스-개발",
          title: 'Constructing Veterinary Knowledge Graph and Developing GraphRAG-based LLM Services (수의료 지식그래프 구축을 통한...',
          description: "Petobio (페토바이오), MOE of Korea (교육부) and Gyeonggi Province (경기도)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-knowledge-graph-based-cross-cultural-personalized-recommendation-solution-for-korean-food-cosmetic-products-지식그래프-기반-한국-식품-화장품-글로벌-개인화-추천-솔루션",
          title: 'Knowledge Graph-based Cross-cultural Personalized Recommendation Solution for Korean Food/Cosmetic Products (지식그래프 기반 한국...',
          description: "Shukran Korea Inc. (주식회사 슈크란코리아), NRF of Korea (한국연구재단) and funded by MOE of Korea (교육부)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
