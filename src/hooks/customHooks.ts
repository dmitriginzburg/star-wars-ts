import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";

export const useValidHero = () => {
    const {changeHero} = useContext(SWContext)
    const {heroId = defaultHero} = useParams();

    useEffect(() => {
        if (heroId in characters) {
            changeHero(heroId);
        } else {
            changeHero("error");
        }
    }, [heroId, changeHero]);

    return {
        heroId,
        isHeroValid: heroId in characters
    }
}