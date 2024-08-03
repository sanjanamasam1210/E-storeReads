import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - PrimeCart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our E-commerce website represents a pinnacle of modern design,
            boasting a minimalistic and clean aesthetic that enhances user
            experience. Specializing exclusively in electronic products, our
            platform serves as a hub where sellers can effortlessly create
            accounts and showcase their merchandise, while buyers enjoy a
            seamless shopping experience.
            <p className="text-justify mt-2">
              Equipped with essential features such as a shopping cart, dynamic
              price filters, and an array of functionalities, our website is
              meticulously crafted to cater to the diverse needs of both sellers
              and buyers, ensuring a streamlined and convenient online
              marketplace for electronic enthusiasts.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
