export const jobData = {
  featured: [
    { id: 11, title: "UI/UX Designer", company: "Teams", location: "Seattle, USA (Remote)", date: "1 day ago", applicants: 22 },
    { id: 12, title: "UI/UX Designer", company: "Teams", location: "San Francisco, USA", date: "2 days ago", applicants: 30 },
    { id: 13, title: "UI/UX Designer", company: "Teams", location: "New York, USA", date: "3 days ago", applicants: 15 },
    { id: 14, title: "UI/UX Designer", company: "Teams", location: "Austin, USA", date: "4 days ago", applicants: 10 },
    { id: 15, title: "UI/UX Designer", company: "Teams", location: "Los Angeles, USA", date: "5 days ago", applicants: 25 }
  ],
  recommended: [...Array(10)].map((_, i) => ({
    id: i + 16,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    date: "1 day ago",
    applicants: 22
  })),
  latest: [...Array(10)].map((_, i) => ({
    id: i + 26,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    date: "1 day ago",
    applicants: 22
  }))
};