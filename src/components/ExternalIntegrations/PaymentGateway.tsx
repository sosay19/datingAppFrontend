// PaymentGateway.tsx

import React, { useState } from 'react';

const PaymentGateway: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [paymentStatus, setPaymentStatus] = useState<string>('');

  const handlePayment = async () => {
    // Simulate payment processing (replace with actual payment gateway integration)
    try {
      // Replace this with your actual payment gateway integration code.
      // For example, with Stripe, you'd use the Stripe API to create a payment intent.
      // You should handle the payment token and response from the payment gateway.
      const paymentResponse = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: paymentAmount * 100 }), // Convert to cents if your payment gateway requires it
      });

      if (paymentResponse.ok) {
        setPaymentStatus('Payment successful!');
      } else {
        setPaymentStatus('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('Payment error. Please try again later.');
    }
  };

  return (
    <div className="payment-gateway">
      <h2>Payment Gateway</h2>
      <div className="payment-form">
        <input
          type="number"
          placeholder="Enter payment amount"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(Number(e.target.value))}
        />
        <button onClick={handlePayment}>Make Payment</button>
      </div>
      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </div>
  );
};

export default PaymentGateway;
