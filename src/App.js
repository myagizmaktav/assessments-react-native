import React from "react";
import LandingLatestScreen from "./src/screens/LandingLatestScreen/LandingLatestScreen";

let App = (props) => {
  const Screens = {
    LandingLatestScreen: LandingLatestScreen,
  };
  const MyComponent = Screens[props.initialScreen];
  return <MyComponent />;
};

export default App;
