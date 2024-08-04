import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};
// main layout
export default MainLayout;