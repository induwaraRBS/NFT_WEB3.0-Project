import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://contenthub-static.crypto.com/wp_media/2023/08/TOP-10-NFT-TOKENS-TO-KNOW-IN-2023-.jpg"
      />
    </div>
  );
}

export default App;
