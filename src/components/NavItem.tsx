import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

interface NavItemProps {
    itemTitle: string;
}
const NavItem = ({itemTitle}:NavItemProps) => {
    const {setPage} = useContext(SWContext)!;
    return (
        <div onClick={() => setPage(itemTitle)}
             className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white`}>{itemTitle}</div>
    )
}

export default NavItem;