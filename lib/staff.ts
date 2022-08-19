export type TeamMember = {
    name: string;
    role: string;
    url?: string;
    [key: string]: string
}

export const fruits = ['guava', 'pineapple','banana','lychee','coconut','watermelon', 'apple', 'grape', 'strawberry', 'date', 'berry', 'orange', 'cherry'];

export const teams: TeamMember[][] = [
    [
        { name: 'Taiwo Ojo', role: 'Co Founder | Technical Lead', team: 'Cosmetics | Engineering', fruit: 'Orange', q1: 'handsome to look at and sweet to taste', q2: 'Coding, Football, and Food' },
        { name: 'Wale Olojo', role: 'Co Founder | Technical Lead', team: 'Cosmetics | Engineering', fruit: 'Orange', q1: 'handsome to look at and sweet to taste', q2: 'Coding, Football, and Food'}
    ],
    [
        { name: 'Adeola Lawal', role: 'Tools and System Migration', team: 'Engineering', fruit: 'Pineapple', q2: 'Music, Games, Book, food', q3: 'Using Atlassian tools/product', q4: 'Jira, Confluence' },
        { name: 'Babade Adesite Adewole', role: 'Software Engineer', team: 'Engineering', fruit: 'Pineapple', q1: 'Just perfect', q2: 'Just perfect', q3: 'Programming, Atlassian Tools', q4: 'Programming, Atlassian Tools' },
        { name: 'Charles Precious', role: 'Tools and System Migration', team: 'Engineering', fruit: 'Apple', q1: 'Fresh, Beautiful, Sweet, Easy going and Sociable', q2: 'Tech, Movies, Music and Cooking', q3: 'Tools and System Support', q4: 'Microsoft office suit, confluence, Jira, Google' },
        { name: 'Yusuf Braimoh', role: 'Software Developer', team: 'Engineering', fruit: 'Apple', q1: 'Fresh, Beautiful, Sweet, Easy going and Sociable', q2: 'Audiobooks & Podcasts, Reading', q3: 'Programming, Automation/Interoperation, App Dev Ops tools', q4: 'Programming, Automation/Interoperation, App Dev Ops tools' },
        { name: 'Isaac Temidayo Adebayo', role: 'Software Engineer', team: 'Engineering', fruit: 'Banana', q1: 'great fruit and they share about 60% with human dna', q2: 'Listening to Music, Learning new things and sport activities when possible', q3: 'Proficient in using some Atlassian products and have some knowledge of backend development', q4: 'Jira, Confluence, Jira Service Management, Python' },
        { name: 'Timothy Edoja', role: 'Software Engineer', team: 'Engineering', fruit: 'Lychee', q1: 'Its exotic', q2: 'Music, Reading Sci-Fi, Fantasy and Anime.', q3: 'Atlassian Products', q4: 'Jira/Confluence, SQL, Microsoft Excel , PowerBI, Python' },
        { name: 'Thompson Mina', role: 'Software Developer', team: 'Engineering', fruit: 'Banana', q1: 'Because they have personality', q2: 'I enjoy taking inspired sketches, music and reading especially sci fi and fantasy', q3: 'I consider myself proficient in programming in general. I also have some proficiency in devops', q4: 'python, JavaScript, AWS, git, GitHub, Jira and Confluence' },
        { name: 'Demilade Odumosu', role: 'Software Engineer', team: 'Engineering', fruit: 'coconut', q1: 'because it does its best to make sure EVERY product that comes from it is useful to someone', q2: 'I enjoy playing and watching football and basketball, travel, learning new stuff.', q3: 'Web dev', q4: 'Jira, Confluence, Javascript, Node, Express, Git, Bash, MongoDB, CorelDraw.' },
        { name: 'Azeez Aremu', role: 'Software Developer', team: 'Engineering', fruit: 'Watermelon', q1: 'because of its water content', q2: 'I love talking about politics and watching movie', q3: 'Using python and web backend development', q4: 'Python, Git and Confluence' },
        { name: 'Damilare Arikeusola', role: 'Frontend Developer', team: 'cosmetics', fruit: 'Apple', q1: 'It keeps your doctors away', q2: 'Listening to music, Watching a movie, Listening to podcasts', q3: 'web development and database design', q4: 'JavaScript and PHP' },
        { name: 'Ayorinde Timilehin', role: 'Frontend Developer', team: 'cosmetics', fruit: 'Apple', q1: 'It keeps your doctors away', q2: 'Playing Football, watching football, F1 and Basketball', q3: 'Software Engineering', q4: 'MERN and MEAN stacks' },
        { name: 'Oyelakin Anjolaoluwa', role: 'Graphic Designer', team: 'cosmetics', fruit: 'Guava', q1: 'It can thrive anywhere', q2: 'Other things', q3: 'Designing', q4: 'Adobe suites' },
        { name: 'Adedayo Jesufolakemi', role: 'Graphic Designer', team: 'cosmetics', fruit: 'Watermelon', q1: 'because water is essential to the body', q2: 'Listening to music', q3: 'Designing', q4: 'photoshop' },
        { name: 'Amos Williams', role: 'Graphic Designer', team: 'cosmetics', fruit: 'Watermelon', q1: 'because water is essential to the body', q2: 'Listening to music', q3: 'Designing', q4: 'photoshop' },
        { name: 'Rebecca Adisa', role: 'UI/UX Designer', team: 'cosmetics', fruit: 'Watermelon', q1: 'They grow anywhere', q2: 'Listening to music, Watching a movie, Listening to podcasts', q3: 'Product Design, 3D animator', q4: 'Figma, Blender, Inkscape, Adobe XD, Miro, Whimsical, Adobe Aero, Spark AR' },
        { name: 'Sherif Siyanbola', role: 'UI/UX Designer', team: 'cosmetics', fruit: 'Watermelon', q1: 'Rich in minerals and a great post workout snack', q2: 'Movies, Podcast, Games', q3: 'UI/UX Design', q4: 'Figma, HTML, CSS' }
    ],
    [
        { name: 'Oluwatise Afolabi', role: 'Sales & Marketting', team: 'Product office', fruit: 'Strawberry', q1: 'It helps brain function well, and enhance eye and skin health, arthritis, and gout.', q2: 'Learning New things, Traveling, cooking, and singing', q3: 'Project Management', q4: 'Jira, Confluence, Jira Service Management, Python' },
        { name: 'Ibukun Akilo', role: 'Compliance', team: 'Product office', fruit: 'Grape', q1: 'Really dynamic fruit', q2: 'reading controversial non-fiction, video games', q3: 'Law, education, Human Resources, sales and administration', q4: 'Microsoft office suit, confluence, Jira, Google' },
        { name: 'Yemisi Adelowo', role: 'Project mgt', team: 'Product Office', fruit: 'Grape', q1: 'It\'s sweet', q2: 'Reading novels, listening to music, watching movies', q3: 'Project management', q4: 'Confluence, jira' },
        { name: 'Mobolaji Tenibiaje', role: 'Alluvium University', team: 'Product office', fruit: 'Grape', q1: 'really dynamic fruit', q2: 'reading controversial non-fiction, video games', q3: 'Law, education, Human Resources, sales and administration', q4: 'Microsoft office suit, confluence, Jira, Google' }
    ],
    [
        { name: 'Abdulganiyy Khadijah', role: 'Engineering Intern', team: 'Engineering', fruit: 'Date', q1: 'It’s medicinal', q2: 'Reading novels', q3: 'Data Analysis, DevOps', q4: 'Python, Excel, Terminals, Git, SQL' },
        { name: 'Abdulqudus Oladega', role: 'Engineering Intern', team: 'Engineering', fruit: 'Apple', q1: 'Micro things are soft', q2: 'Sightseeing, Reading & Sleeping', q3: 'DevOps, Cloud, Logical reasoning, Python Programming, Unit testing.', q4: 'Notes, Terminal, VS Code, Confluence & Jira, Git, Photoshop, Figma, Illustrator' },
        { name: 'Lewis Tanguhwar', role: 'Engineering Intern', team: 'Engineering', fruit: 'Berry', q1: 'Highly nutritious', q2: 'Community Engagement', q3: 'Data, Cloud, Technical Writing, Web Technologies', q4: 'Python, SQL, Cloud Platforms, Productivity Tools' },
        { name: 'Adeleke Folashade', role: 'Engineering Intern', team: 'Engineering', fruit: 'Banana', q1: '', q2: 'Playing Games, Watching Movies, Reminiscing', q3: 'Administration', q4: 'Python' },
        { name: 'Anthonia Njoku', role: 'Engineering Intern', team: 'Engineering', fruit: 'Cherry', q1: 'I’m a very cheerful person, regardless of situations.', q2: 'Reading novels and listening to loud, soothing music', q3: 'Python Programming, Data Visualization', q4: 'Python, Excel, Google Suite, Tableau' },
        { name: 'Nnaemeka Divine', role: 'Engineering Intern', team: 'Engineering', fruit: 'Pineapple', q1: 'Its sweet and Improves Immunity', q2: 'Video Games and Reading History Books', q3: 'Data, Cloud, and computer aided communications', q4: 'Jira, Confluence, Linux terminal and python' },
        { name: 'Agbai Ude', role: 'Engineering Intern', team: 'Engineering', fruit: 'Watermelon', q1: 'why? who doesn’t like water?', q2: 'Playing Music', q3: 'Core Programming', q4: 'Python, Java' },
        { name: 'Ayeni Michael', role: 'Engineering Intern', team: 'Engineering', fruit: 'Banana', q1: '', q2: 'sight seeing and football.', q3: 'Software Development, Tools', q4: 'Python, Javascript, Vue.js' }
    ]
]

export const convertUrlToName = (word: string): string => {
   const newWord = word.split('-');
   return newWord.map(name=>{
    return `${name.charAt(0).toUpperCase()}${name.split('').slice(1).join('')}`;
   }).join(' ');
}

export const teamsData = (): TeamMember[][] => {
    return teams.map(team=>team.map(teamMember=>{
        let url = teamMember.name.replace(/\s/g, '-');
        return {...teamMember, url}
    }))
}

export const getStaffUrls = () => {
    let teamUrls = [];
    let teamHolder = teamsData();
    teamHolder.map(team=>team.map(teamMember=>{
        teamUrls.push(teamMember.url);
    }))
    return teamUrls.map(memberUrl=>{
        return{
            params: {
                staff: memberUrl
            }
        }
    })
}

export const getStaffData = (url: string): TeamMember => {
    let name = convertUrlToName(url);
    let teamMemberData = null;
    teams.map(team=>team.map(teamMember=>{
        if(teamMember.name === name){
            teamMemberData = teamMember;
        }
    }))
    return teamMemberData;
}