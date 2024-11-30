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
                <h3>O protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
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