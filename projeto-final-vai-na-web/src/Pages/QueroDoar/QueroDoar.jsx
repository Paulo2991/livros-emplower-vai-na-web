import DoarStyle from "./QueroDoar.module.scss";
import Frame from "../../assets/frame.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function QueroDoar(){
  return (
    <>
      <Header />
      <main className={DoarStyle.mainForm}>
        <section className={DoarStyle.corpoForm}>
            <form className={DoarStyle.form}>
              <div>
                <img src={Frame} />
                <h1>Informações Do Livro</h1>
              </div>
              <input
                type="text"
                id="titulo"
                name="titulo"
                placeholder="Titulo"
              />
              <input
                type="text"
                id="categoria"
                name="categoria"
                placeholder="Categoria"
              />
              <input type="text" id="autor" name="autor" placeholder="Autor" />
              <input
                type="text"
                id="linkDaImagem"
                name="linkDaImagem"
                placeholder="Link Da Imagem"
              />
              <button>Doar</button>
            </form>
          </section>
      </main>
      <Footer />
    </>
  );
}

export default QueroDoar;