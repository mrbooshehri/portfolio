const skills = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
      </svg>
    ),
    title: "Cloud Platforms",
    items: [
      { name: "AWS", proficiency: 80 },
      { name: "Arvan Cloud", proficiency: 90 },
      { name: "Parspack", proficiency: 85 },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12l0 9" />
        <path d="M12 12l-8 -4.5" />
      </svg>
    ),
    title: "Containerization",
    items: [
      { name: "Docker", proficiency: 90 },
      { name: "Swarm", proficiency: 90 },
      { name: "Kubernetes", proficiency: 85 },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
    title: "Infrastructure as Code",
    items: [
      { name: "Ansible", proficiency: 90 },
      { name: "Terraform", proficiency: 80 },
      { name: "Vagrant", proficiency: 85 },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M7 8l0 8" />
        <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
        <path d="M14 14l3 -3l3 3" />
      </svg>
    ),
    title: "CI/CD",
    items: [
      { name: "GitLab CI", proficiency: 90 },
      { name: "GitHub Actions", proficiency: 95 },
      { name: "ArgoCD", proficiency: 85 },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
        <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
        <path d="M7 8l0 .01" />
        <path d="M7 16l0 .01" />
      </svg>
    ),
    title: "Monitoring",
    items: [
      { name: "Zabbix", proficiency: 90 },
      { name: "Prometheus", proficiency: 90 },
      { name: "Grafana", proficiency: 90 },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
      </svg>
    ),
    title: "Databases",
    items: [
      { name: "MongoDB", proficiency: 90 },
      { name: "Clickhouuse", proficiency: 80 },
      { name: "Redis", proficiency: 90 },
      { name: "Elasticsearch", proficiency: 80 },
    ],
  },
];

function ProgressBar({ proficiency }: { proficiency: number }) {
  return (
    <div className="w-full bg-slate-600 rounded-full h-2">
      <div
        className="bg-emerald-400 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${proficiency}%`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition"
            >
              <div className="text-emerald-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {skill.title}
              </h3>
              <ul className="space-y-4">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300">
                    <div className="grid grid-cols-[120px_auto] gap-4 items-center">
                      <div className="flex justify-between">
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ProgressBar proficiency={item.proficiency} />
                        <span className="text-emerald-400 text-sm w-8">
                          {item.proficiency}%
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
