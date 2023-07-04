export interface NavigationLink {
  path: string;
  name: string;
}

export const mainNavigation: NavigationLink[] = [
  { path: "/movies", name: "Movies" },
  { path: "/tvshows", name: "Movies" },
];

export const accountNavigation: NavigationLink[] = [
  { path: "/dashboard", name: "Dashboard" },
  { path: "/suggestions", name: "Suggestions" },
  { path: "/add", name: "Add" },
];

