import MainStyle from "./Main.module.scss";
import Comunidade from "../../assets/comunidade.png";
import Ler from "../../assets/ler.png";
import Transformacao from "../../assets/tranformacao.png";
import Balanca from "../../assets/balanca.png";

function Main() {
  return (
    <>
      <main>
        <section className={MainStyle.boxLivro}>
          <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
        </section>
        <section className={MainStyle.titleMain}>
          <div>
            <h2>Por que devo doar?</h2>
          </div>
        </section>
        <section className={MainStyle.boxCard}>
          <figure className={MainStyle.conteudo}>
            <img src={Comunidade} alt="Comunidade" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </figure>
          <figure className={MainStyle.conteudo}>
            <img src={Ler} alt="Leitura" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </figure>
          <figure className={MainStyle.conteudo}>
            <img src={Transformacao} alt="Comunidade" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </figure>
          <figure className={MainStyle.conteudo}>
            <img src={Balanca} alt="Comunidade" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </figure>
        </section>
      </main>
    </>
  );
}

export default Main;