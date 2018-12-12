import React, { Component } from "react";
import { API_HOST } from "../../config";
import { Form, Rating, TextArea, Popup } from "semantic-ui-react";
import axios from "axios";

class AddReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      rating: 0,
      isPopupOpen: false,
      popupMessage: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPopupOpen = this.onPopupOpen.bind(this);
  }

  handleSubmit() {
    axios({
      method: "post",
      url: `${API_HOST}api/reviews/${this.props.productId}`,
      data: { rate: this.state.rating, text: this.state.review },
      headers: { Authorization: `Token ${this.props.token}` }
    }).then(({ data }) =>
      data.success
        ? this.setState({
            isPopupOpen: true,
            popupMessage: "Thanks for your comment"
          })
        : this.setState({
            isPopupOpen: true,
            popupMessage: "Sorry, your comment wasnt't added :("
          })
    );
  }

  onPopupOpen() {
    console.log("ok");
    setTimeout(() => this.setState({
          isPopupOpen: false,
          popupMessage: ""
        }), 3500);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>Add comment</h2>
        <Rating
          icon="star"
          defaultRating={0}
          maxRating={5}
          onRate={(e, { rating }) => this.setState({ rating })}
        />
        <Form.Group>
          <TextArea
            label="Your comment"
            placeholder="Tell us about this product..."
            onChange={e => this.setState({ review: e.target.value })}
          />
          <Popup
            trigger={<Form.Button content="Submit" />}
            content={this.state.popupMessage}
            on="click"
            open={this.state.isPopupOpen}
            onOpen={this.onPopupOpen}
            position="top right"
            inverted
          />
        </Form.Group>
      </Form>
    );
  }
}

export default AddReviewForm;
