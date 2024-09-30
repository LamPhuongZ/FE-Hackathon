import { Hero } from "./hero";
import { Nav } from "./nav";
import logoCompany from "../../assets/images/logo-company.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logoCompany} alt="logo-company" />
      <h1>Việc Làm Dễ</h1>
      <Nav />
      <Hero />
    </header>
  );
}
