import Navigation from "./Navigation.tsx";
import {useLocation} from "react-router";
import {characters, defaultHero, navItems} from "../utils/constants.ts";

const Header = () => {

    const {pathname} = useLocation();
    const parts = pathname.split("/");

    const isAboutPage =
        parts[1]?.toLowerCase() === navItems[1].toLowerCase().replace(" ", "%20");

    const heroId = parts[2] ? parts[2] : defaultHero;

    const heroName =
        characters[heroId as keyof typeof characters]?.name || "Luke Skywalker";

    return (
        <header className="rounded-t-3xl bg-gray">
            <Navigation/>

            {isAboutPage && (
                <h1 className="text-center text-4xl py-6">
                    {heroName}
                </h1>
            )}

        </header>
    )
}

export default Header;