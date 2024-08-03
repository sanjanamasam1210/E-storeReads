import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/pp.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Welcome to [Name]. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your data when you visit our E-commerce platform.</p>

<p><b>*Information We Collect*</b></p>

We may collect various types of information, including but not limited to:
<ol>
  <li>*Personal Information:* When you create an account or make a purchase, we may collect your name, email address, shipping address, and payment information.
  </li>
  <li>*Usage Data:* We gather information about how you interact with our website, including pages visited, products viewed, and your browsing behavior.
  </li>
</ol>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
