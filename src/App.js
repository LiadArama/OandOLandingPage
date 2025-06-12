import "./App.css";
import "./styles/Global.style.css"; // Importing global styles
import ScrollToTopOnMount from "./components/util-components/ScrollToTopOnMount.jsx";
import MyLogo from "./components/page-header/components/MyLogo.jsx";
import MainTitle from "./components/page-header/components/MainTitle.jsx";
import PageIntroduction from "./components/page-intorduction/PageIntroduction.jsx";
import PageHeader from "./components/page-header/PageHeader.jsx";

function App() {
  return (
    <>
      <ScrollToTopOnMount />
      <PageHeader />
      <PageIntroduction />
    </>
  );
}

export default App;
