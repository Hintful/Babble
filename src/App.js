import { Container } from "@chakra-ui/react";
import Chatroom from "./components/Chatroom";
import MainContainer from "./components/MainContainer";
import ReactGA from 'react-ga'
import { useEffect } from "react";

function usePageViews() {
  useEffect(() => {
    if(!window.GA_INIT) {
      ReactGA.initialize("UA-186165133-1");
      window.GA_INIT = true;
    }
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname );
  });
}


function App() {
  usePageViews();

  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
