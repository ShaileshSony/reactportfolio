import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const socialLinks = [
        {
            id: 1,
            child: (
                <>
                   LinkedIn <FaLinkedin size={30}/> 
                </>
            ),
            href: 'https://www.linkedin.com',
            style: 'rounded-tr-md'

        },
        {
            id: 2,
            child: (
                <>
                   GitHub <FaGithub size={30}/> 
                </>
            ),
            href: 'https://github.com/ShaileshSony',

        },
        {
            id: 3,
            child: (
                <>
                   Resume <BsFillPersonLinesFill size={30}/> 
                </>
            ),
            href: './Resume.docx',
            style: 'rounded-br-md',
            download: true,

        }
    ]

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
      {
        socialLinks.map(({id, child, href, style, download})=>{
            return(
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-cyan-400 ml-[-100px] hover:rounded duration-300 hover:ml-[-10px]" + " " + style}>
                    <a href={href} className="flex justify-between items-center w-full text-white" download={download}target="_blank"  rel="noreferrer">
                        {child}
                    </a>
                </li>
            )
        })
      }
        
      </ul>
    </div>
  );
};

export default SocialLinks;
