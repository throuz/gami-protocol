"use client";

import React from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { dummyUser } from "../data/dummyData";

export default function ActivitiesPage() {
  return (
    <DashboardLayout userType="user">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Activities</h1>

        {/* Activity Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Total Activities</h2>
            <p className="text-3xl font-bold text-purple-400">
              {dummyUser.activities.length}
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Total XP Earned</h2>
            <p className="text-3xl font-bold text-purple-400">
              {dummyUser.activities.reduce(
                (sum, activity) => sum + activity.points,
                0
              )}{" "}
              XP
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Average XP/Activity</h2>
            <p className="text-3xl font-bold text-purple-400">
              {Math.round(
                dummyUser.activities.reduce(
                  (sum, activity) => sum + activity.points,
                  0
                ) / dummyUser.activities.length
              )}{" "}
              XP
            </p>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Activity Timeline</h2>
          <div className="space-y-4">
            {dummyUser.activities
              .sort(
                (a, b) =>
                  new Date(b.timestamp).getTime() -
                  new Date(a.timestamp).getTime()
              )
              .map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 bg-gray-700 rounded"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{activity.type}</h3>
                      <span className="text-purple-400 font-bold">
                        +{activity.points} XP
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
