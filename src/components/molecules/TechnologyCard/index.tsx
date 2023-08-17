import "./styles.scss";

type TechnologyCardProps = {
  name: string;
  children: React.ReactNode;
};

function TechnologyCard({ children, name }: TechnologyCardProps) {
  return (
    <div id="container-tech">
      {children}
      <div className="technology-name">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default TechnologyCard;
