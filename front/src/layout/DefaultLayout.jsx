
import { Children } from "react";
import { Link } from "react-router-dom";

export default function DefaultLayout({children}){

    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    {/* <li><Link to="/Registro">Registro</Link></li> */}
                </ul>
            </nav>
        </header>

        <main>{children}</main>
        </>
    )
}