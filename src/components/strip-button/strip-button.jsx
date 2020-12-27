import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = (props) => {
    const priceForStripe = props.price * 1000;
    const publishableKey =
        "pk_test_51I2jOfGE2bhwpatSslNS6JQOZ2YwKEsONYsxN2visrCba3QzQJ03zgqS6hxCjDTHGCAbEV9x2dUd4q7NlrSm5YPQ00b4QGOgS1";

    console.log(props);

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };
    return (
        <StripeCheckout
            label="Pay now"
            name="Electronics Online" // the pop-in header title
            billingAddress
            shippingAddress
            description={`Your total is $${props.price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
