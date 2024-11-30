import ROUTES_NAVIGATION from "../../routes/routes";
import { red } from "@mui/material/colors";
import {
  mdiAccountFilterOutline,
  mdiAccountMultiple,
  mdiAccountOffOutline,
  mdiAccountPlus,
  mdiBullhornOutline,
  mdiCash,
  mdiCheckboxMarkedCirclePlusOutline,
  mdiDatabase,
  mdiFileAccount,
  mdiFileChart,
  mdiFileChartOutline,
  mdiFileDocumentMultipleOutline,
  mdiHelpCircleOutline,
  mdiMessageAlertOutline,
  mdiPercentCircle,
  mdiPercentCircleOutline,
  mdiStackOverflow,
  mdiSwapHorizontal,
  mdiTextBoxSearchOutline,
  mdiTextSearch,
  mdiUploadCircleOutline,
  mdiViewDashboardOutline,
} from "@mdi/js";
export const DrawerNavigation = [
  {
    id: "dashboard",
    parent: "dashboard",
    path: ROUTES_NAVIGATION.City,
    key: "HAS_DASHBOARD",
    sidebarProps: {
      displayText: "Dashboard",
      icons: mdiViewDashboardOutline,
      // icon: "bi bi-columns-gap",
    },
    // state: "master",
    child: [],
  },
  {
    id: "masterData",
    parent: "masterData",
    key: "HAS_MASTER_DATA",
    sidebarProps: {
      displayText: "Master Data",
      icons: mdiDatabase,
      // icon: "bi bi-database-fill",
      colors: red,
    },
    // state: "manageleads",
    child: [
      {
        id: "leadsource",
        parent: "masterData",
        index: true,
        path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_MASTER_LEAD_SOURCE,
        key: "HAS_MASTER_SOURCE",
        element: "",
        // state: "manageleads.allleads",
        sidebarProps: {
          displayText: "Lead Source",
          icons: mdiTextBoxSearchOutline,
        },
      },
    ],
  },
  // {
  //   // Vertical line between "Dashboard" and "Manage Leads"
  //   id: "divider",
  //   isDivider: true,
  // },

  //   {
  //     id: "master",
  //     parent: "master",
  //     path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_MASTER_DATA,
  //     sidebarProps: {
  //       displayText: "Master Data",
  //  icons: mdiTextSearch,//
  // icon: "bi-database",
  //     },
  //     // state: "master",
  //     child: [],
  //   },

  // {
  //   id: "settings",
  //   parent: "settings",
  //   path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_SOLD_POLICY,
  //   sidebarProps: {
  //     displayText: "Sold Policies",
  //  icons: mdiTextSearch,//
  // icon: "bi-file-earmark-text",
  //   },
  //   // state: "settings",
  //   child: [],
  // },
  // {
  //   id: "logs",
  //   parent: "logs",
  //   path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_LOST_CASES,
  //   sidebarProps: {
  //     displayText: "Lost Cases",
  //  icons: mdiTextSearch,//
  // icon: "bi-file-earmark",
  //   },
  //   // state: "logs",
  //   child: [],
  // },
  // {
  //   id: "additional",
  //   parent: "additional",
  //   path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_ADDITIONAL_FEATURS,   -----------------------Not Confirm--
  //   key:"",
  //   sidebarProps: {
  //     displayText: "Additional Features",
  //  icons: mdiTextSearch,//
  // icon: "bi-box-seam",
  //   },
  //   // state: "logs",
  //   child: [],
  // },
  // {
  //   id: "campaign",
  //   parent: "campaign",
  //   path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_CAMPAIGN_LEAD,
  //   sidebarProps: {
  //     displayText: "Campaign Data",
  //  icons: mdiTextSearch,//
  // icon: "bi-megaphone",
  //   },
  //   // state: "logs",
  //   child: [],
  // },

  // {
  //   id: "auditorams",
  //   parent: "auditor",
  //   path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_AUDITORS_LEADS,
  //   sidebarProps: {
  //     displayText: "Auditors Lead",
  //  icons: mdiTextSearch,//
  // icon: "bi-megaphone",
  //   },
  //   // state: "logs",
  //   child: [],
  // },

  // {
  //   id: "renewalnotice",
  //   parent: "renewalnotice",
  //   path: ROUTES_NAVIGATION.VEHICLE_INSURENCE_RENEWAL_NOTICES,
  //   sidebarProps: {
  //     displayText: "Renewal Notice",
  //  icons: mdiTextSearch,//
  // icon: "bi bi-newspaper",
  //   },
  //   // state: "logs",
  //   child: [],
  // },
];
