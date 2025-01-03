import ProjectCard from "../../components/molecules/ProjectCard";
import { GitHub } from "../../components/svg/github";
import { Instagram } from "../../components/svg/instagran";
import { LinkedIn } from "../../components/svg/linkedin";

import TechnologyCard from "../../components/molecules/TechnologyCard";
import TimeLine from "../../components/molecules/TimeLine";
import { Css } from "../../components/svg/css";
import { Html } from "../../components/svg/html";
import { Js } from "../../components/svg/js";
import { ReactLogo } from "../../components/svg/react";
import { ReactNativeLogo } from "../../components/svg/reactNative";
import { Scss } from "../../components/svg/scss";
import { LogoStyled } from "../../components/svg/styledComponets";
import { Ts } from "../../components/svg/ts";
import "./styles.scss";

type ProjectTypes = {
  name: string;
  imgUrl: string;
  description: string;
  linkGit?: string;
  linkDeploy: string;
  techStack: string[];
};

function Home() {
  const projectData: ProjectTypes[] = [
    {
      name: "Kapture Propostas",
      imgUrl:
        "https://play-lh.googleusercontent.com/T0IToHWgfMjTNlcLfjvSuZv9hhWvQmssJv4aw6nZXYriecZF0XUg3Fj6q_wnzyI1VM_x=w5120-h2880-rw",
      description:
        "Uma plataforma intuitiva e prática, para que você tenaha acesso a todas as informações necessárias para fazer a gestão e concessão de crédito.",
      linkDeploy:
        "https://play.google.com/store/apps/details?id=com.kaptureproposals&pli=1",
      techStack: ["React Native", "TypeScript", "Styled Components", "Jest"],
    },
    {
      name: "Kapture Auto",
      imgUrl:
        "https://play-lh.googleusercontent.com/T0IToHWgfMjTNlcLfjvSuZv9hhWvQmssJv4aw6nZXYriecZF0XUg3Fj6q_wnzyI1VM_x=w5120-h2880-rw",
      description:
        "Uma plataforma intuitiva de auto atendimento, para que você mesmo possa fazer o pedido de seu cartão de credito.",
      linkDeploy: "https://atendimento.cartaoservir.com.br/",
      techStack: ["ReactJs", "TypeScript", "Styled Components", "Axios"],
    },
    {
      name: "Ser mais Saudável",
      imgUrl: "images/serMais.png",
      description:
        "O Ser mais Saudável é uma plataforma onde pessoas podem se increverem para eventos esportivos e aulas gratuitas para que possam Ser Mais Saudáveis.",
      linkDeploy: "https://app.sermaissaudavel.com/",
      techStack: [
        "ReactJs",
        "NextJs",
        "TypeScript",
        "Styled Components",
        "Axios",
      ],
    },
    {
      name: "Wcare",
      imgUrl: "images/wcare.png",
      description:
        "O WCare é um software especializado na gestão de clínicas de quiropraxia, projetado para automatizar tarefas administrativas e aprimorar a experiência dos pacientes.",
      linkDeploy: "https://wcare.com.br/",
      techStack: [
        "VueJs",
        "bootstrap",
        "TypeScript",
        "PHP",
        "Laravel",
      ],
    },
    {
      name: "Corporação capsula",
      imgUrl: "images/capsulaLogo.png",
      description:
        "Site para captação de leads para a empresa Capsula Personalizados. Com design moderno, responsivo e animações para uma melhor esperiencia do usuario.",
      linkDeploy: "https://www.capsulapersonalizados.com.br/",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "figma"
      ],
    },
    {
      name: "Codigo Kid Barreiras",
      imgUrl:
        "images/codigoKid.png",
      description:
        "Site captura de leads para a empresa Codigo Kid Barreiras. Que conta comta com design moderno, responsivo e animações fluidas para uma melhor esperiencia do usuario.",
      linkDeploy:
        "https://codigokidbarreiras.com.br/",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      name: "Interativa Soft",
      imgUrl:
        "images/Interativa.png",
      description:
        "Site captura de leads para a empresa Interativa Soft. Que conta comta com design moderno, responsivo para uma melhor esperiencia do usuario.",
      linkDeploy:
        "https://interativasoft.com.br/",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];

  const techStack = [
    { name: "React Native", children: <ReactNativeLogo /> },
    { name: "React Js", children: <ReactLogo /> },
    { name: "Styled Components", children: <LogoStyled /> },
    { name: "TypeScript", children: <Ts /> },
    { name: "JavaScript", children: <Js /> },
    { name: "HTML", children: <Html /> },
    { name: "CSS", children: <Css /> },
    { name: "Scss", children: <Scss /> },
    { name: "GitHub", children: <GitHub /> },
  ];

  return (
    <main className="main">
      <body className="body">
        <div id="presentation" className="first-session">
          <div className="presentation-content">
            <h2>
              Olá 👋, <br />
              Meu nome é
            </h2>
            <span className="name">Cassio Vileno</span>
            <h2>Sou desenvolvedor Front End</h2>
          </div>
        </div>
        <div id="sobre" className="about">
          <div className="about-container">
            <div className="text-about">
              <h2>Sobre mim</h2>
              <p>
                Sou desenvolvedor com 3 anos de experiência. Minha verdadeira
                paixão vai além de escrever códigos: vejo a programação como uma
                poderosa ferramenta para solucionar problemas complexos. Não me
                prendo a tecnologias específicas, mas sim à busca incessante por
                soluções eficientes.
                <br />
                Gosto de compreender todo o processo da empresa, desde o projeto
                até o produto final. Esse conhecimento me permite abordar cada
                problema de forma mais eficaz e sugerir soluções precisas e
                adequadas para cada escopo.
              </p>
            </div>
            <div className="avatar">
              <img
                className="img-avatar"
                src="images/avatar.jpg"
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div id="experiencias" className="time-line-container">
          <TimeLine />
        </div>
        <div id="technologies" className="domain-of-technologies">
          <div className="title-second">
            <h2>Tecnologias</h2>
            <p>Tecnologias com as quais tenho dominio</p>
          </div>
          <div className="tech-stack">
            {techStack.map((item) => (
              <TechnologyCard children={item.children} name={item.name} />
            ))}
          </div>
        </div>
        <div id="projects" className="third-session">
          <div className="projects-container">
            <h2 className="title-third">Principais Projetos</h2>
            <div className="card-container">
              {projectData.map((item: ProjectTypes) => (
                <ProjectCard
                  description={item.description}
                  imgUrl={item.imgUrl}
                  linkDeploy={item.linkDeploy}
                  linkGit={item.linkGit}
                  techStack={item.techStack}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </body>
      <footer className="footer">
        <div className="footer-container">
          <div id="contato" className="container-contact">
            <img
              className="logo"
              src="images/athena_logo.svg"
              alt="athena_logo"
            />
            <div className="container-content">
              <p>(77) 99838-7590</p>
              <p>cassiovileno@gmail.com</p>
              <div className="media">
                <a
                  className="media-logo"
                  target="_blank"
                  href="https://github.com/Cassio-Vileno"
                >
                  <GitHub />
                </a>
                <a
                  className="media-logo"
                  target="_blank"
                  href="https://www.linkedin.com/in/cassio-vileno/"
                >
                  <LinkedIn />
                </a>
                <a
                  className="media-logo"
                  target="_blank"
                  href="https://www.instagram.com/vileno_dev/"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="nav-footer-container">
            <nav>
              <a href="#presentation">Home</a>
              <a href="#sobre">Sobre</a>
              <a href="#experiencias">experiências</a>
              <a href="#technologies">Habilidades</a>
              <a href="#projects">Projetos</a>
              <a href="#contato">Contato</a>
              <a target="_blank" href="/privacy-policy">Politicas de privaciadade</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
