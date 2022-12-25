import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./styles.js";
import "./travel.css";

const TravelGuide = () => {
  const classes = useStyles();

  return (
    <div class="grid-container">
      <div class="grid-item">
        <Card style={{ width: 500 }}>
          <CardMedia
            style={{ height: 700, margin: 10 }}
            image={
              "https://seyler.ekstat.com/img/max/800/J/JzNqyW9HYHQ8lGCE-636549828299692741.jpg"
            }
            title={"İzmir"}
          />
          <CardContent>
            <h2 class="title">
              2023 Yılında Mutlaka Gezmeniz Gereken İzmir Müzeleri! - Beyhan
              Karaca
            </h2>
            <p class="line"></p>
            <p class="text">
              Batı Anadolu'daki ilk müzelerden biri olan İzmir Arkeoloji Müzesi,
              bünyesinde barındırdığı eserleriyle bölgesel bir müze olma
              özelliğini taşımaktadır. Müzeye ...{" "}
              <a href="https://www.izmir.bel.tr/tr/muzeler/481/229">
                devamını oku
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
      <div class="grid-item">
        <Card style={{ width: 500 }}>
          <CardMedia
            style={{ height: 700, margin: 10 }}
            image={
              "https://havaalanitransferizmir.com/wp-content/uploads/2019/08/efes.jpg"
            }
            title={"İzmir"}
          />
          <CardContent>
            <h2 class="title">
              Efes Antik Kenti: Zamanda Yolculuk - Tolga Korkmaz
            </h2>
            <p class="line"></p>
            <p class="text">
              Deneyimlerimi aktarmak, gezi öncesi ve sonrası size yardımcı
              olacak bir rehber hazırlamak için kolları sıvadım. Efes Antik Kent
              Rehberiyle ...
              <a href="https://www.oggusto.com/skoda/efes-antik-kent-gezi-rehberi">
                devamını oku
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TravelGuide;
