import React from 'react';
import * as ReactDOMClients from 'react-dom/client'
import Elements from "./Elements.js"
import "./css/style.css"

const parentNode = ReactDOMClients.createRoot(document.querySelector(".wrapper"))

parentNode.render(<Elements/>)

