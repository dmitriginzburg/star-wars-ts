import {SWContext} from "../utils/context.ts";
import {useContext} from "react";
import Button from "./ui/Button.tsx";

const NavItem = ({itemTitle}: {itemTitle: string}) => {
    const {changePage} = useContext(SWContext);
    return (
        <Button
            variant="nav"
            text={itemTitle}
            onClick={() => changePage(itemTitle)}/>
    )
}

export default NavItem;