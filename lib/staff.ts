export type TeamMember = {
    name: string;
    role: string;
    url?: string;
    [key: string]: string
}

export const fruits = ['guava', 'Pineapples','Banana','Lychee','coconut','Watermelon', 'Apple', 'Grapes'];

export const teams: TeamMember[][] = [
    [
        { name: 'Taiwo Ojo', role: 'Co Founder' },
        { name: 'Wale Olojo', role: 'Co Founder', team: 'Cosmetics', fruit: 'guava', q1: 'It thrives in any soil', q2: 'Movies, Games', q3: 'Design', q4: 'Adobe Suites' }
    ],
    [
        { name: 'Adeola Lawal', role: 'Software Engineer', team: 'Engineering', fruit: '', q3: 'Using Atlassian tools/product', q4: 'Jira, Confluence' },
        { name: 'Babade Adesite Adewole', role: 'Software Engineer', team: 'Engineering', fruit: 'Pineapples', q1: 'Just perfect', q2: 'Just perfect', q3: 'Programming, Atlassian Tools', q4: 'Programming, Atlassian Tools' },
        { name: 'Charles Precious', role: 'Software Engineer' },
        { name: 'Yusuf Braimoh', role: 'Software Developer', team: 'Engineering', q2: 'Audiobooks & Podcasts, Reading', q3: 'Programming, Automation/Interoperation, App Dev Ops tools', q4: 'Programming, Automation/Interoperation, App Dev Ops tools' },
        { name: 'Isaac Temidayo Adebayo', role: 'Software Engineer', team: 'Engineering', fruit: 'Banana', q1: 'great fruit and they share about 60% with human dna', q2: 'Listening to Music, Learning new things and sport activities when possible', q3: 'Proficient in using some Atlassian products and have some knowledge of backend development', q4: 'Jira, Confluence, Jira Service Management, Python' },
        { name: 'Timothy Edoja', role: 'Software Engineer', team: 'Engineering', fruit: 'Lychee', q1: 'Its exotic', q2: 'Music, Reading Sci-Fi, Fantasy and Anime.', q3: 'Atlassian Products', q4: 'Jira/Confluence, SQL, Microsoft Excel , PowerBI, Python' },
        { name: 'Thompson Mina', role: 'Software Developer', team: 'Engineering', fruit: 'Banana', q1: 'Because they have personality', q2: 'I enjoy taking inspired sketches, music and reading especially sci fi and fantasy', q3: 'I consider myself proficient in programming in general. I also have some proficiency in devops', q4: 'python, JavaScript, AWS, git, GitHub, Jira and Confluence' },
        { name: 'Demilade Odumosu', role: 'Software Engineer', team: 'Engineering', fruit: 'coconut', q1: 'because it does its best to make sure EVERY product that comes from it is useful to someone', q2: 'I enjoy playing and watching football and basketball, travel, learning new stuff.', q3: 'Web dev', q4: 'Jira, Confluence, Javascript, Node, Express, Git, Bash, MongoDB, CorelDraw.' },
        { name: 'Ayodeji Odufowakan Allu', role: 'Software Engineer', team: 'Engineering' },
        { name: 'Azeez Aremu', role: 'Software Developer', team: 'Engineering', fruit: 'Watermelon', q1: 'because of its water content', q2: 'I love talking about politics and watching movie', q3: 'Using python and web backend development', q4: 'Python, Git and Confluence' },
        { name: 'Damilare Arikeusola', role: 'Frontend Developer', q3: 'web development and database design', q4: 'JavaScript and PHP' },
        { name: 'Ayorinde Timilehin', role: 'Frontend Developer', team: 'cosmetics', fruit: 'Apple', q1: 'It keeps your doctors away', q2: 'Playing Football, watching football, F1 and Basketball', q3: 'Software Engineering', q4: 'MERN and MEAN stacks' },
        { name: 'Oyelakin Anjolaoluwa', role: 'Graphic Designer', team: 'cosmetics', fruit: 'Guava', q1: 'It can thrive anywhere', q2: 'Other things', q3: 'Designing', q4: 'Adobe suites' },
        { name: 'Amos Williams', role: 'Graphic Designer', team: 'cosmetics', fruit: 'Watermelon', q1: 'because water is essential to the body', q2: 'Listening to music', q3: 'Designing', q4: 'photoshop' },
        { name: 'Rebecca Adisa', role: 'UI/UX Designer', team: 'cosmetics', fruit: 'Watermelon', q1: 'They grow anywhere', q2: 'Listening to music, Watching a movie, Listening to podcasts', q3: 'Product Design, 3D animator', q4: 'Figma, Blender, Inkscape, Adobe XD, Miro, Whimsical, Adobe Aero, Spark AR' },
        { name: 'Sherif Siyanbola', role: 'UI/UX Designer', team: 'cosmetics', fruit: 'Watermelon', q1: 'Rich in minerals and a great post workout snack', q2: 'Movies, Podcast, Games', q3: 'UI/UX Design', q4: 'Figma, HTML, CSS' }
    ],
    [
        { name: 'Ibukun Akilo', role: 'Product', team: 'Product office and Compliance', fruit: 'Grapes', q1: 'really dynamic fruit', q2: 'reading controversial non-fiction, video games', q3: 'Law, education, Human Resources, sales and administration', q4: 'Microsoft office suit, confluence, Jira, Google' },
        { name: 'Oluwatise Afolabi', role: 'Sales & Marketting' },
        { name: 'Mobolaji Tenibiaje', role: 'Alluvium University' }
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
        let url = teamMember.name.replace(' ', '-');
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