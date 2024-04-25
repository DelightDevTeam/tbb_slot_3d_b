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
import ThreeDPage from "../pages/ThreeD";
import ThreeDWinnersPage from "../pages/ThreeDWinners";
import ThreeDHistoryPage from "../pages/ThreeDHistory";
import ThreeDResultsPage from "../pages/ThreeDResults";
import ThreeDBetPage from "../pages/ThreeDBet";
import ThreeDConfirmPage from "../pages/ThreeDConfirm";
import WalletPage from "../pages/Wallet";
import TopUpPage from "../pages/TopUp";
import WithDrawPage from "../pages/WithDraw";
import CashHistoryPage from "../pages/CashHistory";

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
          path : "/bank",
          element : <BankPage />
        },
        {
          path : "/wallet",
          element : <WalletPage />
        },
        {
          path : "/topup",
          element : <TopUpPage />
        },
        {
          path : "/with-draw",
          element : <WithDrawPage />
        },
        {
          path : "/transfer-log",
          element : <CashHistoryPage />
        },
        
        {
          path : "/3d",
          element : <ThreeDPage />
        },
        {
          path : "/3d-history",
          element : <ThreeDHistoryPage />
        },
        {
          path : "/3d/bet",
          element : <ThreeDBetPage />
        },
        {
          path : "/3d/confirm",
          element : <ThreeDConfirmPage />
        },
        {
          path : "/3d-results",
          element : <ThreeDResultsPage />
        },
        {
          path : "/3d-bet-history",
          element : <ThreeDBetHistoryPage />
        },
        {
          path : "/3d-winners",
          element : <ThreeDWinnersPage />
        },
        
      ]
    }
]);


export default router;