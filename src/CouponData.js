const CouponData = {
  1: {
    couponName: "Starbucks",
    couponAmount: "$5.00",
    couponImage: require('./images/starbucks.png'),
    barcodeImage: require('./images/Barcode.png'), 
    backgroundColor: "green", // Example background color
    expiryDate: "2024-12-31",
  },
  2: {
    couponName: "Amazon",
    couponAmount: "$10.00",
    couponImage: require('./images/amazon.png'),
    barcodeImage: require('./images/Barcode.png'),
    backgroundColor: "#FF9900",
    expiryDate: "2024-11-30",
  },
  3: {
    couponName: "Tim Hortons",
    couponAmount: "$3.00",
    couponImage: require('./images/timhortons.png'),
    barcodeImage: require('./images/Barcode.png'),
    backgroundColor: "red",
    expiryDate: "2024-10-31",
  },
};

export default CouponData;
