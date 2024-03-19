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
    ],
    WORK_EXPERIENCE : [
        {
            name: 'Mesons Technologies',
            title: 'Full Stack Developer',
            from: 'October 2022',
            to: 'January 2021',
            duration: '2+ Years',

            website: 'https://www.mesonstechnologies.com/',
            roles: [
                'Creating RESTful APIs using Spring MVC/Springboot (Java 8)',
                'Creating Front End using Angular 15',
                'Database management and PROD Deployment Support',
            ],
        },
        {
            name: 'NovoInvent Technologies Pvt. Ltd.',
            title: 'Full Stack Developer',
            from: 'June 2016',
            to: 'July 2019',
            duration: '3+ Years (1st year Internship)',
            
            website: 'https://www.novoinvent.com/',
            roles: [
                'Full stack applications on American Healthcare (AHCT)',
                'AWS account management like VPC, EMR',
                'Tomcat Server and PostgreSQL setup on EC2',
            ],
        },
    ],
    STUDIES : [
        {
            name: 'Lambton College, Toronto',
            title: 'Post Graduation - Mobile Application Development and Design',
            from: 'September 2019',
            to: 'April 2021',
            duration: '2 Years',

            website: 'https://www.lambtoncollege.ca/',
            roles: [
                'Graduated with 3.7/4.0 GPA',
                'Graduation Award: Program Dean\'s Honour List',
                'Gained Full Time work for Final Semester (Co-op) CPL-1049'
            ],
        },
        {
            name: 'Chitkara University, Punjab',
            title: 'Bachelor of Engineering - Computer Science',
            from: 'June 2013',
            to: 'July 2017',
            duration: '4 Years',

            website: 'https://www.chitkara.edu.in/',
            roles: [
                'Graduated with 7.56/10.00 CGPA',
                'Part of UCA: University Coding Academy',
                'Organized and Hosted Multiple Co-Curricular Activities and Events',
            ],
        },
    ],
    CERTIFICATIONS: [
        'Oracle Database SQL Certified #C19602-01',
        'Red Hat Certified System Administrator (Undergoing)'
    ],
    SKILLS_LANGUAGES: [
        'Java Core and OOPS', 'Javascript', 'Typescript', 'Python', 'SQL', 
    ],
    SKILLS_FRAMEWORKS: [
        'Spring MVC and Springboot', 'Light-4j (Java framework for REST APIs)',
        'Dynatrace (Open Telemetry)', 'AWS (EC2, S3, Lambdas, Route 53, VPC)', 
        'CentOS and Ubuntu (Linux Kernel)', 'PostgreSQL and MySQL', 
        'Firebase and mongoDB (noSQL)'
    ],
    SKILLS_TOOLS_OTHER: [
        'Agile Development','Intel IJ / Eclipse' , 'git / Pull Requests',
        'SSH / RDP / SFTP', 'Dbeaver / DbVisuvalizer', 'Data Strctures', 
        'Complexity Analysis', 'Video Editing (MS Clipchamp)', 'Adobe Photoshop'
    ],
    HOBBIES : [
        {
            description: 'Created and Uploaded Light-4j Tutorials on my Youtube',
            linkText:'Channel',
            url: 'https://www.youtube.com/@codingmuscles',
        },
        {
            description: 'Learning French and Spanish on',
            linkText:'Duolingo',
            url: 'https://www.duolingo.com/profile/antariksh.gosain',
        },
        {
            description: 'Solving and Discussing Problems on',
            linkText:'HackerRank',
            url: 'https://www.hackerrank.com/profile/antariksh_gosain',
        },
    ],
    CONTACT_LINKEDIN: 'https://www.linkedin.com/in/antariksh-gosain/',
    CONTACT_GITHUB: 'https://github.com/antarikshgosain/resume-website',
};