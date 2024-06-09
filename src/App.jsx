import "./App.css";
import BasketModal from "./components/BasketModal";
import "./css/font.css";
import RouterArchitecture from "./router";
import { useSelector } from "react-redux";
function App() {
  const showBasketModal = useSelector(
    (state) => state.products.isShowBasketModal
  );
  return (
    <div className="relative">
      <RouterArchitecture />
      {showBasketModal && <BasketModal />}
    </div>
  );
}
export default App;
