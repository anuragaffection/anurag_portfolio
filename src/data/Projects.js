import anurag_portfolio from '../assets/anurag_portfolio.jpg'
import article_app from '../assets/article_app.jpg'
import full_stack_notes from '../assets/full_stack_notes.jpg'
import entertainment_web_app from "../assets/entertainment_app.png"
import resume_builder from '../assets/resume_builder.jpg'
import spotify_clone from '../assets/spotify_clone.png'
import anu_ai from "../assets/anu_ai.png"

export const projects = [
    {
        id: 0,
        img: entertainment_web_app,
        skills: ["MERN", "Tailwind", "TMDB API", "Optimization"],
        title: 'Entertainment Web App',
        date: 'April 2024 - May 2024',
        desc: 'A full stack real time entertainment web app with media browsing , bookmarking and user authentication',
        live: 'https://entertainment-app-anurag-affection.vercel.app/',
        github: 'https://github.com/anuragaffection/entertainment-web-app'
    },
    {
        id: 1,
        img: resume_builder,
        skills: ["React", "MUI", "Redux Toolkit", "React Hook Form"],
        title: 'Resume Builder',
        date: 'January 2024 - April 2024',
        desc: 'Build your resume by choosing from predefined template & export it as pdf. This is application is fully free, easy to use & best suitable for freshers. ',
        live: 'https://resume-builder-anurag.vercel.app',
        github: 'https://github.com/anuragaffection/resume_builder'
    },
    {
        id: 1.1,
        img: anu_ai,
        skills: ["React", "React Router Dom", "Tailwind", "Express js", "Cors", "OpenAi"],
        title: 'Anu AI',
        date: 'December 2024 - December 2024',
        desc: 'This was task project at the time of interview, completed this in 2-3 days. Converted PI.ai to Anu.ai ',
        live: 'https://anu.gklite.in/',
        github: 'https://github.com/anuragaffection/anu_web_react'
    },
    // {
    //     id: 2,
    //     img: article_app,
    //     skills: ["React", "Express", "MongoDB", "Tailwind", "JWT", "Axios"],
    //     title: 'Article App',
    //     date: 'December 2023 - March 2024',
    //     desc: 'The Article App allows users to publish their favorite articles. It Support user authentication & authorization. It is full stack project.',
    //     live: 'https://blog-mern-frontend-anurag.vercel.app',
    //     github: 'https://github.com/anuragaffection/blog_mern_frontend'
    // },
    // {
    //     id: 3,
    //     img: anurag_portfolio,
    //     skills: ["Tailwind CSS", "React", "Javascript", "HTML", "CSS"],
    //     title: 'Anurag Portfolio',
    //     date: 'January 2024 - present',
    //     desc: 'A portfolio app detailing & describing about me. Basically a resume converted into website.',
    //     live: 'https://anuragaffection.vercel.app',
    //     github: 'https://github.com/anuragaffection/anurag_portfolio'
    // },
    // {
    //     id: 4,
    //     img: full_stack_notes,
    //     skills: ["Java", "DSA", "Javascript", "MERN", "Kotlin"],
    //     title: 'Full Stack Notes',
    //     date: 'May 2023 - Present',
    //     desc: 'A repo you need for Programming & Problem Solving. This is contains everthing you need to be full stack web developer with DSA.',
    //     live: 'https://github.com/anuragaffection/FullStackNotes',
    //     github: 'https://github.com/anuragaffection/FullStackNotes'
    // },
    // {
    //     id: 5,
    //     img: spotify_clone,
    //     skills: ["Tailwind CSS", "React", "React Icons", "Vite", "NPM"],
    //     title: 'Spotify Clone',
    //     date: 'February 2024 - February 2024',
    //     desc: 'Tried cloning the Home and Search pages of Spotify. This was an assignment given during job hunting. Remember, many functionalities will not work, as it is just a frontend Tailwind CSS implementation.',
    //     live: 'https://spotify-clone-anurag-affection.netlify.app/',
    //     github: 'https://github.com/anuragaffection/spotify-clone-assignment'
    // }
]