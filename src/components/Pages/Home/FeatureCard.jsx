import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function FeatureCard( props ) {

  function handleClick() {
    window.location.href=props.project.url;
  }

    return (
        <Card className="custom-card">
          <CardActionArea className={props.page==="home"? "card-action-area home":"card-action-area"} onClick={handleClick}>
              <CardMedia className='card-media'
                component="img"
                image={"assets/"+ props.project.imageUrl}
                alt={props.project.alt}
                loading='lazy'
              />
              <div className={props.page==="home"? "feature-title-home": "feature-title"}><p>{props.project.title}</p></div>
              <CardContent>
              <div className="card-content">
              <div className={props.page==="home"? "feature-content-home": ""}>
                <Typography gutterBottom variant="h5" component="div">
                  {props.project.title}
                </Typography>
                  <Typography gutterBottom variant="body3" color="primary" component="div">
                  <p>{props.project.languages}</p>
                  </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>{props.project.subTitle}</p>
                    </Typography>
                  </div>
                  
                </div>
              </CardContent>
          </CardActionArea>
      </Card>);
}

export default FeatureCard;