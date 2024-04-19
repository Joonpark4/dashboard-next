"use client";
import {
  Home,
  ServerIcon,
  Backpack,
  Briefcase,
  Truck,
  GraduationCap,
  Building,
  Settings,
} from "lucide-react";

export const navMenu = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Cluster",
    href: "/cluster",
    icon: ServerIcon,
  },
  {
    title: "DB",
    href: "/redis",
    icon: Briefcase,
    children: [
      {
        title: "redis",
        href: "/redis",
      },
      {
        title: "mySQL",
        href: "/mysql",
      },
      {
        title: "mongo",
        href: "/mongo",
      },
    ],
  },
  {
    title: "Application",
    href: "/application",
    icon: Backpack,
  },
  {
    title: "Gateways",
    href: "/gateways",
    icon: Truck,
  },
  {
    title: "Api Management",
    href: "/apimanagement",
    icon: GraduationCap,
  },
  {
    title: "Storage",
    href: "/storage",
    icon: Building,
  },
];
