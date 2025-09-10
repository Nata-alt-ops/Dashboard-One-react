import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const Header =() => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isButtonOpen, setIsButtonOpen] = useState(false);
    return(
        <header>
            <div className="d-flex p-2 mb-2">

                {/*Левая часть шапки*/}
               

                <div className="d-flex justify-content-center">

                <div className="p-2">
                    <div className="logo_img">
                    <img src="/logo2.png" alt="" className="logo"></img>
                    </div>
                <div className="p-0">
                    <div className="p-1 dropdown_con">
                    <button
                        className="btn btn-primary d-flex align-items-center justify-content-between w-100"
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                    >
                        <img src="/squares-four-bold.svg" alt=""  className="button_svg"></img>
                        <span className="text_button">Dashboard</span>
                        <span className="badge bg-light  rounded-circle me-0 number_button ">3</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="currentColor" viewBox="0 0 17 16"
                            style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>

                    {/* Меню в потоке */}
                    {isMenuOpen && (
                        <div className="dropdown-menu-in-flow mt-1 ">
                            <button className="dropdown-item" type="button">Dashboard One</button>
                            <button className="dropdown-item" type="button">Dashboard Two</button>
                            <button className="dropdown-item" type="button">Dashboard Three</button>
                        </div>
                    )}
                </div>
                </div>
                <div className="p-0">
                    <div className=" p-1 couses_con">
                         <button
                        className="btn btn-primary d-flex align-items-center justify-content-between w-100"
                        type="button"
                        onClick={() => setIsButtonOpen(!isButtonOpen)}
                        aria-expanded={isButtonOpen}
                    >
                        <img src="/squares-four-bold.svg" alt=""  className="button_svg1"></img>
                        <span className="text_button1">Courses</span>
                        <span className="badge bg-light  rounded-circle me-0 number_button1 ">3</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" fill="currentColor" viewBox="0 0 17 16"
                            style={{ transform: isButtonOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                     {/* Меню в потоке */}
                    {isButtonOpen && (
                        <div className="couses-menu-in-flow mt-1 ">
                            <button className="couses-item" type="button">Dashboard One</button>
                            <button className="couses-item" type="button">Dashboard Two</button>
                            <button className="couses-item" type="button">Dashboard Three</button>
                        </div>
                    )}
                    </div>
                </div>




                    
                </div>


                </div>


















































































































































































































































































































































































































































































































































































































                </div>

             















































                <div className="p-2">Флекс элемент 2</div>







          
        </header>
    )
}