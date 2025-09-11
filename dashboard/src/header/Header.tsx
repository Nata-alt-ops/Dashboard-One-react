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
 const [isOpen, setIsOpen] = useState<string | null>(null);
    const [coursesEverClicked, setCoursesEverClicked] = useState(false);

    const toggleCourses = () => {
  // Устанавливаем флаг, что по Courses кликнули хотя бы раз
  if (!coursesEverClicked) {
    setCoursesEverClicked(true);
  }

  // Переключаем открытие/закрытие списка
  setIsOpen(isOpen === "courses" ? null : "courses");
};

  const toggleDropdown = (type:any) => {
    setIsOpen(isOpen === type ? null : type);
  };
    return(
        <header>
            <div className="d-flex p-2 mb-2">

                {/*Левая часть шапки*/}
               
                <div className="left_header">
                

                <div className="p-2">
                    <div className="logo_img">
                    <img src="/logo2.png" alt="" className="logo"></img>
                    </div>
                 {/* Dashboard Button */}
                 <div className="p-0">
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
                    </div>
                    <div className="p-0">
                    {/* Courses Button */}
                    <div className="p-1 button_couses_container">
                        <button
                        className={`btn d-flex align-items-center justify-content-between w-100 ${
  coursesEverClicked ? 'active_button' : 'noactive_button'
}`}
                        type="button"
                        onClick={toggleCourses}
                        aria-expanded={isOpen === "courses"}
                        >
                            <div className="i">
                        <img src="/graduation-cap.svg" alt="" className="button_svg1" />
                        <span className="text_button1">Courses</span>
                        </div>
                        <span className="badge bg-light rounded-circle me-0 number_button1">3</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="15"
                            fill='color: #667797'
                            viewBox="0 0 17 16"
                            style={{
                            transform: isOpen === "courses" ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                            }}
                        >
                            <path className='color_down' fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
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
                    <div className="p">
                        <div className="w">
                       <button>
                        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                        <path className="t" d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                        </svg>
                         <p>Students</p>
                         </button>
                       </div> 
                    </div>
                    <div className="p">
                        <div className="w">
                       <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                       <path className="t" d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>
                       </svg>
                       <p>Assignments</p>
                       </button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                        <path className="t" d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                        </svg>
                        <p>Mentors</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> 
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="#667797" xmlns="http://www.w3.org/2000/svg">
                        <path  className="t" d="M2 4C2 2.89543 2.89543 2 4 2H10C11.1046 2 12 2.89543 12 4V15.5C12 15.6844 11.8985 15.8538 11.7359 15.9408C11.5733 16.0278 11.3761 16.0183 11.2226 15.916L7 13.1009L2.77735 15.916C2.62392 16.0183 2.42665 16.0278 2.26407 15.9408C2.10149 15.8538 2 15.6844 2 15.5V4ZM4 3C3.44772 3 3 3.44772 3 4V14.5657L6.72265 12.084C6.8906 11.972 7.1094 11.972 7.27735 12.084L11 14.5657V4C11 3.44772 10.5523 3 10 3H4Z" />
                        <path className="t" d="M4.26758 1H12C12.069 1 12.1365 1.007 12.2015 1.02032C12.6572 1.11356 13 1.51675 13 2V13.7676L13.2227 13.916C13.3761 14.0183 13.5734 14.0278 13.7359 13.9408C13.8985 13.8538 14 13.6844 14 13.5V2C14 0.89543 13.1046 0 12 0H6.00001C5.25973 0 4.61339 0.402199 4.26758 1Z" />
                        </svg>
                        <p>Resourses</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                       <path className="t" d="M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"></path>
                       </svg>
                        <p>Messages</p>
                        </button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                       <path  className="t" d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
                       </svg>
                       <p>Analytics</p></button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                       <path className="t" d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
                       </svg>
                        <p>Event</p>
                        </button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                       <path className="t" d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"></path>
                       </svg>
                       <p>Library</p>
                       </button>
                       </div> 
                    </div>
                    <div className="p-0">
                        <div className="w">
                       <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256"><path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path></svg>
                       <p>Pricing</p>
                       </button>
                       </div> 
                    </div>
      




                    
                </div>


                </div>
               


















































































































































































































































































































































































































































































































































































































                </div>

             















































                <div className="p-2">Флекс элемент 2</div>
                 







          
        </header>
    )
}