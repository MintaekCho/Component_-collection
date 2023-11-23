import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Card
        title="Mobild banking"
        desc="Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis."
        icon={{path: '/icon/card_icon.svg', bgColor: '#F7DEFF'}}
      />
    </>
  );
}

export default App;
