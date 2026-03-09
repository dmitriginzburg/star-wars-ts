import { SWContext } from "../utils/context";
import { useContext } from "react";
import Button from "./ui/Button";

const NavItem = ({ itemTitle }: { itemTitle: string }) => {

    const { setPage } = useContext(SWContext)!;

    return (
        <Button
            variant="nav"
            text={itemTitle}
            onClick={() => setPage(itemTitle)}
        />
    )
}

export default NavItem;