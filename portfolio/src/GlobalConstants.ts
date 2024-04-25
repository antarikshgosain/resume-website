import { Tag } from "./app/_models/Tag";

export const GlobalConstants = {
    FIRST_NAME: "Antariksh",
    LAST_NAME: "Gosain",
    FULL_NAME: "Antariksh Gosain",
    TITLE: "Software Engineer",
    DOWNLOAD_RESUME_PATH: "../../assets/pdf/",
    //DOWNLOAD_RESUME_NAME: "Antariksh Gosain 2024 Resume 6 Years Fullstack Devops.pdf",
    DOWNLOAD_RESUME_NAME: "Antariksh Gosain - FullStack Resume.pdf",
    PRIMARY_EMAIL_ID: "gosain.antariksh@gmail.com",
    DESCRIPTION: "\nI am a seasoned developer with expertise in Java, Springboot, and AWS, delivering robust solutions across industries. \n\nWith a dedication to continuous improvement, I actively engage in problem-solving challenges on HackerRank and share my knowledge through YouTube tutorials. \n\nMy academic achievements, including Dean's Honor List recognition and ongoing certifications, underscore my commitment to excellence. \n\nFrom optimizing APIs to navigating complex AWS environments, this track record of mine demonstrates my ability to deliver impactful solutions. \n\nExplore this digital portfolio to witness my diverse skill set and contributions to the tech community.",
    FEATURED_PROJECT_ID: 1,
    PORTFOLIO : [
        {
            id: 0,
            name: 'Resume Website',
            summary: 'Personal Resume Website based on Angular, Springboot and PostgreSQL',
            description: ' Personal Website deployed on antariksh.kesug.com which is hosted on infinityfree.com \n Backend deployed on Oracle OCI Always-free Instance \n Using PostgreSQL Database provided by Neon \n Running cost is grand total of $0',
            projectLink: 'https://github.com/antarikshgosain/practice',
            tags: [Tag.ANGULAR, Tag.JAVA, Tag.LINUX],
            pictures: ['../../assets/image3.jpg','../../assets/image1.jpg','../../assets/image1.jpg'],
        },
        {
            id: 1,
            name: 'Dynatrace Implementation',
            summary: 'Dynatrace monitoring added to Java based Light-4j API',
            description: 'Integrated Dynatrace monitoring into Light 4J Java API for enhanced performance tracking and proactive optimization. \nReal-time insights enable swift identification of bottlenecks and streamlined troubleshooting. \nTogether, they create an efficient, responsive API ecosystem.',
            projectLink: '',
            tags: [Tag.JAVA, Tag.MS_AZURE, Tag.SQL],
            pictures: ['../../assets/image2.jpg','../../assets/image1.jpg','../../assets/image1.jpg'],        },
        {
            id: 2,
            name: 'Swagger for MicroServices',
            summary: 'Implemented Swagger/OpenAPI across multiple microservices',
            description: 'Enabled seamless communication and documentation across diverse microservices by integrating Swagger/OpenAPI. \nThis implementation ensures consistent API design, facilitates collaboration among development teams, and simplifies API consumption for clients. \nWith standardized documentation, developers can easily understand, test, and interact with each microservice, fostering agility and scalability within the architecture',
            projectLink: '',
            tags: [Tag.AWS, Tag.SQL, Tag.MS_AZURE],
            pictures: ['../../assets/image1.jpg','../../assets/image1.jpg','../../assets/image1.jpg'],        },
        {
            id: 3,
            name: 'Health Care Mobile Application',
            summary: 'Contributed to AHCT, enhancing healthcare accessibility through mobile technology',
            description: 'Collaborated on the development of AHCT, a transformative healthcare mobile application aimed at improving accessibility and efficiency in the healthcare sector. \nPlayed a vital role in implementing features to streamline appointment scheduling, access medical records securely, and facilitate remote consultations. \nAHCT empowers users with convenient access to healthcare services, ultimately enhancing patient outcomes and healthcare delivery',
            projectLink: '',
            tags: [Tag.AWS, Tag.JAVASCRIPT, Tag.JAVA],
            pictures: ['../../assets/image3.jpg','../../assets/image2.jpg','../../assets/image1.jpg'],        },
        {
            id: 4,
            name: 'Consul Service Discovery',
            summary: 'Implemented Consul for optimized service discovery in multi-threaded environments',
            description: 'Implemented Consul Service Discovery to efficiently route internal and external requests to the most suitable hosts within a dynamic multi-threaded environment.\n This system optimizes resource allocation, ensuring high availability and performance.\n Consul\'s features facilitate seamless communication between services,\n enhancing overall system reliability and scalability.',
            projectLink: '',
            tags: [Tag.AWS, Tag.JAVA],
            pictures: ['../../assets/image3.jpg','../../assets/image2.jpg','../../assets/image1.jpg'],        },
        {
            id: 5,
            name: 'Simple REST API using Springboot',
            summary: 'Created REST API with CRUD, detailed Swagger documentation.',
            description: 'Developed a straightforward REST API incorporating CRUD functionality and comprehensive hardware/IP information. The API was meticulously documented using Swagger, providing developers with clear guidelines on usage and endpoints.\n Additionally, a Postman collection was crafted for easy testing and integration, ensuring seamless interaction with the API across various platforms and environments',
            projectLink: 'https://github.com/antarikshgosain/spring-rest-array-demo',
            tags: [Tag.JAVA, Tag.LINUX],
            pictures: ['../../assets/image3.jpg','../../assets/image2.jpg','../../assets/image1.jpg'],        },
        {
            id: 6,
            name: 'Implmented SendGrid for Email',
            summary: 'SendGrid for Insightful Email Information and Metadata',
            description: 'Transitioned from traditional SMTP to SendGrid for email delivery, enhancing communication capabilities with detailed insights.\n SendGrid\'s advanced features offer comprehensive analytics, allowing for tracking and analyzing email engagement metrics such as open rates, click-through rates, and delivery success.\n This implementation not only improves email deliverability but also provides valuable data insights to optimize communication strategies and enhance user engagement.',
            projectLink: '',
            tags: [Tag.JAVA, Tag.LINUX, Tag.PYTHON],
            pictures: ['../../assets/image3.jpg','../../assets/image2.jpg','../../assets/image1.jpg'],        },
        /*{
            id: 7,
            name: 'SonaType Integration',
            summary: 'Integrated SonaType for vulnerability analysis and remediation',
            description: 'Integrated SonaType for thorough vulnerability analysis and streamlined remediation processes.\n Leveraging SonaType\'s powerful scanning capabilities, identified and addressed security vulnerabilities within the codebase.\n This implementation ensures proactive risk management and enhances the overall security posture of the software, safeguarding against potential threats and vulnerabilities.\n SonaType\'s comprehensive reports provide actionable insights, facilitating efficient resolution of security issues and ensuring robust software integrity',
            projectLink: '',
            tags: [Tag.JAVA, Tag.LINUX],
            pictures: ['../../assets/image3.jpg','../../assets/image2.jpg','../../assets/image1.jpg'],        },*/
        {
            id: 8,
            name: 'Expense Tracker App',
            summary: 'Developed expense tracker app for Android/iOS using React Native',
            description: 'Crafted a versatile expense tracker application for both iOS and Android platforms using React Native.\n Leveraging React Native\'s hooks and platform-specific libraries like Platform OS, the app delivers a seamless user experience with native performance.\n Users can easily track their expenses, categorize transactions, and generate insightful reports on their spending habits.\n With cross-platform compatibility and intuitive design, the app provides a convenient solution for managing finances on the go.',
            projectLink: '',
            tags: [Tag.REACT, Tag.JAVASCRIPT, ],
            pictures: ['../../assets/image3.jpg','../../assets/image2.jpg','../../assets/image1.jpg'],        },
        
    ],
    
    WORK_EXPERIENCE : [
        {
            name: 'Stikbook Inc.',
            title: 'Java FullStack Developer',
            from: 'May 2023',
            to: 'Present',
            duration: '1 Year',
            website: 'https://www.stikbook.com',
            roles: [
                'Working for a fast paced startup with critical timelines',
                'Implemented SendGrid (instead of traditional SMTP) emails that provide email insights',
                'Enhanced API performance by up to 25% by improving on the existing SQL queries',
                'Implemented SonaType for vulnerability analysis and remediated vulnerabilities',
                'Supported PROD deployments and conducted live debugging for optimal performance',
                'Established OpenAPI/Swagger Specifications for all micro-services and is documentation',
            ],
        },
        {
            name: 'CIBC',
            title: 'Java Developer',
            from: 'November 2022',
            to: 'April 2023',
            duration: '6 Months',
            website: 'https://www.cibc.com',
            roles: [
                'Worked in the Remote Banking Shared Service Team',
                'Worked on Consul Service Discovery which guides internal/external Requests to the best available host in a Multi-threaded Environment',
                'Setting up Dynatrace to see the OpenTelemetry Data in real-time (Logs, Traces, Metrics)',
                'Using Dynatrace to visualize large amounts of Open Telemetry Data using Manual instrumentation via Open Telemetry Protocol in Java based Light 4j REST Application',
            ],
        },
        {
            name: 'Mesons Technologies',
            title: 'Full Stack Developer',
            from: 'October 2022',
            to: 'January 2021',
            duration: '2+ Years',
            website: 'https://www.mesonstechnologies.com/',
            roles: [
                'Working in back-end team for a Government Portal that helps under-privileged people',
                'Using Redis along with Docker in order to utilize in-memory Database',
                'Created React components along with props and designed suitable functionality for iOS',
                'and Android using Platform API provided by React Native and their testing',
                'Well versed with tools/soft-wares like SVN, Maven, Git, Jira, Azure, Code Merge, Diff-Checker, Java Docs, SSH Terminal, RDP, SQL Editors, multiple IDEs, Swagger',
                'Working on CICD using AWS, Jenkins and Linux tasks like deployment and debugging',
            ],
        },
        {
            name: 'NovoInvent Technologies Pvt. Ltd.',
            title: 'Full Stack Developer',
            from: 'May 2016',
            to: 'July 2019',
            duration: '3+ Years (1st year Internship)',
            
            website: 'https://www.novoinvent.com/',
            roles: [
                'Worked on multiple US-Healthcare related projects for multiple states',
                'Comfortable with setting up webservers and databases on AWS EC2 cloud from scratch',
                'Configuring Cloud Firewall, being thorough with security and performing maintenance',
                'Worked on multiple Web and Android based Applications using Agile model',
                'Handled multiple meetings and PROD deployments successfully for Clients',
                'Negotiated with many KYC Providing Companies and struck deal with ShuftiPro'
                
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
        'Firebase and mongoDB (noSQL)', 'SonaType'
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
    GOOGLE_RE_CAPTCHA_PUBLIC_KEY: '6Lc5rqIpAAAAAM6hxiHsrGgkGoCTdVhDJl_cp4Zm',
};