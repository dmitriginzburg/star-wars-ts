import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constants.js";
import {SWContext} from "./utils/context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'mx-2'}>
            <SWContext value={{page, setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App
