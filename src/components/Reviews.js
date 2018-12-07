import React from "react";
import { Item, Rating } from "semantic-ui-react";

function Reviews({ reviews }) {
  return (
    <Item.Group divided>
      {reviews.loading ? (
        <div>Loading...</div>
      ) : reviews.succeed ? (
        reviews.items.map(item => (
          <Item key={item.id}>
            <Item.Content>
              <Item.Header>{item.created_by.username}</Item.Header>
              <Item.Meta>
                <Rating
                  icon="star"
                  defaultRating={item.rate}
                  maxRating={5}
                  disabled
                />
              </Item.Meta>
              <Item.Description>{item.text}</Item.Description>
              <Item.Extra>
                {new Date(item.created_at).toLocaleDateString()}
              </Item.Extra>
            </Item.Content>
          </Item>
        ))
      ) : reviews.error ? (
        <div>Oops, something went wrong :(</div>
      ) : (
        <div />
      )}
    </Item.Group>
  );
}

export default Reviews;
