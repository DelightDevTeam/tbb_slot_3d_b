import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Promotion from "../pages/Promotion";
import PromotionDetail from "../pages/PromotionDetail";
import Profile from '../pages/Profile'
import GameLog from "../pages/GameLog";
import History from "../pages/History";
import ChangePassword from "../pages/ChangePassword";
import NewPlayerChangePassword from "../pages/NewPlayerChangePassword";

const router = createBrowserRouter([
   
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/promotion",
          element : <Promotion />
        },
        {
          path : "/promotionDetail",
          element : <PromotionDetail />
        },
        {
          path : "/gameLog",
          element : <GameLog />
        },
        {
          path : "/history",
          element : <History />
        },
        {
          path : "/profile",
          element : <Profile />
        },
        {
          path : "/register",
          element : <Register />
        },
        {
          path : "/login",
          element : <Login />
        },
        {
          path : "/changepassword",
          element : <ChangePassword />
        },
        {
          path : "/new-player-change-password",
          element : <NewPlayerChangePassword />
        },
        
      ]
    }
]);


export default router;