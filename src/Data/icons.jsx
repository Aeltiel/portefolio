import ReduxIcon from "../Assets/redux-icon.webp";
import ReactNativeIcon from "../Assets/ReactNative.webp";

export const icons = [
  { id: 1, icon: [{ id: 1, icon: <i className="fa-brands fa-js"></i> }] },
  { id: 2, icon: [{ id: 1, icon: <i className="fa-brands fa-node-js"></i> }] },
  {
    id: 3,
    icon: [
      {
        id: 1,
        icon: [
          <i className="fa-brands fa-react"></i>,
          <i className="fa-brands fa-sass"></i>,
        ],
      },
    ],
  },
  {
    id: 4,
    icon: [
      { id: 1, icon: <i className="fa-brands fa-react"></i> },
      { id: 2, icon: <i className="fa-brands fa-sass"></i> },
      { id: 3, iconimg: ReduxIcon },
    ],
  },
  {
    id: 5,
    icon: [
      <i className="fa-brands fa-react"></i>,
      <i className="fa-brands fa-sass"></i>,
      <i className="fa-brands fa-node-js"></i>,
    ],
  },
  { id: 6, iconimg: ReactNativeIcon },
  {
    id: 7,
    icon: <i className="fa-brands fa-node-js"></i>,
    iconimg: ReactNativeIcon,
  },
  { id: 8, icon: <i className="fa-brands fa-node-js"></i> },
];
