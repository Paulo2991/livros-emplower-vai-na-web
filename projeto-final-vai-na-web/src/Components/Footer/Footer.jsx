import footerSytle from "./Footer.module.scss";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";

function Footer(){
  return (
    <>
      <footer className={footerSytle.footer}>
        <section className={footerSytle.conteudoFooter}>
          <h1>4002-8922</h1>
          <figure>
            <img src={Facebook} />
            <img src={Twitter} />
            <img src={Youtube} />
            <img src={Linkedin} />
            <img src={Instagram} />
          </figure>
        </section>
        <section className={footerSytle.diretosReservados}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
        </section>
      </footer>
    </>
  );
}

export default Footer;