
import CompoundComponent from "./components/CompoundComponent/";
import CustomHook from "./components/CustomHook/";
import ExtensibleStyles from "./components/ExtensibleStyles/";
import Home from "./components/Home/";

export interface Props {
    children?: React.ReactNode;
  }
export interface Route {
    path: string;
    label: string;
    Component:<Props>(props:Props) => JSX.Element;
    exact?: boolean;
  }

export const routes: Route[] = [
    {
      path: '/',
      label: 'Welcome',
      Component: Home,
      exact: true,
    },
    {
      path: '/compound-components',
      label: 'Compound Components',
      Component: CompoundComponent,
    },
    {
      path: '/custom-hook',
      label: 'Custom Hooks',
      Component: CustomHook,
    },
    {
      path: '/extensible-styles',
      label: 'Extensible Styles',
      Component: ExtensibleStyles,
    },
  
  ];
  