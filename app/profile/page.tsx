"use client";

import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { dummyUser } from "../data/dummyData";

export default function ProfilePage() {
  const totalXP = dummyUser.activities.reduce(
    (sum, activity) => sum + activity.points,
    0
  );
  const totalRewards = dummyUser.rewards.length;
  const claimedRewards = dummyUser.rewards.filter(
    (reward) => reward.claimed
  ).length;

  return (
    <DashboardLayout userType="user">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        {/* Profile Header */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">👤</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{dummyUser.name}</h2>
              <p className="text-purple-400 font-bold">
                Level {dummyUser.level}
              </p>
              <p className="text-gray-400">{totalXP} Total XP</p>
              <p className="text-sm text-gray-400">{dummyUser.wallet}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Activities</h3>
            <p className="text-3xl font-bold text-purple-400">
              {dummyUser.activities.length}
            </p>
            <p className="text-sm text-gray-400">Total activities completed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Rewards</h3>
            <p className="text-3xl font-bold text-purple-400">
              {claimedRewards}/{totalRewards}
            </p>
            <p className="text-sm text-gray-400">Rewards claimed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Average XP</h3>
            <p className="text-3xl font-bold text-purple-400">
              {Math.round(totalXP / dummyUser.activities.length)}
            </p>
            <p className="text-sm text-gray-400">XP per activity</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {dummyUser.activities
              .sort(
                (a, b) =>
                  new Date(b.timestamp).getTime() -
                  new Date(a.timestamp).getTime()
              )
              .slice(0, 5)
              .map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded"
                >
                  <div>
                    <h3 className="font-semibold">{activity.type}</h3>
                    <p className="text-sm text-gray-400">
                      {new Date(activity.timestamp).toLocaleString()}
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
