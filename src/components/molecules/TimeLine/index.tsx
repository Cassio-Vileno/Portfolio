import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { School } from "../../svg/School";
import { Work } from "../../svg/work";

import "react-vertical-timeline-component/style.min.css";
import "./styles.scss";

const TimeLine = () => {
  const timelineElements = [
    {
      id: 1,
      title: "PerSysten Sistemas - Desenvolvedor Web e mobile",
      location: "Home office",
      description:
        "Atuando no desenvolvimento de aplicações web e mobile com as tecnologias React Native e VueJs trabalhei em projetos como o wcare",
      date: "Setembro 2024 - Atual",
      icon: "work",
    },
    {
      id: 2,
      title: "Interativa Soft - Desenvolvedor Web e mobile",
      location: "Home office",
      description:
        "Atuando com Desenvolvedor pleno e scrum master inteirino contribui para o desenvolvimento e mantimento de aplicações de empresas como South & Co e westimob.",
      date: "Janeiro 2023 - Julho 2024",
      icon: "work",
    },
    {
      id: 3,
      title: "Sotero Tech - Desenvolvedor Web e mobile",
      location: "Home office",
      description:
        "Desenvolvimento em react native focado em criar soluções MVP utilizando, React native, ReactJs, nodeJs e styled-components.",
      date: "Outubro 2023 - Junho 2024",
      icon: "work",
    },
    {
      id: 4,
      title: "Kbank - Desenvolvedor Web e mobile",
      location: "Barreiras, Bahia",
      description:
        "Atuando como junior Contribui para o desenvolvimento de ferramentas de gestão e concessão de crédito. Desenvolvi habilidade tecnicas, soft skills, trabalho em equipe e metodologias ageis como scrum e kanban.",
      date: "Novembro 2021 - Outubro 2022",
      icon: "work",
    },
    {
      id: 5,
      title: "Ativos Digital - Estagio",
      location: "Barreiras - Bahia",
      description:
        " Coloquei em prática todo o conhecimento teórico e desenvolvi mais habilidades como trabalaho em time.",
      date: "Abril 2021 - Outubro 2021",
      icon: "work",
    },
    {
      id: 6,
      title: "CETEP",
      location: "Barreiras - Bahia",
      description:
        "Ensino médio técnico em informática. \n Desenvolvi as bases e fundamentos tecnicos de logica de programação, redes, arquitetura de computadores. ",
      date: "Março 2018 - Março 2020",
      icon: "school",
    },
  ];
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    <div id="experiences">
      <h1 className="title">Linha do tempo</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={element.icon === "work" ? <Work /> : <School />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
export default TimeLine;
