import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.scss';

export const Header =() => {
    return(
        <header>
            <div className="d-flex p-2 mb-2">

                {/*Левая часть шапки*/}
               

                <div className="d-flex justify-content-center">

                <div className="p-2">
                    <div className="logo_img">
                    <img src="/logo2.png" alt="" className="logo"></img>
                    </div>
                <div className="p-2">
                    <div className="dropdown_con">
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle d-flex align-items-center"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span className="me-1">Dashboard</span>
                                <span className="badge bg-light text-dark rounded-circle me-1">3</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.5 5.5a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-start">
                                <li>
                                    <button className="dropdown-item" type="button">Dashboard One</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">Dashboard Two</button>
                                </li>
                                <li>
                                    <button className="dropdown-item" type="button">Dashboard Three</button>
                                </li>
                            </ul>
                        </div>
                    </div>




                    </div>
                </div>


                </div>
                </div>

             















































                <div className="p-2">Флекс элемент 2</div>







          
        </header>
    )
}