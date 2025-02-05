"use client";

import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaBars, FaSearch } from "react-icons/fa";
import { Nav } from "./ui/nav";
import {
  LayoutDashboard,
  PlusCircle,
  Users,
  Code,
  UserCheck,
  Briefcase,
  Building,
  MapPin,
  GitBranch,
  Lock,
} from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="/images/brandlogo.png"
            alt="Company Logo 1"
            className="h-8 w-auto"
          />
        </div>

        <DropdownMenu.Root open={isSidebarOpen} onOpenChange={setSidebarOpen}>
          <DropdownMenu.Trigger asChild>
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-2">
            <Nav
              isCollapsed={false}
              links={[
                {
                  title: "Dashboard",
                  href: "/",
                  icon: LayoutDashboard,
                  variant: "default",
                },
                {
                  title: "Add Company",
                  href: "/addcompany",
                  icon: PlusCircle,
                  variant: "ghost",
                },
                {
                  title: "Teams",
                  href: "/teams",
                  icon: Users,
                  variant: "ghost",
                },
                {
                  title: "Tech Team",
                  href: "/techteam",
                  icon: Code,
                  variant: "ghost",
                },
                {
                  title: "Non Tech Team",
                  href: "/nontechteam",
                  icon: UserCheck,
                  variant: "ghost",
                },
                {
                  title: "Department",
                  href: "/department",
                  icon: Briefcase,
                  variant: "ghost",
                },
                {
                  title: "Building",
                  href: "/building",
                  icon: Building,
                  variant: "ghost",
                },
                {
                  title: "Branch",
                  href: "/branch",
                  icon: GitBranch,
                  variant: "ghost",
                },
                {
                  title: "Location",
                  href: "/location",
                  icon: MapPin,
                  variant: "ghost",
                },
                {
                  title: "Role and Permission",
                  href: "/roleandpermission",
                  icon: Lock,
                  variant: "ghost",
                },
              ]}
            />
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <div className="relative flex-grow max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      {/* Profile dropdown positioned at the right */}
      <div className="flex items-center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="relative flex items-center space-x-2">
              {/* Outer profile image as a perfect square */}
              <div className="w-10 h-10 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9jjTt0IjvN5rBOsqyakn-5enpSgAEXIj5lnrmzrYoRw-ncAfBO4DH-CncEoXel_yofU&usqp=CAU"
                  alt="UserProfile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Name and role (shown in larger screens) */}
              <div className="hidden md:flex flex-col ml-2 text-left">
                <span className="font-bold">Aditya Singh Parihar</span>
                <span className="text-brown-600 text-sm">Super Admin</span>
              </div>
            </button>
          </DropdownMenu.Trigger>

          {/* Dropdown menu */}
          <DropdownMenu.Content className="z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-2 absolute right-0 w-64">
            <div className="p-4 flex items-center space-x-3">
              <div className="w-10 h-10 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9jjTt0IjvN5rBOsqyakn-5enpSgAEXIj5lnrmzrYoRw-ncAfBO4DH-CncEoXel_yofU&usqp=CAU"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Aditya Singh Parihar</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-md">
                    Pro
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  adityasingh@example.com
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t my-2"></div>

            {/* Section with profile links */}
            <div className="flex flex-col px-4 py-2">
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Company
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Statements
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Work
              </DropdownMenu.Item>
            </div>

            {/* Divider */}
            <div className="border-t my-2"></div>

            {/* Settings section */}
            <div className="flex flex-col px-4 py-2">
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Languages
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Account Settings
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                Sign Out
              </DropdownMenu.Item>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
};

export default Header;
