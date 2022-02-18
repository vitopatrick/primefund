import {
  MdDashboard,
  MdAccountCircle,
  MdPayment,
  MdDownload,
  MdCreditScore,
  MdBusinessCenter,
} from "react-icons/md";

export const links = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard color="#fff" />,
  },
  {
    text: "Account Settings",
    path: "/account",
    icon: <MdAccountCircle color="#fff" />,
  },
  {
    text: "Deposit",
    path: "/deposit",
    icon: <MdPayment color="#fff" />,
  },
  {
    text: "Invest",
    path: "/invest",
    icon: <MdDownload color="#fff" />,
  },
  {
    text: "Withdraw",
    path: "/withdraw",
    icon: <MdCreditScore color="#fff" />,
  },
  {
    text: "Transactions",
    path: "/transactions",
    icon: <MdBusinessCenter color="#fff" />,
  },
];
