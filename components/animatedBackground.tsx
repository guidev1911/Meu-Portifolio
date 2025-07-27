"use client";

import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";

let initialized = false;

if (!initialized) {
  initialized = true;
  initParticlesEngine(async (engine: Engine) => {
    await loadSlim(engine);
  });
}

const options = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 50,
      density: { enable: true, area: 900 },
    },
    color: { value: "#66ccff" },  
    links: {
      enable: true,
      distance: 400,
      color: "#66ccff", 
      opacity: 0.1,
      width: 1.8,
    },
    size: {
      value: 3,
      random: { enable: true, minimumValue: 1 },
    },
    move: {
      enable: true,
      speed: 2.0,
      outModes: { default: "bounce" as const },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: ["grab", "repulse"] },
      resize: { enable: true },
    },
    modes: {
      attract: { distance: 150, duration: 0.4, factor: 5 },
    },
  },
  detectRetina: true,
};

export default function AnimatedBackground() {
  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0, 
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}
