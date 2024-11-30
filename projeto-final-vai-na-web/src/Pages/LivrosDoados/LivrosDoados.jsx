import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LivrosDoadosStyle from "./LivrosDoados.module.scss";
import livros from "../../assets/livros.png";

function LivrosDoados(){
  return (
    <>
      <Header />
      <main>
        <section className={LivrosDoadosStyle.titleLivrosDoados}>
          <h1>Livros Doados</h1>
        </section>
        <section className={LivrosDoadosStyle.livrosCadastrados}>
          <section className={LivrosDoadosStyle.livrosCard}>
            <figure>
              <img src={livros} />
              <div>
                <figcaption>O protagonista</figcaption>
                <figcaption>Susanne Andrade</figcaption>
                <figcaption>Ficção</figcaption>
              </div>
            </figure>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default LivrosDoados;