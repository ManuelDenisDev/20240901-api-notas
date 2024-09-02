import "./App.css";
import Home from "./Home";
import ModalProvider from "./provider/ModalProvider";

export default function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}
