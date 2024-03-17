import { Tag } from "./app/_models/Tag";

export const GlobalConstants = {
    FIRST_NAME: "Antariksh",
    LAST_NAME: "Gosain",
    FULL_NAME: "Antariksh Gosain",
    TITLE: "Software Engineer",
    DESCRIPTION: "Currently working at CIBC, Toronto. Total 6 years of IT Experience mainly regarding Java Backend Development and AWS/DevOps.",
    PORTFOLIO : [
        {
            id: 0,
            name: 'maple app',
            summary: 'sweet and sour app',
            description: '',
            projectLink: '',
            tags: [Tag.ANGULAR, Tag.JAVA],
            pictures: [],
        },
        {
            id: 1,
            name: 'REST API',
            summary: 'restful app',
            description: '',
            projectLink: '',
            tags: [Tag.PYTHON, Tag.JAVA],
            pictures: [],
        },
        {
            id: 2,
            name: 'SQL AWS Database app',
            summary: 's3 of all app',
            description: '',
            projectLink: '',
            tags: [Tag.AWS, Tag.SQL, Tag.MS_AZURE],
            pictures: [],
        },
        {
            id: 3,
            name: 'Health card mobile app',
            summary: 'american medicare app for Maryland',
            description: '',
            projectLink: '',
            tags: [Tag.AWS, Tag.REACT, Tag.JAVA],
            pictures: [],
        }
    ]
};