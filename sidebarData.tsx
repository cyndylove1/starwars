// eslint-disable-next-line no-unused-vars
import React from "react";

import { type JSX } from "react";

export interface SidebarItem {
  id: number;
  Label: string;
  path: string;
  icon: (isActive: boolean) => JSX.Element;
}

export interface SidebarDataProps {
  items: SidebarItem[];
}

export const sidebarItems: SidebarDataProps[] = [
  {
    items: [
      {
        id: 1,
        Label: "Overview",
        path: "/overview",
        icon: () => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H10.2V10.2H3V3ZM3 13.8H10.2V21H3V13.8ZM13.8 3H21V10.2H13.8V3ZM13.8 13.8H21V21H13.8V13.8Z"
              fill="white"
            />
          </svg>
        ),
      },
    ],
  },

  // Route Section
  {
    items: [
      {
        id: 2,
        Label: "Starships",
        path: "/starships",
        icon: () => (
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="17" height="16" rx="5" fill="#A9C1FF" />
          </svg>
        ),
      },
    ],
  },
  {
    items: [
      {
        id: 3,
        Label: "People",
        path: "/people",
        icon: () => (
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="17" height="16" rx="5" fill="#FFA9EC" />
          </svg>
        ),
      },
    ],
  },
  {
    items: [
      {
        id: 4,
        Label: "Species",
        path: "/species",
        icon: () => (
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="17" height="16" rx="5" fill="#FDFFA9" />
          </svg>
        ),
      },
    ],
  },
];
