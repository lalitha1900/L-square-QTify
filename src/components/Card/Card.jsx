import React from "react";
import Styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";
import Stack from '@mui/material/Stack';

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        console.log(image, follows, title, songs,data ,"songs")

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow >
            <div className={Styles.wrapper}>
              <div className={Styles.card}>
                <img className={Styles.cardImg} src={image} alt="album"/>
                <div className={Styles.banner}>
                <Stack direction="row" spacing={1}>
                  <Chip
                    className={Styles.chip}
                    label={`${follows} Follows`}
                    
                    size="small"
                  />
                   </Stack>
                </div>
              </div>
              <div className={Styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };
  console.log(data,type);
  return getCard(type);
};

export default Card;
