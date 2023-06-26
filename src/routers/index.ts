import {lazy} from 'react'
import { HEALTH_ROUTERS, RouterProps } from './config'

// Home page
const HomePage = lazy(() => import("../pages/home-page/Home"))

// My record page
const MyRecord = lazy(() => import("../pages/my-record/MyRecord"))

// About page
const About = lazy(() => import("../pages/about/About"))

export const ROUTERS: RouterProps[] = [
    {
        path: HEALTH_ROUTERS.HOME_PAGE,
        element: HomePage
    }, 
    {
        path: HEALTH_ROUTERS.MY_RECORD,
        element: MyRecord
    }
]

export const ROUTERS_PUBLIC: RouterProps[] = [
    {
      path: HEALTH_ROUTERS.ABOUT,
      element: About,
    }
  ];