"use client";

import {
  LayoutDashboard,
  Users,
  Lock,
  GitBranch,
  Code,
  UserCheck,
  Briefcase,
  Building,
} from "lucide-react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import Header from "@/components/Header";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

export default function Dashboard() {
  const barChartData1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 15000, 14000, 17000, 20000, 22000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData1 = {
    labels: ["Tech Team", "Non-Tech Team", "Management"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
        hoverBackgroundColor: ["#45a049", "#e68900", "#1e88e5"],
      },
    ],
  };

  const pieChartData3 = {
    labels: ["Building 1", "Building 2", "Building 3", "Building ", "Building 5"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
        hoverBackgroundColor: ["#45a049", "#e68900", "#1e88e5"],
      },
    ],
  };

  const lineChartData1 = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Profit",
        data: [5000, 15000, 10000, 25000],
        fill: false,
        borderColor: "#FF5733",
        tension: 0.1,
      },
    ],
  };

  const barChartData2 = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Product Sales",
        data: [100, 200, 300, 250],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData2 = {
    labels: ["Marketing", "Sales", "HR", "Finance"],
    datasets: [
      {
        data: [50, 20, 15, 15],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCD56", "#4BC0C0"],
        hoverBackgroundColor: ["#f0596b", "#28a0d7", "#f8b63b", "#47d7d2"],
      },
    ],
  };

  const lineChartData2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Customer Satisfaction",
        data: [70, 55, 80, 35, 90, 65],
        fill: false,
        borderColor: "#8E44AD",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <Header />
      <section className="p-6  min-h-screen">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive insights into your company's key metrics
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              title: "Total Companies",
              count: 120,
              icon: LayoutDashboard,
              color: "bg-blue-500",
              chart: <Bar data={barChartData1} />,
            },
            {
              title: "Active Companies",
              count: 100,
              icon: Users,
              color: "bg-green-500",
              chart: <Pie data={pieChartData1} />,
            },
            {
              title: "Inactive Companies",
              count: 20,
              icon: Lock,
              color: "bg-red-500",
              chart: <Line data={lineChartData1} />,
            },
            {
              title: "Branches",
              count: 15,
              icon: GitBranch,
              color: "bg-yellow-500",
              chart: <Bar data={barChartData2} />,
            },
            {
              title: "Tech Team",
              count: 45,
              icon: Code,
              color: "bg-indigo-500",
              chart: <Pie data={pieChartData2} />,
            },
            {
              title: "Non-Tech Team",
              count: 30,
              icon: UserCheck,
              color: "bg-purple-500",
              chart: <Line data={lineChartData2} />,
            },
            {
              title: "Departments",
              count: 10,
              icon: Briefcase,
              color: "bg-gray-500",
              chart: <Bar data={barChartData1} />,
            },
            {
              title: "Buildings",
              count: 5,
              icon: Building,
              color: "bg-teal-500",
              chart: <Pie data={pieChartData1} />,
            },
          ].map((item, index) => (
            <div className="border rounded-lg shadow-lg overflow-hidden">
              <div
                key={index}
                className={`flex items-center p-6 bg-gradient-to-r ${item.color} text-white rounded-t-lg`}
              >
                <item.icon className="w-14 h-14 p-2 rounded-md bg-white text-black shadow-md" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-3xl font-bold">{item.count}</p>
                </div>
              </div>
              <div className="mt-4 p-6 bg-white rounded-b-lg shadow-inner">
                {item.chart}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Revenue Growth
            </h2>
            <div className="p-6">
              <Bar data={barChartData1} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Team Distribution
            </h2>
            <div className="p-6">
              <Pie data={pieChartData1} />
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Companies
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-4">Company</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Tech Innovators Inc.",
                  location: "New York",
                  status: "Active",
                },
                { name: "Wipro", location: "California", status: "Inactive" },
                { name: "TCS", location: "India", status: "Active" },
                { name: "Google Inc.", location: "USA", status: "Active" },
              ].map((company, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 text-gray-800">{company.name}</td>
                  <td className="p-4 text-gray-600">{company.location}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-lg text-white ${
                        company.status === "Active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {company.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
