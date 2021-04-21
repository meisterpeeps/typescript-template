import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import 'sanitize.css';
import "./global.scss";
import {PageContainer} from './main.styled';


function Main() {

  const [pong, setPong] = useState<string>("")

  // PRODUCTION is a variable declared in global.d.ts and assigned in the webpack configs by the Define Plugin
  const greetingText = PRODUCTION ? 'Production' : 'Development';

  useEffect(() => {
    const ping = async () => {
        setPong("PING");
        const res = await fetch('/ping?ping=PONG')        
        if(res.ok) {
          console.log("Status ok: ", res.status)
          const body = await res.json() as {pong: string};
          setPong(body.pong);      
        }
        else {
          console.log("Bad Request:", res.status)
        }
      } 
    ping()
  }, [])

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Main</title>
      </Helmet>
      <div>Greetings from {greetingText}</div>
      <div>{pong}</div>
    </PageContainer>
  );
}
ReactDOM.render(<Main />, document.getElementById("Root"));
