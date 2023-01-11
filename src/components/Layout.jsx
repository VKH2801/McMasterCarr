import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to='/'>HomePage</Link>
                    </li>
                    <li>
                        <Link to='/categories'>SelectedCategories</Link>
                    </li>
                </ul>
            </nav> */}

            <Outlet></Outlet>
        </>
    )
}

export default Layout;