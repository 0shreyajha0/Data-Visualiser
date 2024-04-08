import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./components/Footer";
import { SignUpButton } from "./components/SignUpButton";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Footer />
      <SignUpButton />
    </div>
  );
}

export default App;
