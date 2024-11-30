import React from "react";

function DashBordPage() {
  return (
    <div className="container" style={{ margin: 5 }}>
      <div className="d-flex gap-2">
        <div>
          <img src={"arrow"} alt={"arrow"} />
        </div>
        <h5>DashBord</h5>
      </div>
      <div className="row gap-3 flex-wrap">
        <div className="card  " style={{ width: "32%", height: "40vh" }}>
          <span>hii</span>
        </div>
        <div className="card " style={{ width: "32%", height: "40vh" }}>
          <span>hii</span>
        </div>
        <div className="card " style={{ width: "32%", height: "40vh" }}>
          <span>hii</span>
        </div>
        <div className="card  " style={{ width: "32%", height: "40vh" }}>
          <span>hii</span>
        </div>
        <div className="card " style={{ width: "32%", height: "40vh" }}>
          <span>hii</span>
        </div>
        <div className="card " style={{ width: "32%", height: "40vh" }}>
          <span>hii</span>
        </div>
      </div>
    </div>
  );
}

export default DashBordPage;
