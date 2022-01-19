import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "./Button";
import {
    GiPartyPopper,
    GiPhotoCamera,
    GiCalendar,
    GiSmartphone,
    GiInfo,
} from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

function NavBar() {
    const router = useRouter();
    const currentPath = router.asPath;
    const navCheck = (path) => {
        if (path === currentPath) {
            return true;
        }
        return false;
    };
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="flex w-full p-4 bg-primary-dark items-center relative">
            <div className="lg:w-[940px] lg:mx-auto  flex flex-row justify-between items-center w-full mx-[20px] ">
                <h1 className="text-primary-pink">
                    <Link href={"/"}>DAL EVENTS</Link>
                </h1>
                {menuOpen ? (
                    <MdClose
                        className="text-primary-pink lg:hidden cursor-pointer"
                        onClick={handleMenu}
                    />
                ) : (
                    <HiMenuAlt3
                        className="text-primary-pink lg:hidden cursor-pointer"
                        onClick={handleMenu}
                    />
                )}

                <ul
                    className={`text-accent-white lg:flex lg:flex-row lg:w-[60%] justify-between font-bold text-xs items-center lg:static lg:h-auto absolute top-full left-0 bg-primary-dark w-full h-screen origin-right lg:translate-x-0 translate-x-full duration-75 ease-out ${
                        menuOpen ? "translate-x-0" : ""
                    }`}
                >
                    <li
                        className={`nav-links ${
                            navCheck("/events") ? "text-primary-pink" : ""
                        } py-5 pl-[20px] lg:p-0`}
                    >
                        <Link href={"/events"}>
                            <a className="relative">
                                Events{" "}
                                <GiPartyPopper className="absolute w-5 -top-2 -right-4" />
                            </a>
                        </Link>
                    </li>
                    <li
                        className={`nav-links  ${
                            navCheck("/bookings") ? "text-primary-pink" : ""
                        } py-5 pl-[20px] lg:p-0 border-t-2 border-primary-pink lg:border-0`}
                    >
                        <Link href={"/bookings"}>
                            <a className="relative">
                                Bookings{" "}
                                <GiCalendar className="absolute w-5 -top-2 -right-4 " />
                            </a>
                        </Link>
                    </li>
                    <li
                        className={`nav-links ${
                            navCheck("/gallery") ? "text-primary-pink" : ""
                        } py-5  pl-[20px] lg:p-0 border-t-2 border-primary-pink lg:border-0`}
                    >
                        <Link href={"/gallery"}>
                            <a className="relative">
                                Gallery{" "}
                                <GiPhotoCamera className="absolute w-5 -top-2 -right-4 " />
                            </a>
                        </Link>
                    </li>
                    <li
                        className={`nav-links ${
                            navCheck("/contacts") ? "text-primary-pink" : ""
                        } py-5 pl-[20px] lg:p-0 border-t-2 border-primary-pink lg:border-0`}
                    >
                        <Link href={"/contacts"}>
                            <a className="relative">
                                Contacts{" "}
                                <GiSmartphone className="absolute w-5 -top-2 -right-4 " />
                            </a>
                        </Link>
                    </li>
                    <li
                        className={`nav-links ${
                            navCheck("/about") ? "text-primary-pink" : ""
                        } py-5 pl-[20px] lg:p-0 border-t-2 border-primary-pink lg:border-0`}
                    >
                        <Link href={"/about"}>
                            <a className="relative">
                                About Us{" "}
                                <GiInfo className="absolute w-5 -top-2 -right-4 " />
                            </a>
                        </Link>
                    </li>

                    <li className="lg:m-0 lg:ml-16  mx-3 ">
                        <Button
                            extraStyles={
                                "bg-primary-pink hover:bg-accent-white hover:text-primary-pink "
                            }
                        >
                            Book Now!
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
