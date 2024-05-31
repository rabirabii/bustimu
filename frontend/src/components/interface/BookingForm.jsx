import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import { Button } from "../ui/button";
import { formatPrice } from "@/utilities/priceUtils";
import React, { useEffect, useState } from "react";

const BookingForm = ({ user, itemPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [itemPrice]);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const PercentageFee = itemPrice * 0.11;
    const fixedFee = 2500;
    const total = itemPrice + PercentageFee + fixedFee;
    setTotalPrice(total);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(
      paymentIntent.client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.name,
            email: user.email,
            total_amount: totalPrice,
          },
        },
      }
    );

    if (result.error) {
      console.error(result.error.message);
      // Handle error here
    } else {
      // Payment succeeded, handle success here
      console.log("Payment succeeded:", result.paymentIntent);
    }
  };

  return (
    <Elements>
      <div className="grid grid-cols-1 gap-5 rounded-lg border border-slate-300 p-5">
        <span className="text-xl font-bold">Confirm your Details</span>
        <div className="grid grid-cols-2 gap-6">
          <label className="text-gray-700 text-sm font-bold flex-1">
            Your Name
            <input
              className="mt-1 border rounded-w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
              type="text"
              readOnly
              disabled
              value={user?.name}
            />
          </label>
          <label className="text-gray-700 text-sm font-bold flex-1">
            Email:
            <input
              className="mt-1 border rounded-w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal"
              type="text"
              readOnly
              disabled
              value={user?.email}
            />
          </label>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Your Price Summary</h2>
          <div className="bg-blue-50 p-4 rounded-md">
            <div className="font-semibold text-lg">
              Item Price: {formatPrice(itemPrice)}
            </div>
            <div className="font-semibold text-lg">
              Percentage Fee (11%): {formatPrice(itemPrice * 0.11)}
            </div>
            <div className="font-semibold text-lg">
              Fixed Fee ($2.50): {formatPrice(2500)}
            </div>
            <div className="font-semibold text-lg">
              Total Cost : {formatPrice(totalPrice)}
            </div>
            <div className="text-xs">Includes taxes and charges</div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold"> Payment Details </h3>
          <CardElement
            id="payment-element"
            className="border rounded-md p-2 text-sm"
          />
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSubmit}>Confirm Booking</Button>
        </div>
      </div>
    </Elements>
  );
};

export default BookingForm;
