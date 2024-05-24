import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
export default function NavBarComponent() {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">VIDEOCLUB</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <NavLink color="foreground" to="/">
                        Inicio
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink color="foreground" to="/users">
                        Clientes
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to="/peliculas" color="foreground">
                        Peliculas
                    </NavLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <NavLink to="/login">Login</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <Button as={NavLink} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
