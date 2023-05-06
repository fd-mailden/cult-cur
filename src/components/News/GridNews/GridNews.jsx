import React from "react";
import { ChoiceOfAdvertising } from "../../Advertising/ChoiceOfAdvertising/ChoiceOfAdvertising";
import { Grid } from "../../UI/Grid/Grid";
import { NewsItem } from "../NewsItem/NewsItem";
function GridNews({news}) {
  return (
    <Grid>
      {news.map((item, index) => {
        if (item.type != "advertising") {
          return <NewsItem key={index} news={item} />;
        } else {
          return (
            <ChoiceOfAdvertising key={index} componentName={item.component} />
          );
        }
      })}
    </Grid>
  );
}

export { GridNews };
