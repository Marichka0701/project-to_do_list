import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './components/reset.css'
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodoListPage from "./pages/TodoListPage/TodoListPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/sign-up" element={<SignUpPage />}></Route>
                <Route path="/todo" element={<TodoListPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
