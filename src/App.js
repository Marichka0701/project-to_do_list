import './App.css';

import './components/reset.css'
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import AddTask from "./components/AddTask/AddTask";

function App() {
    return (
        <div className="App">
            {/*<SignInPage/>*/}
            {/*<SignUpPage />*/}
            <TodoListPage />
            {/*<AddTask />*/}
        </div>
    );
}

export default App;
