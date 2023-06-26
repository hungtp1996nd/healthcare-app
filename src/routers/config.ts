export type RouterProps = {
  path: string;
  element: any;
  permissions?: string[];
};

export const HEALTH_ROUTERS = {
  HOME_PAGE: "/home-page",
  MY_RECORD: "/my-record",
  ABOUT: "/about",
};
