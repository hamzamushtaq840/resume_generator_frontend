import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <div className=" w-100 bg-[#64c1ff]  pt-20px py-0 px-3 grid lg:grid-cols-3 gap-4 text-black pt-50">
        <div className="pt-20px">
          <h1 className="w-full text-3xl font-bold text-[#000000]">
            Resume Assisted
          </h1>
          <p className="py-4">Generate your Resume here</p>
          <p>And find a suitbale job for your self</p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-1">
          <div>
            <h6 className="font-medium text-black">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium  text-black">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium  text-black">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
