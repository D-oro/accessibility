import React from 'react';
import './Content.css';

function Helmetcomponent() {
  return (
    <div id="section-2" className="content-wrapper">
    <h1>Helmets</h1>
        <p>
        Helmets are perhaps the easiest accessibility trick out there!
        Just install the Helmet package with
        &nbsp;
        <b>npm install --save react-helmet</b>
        &nbsp; import it at the top of your page and wrap it around a &lt;title&gt; tag
        &nbsp;and add a header to your page to change the name of your browser tab for each page
        of your app.
        <br />
        <img src="helmet.png" alt="jsx code showing import Helmet from react-helmet and Helmet tag wrapped around title tag with the title of this page" />
        </p>
        <br />
    </div>
  );
}

export default Helmetcomponent;
