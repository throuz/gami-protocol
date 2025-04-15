"use client";

import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { dummyUser } from "../data/dummyData";

export default function XPPage() {
  return (
    <DashboardLayout userType="user">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My XP</h1>

        {/* XP Progress */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Level {dummyUser.level}</h2>
            <span className="text-purple-400 font-bold">{dummyUser.xp} XP</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-purple-600 h-4 rounded-full"
              style={{ width: `${(dummyUser.xp % 1000) / 10}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {1000 - (dummyUser.xp % 1000)} XP until next level
          </p>
        </div>

        {/* XP History */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">XP History</h2>
          <div className="space-y-4">
            {dummyUser.activities.map((activity) => (
              <div
                key={activity.id}
                className="flex justify-between items-center p-4 bg-gray-700 rounded"
              >
                <div>
                  <p className="font-semibold">{activity.type}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(activity.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <span className="text-purple-400 font-bold">
                  +{activity.points} XP
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
