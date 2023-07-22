import './App.css';

import './components/reset.css'
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
