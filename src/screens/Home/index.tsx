import { useState } from "react";
import ProjectCard from "../../components/molecules/ProjectCard";
import { Css } from "../../components/svg/css";
import { GitHubTech } from "../../components/svg/githubtech";
import { GitHub } from "../../components/svg/gtihub";
import { Html } from "../../components/svg/html";
import { Instagram } from "../../components/svg/instagran";
import { Js } from "../../components/svg/js";
import { LinkedIn } from "../../components/svg/linkedin";
import { ReactLogo } from "../../components/svg/react";
import { Scss } from "../../components/svg/scss";
import { LogoStyled } from "../../components/svg/styledComponets";
import { Ts } from "../../components/svg/ts";
import "./styles.scss";
import Header from "../../components/molecules/Header";

type ProjectTypes = {
  name: string;
  imgUrl: string;
  description: string;
  linkGit: string;
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
      linkGit: "#",
      linkDeploy:
        "https://play.google.com/store/apps/details?id=com.kaptureproposals&pli=1",
      techStack: ["React Native", "TypeScript", "Styled Components", "Axios"],
    },
    {
      name: "Kapture Auto",
      imgUrl:
        "https://play-lh.googleusercontent.com/T0IToHWgfMjTNlcLfjvSuZv9hhWvQmssJv4aw6nZXYriecZF0XUg3Fj6q_wnzyI1VM_x=w5120-h2880-rw",
      description:
        "Uma plataforma intuitiva de auto atendimento, para que você mesmo possa fazer o pedido de seu cartão de credito.",
      linkGit: "#",
      linkDeploy: "https://atendimento.cartaoservir.com.br/",
      techStack: ["ReactJs", "TypeScript", "Styled Components", "Axios"],
    },
    {
      name: "FideliClub",
      imgUrl:
        "https://play-lh.googleusercontent.com/esYeNzaIU3UkJNw1WfgKMA_waTfSMrUHt53pGmOONQGGcdQJ89mFVhgPcQTMJHCuBPI=w832-h470-rw",
      description:
        "O FideliClub é um aplicativo de fidelidade com o objetivo de diminuir os custos de capitação de clientes das empresas com uma estrategia de cashback.",
      linkGit: "#",
      linkDeploy:
        "https://play.google.com/store/apps/details?id=com.interativasoft.fideliclub",
      techStack: ["React", "TypeScript", "Styled Components", "Axios"],
    },
    {
      name: "GitHub Explore",
      imgUrl:
        "https://user-images.githubusercontent.com/87983174/211084774-3afcba9e-94ab-4ca3-b2c8-3f499e7153ed.png",
      description:
        "O GitHub Explore é uma plataforma de visualização de repositórios, bem como informações de cada repositório, como estrelas, forks e issues.",
      linkGit: "https://github.com/Cassio-Vileno/GithubExplorer",
      linkDeploy: "https://github-explorer-five-ruby.vercel.app/",
      techStack: ["React", "TypeScript", "Styled Components", "Axios"],
    },
  ];

  return (
    <main className="main">
      <Header />
      <body className="body">
        <div id="presentation" className="first-session">
          <div className="presentation-content">
            <h2>
              Olá 👋, <br />
              Meu nome é
            </h2>
            <span className="name">Cassio Vileno</span>
            <h2>Sou um desenvolvedor Front End</h2>
          </div>
          <div className="avatar">
            <img src="images/avatar.jpg" alt="avatar" />
          </div>
        </div>
        <div id="technologies" className="second-session">
          <div className="title-second">
            <h2>Tecnologias</h2>
            <p>Tecnologias com as quais tenho dominio</p>
          </div>
          <div className="tech-stack">
            <ReactLogo />
            <Ts />
            <Js />
            <Html />
            <Css />
            <LogoStyled />
            <Scss />
            <GitHubTech />
          </div>
        </div>
        <div id="projects" className="third-session">
          <h2 className="title-third">Projetos</h2>
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
      </body>
      <footer className="footer">
        <div className="footer-container">
          <div className="container-contact">
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
            <nav className="footer-hooks">
              <a href="#presentation">Home</a>
              <a href="#technologies">Habilidades</a>
              <a href="#projects">Projetos</a>
              <a href="#projects">experiências</a>
              <a href="#">Sobre</a>
              <a href="#">Contato</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
