import { createContext, useCallback, useEffect, useState } from "react";
import { confirm } from "../components/shared/CustomConfirmModel";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [addMasterModel, setAddMasterModel] = useState(false);
  const [isDashboardDrawerOpen, setIsDashboardDrawerOpen] = useState(false);
  const [isMobileWebView, setIsMobileWebView] = useState(false);
  const [hasUserPermission, setHasUserPermission] = useState([]);

  const [isUserAuth, setIsUserAuth] = useState(
    localStorage.getItem("isRegisteredUser") === "true" || false
  );

  // console.log(
  //   "isUserAuth<><><><>",
  //   isUserAuth,
  //   localStorage.getItem("isRegisteredUser")
  // );

  const displayModal = async (props) => {
    let result = await confirm({ ...props });
    return result;
  };

  const computeExpensiveValue = async (a, b) => {
    const data = localStorage.getItem("userHasPermission");
    // console.log("data", data);
    if (data) {
      const jsonData = await JSON.parse(data);
      setHasUserPermission(jsonData);
    }
  };
  const personName = localStorage.getItem("userName");
  const role = localStorage.getItem("role");

  console.log("hasUserPermission", hasUserPermission);
  console.log("userName", personName);

  const hasAccess = useCallback(
    (k = []) => {
      // const listData = await computeExpensiveValue();
      //   console.log("HAS_DASHBOARD_LEAD_CARD_STATIC", hasUserPermission);
      const dataArray = Object.entries(hasUserPermission).map(
        ([key, value]) => key
      );
      // const dataArray = Object.entries(hasPermisionList).map(
      //   ([key, value]) => key
      // );

      return (dataArray || [])?.indexOf(k) !== -1;
      // const _p = getUserDetails()?.menus_alias || [];
      // console.log("dataArray", dataArray);
      // return k?.findIndex((_k) => dataArray.indexOf(_k) !== -1) !== -1;
    },
    [hasUserPermission]
  );

  useEffect(() => {
    setIsMobileWebView(false);
    setIsDashboardDrawerOpen(true);
  }, []);

  const confirmationModal = async (props) => {
    let result = await confirm({ ...props });
    return result;
  };

  useEffect(() => {
    if (isUserAuth) computeExpensiveValue();
  }, [isUserAuth]);

  return (
    <GlobalContext.Provider
      value={{
        addMasterModel,
        setAddMasterModel,
        displayModal,
        isMobileWebView,
        setIsMobileWebView,
        confirmationModal,
        isDashboardDrawerOpen,
        setIsDashboardDrawerOpen,
        isUserAuth,
        setIsUserAuth,
        hasAccess,
        hasUserPermission,
        personName,
        role,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
