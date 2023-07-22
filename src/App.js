import './App.css';

import './components/reset.css'
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
    return (
        <div className="App">
            {/*<SignInPage/>*/}
            <SignUpPage />
        </div>
    );
}

export default App;
