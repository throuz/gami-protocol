"use client";

import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { dummyUser } from "../data/dummyData";

export default function RewardsPage() {
  return (
    <DashboardLayout userType="user">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Rewards</h1>

        {/* Available Rewards */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dummyUser.rewards
              .filter((reward) => !reward.claimed)
              .map((reward) => (
                <div key={reward.id} className="p-4 bg-purple-900 rounded">
                  <h3 className="font-semibold">{reward.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {reward.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400">
                      {reward.points} points
                    </span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                      Claim
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Claimed Rewards */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Claimed Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dummyUser.rewards
              .filter((reward) => reward.claimed)
              .map((reward) => (
                <div key={reward.id} className="p-4 bg-gray-700 rounded">
                  <h3 className="font-semibold">{reward.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {reward.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400">
                      {reward.points} points
                    </span>
                    <span className="text-green-400">Claimed</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
