import React from "react";
import "../style/rules.css";
import RulesList from "../content/rules.json";
import { List, ListItemText, ListItem } from "@material-ui/core";
import Terms from "../modules/containers/terms";
/* Rules page place holder - Currently one of the routes for testing */
class RulesPage extends React.Component {
  onSubmit = (data) => {
    console.log(data);
  };
  render() {
    const RuleDisplay = Object.keys(RulesList).map((rule) => {
      return (
        <ListItem divider={true}>
          <ListItemText style={{ color: "white", textAlign: "center" }}>
            {RulesList[rule].Rule}
          </ListItemText>
        </ListItem>
      );
    });

    return (
      <div className="rulePage">
        <div className="ruleContent">
          <Terms />
          <List>{RuleDisplay}</List>
        </div>
      </div>
    );
  }
}

export default RulesPage;
