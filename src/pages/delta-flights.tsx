import type { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import FlightType from "../types/FlightType";
const Globe = dynamic(import('react-globe.gl'), { ssr: false });

const Flights: NextPage = () => {
  const [flights, setFlights] = useState<FlightType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('/api/delta-flights')
        .then((res) => res.json())
        .then((data:FlightType[]) => {
          setFlights(data);
        });
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Top Delta Flights</title>
        <meta name="description" content="Data on Delta's top flights." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Globe
        globeImageUrl={'/images/earth-night.jpeg'}
        
        arcsData={flights}
        arcLabel={(d:any) => `${d.start} &#8594; ${d.end}`}
        arcStartLat={(d:any) => d.startLat}
        arcStartLng={(d:any) => d.startLng}
        arcEndLat={(d:any) => d.endLat}
        arcEndLng={(d:any) => d.endLng}
        arcDashLength={0.5}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={3000}
        arcColor={(d:any) => [`rgba(0, 255, 0, 100)`, `rgba(255, 0, 0, 190)`]}
        arcsTransitionDuration={0}
      />
    </>
  );
};

export default Flights;
