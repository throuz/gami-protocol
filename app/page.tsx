"use client";

import React from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { DashboardLayout } from "./components/DashboardLayout";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { dummyUser, dummyLeaderboard } from "./data/dummyData";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

export default function Home() {
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
            <DashboardLayout userType="user">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">
                  Welcome to Gami Protocol
                </h1>

                {/* User Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Your XP</h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {dummyUser.xp} XP
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Level</h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {dummyUser.level}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Rewards</h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {dummyUser.rewards.length}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Activities</h2>
                    <p className="text-3xl font-bold text-purple-400">
                      {dummyUser.activities.length}
                    </p>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Recent Activities
                  </h2>
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

                {/* Available Rewards */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Available Rewards
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyUser.rewards.map((reward) => (
                      <div
                        key={reward.id}
                        className={`p-4 rounded ${
                          reward.claimed ? "bg-gray-700" : "bg-purple-900"
                        }`}
                      >
                        <h3 className="font-semibold">{reward.name}</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {reward.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-400">
                            {reward.points} points
                          </span>
                          <button
                            className={`px-4 py-2 rounded ${
                              reward.claimed
                                ? "bg-gray-600 text-gray-400"
                                : "bg-purple-600 hover:bg-purple-700"
                            }`}
                            disabled={reward.claimed}
                          >
                            {reward.claimed ? "Claimed" : "Claim"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leaderboard */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
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
                        <span className="text-purple-400 font-bold">
                          {user.xp} XP
                        </span>
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
