const generateId = () => {
  return Math.floor(Math.random() * 1000 + 1);
};

const projects = [
  {
    id: generateId(),
    description:
      "An app for writers to have total control over the PDFs they share. Currently being used by around 50 users.",
    projectName: "Filelockrr",
    projectBuiltWith:
      "Google Cloud / Amazon S3 / React / Sails.js / Node.js / TypeScript / MongoDB",
    projectUrl: "https://filelockrr.com",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1596301552/personal-portfolio/filelockrr_steone.png",
    ghLink: "",
  },
  {
    id: generateId(),
    description:
      "A Customer support ticketing system that allows Support agents and customers leave comments on Tickets.",
    projectNamid: 9,
    e: "SuperSupport",
    projectBuiltWith: "Rails/React/Redux toolkit/TailwindCSS",
    projectUrl: "https://supersupport.netlify.app",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1594212404/personal-portfolio/supersupport_qw1kye.png",
    ghLink: "https://github.com/onedebos/super_support/tree/master",
  },

  {
    id: generateId(),
    description:
      "An app for food vendors in Nigeria to showcase some of their best meals by uploading them, while allowing customers book them for their events.",
    projectName: "Foodies",
    projectBuiltWith: "Rails / React / Redux",
    projectUrl: "https://foodies-stop.netlify.app/",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1588931965/personal-portfolio/screenshot_fchiyf.png",
    ghLink: "https://github.com/Tripple-A/Chef-React-App",
  },
  {
    id: generateId(),
    description:
      "A wedding register that allows friends leave goodwill messages and buy gifts for a couple.",
    projectName: "Prewedding",
    projectBuiltWith: "GatsbyJS and GraphQL",
    projectUrl: "https://olamidefemi.com/",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1592690204/personal-portfolio/Screen_Shot_2020-06-20_at_22.54.46_hwsypz.png",
    ghLink: "https://github.com/onedebos/FandO",
  },
  {
    id: generateId(),
    description:
      "A course catalogue website that allows you search for courses, see more information about a course and add a course to your cart.",
    projectName: "Lrn::Fast",
    projectBuiltWith: "React and Redux toolkit",
    projectUrl: "https://lrn-fast.netlify.com/",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1586895384/personal-portfolio/Screen_Shot_2020-04-14_at_21.15.22_h3ckk8.png",
    ghLink: "https://github.com/onedebos/learn-fast",
  },

  {
    id: generateId(),
    projectName: "CoronaQL",
    description:
      "A GraphQL server that allows frontend apps make GraphQL queries for the latest Covid-19 data",
    projectBuiltWith: "Rails/GraphQL",
    projectUrl: "https://corona-ql.herokuapp.com/graphiql",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto:best/v1585173273/personal-portfolio/Screen_Shot_2020-03-25_at_22.54.01_ii4yfw.png",
    ghLink: "https://github.com/onedebos/corona-ql",
  },

  {
    id: generateId(),
    description:
      "An app that lets you keep track of all your bank account numbers and that of your contacts.",
    projectName: "OwoNiKoko",
    projectBuiltWith: "Rails/React/Context API",
    projectUrl: "https://kind-edison-586550.netlify.com/",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1583532804/iphoneMockupOwonikoko_a7o3ru.png",
    ghLink: "https://github.com/onedebos/owonikoko",
  },
  {
    id: generateId(),
    description:
      "A mini social networking site that allows you sign up with facebook, add friends, like posts and comment on posts",
    projectName: "MicroFacebook",
    projectBuiltWith: "Rails + fb Auth",
    projectUrl: "https://micro-social.herokuapp.com/",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1582245547/personal-portfolio/Screen_Shot_2020-02-21_at_01.38.39_cef8dh.png",
    ghLink: "https://github.com/onedebos/micro-facebook",
  },
  {
    id: generateId(),
    description:
      "A landing page for signing up to a waitlist of an emergency healthcare service provider.",
    projectName: "Mediquik",
    projectBuiltWith: "GatsbyJS",
    projectUrl: "https://mediquik.netlify.app",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1594035373/personal-portfolio/adebola-dev-mediquik_kt6psq.png",
    ghLink: "https://github.com/onedebos/ngwa",
  },
  {
    id: generateId(),
    description:
      "A simple typing game that tracks how many words and characters you can type per minute and compares your score to others who have played.",
    projectName: "TypeFastr",
    projectBuiltWith: "React / Redux / TypeScript / FireStore",
    projectUrl: "https://type-fastr.netlify.app/",
    imgUrl:
      "https://res.cloudinary.com/onedebeos/image/upload/f_auto,q_auto/v1597738001/personal-portfolio/type-fastr_cdpt8k.png",
    ghLink: "https://github.com/onedebos/type-fastr",
  },
];

export default projects;
