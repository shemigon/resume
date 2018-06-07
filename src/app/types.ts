export class PersonalInfo {
  name: string;
  email: string;
  phone: string;
  title: string;
  address: string;
}

export class SummaryItem {
  title: string;
  year?: number;
}

export class Job {
  company: string;
  role: string;
  place: string;
  time: {
    begin: string;
    end?: string;
  };
  description: {
    text: string;
    achievements?: string[];
    notes?: string;
  }
}

export class PastExperience {
  foreword: string;
  achievements: string[];
  afterword?: string;
}

export class Resume {
  personalInfo: PersonalInfo;
  summary: SummaryItem[];
  specialties: string[][];
  jobs: Job[];
  pastExperience: PastExperience;
  education: string[];

  constructor() {
    this.personalInfo = new PersonalInfo();
    this.summary = [];
    this.specialties = [];
    this.jobs = [];
    this.pastExperience = new PastExperience();
    this.education = [];
  }
}
