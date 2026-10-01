import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useState, useEffect } from "react";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1074&auto=format&fit=crop";

  let [imgUrl, setImgUrl] = useState(INIT_URL);

  useEffect(() => {
    async function getPhotoUrl() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            info.weather + " weather",
          )}&per_page=30&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`,
        );
        const data = await response.json();
        const photo = data.results[6] || data.results[0];
        if (photo) setImgUrl(photo.urls.regular);
      } catch (err) {
        console.log("Error fetching photo", err);
      }
    }

    getPhotoUrl();
  }, [info.weather]);

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgUrl}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}>
                <div>Temperature = {info.temp}&deg;C</div>
                <div>Humidity = {info.humidity}</div>
                <div>Min Temp = {info.tempMin}&deg;C</div>
                <div>Max Temp = {info.tempMax}&deg;C</div>
                <div>
                  Weather can be described as{" "}
                  <b>
                    <i>{info.weather}</i>
                  </b>{" "}
                  and feels like {info.feelsLike}&deg;C
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
