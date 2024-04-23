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
import AccountPage from "../pages/Account";
import ThreeDBetHistoryPage from "../pages/ThreeDBetHistory";
import BankPage from "../pages/Bank";

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
          path : "/account",
          element : <AccountPage />
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
        {
          path : "/3d-bet-history",
          element : <ThreeDBetHistoryPage />
        },
        {
          path : "/bank",
          element : <BankPage />
        },
        
      ]
    }
]);


export default router;