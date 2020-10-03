import React, { useEffect, useContext } from "react";
import { NavigationContext } from "app/MainSection";

import Grid from "@material-ui/core/Grid";
import ImageCard from "components/ui-utils/ImageCard";
import image1 from "assets/images/offers.jpg";
import image2 from "assets/images/order.jpg";
import image3 from "assets/images/wood4.jpeg";
import image4 from "assets/images/users.jpg";
import image5 from "assets/images/wood5.jpeg";
import image6 from "assets/images/messages.jpg";
import image7 from "assets/images/partners.png";
import image8 from "assets/images/request.jpg";

const EventGallery = () => {
  let images = [image1, image2, image3, image4, image5, image6, image7, image8];

  const { setAction, setSection } = useContext(NavigationContext);
  useEffect(() => {
    setSection("Events");
    setAction("gallery");
  }, [setSection, setAction]);
  return (
    <div className="dashboard-grid">
      <h2 className="sectionTitle" style={{ marginLeft: 0 }}>
        Bambika Event
      </h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        spacing={2}
        align-items="stretch">
        {images.map((src, index) => {
          return (
            <Grid item xs={6} sm={6} md={3} key={`src${index}`}>
              <ImageCard src={src} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default React.memo(EventGallery);
