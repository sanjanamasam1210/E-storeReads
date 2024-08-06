import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - E-StoreReads"}>
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
          The Digital Bookstore is a comprehensive online platform designed to meet the needs of book enthusiasts. Our bookstore offers a vast collection of books across various genres, catering to both physical delivery and digital eBook formats. Users can seamlessly browse through categories, utilize advanced filters to find their desired books, and enjoy a streamlined shopping experience. The platform is equipped with a secure payment gateway that ensures safe and reliable transactions, providing users with the convenience of having books delivered to their doorstep or instantly downloading eBooks.

            <p className="text-justify mt-2">
              
In addition to its user-friendly interface, the Digital Bookstore includes features like order tracking, a customer dashboard for managing purchases, and an admin dashboard for managing inventory and orders.  Whether you're a casual reader or a bibliophile, the Digital Bookstore aims to offer a seamless and enjoyable shopping experience.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
