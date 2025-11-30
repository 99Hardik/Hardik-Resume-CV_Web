/* Resume data model */
const resume = {
  name: "Hardik Jain",
  title: "Software Development Engineer in Test",
  contact: {
    email: "jainhardik037@gmail.com",
    phone: "+91 9413968037",
    location: "Udaipur, Rajasthan"
  },
  summary:
    "Dynamic SDET with 4+ years in quality engineering, spearheading automation that reduced manual testing by 75% and boosted product quality and team efficiency. Proficient in Java, Selenium WebDriver, and API testing using Rest Assured, with hands-on MySQL and CI/CD via Jenkins and GitHub Actions, plus SFDC testing. Skilled in TestNG, Cucumber (BDD), Agile, and tools like JIRA, Qtest, and GitHub Copilot. Adept at problem-solving and delivering scalable, high-quality automation in fast-paced environments.",
  skills: [
    { group: "Languages & core", items: ["Java", "Problem solving"] },
    { group: "Automation & testing", items: ["Selenium WebDriver", "TestNG", "Cucumber (BDD)", "SoapUI", "SFDC Testing"] },
    { group: "API & tools", items: ["Rest Assured", "Postman (optional)", "Selenium Box (execution)"] },
    { group: "DevOps & CI/CD", items: ["Jenkins", "GitHub Actions", "Git"] },
    { group: "Databases", items: ["MySQL"] },
    { group: "Agile & management", items: ["Agile methodologies", "JIRA", "Qtest"] },
    { group: "AI tools", items: ["GitHub Copilot"] }
  ],
  experience: [
    {
      role: "Quality Engineering Analyst",
      company: "Infosys",
      location: "Jaipur, Rajasthan",
      period: "05/2024 — Present",
      bullets: [
        "Implemented Selenium WebDriver-based automation framework, reducing manual testing by 75% and accelerating releases.",
        "Led a team of 5 QA Engineers, prioritizing tasks and delivering within SLA parameters.",
        "Conducted code reviews to uphold standards and maintain high-quality automation scripts.",
        "Integrated automation into the development lifecycle with cross-functional teams, enhancing product quality.",
        "Designed and executed test plans (functional, integration, regression, UAT) against requirements.",
        "Identified defects via UI, API, and DB testing; documented detailed test cases and automation scripts.",
        "Completed unit and regression tests on software modules.",
        "Worked within Agile/Scrum to hit milestones and timelines."
      ]
    },
    {
      role: "Software Quality Engineer",
      company: "Infosys",
      location: "Jaipur, Rajasthan",
      period: "10/2021 — 05/2024",
      bullets: [
        "Conducted end-to-end testing (manual + automation) resulting in ~90% reduction in defects.",
        "Developed and executed automated test scripts using Java and Selenium for reliable releases.",
        "Utilized Selenium Box for execution, environment management, and workflow optimization.",
        "Specialized in Salesforce QA (SFDC-QA) with thorough testing and validation.",
        "Maintained test cases in JIRA and Qtest for coverage and efficient management.",
        "Collaborated with dev teams to understand architecture and align test design to requirements.",
        "Led regression testing to validate stability and prevent new defects."
      ]
    }
  ],
  education: [
    {
      school: "College Of Technology And Engineering",
      degree: "B.Tech, Electronics & Communications",
      location: "Udaipur, Rajasthan",
      date: "06/2021"
    },
    {
      school: "St. Gregorios Senior Sec. School",
      degree: "Higher Secondary School",
      location: "Udaipur, Rajasthan",
      date: "05/2017"
    }
  ],
  additional: [
    "Test Planning",
    "Test Design",
    "Defect Analysis",
    "Functional Testing",
    "Regression Testing",
    "Team Management"
  ],
  awards: [
    "Received the “Insta Award” for outstanding contributions to test automation and process improvement (Infosys Limited)."
  ],
  certifications: [
    "Infosys Certified Selenium Automation Tester",
    "Infosys Certified Java SE8 Developer",
    "Infosys Certified Global Agile Developer",
    "Microsoft Certified GitHub Copilot"
  ]
};

/* DOM fill helpers */
function fillSummary() {
  document.getElementById("summaryText").textContent = resume.summary;
}
function fillSkills() {
  const grid = document.getElementById("skillsGrid");
  resume.skills.forEach(s => {
    const block = document.createElement("div");
    block.className = "skill-block";
    block.innerHTML = `
      <h3>${s.group}</h3>
      <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
    `;
    grid.appendChild(block);
  });
}
function fillExperience() {
  const wrap = document.getElementById("experienceList");
  resume.experience.forEach(exp => {
    const div = document.createElement("article");
    div.className = "experience";
    div.innerHTML = `
      <div class="header">
        <div>
          <div class="role">${exp.role}</div>
          <div class="meta">${exp.company} • ${exp.location}</div>
        </div>
        <div class="meta">${exp.period}</div>
      </div>
      <ul>
        ${exp.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    `;
    wrap.appendChild(div);
  });
}
function fillEducation() {
  const list = document.getElementById("educationList");
  resume.education.forEach(ed => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="school">${ed.school}</div>
      <div class="deg">${ed.degree}</div>
      <div class="meta">${ed.location} • ${ed.date}</div>
    `;
    list.appendChild(li);
  });
}
function fillAdditional() {
  const list = document.getElementById("additionalList");
  resume.additional.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
function fillAwards() {
  const list = document.getElementById("awardsList");
  resume.awards.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
function fillCertifications() {
  const list = document.getElementById("certificationsList");
  resume.certifications.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

/* Print button */
function enablePrint() {
  const btn = document.getElementById("printBtn");
  btn.addEventListener("click", () => window.print());
}

/* Footer year */
function setYear() {
  const y = document.getElementById("year");
  y.textContent = new Date().getFullYear();
}

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  fillSummary();
  fillSkills();
  fillExperience();
  fillEducation();
  fillAdditional();
  fillAwards();
  fillCertifications();
  enablePrint();
  setYear();
});
