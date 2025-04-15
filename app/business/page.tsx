"use client";

import React from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { DashboardLayout } from "../components/DashboardLayout";
import { clusterApiUrl } from "@solana/web3.js";
import { dummyBusiness, dummyLeaderboard } from "./data/dummyData";

export default function BusinessDashboard() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);
  const wallets = [new PhantomWalletAdapter()];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div className="absolute top-4 right-4">
              <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700" />
            </div>
            <DashboardLayout userType="business">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Business Dashboard</h1>

                {/* Business Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Total Users</h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {dummyBusiness.totalUsers}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Active Users</h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {dummyBusiness.activeUsers}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Rewards</h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {dummyBusiness.rewards.length}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">
                      Engagement Rate
                    </h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {Math.round(
                        (dummyBusiness.activeUsers / dummyBusiness.totalUsers) *
                          100
                      )}
                      %
                    </p>
                  </div>
                </div>

                {/* Rewards Management */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">
                      Rewards Management
                    </h2>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
                      Create New Reward
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyBusiness.rewards.map((reward) => (
                      <div key={reward.id} className="p-4 bg-gray-700 rounded">
                        <h3 className="font-semibold">{reward.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {reward.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-400">
                            {reward.points} points
                          </span>
                          <div className="space-x-2">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm">
                              Edit
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Users */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Top Users</h2>
                  <div className="space-y-4">
                    {dummyLeaderboard.map((user, index) => (
                      <div
                        key={user.id}
                        className="flex justify-between items-center p-4 bg-gray-700 rounded"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-purple-400">
                            #{index + 1}
                          </span>
                          <div>
                            <p className="font-semibold">{user.wallet}</p>
                            <p className="text-sm text-gray-400">
                              Level {user.level}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-purple-400 font-bold">
                            {user.xp} XP
                          </span>
                          <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DashboardLayout>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}
