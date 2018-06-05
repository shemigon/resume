import { Injectable } from '@angular/core';

export interface ISummaryItem {
  title: string;
  year?: number;
}

export interface IJob {
  company: string;
  role: string;
  place: string;
  time: {
    begin: string;
    end?: string;
  }
  description: {
    text: string;
    achievements?: string[];
    notes?: string;
  }
}

export interface IPastExperience {
  foreword: string;
  achievements: string[];
  afterword?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public personalInfo;
  public summary: ISummaryItem[];
  public specialties: string[][];
  public jobs: IJob[];
  public pastExperience: IPastExperience;
  public education: string[];

  constructor() {
    this.personalInfo = {
      name: "Boris Shemigon",
      email: "i@boris.co",
      phone: "(305) 570-5427",
    };

    this.summary = [
      {
        "title": "years of overall professional experience",
        "year": 2002,
      },
      {
        "title": "years of experience in full life cycle web development, system architecture design, automatic deployment and continuous integration",
        "year": 2011,
      },
      {
        "title": "years of self and team management experience",
        "year": 2011,
      },
      {
        "title": "years of database design proficiency",
        "year": 2009,
      },
      {
        "title": "Proficient in Amazon Web Services",
      },
      {
        "title": "Proficient in search and testing tools",
      },
      {
        "title": "Experienced in Unix/Linux server administration",
      },
    ];

    this.specialties = [
      ["System Architecture", "System Integration", "Database Design", "Continuous Integration", "Test-Driven Development", "Team management"],
      ["Python (Django", "Flask)", "Javascript", "Angular PhantomJS", "Sphinx", "Celery"],
      ["PostgreSQL", "MySQL", "Snowflake", "SQLite", "Redis", "MongoDB", "RabbitMQ"],
      ["DevOps", "Amazon Web Services", "Unix/Linux administration"],
      ["Jira", "Redmine", "Asana", "Gitlab", "Git"],
    ];

    this.jobs = [
      {
        company: "Charter Schools USA",
        role: "Lead Developer/Architect",
        place: "Fort Lauderdale, FL",
        time: {
          begin: "2/2017",
        },
        description: {
          text: "I joined the company to lead the development of a large project to build the CS-USA Student Success Platform; a comprehensive application used to measure and project individual and cohort success factors. This was a completely new initiative for the company and it require that I teach the team members of the involved departments how to properly handle a project of that size. After I designed the core architecture, my team and I started development using the SCRUM. I coded API in Python/Django, built the UI using Angular, made an integration link between Snowflake (the data warehouse) and the project’s database (PostgreSQL)."
        }
      },
      {
        company: "Betasmartz",
        role: "Senior Developer/Architect",
        place: "remote",
        time: {
          begin: "7/2016",
          end: "1/2017"
        },
        description: {
          text: "My role was to design and implement financial tools using Python, Django and Amazon Web Services."
        }
      },
      {
        company: "Healthsense Inc.",
        role: "Senior Developer/Architect",
        place: "remote",
        time: {
          begin: "8/2015",
          end: "5/2016"
        },
        description: {
          text: "I worked on creating new and optimising existing processes to handle ever increasing loads of information generated by tens of thousands of sensors monitoring thousands of patients.",
          achievements: [
            "Introduced, designed and made a technical assignment on building a distributed infrastructure to support scalable execution of time consuming jobs based on existing processes",
            "Upgraded long-running periodic jobs to support the distributed infrastructure, made the jobs to scale horizontally",
            "Optimised periodic jobs to run 40x faster to offer users 4x fresher data and significantly reduced server load",
            "Introduced continuous integration and automatic deployment",
            "Created deployment scripts that decreased deployment time, proved to significantly reduce the human factor",
            "Performed data analysis of hundreds of millions of records using map-reduce and task specific algorithms",
          ]
        }
      },
      {
        company: "ClutchRetail Inc.",
        role: "Senior Web Developer/Architect",
        place: "remote",
        time: {
          begin: "7/2012",
          end: "6/2015"
        },
        description: {
          text: "I started on the project at the very beginning. I designed the system, set up the environment to work on Amazon Web Services, got it scalable, utilised automatic deployment, continuous integration, and was the key developer and problem solver.",
          achievements: [
            "Created a distributed price tracker to monitor ~600k web pages per day",
            "Designed and implemented AWS-backed autoscaling distributed system to support the price tracker and web interface",
            "Developed a bookmarklet to let the users add their own products from any website",
            "Made an extension for the Chrome browser with extended bookmarklet functionality",
            "Utilised automatic deployment",
            "Developed automatic website parsing with PhantomJS to work with the price tracker",
            "Made Sphinx-based full-text search over 2mln tracked products",
            "Created online email designer system (create/edit/manage client email templates in the browser)",
            "Developed REST API, with social network authentication",
          ]
        }
      },
    ];

    this.pastExperience = {
      foreword: "My professional career started in 2002. Ever since I have worked with a variety of technologies in different domains. Some noticeable things I have done in the past",
      achievements: [
        "Web-based tool to control remote CMS’s and analyse website content.",
        "Real-estate oriented CMS with agent-in-the-field one-hand input mode.",
        "A recruiting website with single-page user interface and REST API.",
        "Web-crawlers.",
        "Web-based admin tool for Shopify-like platform.",
        "The client part of a payment-processing system.",
        "Online multi-store platform; a tool to automatically adjust product prices defined by its own custom-made language.",
        "CRM (file-management and financial modules), integration with a third-party system.",
        "Linux server administration."
      ],
      afterword: "I have multicultural working experience from USA, Cyprus, Thailand, Germany, Russia"
    };

    this.education = [
      "MS Degree, Computer Science (2001–2006) at Volgograd State Technical University (Russia)"
    ]
  }
}
