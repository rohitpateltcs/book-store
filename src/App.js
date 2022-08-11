import "./App.css";
import BookBody from "./components/BookBody";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyList from "./components/MyList";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BookBody />} />
          <Route path="mylist" element={<MyList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
