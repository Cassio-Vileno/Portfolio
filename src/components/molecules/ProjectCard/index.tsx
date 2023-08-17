import { Chain } from "../../svg/chain";
import { GitHub } from "../../svg/github";
import "./styles.scss";

type ProjectTypes = {
  name: string;
  imgUrl: string;
  description: string;
  linkGit: string;
  linkDeploy: string;
  techStack: string[];
};

function ProjectCard({
  description,
  imgUrl,
  linkDeploy,
  linkGit,
  techStack,
  name,
}: ProjectTypes) {
  return (
    <div className="container">
      <img src={imgUrl} alt="Imagem do projeto" />
      <div className="container-content">
        <div className="text-content">
          <h2 className="title">{name}</h2>
          <p className="description">{description}</p>
        </div>
        <div id="tech-content">
          <strong>Tecnologias usadas:</strong>
          {techStack.map((item: string) => (
            <p>{item}</p>
          ))}
        </div>
        <div className="container-hooks">
          <div className="hooks-card">
            <GitHub />
            <a target="_blank" href={linkGit}>
              Ver codigo
            </a>
          </div>
          <div className="hooks-card">
            <Chain />
            <a target="_blank" href={linkDeploy}>
              Visualizar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
