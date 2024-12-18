const projects = [
  {
    title: "Textify Jira: Bridging the Gap between Tasks and SMS963.*-edc",
    description:
      "The JIRA SMS Gateway is a tool that enables users to receive real-time JIRA notifications directly via SMS, enhancing communication and accessibility. It integrates seamlessly with JIRA, allowing for customizable alerts based on user preferences and project updates.",
    tags: ["Python", "Monitoring", "Jira"],
    image: "Jira and SMS integration.png",
    github: "https://github.com/mrbooshehri/jira_sms_gateway",
    // demo: "https://example.com",
  },
  {
    title: "Ansible User Management: Streamlined Account Control",
    description:
      "Ansible role for efficient user management, enabling streamlined creation, modification, and deletion of user accounts across multiple systems.",
    tags: ["Ansible", "Administration", "User Management"],
    image: "ansible-devops.png",
    github:
      "https://github.com/mrbooshehri/ansible-playbooks/tree/master/roles/user_management",
    // demo: "https://example.com",
  },
  {
    title: "Graylog HAProxy Dashboard: Real-Time Log Monitorings",
    description:
      "The Graylog HAProxy Dashboard provides real-time monitoring and visualization of HAProxy logs within the Graylog platform. This project enables users to analyze traffic patterns, performance metrics, and troubleshoot issues more effectively.",
    tags: ["Graylog", "HAProxy", "Monitoring"],
    image: "3png",
    github: "https://github.com/mrbooshehri/graylog-haproxy-dashboard",
    // demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 flex flex-col h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition bg-slate-700/50 px-4 py-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition bg-slate-700/50 px-4 py-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 15l6 -6" />
                      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
