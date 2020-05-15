import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_qbiFfoMpc3x9LCIBCyUPbZym009GqVQsAk';

  const onToken = (token) => {
    alert('Success! Thank you for shopping with us!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Stuff & Things LLC'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
