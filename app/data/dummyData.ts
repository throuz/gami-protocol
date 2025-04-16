export interface User {
  id: string;
  name: string;
  wallet: string;
  xp: number;
  level: number;
  rewards: Reward[];
  activities: Activity[];
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  points: number;
  claimed: boolean;
}

export interface Activity {
  id: string;
  type: string;
  points: number;
  timestamp: string;
}

export interface Business {
  id: string;
  name: string;
  totalUsers: number;
  activeUsers: number;
  rewards: Reward[];
}

// Dummy data
export const dummyUser: User = {
  id: "1",
  name: "John Doe",
  wallet: "8xQhW...3fK9p",
  xp: 1250,
  level: 3,
  rewards: [
    {
      id: "1",
      name: "Early Adopter Badge",
      description: "First 100 users",
      points: 100,
      claimed: true,
    },
    {
      id: "2",
      name: "Social Butterfly",
      description: "Share on social media",
      points: 50,
      claimed: false,
    },
  ],
  activities: [
    {
      id: "1",
      type: "Daily Login",
      points: 10,
      timestamp: "2024-03-20T10:00:00Z",
    },
    {
      id: "2",
      type: "Completed Profile",
      points: 50,
      timestamp: "2024-03-19T15:30:00Z",
    },
  ],
};

export const dummyLeaderboard: User[] = [
  {
    id: "1",
    name: "John Doe",
    wallet: "8xQhW...3fK9p",
    xp: 1250,
    level: 3,
    rewards: [],
    activities: [],
  },
  {
    id: "2",
    name: "Alice",
    wallet: "5yRtE...7hJ2m",
    xp: 980,
    level: 2,
    rewards: [],
    activities: [],
  },
  {
    id: "3",
    name: "Bob",
    wallet: "3kLpN...9vB4q",
    xp: 750,
    level: 2,
    rewards: [],
    activities: [],
  },
];

// Adding more dummy data for users, leaderboard, and businesses
export const additionalDummyUsers: User[] = [
  {
    id: "4",
    name: "Charlie",
    wallet: "2xYhW...8fL9p",
    xp: 600,
    level: 1,
    rewards: [
      {
        id: "4",
        name: "First Purchase",
        description: "Made the first purchase",
        points: 30,
        claimed: true,
      },
    ],
    activities: [
      {
        id: "3",
        type: "First Purchase",
        points: 30,
        timestamp: "2024-03-21T12:00:00Z",
      },
    ],
  },
  {
    id: "5",
    name: "Diana",
    wallet: "7zRtE...1hJ2m",
    xp: 450,
    level: 1,
    rewards: [],
    activities: [],
  },
];

export const dummyBusiness: Business = {
  id: "1",
  name: "Demo Business",
  totalUsers: 150,
  activeUsers: 75,
  rewards: [
    {
      id: "1",
      name: "Early Adopter Badge",
      description: "First 100 users",
      points: 100,
      claimed: false,
    },
    {
      id: "2",
      name: "Social Butterfly",
      description: "Share on social media",
      points: 50,
      claimed: false,
    },
    {
      id: "3",
      name: "Content Creator",
      description: "Create 5 posts",
      points: 200,
      claimed: false,
    },
  ],
};

export const additionalDummyBusinesses: Business[] = [
  {
    id: "2",
    name: "Tech Innovators",
    totalUsers: 200,
    activeUsers: 120,
    rewards: [
      {
        id: "4",
        name: "Innovator Badge",
        description: "Awarded for innovative ideas",
        points: 150,
        claimed: false,
      },
    ],
  },
  {
    id: "3",
    name: "Green Earth",
    totalUsers: 300,
    activeUsers: 180,
    rewards: [
      {
        id: "5",
        name: "Eco Warrior",
        description: "Promote eco-friendly practices",
        points: 200,
        claimed: false,
      },
    ],
  },
];
