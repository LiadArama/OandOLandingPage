import MyLogo from "./components/MyLogo";
import MainTitle from "./components/MainTitle";

function PageHeader() {
    return (
        <header className="page-header">
        <MyLogo />
        <MainTitle />
        </header>
    );
}

export default PageHeader;