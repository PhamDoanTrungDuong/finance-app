import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-3xl font-bold text-[#00df9a]">FINANCE.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          repellat minima saepe eum, aliquid maxime, unde nam ullam, neque
          explicabo architecto magni incidunt nulla beatae porro exercitationem
          voluptates non error.
        </p>
        <div className="flex md:justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="mr-4 cursor-pointer hover:text-[#00df90] duration-200" />
          <FaDribbbleSquare size={30} className="mr-4 cursor-pointer hover:text-[#00df90] duration-200" />
          <FaGithubSquare size={30} className="mr-4 cursor-pointer hover:text-[#00df90] duration-200" />
          <FaInstagram size={30} className="mr-4 cursor-pointer hover:text-[#00df90] duration-200" />
          <FaTwitterSquare size={30} className="mr-4 cursor-pointer hover:text-[#00df90] duration-200" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h2 className="font-medium text-gray-400 text-xl">Solution</h2>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Analytisc</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Marketing</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Commerce</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Insight</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400 text-xl">Support</h2>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Pricing</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Documentation</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Guides</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">API Status</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400 text-xl">Company</h2>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">About</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Blog</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Jobs</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Careers</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400 text-xl">Legal</h2>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Claim</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Policy</li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df90] duration-200">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
