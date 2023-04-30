import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="relative">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;