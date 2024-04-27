const priceCardData = [
  {
    subscriptionType: "FREE",
    price: "$0/month",
    features: [
      { benefit: "Single User", isTrue: true },
      { benefit: "50GB Storage", isTrue: true },
      { benefit: "Unlimited Public Projects", isTrue: true },
      { benefit: "Community Access", isTrue: true },
      { benefit: "Unlimited Private Projects", isTrue: false },
      { benefit: "Dedicated Phone Support", isTrue: false },
      { benefit: "Free Subdomain", isTrue: false },
      { benefit: "Monthly Status Reports", isTrue: false },
    ],
  },
  {
    subscriptionType: "PLUS",
    price: "$9/month",
    features: [
      { benefit: "5 Users", isTrue: true },
      { benefit: "50GB Storage", isTrue: true },
      { benefit: "Unlimited Public Projects", isTrue: true },
      { benefit: "Community Access", isTrue: true },
      { benefit: "Unlimited Private Projects", isTrue: true },
      { benefit: "Dedicated Phone Support", isTrue: true },
      { benefit: "Free Subdomain", isTrue: true },
      { benefit: "Monthly Status Reports", isTrue: false },
    ],
  },
  {
    subscriptionType: "PRO",
    price: "$49/month",
    features: [
      { benefit: "Unlimited Users", isTrue: true },
      { benefit: "150GB Storage", isTrue: true },
      { benefit: "Unlimited Public Projects", isTrue: true },
      { benefit: "Community Access", isTrue: true },
      { benefit: "Unlimited Private Projects", isTrue: true },
      { benefit: "Dedicated Phone Support", isTrue: true },
      { benefit: "Free Subdomain", isTrue: true },
      { benefit: "Monthly Status Reports", isTrue: true },
    ],
  },
];

function PriceCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, blue, lightskyblue)",
        margin: "10px",
      }}
    >
      {priceCardData.map((item) => (
        <div
          className="price-card"
          key={item.subscriptionType}
          style={{
            width: "300px",
            height: "500px",
            margin: "20px",
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <h5
            style={{
              color: "grey",
              textAlign: "center",
            }}
          >
            {item.subscriptionType}
          </h5>
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item.price}
          </h2>

          {item.features.map((feature) => (
            <p
              key={feature.benefit}
              style={{
                color: feature.isTrue ? "black" : "grey",
                fontWeight: "normal",
                paddingLeft: "25px",
              }}
            >
              {feature.isTrue && <i className="fa-solid fa-check"></i>}
              {!feature.isTrue && <i className="fa-solid fa-xmark"></i>}{" "}
              {feature.benefit}
            </p>
          ))}

          <button
            style={{
              color: "white",
              fontWeight: "bold",
              borderRadius: "50px",
              fontSize: "10px",
              letterSpacing: "1px",
              width: "90%",
              height: "30px",
              backgroundColor:
                item.subscriptionType === "PRO" ? "#007AFF" : "#4BA2FF",
            }}
          >
            BUTTON
          </button>
        </div>
      ))}
    </div>
  );
}

export default PriceCard;
