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
    const [isOpen, setIsOpen] = useState(null); // 'dashboard' or 'courses'

  const toggleDropdown = (type:any) => {
    setIsOpen(isOpen === type ? null : type);
  };
    return(
        <header>
            <div className="d-flex p-2 mb-2">

                {/*Левая часть шапки*/}
               

                <div className="d-flex justify-content-center">

                <div className="p-2">
                    <div className="logo_img">
                    <img src="/logo2.png" alt="" className="logo"></img>
                    </div>
                 {/* Dashboard Button */}
          <div className="p-1 dropdown_con">
            <button
              className="btn btn-primary d-flex align-items-center justify-content-between w-100"
              type="button"
              onClick={() => toggleDropdown("dashboard")}
              aria-expanded={isOpen === "dashboard"}
            >
                        <img src="/squares-four-bold.svg" alt="" className="button_svg" />
                        <span className="text_button">Dashboard</span>
                        <span className="badge bg-light rounded-circle me-0 number_button">3</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 17 16"
                            style={{
                            transform: isOpen === "dashboard" ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                            }}
                        >
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </button>

                        {/* Dashboard Dropdown */}
                        {isOpen === "dashboard" && (
                        <div className="dropdown-menu-in-flow mt-1">
                            <button className="dropdown-item" type="button">Dashboard One</button>
                            <button className="dropdown-item" type="button">Dashboard Two</button>
                            <button className="dropdown-item" type="button">Dashboard Three</button>
                        </div>
                        )}
                    </div>
                    <div className="p-0">
                    {/* Courses Button */}
                    <div className="p-1 button_couses_container">
                        <button
                        className={`btn d-flex align-items-center justify-content-between w-100 ${isOpen === "courses" ? 'btn-secondary' : 'btn-secondary'}`}
                        type="button"
                        onClick={() => toggleDropdown("courses")}
                        aria-expanded={isOpen === "courses"}
                        >
                        <img src="/graduation-cap.svg" alt="" className="button_svg1" />
                        <span className="text_button1">Courses</span>
                        <span className="badge bg-light rounded-circle me-0 number_button1">3</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 17 16"
                            style={{
                            transform: isOpen === "courses" ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                            }}
                        >
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </button>

                        {/* Courses Dropdown */}
                        {isOpen === "courses" && (
                        <div className="couses-menu-in-flow mt-1">
                            <button className="couses-item" type="button">Student Courses</button>
                            <button className="couses-item" type="button">Mentor Courses</button>
                            <button className="couses-item" type="button">Create Course</button>
                        </div>
                        )}
                    </div>
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/users-three.svg" alt="" className="t"></img><p>Students</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/clipboard-text.svg" alt="" className="t"></img><p>Assignments</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/users.svg" alt="" className="t"></img><p>Mentors</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/bookmarks.svg" alt="" className="t"></img><p>Resourses</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/chats-teardrop.svg" alt="" className="t" ></img><p>Messages</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/chart-bar.svg" alt="" className="t"></img><p>Analytics</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/calendar-dots.svg" alt="" className="t"></img><p>Event</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/books.svg" alt="" className="t"></img><p>Library</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <img src="/coins.svg" alt="" className="t"></img><p>Pricing</p></button>
                       </div> 
                    </div>
      




                    
                </div>


                </div>


















































































































































































































































































































































































































































































































































































































                </div>

             















































                <div className="p-2">Флекс элемент 2</div>







          
        </header>
    )
}