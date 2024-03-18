import { Tag } from "./app/_models/Tag";

export const GlobalConstants = {
    FIRST_NAME: "Antariksh",
    LAST_NAME: "Gosain",
    FULL_NAME: "Antariksh Gosain",
    TITLE: "Software Engineer",
    DOWNLOAD_RESUME_PATH: "../../assets/pdf/",
    DOWNLOAD_RESUME_NAME: "Antariksh Gosain 2024 Resume 6 Years Fullstack Devops.pdf",
    
    DESCRIPTION: "Currently working at CIBC, Toronto. Total 6 years of IT Experience mainly regarding Java Backend Development and AWS/DevOps.",
    PORTFOLIO : [
        {
            id: 0,
            name: 'maple app',
            summary: 'sweet and sour app',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            projectLink: 'https://github.com/antarikshgosain/practice',
            tags: [Tag.ANGULAR, Tag.JAVA],
            pictures: ['../../assets/image3.jpg','../../assets/image1.jpg','../../assets/image1.jpg'],
        },
        {
            id: 1,
            name: 'REST API',
            summary: 'restful app',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            projectLink: 'https://github.com/antarikshgosain/practice',
            tags: [Tag.PYTHON, Tag.JAVA],
            pictures: ['../../assets/image2.jpg','../../assets/image1.jpg','../../assets/image1.jpg'],        },
        {
            id: 2,
            name: 'SQL AWS Database app',
            summary: 's3 of all app',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            projectLink: 'https://github.com/antarikshgosain/practice',
            tags: [Tag.AWS, Tag.SQL, Tag.MS_AZURE],
            pictures: ['../../assets/image1.jpg','../../assets/image1.jpg','../../assets/image1.jpg'],        },
        {
            id: 3,
            name: 'Health card mobile app',
            summary: 'american medicare app for Maryland',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            projectLink: 'https://github.com/antarikshgosain/practice',
            tags: [Tag.AWS, Tag.REACT, Tag.JAVA],
            pictures: ['../../assets/image3.jpg','../../assets/image2.jpg','../../assets/image1.jpg'],        }
    ]
};