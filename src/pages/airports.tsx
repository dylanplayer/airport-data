import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import AirportType from "../types/AirportType";
const Globe = dynamic(import('react-globe.gl'), { ssr: false });

const Airports: NextPage = () => {
  const [airports, setAirports] = useState<AirportType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('/api/airports')
        .then((res) => res.json())
        .then((data:AirportType[]) => {
          setAirports(data);
        });
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Airports</title>
        <meta name="description" content="Airport Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Globe
        globeImageUrl={'/images/earth-blue-marble.jpeg'}
        labelsData={airports}
        labelLat={(d:any) => d.lat}
        labelLng={(d:any) => d.lng}
        labelText={(d:any) => d.name}
        labelSize={(d:any) => d.size}
        labelDotRadius={(d:any) => d.size}
        labelColor={(d:any) => d.color}
        onLabelClick={(d:any) => open(d.link)}
        labelResolution={3}
      />
    </>
  );
};

export default Airports;
