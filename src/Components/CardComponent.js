import React from 'react';
import {
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText 
  } from 'reactstrap';

export function CardComponent (props) {
    var playlist = props.playlist;

    if(typeof playlist == "undefined") return (<div>123</div>);
    var playlistcard = playlist.playlist;
    var cardlist = playlistcard.map((item) => {
        return(
        <ListGroupItem>
    <ListGroupItemHeading> <img width="100%" src={item.thumbnails.high.url} height="20%" alt="Card " />{item.title}</ListGroupItemHeading>
        <ListGroupItemText>
            {item.description}
        </ListGroupItemText>
      </ListGroupItem>
        )
    })

    return (
        <ListGroup>
            {cardlist}
        </ListGroup>
    ) ;
}