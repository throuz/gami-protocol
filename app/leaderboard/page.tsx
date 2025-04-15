"use client";

import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { dummyUser } from "../data/dummyData";

export default function LeaderboardPage() {
  // Create a sorted list of users by XP (in a real app, this would come from an API)
  const sortedUsers = [
    dummyUser,
    {
      id: "2",
      name: "Alice",
      xp: 8500,
      level: 8,
      activities: [],
      rewards: [],
    },
    {
      id: "3",
      name: "Bob",
      xp: 7500,
      level: 7,
      activities: [],
      rewards: [],
    },
    {
      id: "4",
      name: "Charlie",
      xp: 6500,
      level: 6,
      activities: [],
      rewards: [],
    },
    {
      id: "5",
      name: "Diana",
      xp: 5500,
      level: 5,
      activities: [],
      rewards: [],
    },
  ].sort((a, b) => b.xp - a.xp);

  return (
    <DashboardLayout userType="user">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>

        {/* Top 3 Users */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {sortedUsers.slice(0, 3).map((user, index) => (
            <div
              key={user.id}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg ${
                index === 0 ? "md:col-span-3" : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-purple-400">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-purple-400 font-bold">{user.xp} XP</p>
                  <p className="text-sm text-gray-400">Level {user.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Leaderboard */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">All Rankings</h2>
          <div className="space-y-4">
            {sortedUsers.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 bg-gray-700 rounded"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-purple-400">
                    #{index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-400">Level {user.level}</p>
                  </div>
                </div>
                <span className="text-purple-400 font-bold">{user.xp} XP</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
