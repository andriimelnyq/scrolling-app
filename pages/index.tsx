import React, { useRef } from "react";
import Head from "next/head";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

export default function Home() {
  const refAbout = useRef(null);
  const refTeam = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          refAbout={refAbout}
          refContact={refContact}
          refProjects={refProjects}
          refTeam={refTeam}
        />

        <About refAbout={refAbout} />

        <Team refTeam={refTeam} />

        <Projects refProjects={refProjects} />

        <Contact refContact={refContact} />
      </main>
    </>
  );
}
