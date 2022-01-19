import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/shared/NavBar";
import Button from "../components/shared/Button";
import Hero from "../components/home/Hero";

export default function Home() {
    return (
        <>
            <Hero />
        </>
    );
}
