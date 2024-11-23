import S from "./Header.module.scss";
import Livro from "../../assets/livro.png";

function Header() {
  return (
    <>
      <header className={S.header}>
        <section className={S.boxShadow}>
          <img src={Livro} alt="Livro" />
          <h1>Livros Vai Na Web</h1>
        </section>
        <nav className={S.menu}>
          <ul>
            <li>Inicio</li>
            <li>Livros Doados</li>
            <li>Quero Doar</li>
          </ul>
        </nav>
        <section className={S.input}>
           <input type="text" id="pesquisa" name="pesquisa" />                 
        </section>
      </header>
    </>
  );
}

export default Header;
