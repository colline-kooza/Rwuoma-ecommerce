"use client";
import React from "react";
import toast from "react-hot-toast";
import {
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const ShareBlog = ({ productUrl }) => {
  const handleShareClick = (platform) => {
    console.log("btn clicked")
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          productUrl
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(productUrl)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          productUrl
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          productUrl
        )}`;
        break;
      default:
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(productUrl);
    toast.success("product URL copied to clipboard!");
  };

  return (
    <div className="flex items-center gap-4">
      <FaXTwitter
        onClick={() => handleShareClick("twitter")}
        style={{ cursor: "pointer" }}
        className="w-6 h-6  duration-300"
      />
      <FaWhatsapp
        onClick={() => handleShareClick("whatsapp")}
        style={{ cursor: "pointer" }}
        className="w-6 h-6 text-green-600 duration-300"
      />
      <FaLinkedin
        onClick={() => handleShareClick("linkedin")}
        style={{ cursor: "pointer" }}
        className="w-6 h-6 text-blue-600 duration-300"
      />
      <FaFacebook
        onClick={() => handleShareClick("facebook")}
        style={{ cursor: "pointer" }}
        className="w-6 h-6 text-blue-600 duration-300"
      />
      <MdContentCopy
        onClick={handleCopyClick}
        style={{ cursor: "pointer" }}
        className="w-6 h-6 duration-300"
      />
    </div>
  );
};

export default ShareBlog;