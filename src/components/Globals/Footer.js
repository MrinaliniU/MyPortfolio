import React from "react";

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-white text-center text-capitalize">
            <h6>
              Designed and Developed By Mrinalini &copy;
              {new Date().getFullYear().toString()}
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
