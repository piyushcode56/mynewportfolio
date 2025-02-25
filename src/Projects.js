import campusImage1 from './assets/campusimage1.png';
import campusImage2 from './assets/campusimage2.png';
import campusImage3 from './assets/campusimage3.png';
import campusvideo1 from './assets/videocampus.mp4';
import campuscover from './assets/campuscover.jpeg';
import ebookcover from './assets/ebookcover.png';
import ebookstore1 from './assets/ebookstore1.png';
import ebookstore2 from './assets/ebookstore2.png';
import ebookstore3 from './assets/ebookstore3.png';
import ebookvideo1 from './assets/ebookvideo.mp4;
import moviecover from './assets/moviecover.jpg';
import movie1 from './assets/movie1.png';
import movie2 from './assets/movie2.png';
import movievideo1 from './assets/movievideo.mp4';
const projects = [
    {
        id:"1",
        title:"Campus Collab",
        description:"Campus Collab is a web platform designed for students to upload, update, and showcase their projects while allowing others to explore and engage with them. It provides a space where students can share their work, gain recognition, and discover innovative projects created by their peers. Users can also update their uploaded projects and add projects to their favorites, making it easier to track and revisit inspiring ideas. Whether it's a web application, research project, or a creative innovation, Campus Collab fosters a collaborative environment for students to connect and showcase their talents.",
        projectcover:campuscover,
        images:[campusImage1, campusImage2, campusImage3],
        videos:[campusvideo1],
        githubLink:'https://github.com/piyushcode56/campuscollab'
    },
    {
        id:"2",
        title:"Ebook Store",
        description:"The E-Book Store is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to explore a collection of e-books, view detailed information, and add books to their cart for easy access. If a PDF version of a book is available, users can read it online directly within the platform. The application features secure user authentication using JWT and provides a smooth, responsive user experience across different devices. This project showcases full-stack development skills with seamless integration of frontend, backend, and database technologies.",
        projectcover:ebookcover,
        images:[ebookstore1, ebookstore2, ebookstore3],
        videos:[campusvideo1],
        githubLink:'https://github.com/piyushcode56/ebookstore'
        
    },
    {
        id:"3",
        title:"Movie Web Application(WatchWave)",
        description:"The Movie Web Application is a dynamic and interactive platform built using HTML, CSS, JavaScript, and React.js. It fetches real-time movie data from the TMDB API and displays a vast collection of movies with essential details. Users can explore movie ratings, official trailers, genres, and other key information. The application also features a powerful search and filtration system that allows users to search for movies by name and instantly view relevant details. With a clean and responsive design, this project provides an engaging experience for movie enthusiasts while demonstrating expertise in API integration and front-end development.",
        projectcover:moviecover,
        images:[movie1, movie2],
        videos:[movievideo1],
        githubLink:'https://github.com/piyushcode56/watchwave'
    },
]

export default projects;
