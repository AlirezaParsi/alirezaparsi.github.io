/* General Styles */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1a1a1a;
  color: #fff;
  overflow-x: hidden;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  height: 100vh;
  background: linear-gradient(135deg, #6c63ff, #ff6f61);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 10.01%);
  background-size: 20px 20px;
  animation: moveBackground 10s linear infinite;
}

@keyframes moveBackground {
  from { transform: translateY(0); }
  to { transform: translateY(-200px); }
}

.hero-content {
  z-index: 2;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 3rem;
  margin: 0;
  animation: fadeIn 2s ease-in-out, glow 2s infinite alternate;
}

@keyframes glow {
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #6c63ff, 0 0 40px #6c63ff; }
  100% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #6c63ff, 0 0 80px #6c63ff; }
}

.tagline {
  font-size: 1.25rem;
  margin: 10px 0 20px;
  animation: fadeIn 2.5s ease-in-out, slideIn 1.5s ease-in-out;
}

@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.hero .btn {
  background: #fff;
  color: #6c63ff;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  animation: fadeIn 3s ease-in-out, pulse 2s infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.hero .btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.profile-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  text-align: center;
  z-index: 2;
  animation: float 4s infinite ease-in-out, fadeIn 2s ease-in-out;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.profile-pic:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 10px #6c63ff);
}

/* Typewriter Effect */
.typewriter {
  overflow: hidden;
  border-right: 0.15em solid #fff;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #fff; }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* About Section */
.about {
  padding: 60px 0;
  background: #2a2a2a;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;
}

.about.visible {
  opacity: 1;
  transform: translateY(0);
}

.about h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #6c63ff;
  animation: glow 2s infinite alternate;
}

/* Projects Section */
.projects {
  padding: 60px 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;
}

.projects.visible {
  opacity: 1;
  transform: translateY(0);
}

.projects h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #6c63ff;
  animation: glow 2s infinite alternate;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background: #333;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 2s ease-in-out;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-card h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
}

.project-card p {
  margin: 0 0 15px;
  color: #ccc;
}

.project-card a {
  color: #6c63ff;
  text-decoration: none;
  font-weight: 600;
}

.project-card a:hover {
  text-decoration: underline;
}

/* Footer */
footer {
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  animation: fadeIn 3s ease-in-out;
}

footer a {
  color: #6c63ff;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* Phone-specific styles */
@media (max-width: 767px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .profile-card {
    width: 90%;
    margin: 20px auto;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}

/* PC/tablet-specific styles */
@media (min-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }

  .hero p {
    font-size: 1.25rem;
  }

  .profile-card {
    width: auto;
    margin: 0;
  }

  .project-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
