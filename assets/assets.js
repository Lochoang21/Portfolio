import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import postman from './postman.png';
import intellij from './intelliJ.png';
import git from './git.png';
import mongodb from './mongodb.png';
import javaspring from './java_springboot.png'
import mysql from './mysql.png'
import react from './react.png'
import nextjs from './nextjs.png'
import bootstrap from './boostrap.png'
import github from './github.png'
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import backendicon from './backend-icon.png';
import fronendicon from './frontend-icon.png';
import html from './html.png';
import css from './css.png';
import myImage from './my-image.webp'
import js from './js.png';
import php from './php.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import docker from './docker.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    myImage,
    figma,
    git,
    javaspring,
    backendicon,
    fronendicon,
    docker,
    react,
    html,
    css,
    js,
    php,
    nextjs,
    mysql,
    bootstrap,
    github,
    intellij,
    postman,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Clothing store',
        description: 'Website',
        bgImage: '/closthing_store.png',
        link: 'https://github.com/Lochoang21/Web2.git',
        tech: 'HTML, CSS, JavaScript, PHP, MySQL',
        icon: [assets.html, assets.css, assets.js, assets.php, assets.mysql],
    },
    {
        title: 'Moment Website',
        description: 'Website',
        bgImage: '/moment.jpg',
        link: 'https://github.com/Lochoang21/moment-FE.git',
        tech: 'Java (Spring Boot RESTful API), Next.js, Bootstrap, Docker, VSP, Vercel',
        icon: [assets.javaspring, assets.nextjs, assets.bootstrap, assets.docker, assets.mysql],
    },
    {
        title: 'Compute Store',
        description: 'Website',
        bgImage: '/computer_store.jpg',
        link: 'https://github.com/Lochoang21/java-spring-mvc.git',
        tech: 'Java (Spring MVC, JPA, Hibernate), JSP, Spring Security, Spring Session, MySQL',
        icon: [assets.javaspring, assets.html, assets.css, assets.js, assets.mysql],
    },
    {
        title: 'Tour Reservation',
        description: 'Travel Website',
        bgImage: '/tour_reservation.png',
        link: 'https://github.com/Lochoang21/tour_reservation.git',
        tech: 'Java (Spring Boot, JPA, Hibernate), JSP, Spring Security, Google & Facebook Login, VnPay, MySQL',
        icon: [assets.javaspring, assets.html, assets.css, assets.js, assets.mysql],
    },
]

export const serviceData = [
    {
        icon: assets.fronendicon,
        title: 'Frontend',
        description: 'Experienced in building responsive and interactive web interfaces using HTML, CSS, JavaScript, Bootstrap, React, Tailwind, and Next.js.',
        link: ''
    },
    {
        icon: assets.backendicon,
        title: 'Backend',
        description: 'Skilled in developing scalable and secure backend systems with Java, Spring Boot, NodeJS, and PHP.',
        link: ''
    }
];


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, Java, PHP' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Sai Gon University' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 4 projects' }
];

export const toolsData = [
    assets.vscode, assets.intellij, assets.postman, assets.git
];

export const techData = [
    { icon: assets.javaspring, level: 5, name: "Java Spring Boot" },
    { icon: assets.mysql, level: 4, name: "MySQL" },
    { icon: assets.react, level: 4, name: "React" },
    { icon: assets.nextjs, level: 4, name: "Next.js" },
    { icon: assets.bootstrap, level: 4, name: "Bootstrap" },
    { icon: assets.github, level: 4, name: "GitHub" }
];