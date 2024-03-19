import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <div className="w-full">
      <TopBar />
      <Header />
      <CategoryList />
    </div>
  );
}
