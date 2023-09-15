import { useState, useEffect, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import TypingAnimation from "../components/TypingAnimation";
import Phone from "@/components/Phone";
import Mainfile from "@/components/Main";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <>
    <Phone/>

    </>
  )
}
