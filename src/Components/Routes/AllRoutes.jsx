import React from "react";
import App from "../../App";
import navs from "./Navigation";
import { Route } from "react-router";

const AllRoutes = () => {
  {
    // const userData = localStorage.getItem("user");
    // const getUserInfo = () => {
    //   let userFromLocStr = null;
    //   if (userData && userData !== "{}") {
    //     userFromLocStr = JSON.parse(userData);
    //     if (userFromLocStr !== undefined) {
    //       return {
    //         username: userFromLocStr.username,
    //         role: userFromLocStr.role,
    //         isAuthenticated: userFromLocStr.isAuthenticated,
    //       };
    //     }
    //   }
    //   return {
    //     username: "",
    //     role: "ALL",
    //     isAuthenticated: false,
    //   };
    // };
    // const { username, role, isAuthenticated } = getUserInfo();
  }

  let getInfo = () => {
    if (isAuthenticated === false) {
      return {
        username: "",
        role: "ALL",
        isAuthenticated: false,
      };
    } else {
      return {
        username: username,
        role: role,
        isAuthenticated: isAuthenticated,
      };
    }
  };

  // const { username, role, isAuthenticated } = getInfo();

  const user = {
    username: "",
    role: "ANY",
    isAuthenticated: false,
  };

  const { username, role, isAuthenticated } = user;

  const routes = () => {
    return (
      <Route
        path="/"
        element={<App name={username} isAuth={isAuthenticated} />}
      >
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    );
  };

  return routes();
};
export default AllRoutes;

//& **************** using context ************************/

// import React from "react";
// import App from "../../App";
// import navs from "./Navigation";
// import { Route } from "react-router";
// import { useAuth } from "../Context/AuthProvider";

// const AllRoutes = () => {
//   const { auth } = useAuth();
//   const { username, role, isAuthenticated } = auth;

//   const routes = () => {
//     return (
//       <Route
//         path="/"
//         element={<App name={username} isAuth={isAuthenticated} />}
//       >
//         {navs.map((nav, i) => {
//           if (isAuthenticated) {
//             if (nav.isVisibleAfterAuth) {
//               if (nav.role === role || nav.role === "ALL") {
//                 console.log(nav);
//                 return <Route key={i} path={nav.path} element={nav.element} />;
//               }
//             }
//           } else {
//             if (!nav.requireAuth && nav.role === "ALL") {
//               console.log(nav);
//               return <Route key={i} path={nav.path} element={nav.element} />;
//             }
//           }
//           return null;
//         })}
//       </Route>
//     );
//   };

//   return routes();
// };

// export default AllRoutes;
