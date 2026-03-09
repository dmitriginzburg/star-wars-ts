import {SWContext} from "../utils/context";
import {useContext} from "react";
import Button from "./ui/Button";

const NavItem = ({itemTitle}: {itemTitle: string}) => {
    const context = useContext(SWContext);

    if (!context) return null;

    const {setPage} = context;

    return (
        <Button
            variant="nav"
            text={itemTitle}
            onClick={() => setPage(itemTitle)}
        />
    )
}

export default NavItem;