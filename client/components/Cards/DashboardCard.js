import { Heading } from '@chakra-ui/react';
import React from 'react'
import { IconContext } from "react-icons";
import {AiOutlineNumber, AiFillHeart, AiOutlineFieldTime, AiOutlineTag} from 'react-icons/ai'
import {IoIosStats} from 'react-icons/io'
import {BsFillPeopleFill} from 'react-icons/bs'
import {BiCommentDetail} from 'react-icons/bi'

export const DashboardCard = ({icon, title, value}) => {
  return (
    <div className='dashboardCardContainer'>
        <IconContext.Provider value={{ color: "#4318FF", size:"3em", className:"iconContainer" }}>
            { icon == "AiOutlineNumber" && <AiOutlineNumber />}
            { icon == "IoIosStats" && <IoIosStats />}
            { icon == "BsFillPeopleFill" && <BsFillPeopleFill />}
            { icon == "AiFillHeart" && <AiFillHeart />}
            { icon == "BiCommentDetail" && <BiCommentDetail />}
            { icon == "AiOutlineFieldTime" && <AiOutlineFieldTime />}
            { icon == "AiOutlineTag" && <AiOutlineTag />}
        </IconContext.Provider>
        <div style={{marginLeft:"1em", marginRight:"2em"}}>
            <p style={{color:"#A3AED0", fontSize:"1.2em"}}>{title}</p>
            <Heading size="lg">{value}</Heading>
        </div>
    </div>
  )
}
