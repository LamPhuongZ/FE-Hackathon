import HomeTemplate from "./templates/HomeTemplate";
import LandingPage from "./pages/LandingPage"
import { FloatButton } from 'antd';
import './css/style.css'
function App() {
  return (
    <>
      <HomeTemplate />
      <LandingPage />
      <FloatButton.BackTop tooltip={<div>Back to top</div>}/>
    </>

  );
}

export default App;
