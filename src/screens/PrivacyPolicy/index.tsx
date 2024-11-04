import './styles.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="privacy-policy__header">
        <div className="privacy-policy__overlay">
          <h1>Política de Privacidade</h1>
          <p>Última atualização: 4 de novembro de 2024</p>
        </div>
      </header>
      
      <div className="privacy-policy__content">
        <section className="privacy-policy__section">
          <h2>Introdução</h2>
          <p>
            Bem-vindo à nossa política de privacidade. Nesta página, explicamos como protegemos e usamos as suas informações pessoais.
          </p>
        </section>
        <section className="privacy-policy__section">
          <h2>Coleta de Informações
          </h2>
          <p>
          <strong>Informações Pessoais:</strong> O aplicativo coleta informações como nome, idade, histórico de saúde e outros dados necessários para o acompanhamento do tratamento fisioterapêutico infantil.
            Imagens e Documentos: Podem ser enviados fotos e documentos pertinentes ao tratamento. Estes são armazenados de maneira segura e acessados exclusivamente por profissionais autorizados.
          </p>
        </section>
        <section className="privacy-policy__section">
          <h2>Como Usamos Suas Informações</h2>
          <p>
          <strong>As informações coletadas são utilizadas para: </strong> 
            Avaliação e acompanhamento de tratamentos.
            Comunicação entre a clínica e os responsáveis, garantindo a continuidade do atendimento.
            Nota: Não utilizamos as informações para fins de marketing ou publicidade.
          </p>
        </section>
        <section className="privacy-policy__section">
          <h2>Compartilhamento de Informações</h2>
          <p>
          <strong>Não compartilhamos os dados com terceiros, exceto em situações específicas que envolvem: </strong>
          Autorização dos responsáveis: Qualquer compartilhamento externo requer autorização prévia dos responsáveis.
          Exigências legais: Em casos de exigência judicial ou regulatória, poderemos compartilhar dados conforme permitido por lei.
          </p>
        </section>
        <section className="privacy-policy__section">
          <h2>Segurança dos Dados</h2>
          <p>
            <strong>Implementamos práticas de segurança rigorosas para proteger os dados armazenados, incluindo: </strong>
            Criptografia: Proteção dos dados enviados e armazenados.
            Controle de Acesso: Somente profissionais com permissão têm acesso aos dados do paciente.
          </p>
        </section>
        <section className="privacy-policy__section">
          <h2>Direitos dos Usuários</h2>
          <p>
            <strong>Os responsáveis pelos pacientes têm o direito de: </strong>
            Solicitar a exclusão dos dados após o término do tratamento.
            Acessar as informações e atualizá-las conforme necessário.
            Para isso, basta entrar em contato com a clínica diretamente pelo aplicativo.
          </p>
        </section>
        <section className="privacy-policy__section">
          <h2>Alterações na Política de Privacidade</h2>
          <p>
          Nos reservamos o direito de alterar esta política. Informaremos previamente qualquer modificação e solicitaremos seu consentimento para o uso contínuo do aplicativo.
          </p>
        </section>
        <footer className="privacy-policy__footer">
          <p>Entre em contato conosco para mais informações sobre nossa política de privacidade.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
