import {createContext} from "react";

interface SWContextProps {
    page: string
    setPage: (page: string) => void
}

export const SWContext = createContext<SWContextProps | null>(null);