import ProjectCard from "../../components/molecules/ProjectCard";
import { GitHub } from "../../components/svg/github";
import { Instagram } from "../../components/svg/instagran";
import { LinkedIn } from "../../components/svg/linkedin";

import "./styles.scss";
import TechnologyCard from "../../components/molecules/TechnologyCard";
import { ReactLogo } from "../../components/svg/react";
import { Ts } from "../../components/svg/ts";
import { Js } from "../../components/svg/js";
import { Scss } from "../../components/svg/scss";
import { Css } from "../../components/svg/css";
import { Html } from "../../components/svg/html";
import { LogoStyled } from "../../components/svg/styledComponets";
import { ReactNativeLogo } from "../../components/svg/reactNative";
import TimeLine from "../../components/molecules/TimeLine";

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
      name: "FideliClub",
      imgUrl:
        "https://play-lh.googleusercontent.com/esYeNzaIU3UkJNw1WfgKMA_waTfSMrUHt53pGmOONQGGcdQJ89mFVhgPcQTMJHCuBPI=w832-h470-rw",
      description:
        "O FideliClub é um aplicativo de fidelidade com o objetivo de diminuir os custos de capitação de clientes das empresas com uma estrategia de cashback.",
      linkDeploy:
        "https://play.google.com/store/apps/details?id=com.interativasoft.fideliclub",
      techStack: ["React Native", "TypeScript", "Styled Components", "Axios"],
    },
    {
      name: "Ser mais Saudável",
      imgUrl: "images/serMais.png",
      description:
        "O Ser mais Saudável é uma plataforma onde pessoas podem se increverem para eventos esportivos e aulas gratuitas para que possam Ser Mais Saudáveis.",
      linkDeploy: "https://sermaissaudavel.soterotech.com.br/",
      techStack: [
        "ReactJs",
        "NextJs",
        "TypeScript",
        "Styled Components",
        "Axios",
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
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
