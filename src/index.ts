import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Portfolio data
const portfolioData = {
  name: 'Jason Ray A. Mahawan',
  occupation: 'Student',
  tagline: 'Backend Developer & Quality Assurance Specialist',
  skills: ['Backend Programming', 'QA Testing', 'TypeScript', 'Node.js'],
  projects: [
    {
      id: 1,
      name: 'BookHaven',
      description: 'A comprehensive book management system with backend API and database integration.',
      technologies: ['Node.js', 'Express', 'Database']
    },
    {
      id: 2,
      name: 'Capstone 1 UC SmartHelp',
      description: 'Smart assistance platform designed to improve university student experience and support services.',
      technologies: ['Backend Development', 'API Design', 'Testing']
    }
  ],
  contact: {
    email: 'jason.mahawan@example.com',
    location: 'Cebu City, Philippines'
  }
};

// HTML Template
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.name} - Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 2rem;
        }

        header {
            background: white;
            border-radius: 15px;
            padding: 3rem 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-align: center;
        }

        h1 {
            color: #667eea;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }

        .occupation {
            color: #764ba2;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .tagline {
            color: #666;
            font-size: 1.1rem;
        }

        section {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        h2 {
            color: #667eea;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
            border-bottom: 3px solid #764ba2;
            padding-bottom: 0.5rem;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .skill-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;
            font-weight: 600;
            transition: transform 0.3s ease;
        }

        .skill-card:hover {
            transform: translateY(-5px);
        }

        .project-card {
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .project-card:hover {
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
            transform: translateX(5px);
        }

        .project-card h3 {
            color: #764ba2;
            margin-bottom: 0.8rem;
            font-size: 1.4rem;
        }

        .project-card p {
            color: #555;
            margin-bottom: 1rem;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tech-tag {
            background: #667eea;
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #555;
            font-size: 1.1rem;
        }

        .contact-item strong {
            color: #667eea;
        }

        footer {
            text-align: center;
            color: white;
            padding: 2rem;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }

            .occupation {
                font-size: 1.1rem;
            }

            .skills-grid {
                grid-template-columns: 1fr;
            }

            .contact-info {
                flex-direction: column;
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <script type="module">
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        Chatbot.init({
            chatflowid: "df0b3e36-fe38-4119-8129-7f4ed2b28df8",
            apiHost: "https://cloud.flowiseai.com",
        })
    </script>

    <div class="container">
        <header>
            <h1>${portfolioData.name}</h1>
            <div class="occupation">${portfolioData.occupation}</div>
            <div class="tagline">${portfolioData.tagline}</div>
        </header>

        <section>
            <h2>Skills</h2>
            <div class="skills-grid">
                ${portfolioData.skills.map(skill => `
                    <div class="skill-card">${skill}</div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2>Projects</h2>
            ${portfolioData.projects.map(project => `
                <div class="project-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </section>

        <section>
            <h2>Contact</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <strong>📧 Email:</strong> ${portfolioData.contact.email}
                </div>
                <div class="contact-item">
                    <strong>📍 Location:</strong> ${portfolioData.contact.location}
                </div>
            </div>
        </section>

        <footer>
            <p>&copy; ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
`;

// Routes
app.get('/', (req, res) => {
  res.send(htmlTemplate);
});

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
  console.log(`API endpoint available at http://localhost:${PORT}/api/portfolio`);
});

export default app;