import React from "react";
import ReactDOMServer from "react-dom/server";
import { Helmet } from "react-helmet";

// import our main App component
import App from "../../src/pages/index";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    // render the app as a string
    const html = ReactDOMServer.renderToString(<App />);
    const helmet = Helmet.renderStatic();
    console.log(helmet.title.toComponent());
    htmlData = htmlData.replace(
      "<title>$OG_TITLE</title>",
      helmet.title.toString()
    );
    htmlData = htmlData.replace(
      '<meta data-react-helmet="true"/>',
      helmet.meta.toString()
    );
    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
