"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import Link from "next/link";
import React from "react";

export default function Home() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    const toggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    React.useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-screen">
            <div className="">
                <button onClick={toggle}>
                    {theme === "dark" ? (
                        <svg
                            fill="#fff"
                            width="64px"
                            height="64px"
                            viewBox="-7.5 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            className="scale-50 dark:block"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>dark</title>{" "}
                                <path d="M9.75 8.25v0.219c0 0.844-0.375 1.25-1.156 1.25s-1.125-0.406-1.125-1.25v-0.219c0-0.813 0.344-1.219 1.125-1.219s1.156 0.406 1.156 1.219zM12.063 9.25l0.156-0.188c0.469-0.688 1.031-0.781 1.625-0.344 0.625 0.438 0.719 1.031 0.25 1.719l-0.188 0.156c-0.469 0.688-1.031 0.781-1.625 0.313-0.625-0.438-0.688-0.969-0.219-1.656zM5 9.063l0.125 0.188c0.469 0.688 0.406 1.219-0.188 1.656-0.625 0.469-1.219 0.375-1.688-0.313l-0.125-0.156c-0.469-0.688-0.406-1.281 0.188-1.719 0.625-0.438 1.219-0.281 1.688 0.344zM8.594 11.125c2.656 0 4.844 2.188 4.844 4.875 0 2.656-2.188 4.813-4.844 4.813-2.688 0-4.844-2.156-4.844-4.813 0-2.688 2.156-4.875 4.844-4.875zM1.594 12.5l0.219 0.063c0.813 0.25 1.063 0.719 0.844 1.469-0.25 0.75-0.75 0.969-1.531 0.719l-0.219-0.063c-0.781-0.25-1.063-0.719-0.844-1.469 0.25-0.75 0.75-0.969 1.531-0.719zM15.375 12.563l0.219-0.063c0.813-0.25 1.313-0.031 1.531 0.719s-0.031 1.219-0.844 1.469l-0.188 0.063c-0.813 0.25-1.313 0.031-1.531-0.719-0.25-0.75 0.031-1.219 0.813-1.469zM8.594 18.688c1.469 0 2.688-1.219 2.688-2.688 0-1.5-1.219-2.719-2.688-2.719-1.5 0-2.719 1.219-2.719 2.719 0 1.469 1.219 2.688 2.719 2.688zM0.906 17.281l0.219-0.063c0.781-0.25 1.281-0.063 1.531 0.688 0.219 0.75-0.031 1.219-0.844 1.469l-0.219 0.063c-0.781 0.25-1.281 0.063-1.531-0.688-0.219-0.75 0.063-1.219 0.844-1.469zM16.094 17.219l0.188 0.063c0.813 0.25 1.063 0.719 0.844 1.469s-0.719 0.938-1.531 0.688l-0.219-0.063c-0.781-0.25-1.063-0.719-0.813-1.469 0.219-0.75 0.719-0.938 1.531-0.688zM3.125 21.563l0.125-0.188c0.469-0.688 1.063-0.75 1.688-0.313 0.594 0.438 0.656 0.969 0.188 1.656l-0.125 0.188c-0.469 0.688-1.063 0.75-1.688 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM13.906 21.375l0.188 0.188c0.469 0.688 0.375 1.219-0.25 1.656-0.594 0.438-1.156 0.375-1.625-0.313l-0.156-0.188c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.438 1.156-0.375 1.625 0.313zM9.75 23.469v0.25c0 0.844-0.375 1.25-1.156 1.25s-1.125-0.406-1.125-1.25v-0.25c0-0.844 0.344-1.25 1.125-1.25s1.156 0.406 1.156 1.25z" />{" "}
                            </g>
                        </svg>
                    ) : (
                        <svg
                            width="64px"
                            height="64px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="scale-50 dark:hidden block"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                                    stroke="#121212"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />{" "}
                            </g>
                        </svg>
                    )}
                </button>
            </div>
            <div className="max-w-2xl px-8 text-sm dark:text-gray-500">
                Hi, I'm Klef.
                <br />
                <br />I build{" "}
                <Link
                    className="relative bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:bg-gradient-to-r after:from-green-400 after:to-green-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://github.com/klefcodes"
                    rel="noopener"
                    target="_blank"
                >
                    stuff
                </Link>{" "}
                that works on the web!
                <br />
                I'm obsessed with crafting{" "}
                <span className="relative cursor-default bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-left hover:after:scale-x-100 after:origin-right after:scale-x-0">
                    delightful
                </span>{" "}
                UI and <br /> web experiences.
                <br />
                <br />I made{" "}
                <Link
                    className="relative bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:to-cyan-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://brimble.io"
                    target="_blank"
                >
                    Brimble
                </Link>{" "}
                .<br />
                <br />
                Follow me on
                <br />
                <Link
                    className="relative  decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-white after:to-white  after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://x.com/klefcodes"
                    rel="noopener"
                    target="_blank"
                >
                    𝕏
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-blue-600 after:to-blue-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://www.linkedin.com/in/klefcodes/"
                    rel="noopener"
                    target="_blank"
                >
                    linkedin
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-amber-400 after:to-amber-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://instagram.com/klefcodes"
                    rel="noopener"
                    target="_blank"
                >
                    instagram
                </Link>{" "}
                or{" "}
                <Link
                    className="relative bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-red-500 after:to-pink-400 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="mailto:me@klefcodes.net"
                >
                    say hi
                </Link>
                .
            </div>

            <div className="absolute bottom-0 right-0 grid justify-items-end gap-1 p-2 text-[10px] text-gray-500 sm:p-4">
                <a
                    href="https://open.spotify.com/user/86poj7ufl4f9wj0un1vdkljsc?si=afb5b42cbdc24214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid cursor-cell select-none grid-flow-col gap-1.5 pl-4 transition-all hover:text-gray-300"
                >
                    <div className="line-clamp-1 break-all leading-4">
                        Not Playing
                    </div>
                    <svg
                        className="icon icon-tabler icon-tabler-brand-spotify h-4 w-4"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.7"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M9 15c1.5 -1 4 -1 5 .5"></path>
                        <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"></path>
                        <path d="M7 9c2 -1 6 -2 10 .5"></path>
                    </svg>
                </a>
                <div className="grid select-none grid-flow-col gap-1.5 transition-all hover:text-gray-300">
                    <div className="font-mono leading-4 tracking-wider">
                        {new Date().toLocaleTimeString("en-US", {
                            timeZone: "Africa/Lagos",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}
                    </div>
                    <svg
                        className="icon icon-tabler icon-tabler-clock-hour-4 h-4 w-4"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.7"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line
                            stroke-width="1.7"
                            x1="12"
                            y1="12"
                            x2="10.250000000000004"
                            y2="15.031088913245537"
                        ></line>
                        <line
                            stroke-width="1.7"
                            x1="12"
                            y1="12"
                            x2="8.654346968205711"
                            y2="15.715724127386972"
                        ></line>
                        <line
                            stroke-width="1"
                            x1="12"
                            y1="12"
                            x2="6.370834875401148"
                            y2="15.25"
                        ></line>
                    </svg>
                </div>
                <a
                    href="https://www.google.com/maps/search/Tainan, Taiwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid cursor-ne-resize select-none grid-flow-col gap-1.5 transition-all hover:text-gray-300"
                >
                    <div className="line-clamp-1 break-all leading-4">
                        Abuja, Nigeria
                    </div>
                    <svg
                        className="icon icon-tabler icon-tabler-location mx-px h-4 w-3.5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.7"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                    </svg>
                </a>
            </div>
        </main>
    );
}
