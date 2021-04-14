import React from 'react';
import {usePageView, useJitsu} from "./useJitsu";
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let jitsuOpts = {
  key: "js.u6j86j36xlgpe9mtgzq99h.dagluu2864l4dwgn5iztv8",
  tracking_host: "https://t.jitsu.com"
};


function App() {
  const { jitsu } = useJitsu(jitsuOpts);
  usePageView(jitsu);

  return <>
    <h1>Jitsu & React Demo</h1>
    <Switch>
      <Route path="/" exact>
        <p>
          Main page. Go to <Link to="/page">/page</Link>
        </p>
      </Route>
      <Route path="/page" exact>
        <p>
          /page: Go to <Link to="/">home page</Link>
        </p>
      </Route>
    </Switch>
  </>
}

export default App;
