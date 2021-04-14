import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { checkoutSuccess } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, checkoutSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IY97xAhPfq2v3wEAo0I4egbTxTTBTwz7pVeoQNWKhQMZa1ETs7FgN8BXcCl6aKvjOBE8OknTJZ1d20JSwkrCwrI00ly1LC02X';
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
        checkoutSuccess();
      })
      .catch((error) => {
        console.log('Payment error ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure to use the provided credit card',
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      // image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkoutSuccess: () => dispatch(checkoutSuccess()),
});

export default connect(
  null,
  mapDispatchToProps,
)(StripeCheckoutButton);
