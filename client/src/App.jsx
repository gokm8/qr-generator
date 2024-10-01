import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QR from "./Components/QR/QR";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<QR />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
