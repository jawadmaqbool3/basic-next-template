import Link from "next/link";
import React from "react";
import { BreadcrumsProps } from "@/app/datasets/breadcrums";

const Breadcrums: React.FC<BreadcrumsProps> = ({ links }) => {
  return (
    <>
      <div>
        <ol className="breadcrumb text-muted fs-6 fw-semibold mt-3">
          {links.map((link, index) => (
            <li className="breadcrumb-item pe-3 " key={index}>
              {link.link && typeof link.link == "string" ? (
                <Link href={link.link} className={`pe-3  text-dark`}>
                  {link.name}
                </Link>
              ) : (
                <span className={`pe-3  text-muted`}>{link.name}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Breadcrums;
