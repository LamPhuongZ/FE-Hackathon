import { Hero } from "./hero";
import { Nav } from "./nav";
import logoCompany from "../../assets/images/logo-company.png";

export default function Header() {
  return (
    <header className="header w-full">
      <div className="header-top">
        <div className="logo-title">
          <img src={logoCompany} alt="logo-company" width={"40px"} height={"40px"} />
          <h1 className="title">Việc Làm Dễ</h1>
        </div>
        <Nav />
        <button className="btn-sign-up">Đăng Ký</button>
      </div>
      <Hero />
    </header>
  );
}
