import React from "react";
import "./Recent.css";
import Card from "./Card";

function Recent() {
  return (
    <section>
      <div className="recent">
        <div className="recent__container">
          <div className="recent__heading">
            <h1>My Recent Work</h1>
          </div>
          <div className="recent__paragraph">
            <p>
              Here are a few design projects I've worked on recently. Want to
              see more? Email me.
            </p>
          </div>
          <div className="recent__card--component">
            <Card img="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <Card img="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80" />
            <Card img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80" />
            <Card img="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <Card img="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
            <Card img="https://images.unsplash.com/photo-1469114182292-14c05db80456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recent;
