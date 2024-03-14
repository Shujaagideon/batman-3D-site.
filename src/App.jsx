import { Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment, Loader } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

import studio from '@theatre/studio';
import { getProject } from "@theatre/core";

import World from '@/components/world'

if (import.meta.env.DEV) {
  studio.initialize()
}

function App() {
  const project = getProject("New Game");

  return (
    <>
        <div className="absolute h-screen -z-10 w-screen flex justify-start items-start">
            <p className="text-[18rem] font-regular text-[#0d0d0d] opacity-90 mix-blend-luminosity stroke-slate-100">GOTHAM</p>
        </div>
        <div className="absolute h-screen -z-10 w-screen flex justify-end items-end">
            <p className="text-[20rem] font-regular text-[#0e0e0e] opacity-90 mix-blend-luminosity stroke-slate-100">CITY</p>
        </div>
        <div className='fixed h-screen w-screen p-3 px-10 flex justify-between flex-col'>
          <div className="flex w-full h-fit justify-between items-center">
              <span><img src="/logo.png" className='h-10 brightness-[800%]' alt="" /></span>
              <span className='p-2 px-5 rounded-lg bg-zinc-200 text-zinc-700 font-regular'>Get Ticket</span>
          </div>

          <div className="flex w-full h-fit justify-between items-center z-20">
              <span className='font-regular text-xs text-zinc-300'>13/08/2025</span>
              <div className='p-2 px-4 rounded-3xl bg-slate-100 bg-opacity-50 w-[180px] flex items-center justify-between'>
                  <img src="play.svg" className='h-8' alt="" />
                <p className='text-slate-200 font-regular'>watch trailer</p>
              </div>
              <span className='p-2 px-5 rounded-lg text-xs text-zinc-200 font-regular'>Get Ticket</span>
          </div>
          
        </div>
        <Loader />
        <Canvas>
          <World project={project}/>
          <Sparkles count={50} size={15} speed={0.3} opacity={0.1} scale={15} color="#545454"
            />
          <Suspense fallback={null}>
              <Environment preset="studio" blur={0}/>
          </Suspense>
          <EffectComposer>
              <Noise opacity={0.8}  premultiply blendFunction={BlendFunction.HARD_LIGHT}/>
          </EffectComposer>
        </Canvas>
        <div className="absolute h-screen z-10 w-screen top-5 left-0 pointer-events-none flex justify-start items-start">
            <p className="text-[18rem] font-regular strokeText">GOTHAM</p>
        </div>
        <div className="absolute h-screen z-10 top-5 left-0 w-screen pointer-events-none flex justify-end items-end">
            <p className="text-[20rem] font-regular strokeText">CITY</p>
        </div>
    </>
  )
}

export default App
