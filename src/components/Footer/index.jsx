import "./style.css";
import logo from "../../assets/img/R.png";
export const Footer = () => {
  return (
    <footer>
      <div className="info-footer">
        <h4>Desenvolvido por @guilhermejf</h4>
        <img src={logo} alt="logobrand" />
      </div>
    </footer>
  );
};
