import React from "react";
import { Rating } from "react-simple-star-rating";
function Rate({ star }) {
  return (
    <div className="pointer-events-none">
      {star ? (
        <Rating
          initialValue={star.rate}
          SVGstyle={{ display: "inline-block", width: "20px" }}
          allowHover={false}
          allowFraction={true}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Rate;
