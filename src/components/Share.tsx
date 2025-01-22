"use client";
import * as React from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface ShareProps {
  product: {
    name: string;
    image: string;
    url: string;
  };
}

const ShareProduct: React.FC<ShareProps> = ({ product }) => {
  return (
    <div className="flex space-x-3">
      <FacebookShareButton url={product.url} title={`Check out this product: ${product.name}`} hashtag="#Ecommerce">
        <FaFacebook size={28} className="text-neutral-800 cursor-pointer" />
      </FacebookShareButton>

      <TwitterShareButton url={product.url} title={`Check out this product: ${product.name}`}>
        <FaTwitter size={28} className="text-neutral-800 cursor-pointer" />
      </TwitterShareButton>

      <WhatsappShareButton url={product.url} title={`Check out this product: ${product.name}`}>
        <FaWhatsapp size={28} className="text-neutral-800 cursor-pointer" />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareProduct;