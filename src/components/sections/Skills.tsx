import { useScrollAnimation } from '@/utils/animations';
import { cn } from '@/lib/utils';

// Define skills with appropriate icons
const allSkills = [
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Data Structures', iconUrl: 'https://img.icons8.com/color/48/null/flow-chart.png' }, 
  { name: 'Algorithms', iconUrl: 'https://img.icons8.com/color/48/000000/workflow.png' }, 
  { name: 'OOP', iconUrl: 'https://img.icons8.com/color/48/000000/object.png' }, 
  { name: 'DBMS', iconUrl: 'https://img.icons8.com/color/48/null/database-restore.png' }, 
  { name: 'Machine Learning', iconUrl: 'https://img.icons8.com/color/48/000000/artificial-intelligence.png' }, 
];

// Certification data with credential details
const certifications = [
  {
    name: 'SQL(Basic)',
    issuer: 'Hackerrank',
    credentialId: '24AF672CA093',
    issueDate: 'January 2025',
    link: 'https://www.hackerrank.com/certificates/24af672ca093',
    badgeUrl: 'https://ik.imagekit.io/mahitha/HackerRank_Icon-1000px.png?updatedAt=1742452876796'
  },
  {
    name: 'Joy of Computing using python',
    issuer: 'NPTEL Certification',
    credentialId: '8pCU.rLFC.JX4h',
    issueDate: 'July 2023',
    link: 'https://drive.google.com/drive/u/0/folders/1yZhAOIBPbP56EBEEjMUlhx5AbLBYRC6Y',
    badgeUrl: 'https://ik.imagekit.io/mahitha/8os9do3V_400x400.jpg?updatedAt=1742452759802'
  },
  {
    name: '100 Days of Code: The Complete Python Pro Bootcamp',
    issuer: 'Udemy',
    credentialId: '',
    issueDate: 'March 2023',
    link: 'https://drive.google.com/drive/u/0/folders/1yZhAOIBPbP56EBEEjMUlhx5AbLBYRC6Y',
    badgeUrl: 'https://ik.imagekit.io/mahitha/udemy-new-20212512.jpg?updatedAt=1742453017322'
  },
  {
    name: 'Python',
    issuer: 'Hackerrank',
    credentialId: '3CC8D709C619',
    issueDate: 'January 2025',
    link: 'https://www.hackerrank.com/certificates/3cc8d709c619',
    badgeUrl: 'https://ik.imagekit.io/mahitha/HackerRank_Icon-1000px.png?updatedAt=1742452876796'
  },
];

const Skills = () => {
  const animation = useScrollAnimation(0.1, 'up');

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto" {...animation}>
          <h2 className="section-title">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="space-y-12">
            <div className="animate-on-scroll from-bottom">
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {allSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="flex-shrink-0 w-6 h-6">
                      <img 
                        src={skill.iconUrl} 
                        alt={`${skill.name} icon`} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll from-bottom">
            <h3 className="text-xxl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg relative flex gap-4"
                >
                  <div className="flex-grow pr-24">
                    <div className="font-medium text-primary">{cert.name}</div>
                    <div className="text-sm text-muted-foreground mb-2" style={{ whiteSpace: 'pre-line' }}>{cert.issuer}</div>
                    
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <div className="text-sm mb-1">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                      <div className="text-sm mb-3">
                        <span className="font-medium">Issued:</span> {cert.issueDate}
                      </div>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full inline-flex items-center gap-1 transition-colors"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <img 
                      src={cert.badgeUrl} 
                      alt={`${cert.name} Badge`}
                      className="h-[5.8rem] w-auto object-contain"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;