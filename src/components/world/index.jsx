/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { SheetProvider, useCurrentSheet } from "@theatre/r3f"
import { useFrame } from '@react-three/fiber';
import React from 'react'
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { val } from "@theatre/core";
import { Batman } from "./Batman";
import state from './site.json';


const World = ({project}) => {
    
    const sheet = project.sheet('world',{
        state
    });


    return (
        <>
            <ScrollControls maxSpeed={40} damping={0.5} eps={0.0004} pages={8}>
                <Scroll html>
                    <div className="h-screen w-screen px-28 py-10 flex items-center">
                        <div className="w-1/3 mt-32">
                            <h3 className="text-zinc-200 text-3xl font-regular">1. BAT MAN </h3>
                            <p className="text-zinc-400 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure suscipit quaerat voluptatibus inventore tempora veritatis exercitationem. Provident, deleniti quibusdam!</p>
                        </div>
                    </div>
                    <div className="h-screen w-screen px-28 py-10 flex items-center">
                        
                    </div>
                    <div className="h-screen w-screen px-28 py-10 flex items-center">
                        
                    </div>
                    <div className="h-screen w-screen px-28 py-10 flex justify-end">
                        <div className="w-1/3 mt-12">
                            <h3 className="text-zinc-200 text-3xl font-regular">2. STARING </h3>
                            <p className="text-zinc-400 text-lg">Robert Pattinson</p>
                            <p className="text-zinc-400 text-lg">Zoë Kravitz</p>
                            <p className="text-zinc-400 text-lg">Paul Dano</p>
                        </div>
                    </div>
                    <div className="h-screen w-screen px-28 py-10 flex items-center">
                        <div className="w-1/3 mt-32">
                            <h3 className="text-zinc-200 text-3xl font-regular">3. GOTHAM CITY </h3>
                            <p className="text-zinc-400 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure suscipit quaerat voluptatibus inventore tempora veritatis exercitationem. Provident, deleniti quibusdam!</p>
                        </div>
                    </div>
                    <div className="h-[200vh] w-screen px-28 py-10 flex justify-center items-center">
                        <span className="text-8xl text-slate-300 text-center">--</span>
                        <p className="text-8xl text-slate-300 w-1/2 text-center">GET READY BEFORE THE DARK IS HERE</p>
                        <span className="text-8xl text-slate-300 text-center">--</span>
                    </div>
                    <div className="h-screen w-screen px-28 py-10 flex justify-center items-center">
                        <div className="w-2/5 flex flex-col items-center">
                            <p className="text-8xl text-center text-slate-300">IN CINEMAS</p>
                            <p className="w-full text-slate-400 text-xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate maxime nobis facere deleniti incidunt magni perspiciatis, dolorum quas distinctio!</p>
                            <span className='mt-10 p-2 px-5 rounded-lg bg-zinc-200 text-zinc-700 font-regular'>Get Ticket</span>
                        </div>
                    </div>
                </Scroll>
                <SheetProvider sheet={sheet}>
                    <Blocks/>
                </SheetProvider>
            </ScrollControls>
        </>
    )
}

export default World;

// eslint-disable-next-line react/display-name
const Blocks = React.memo(()=>{

    const scroll = useScroll();
    const sheet = useCurrentSheet();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
    });

    return(
        <>
            <Batman scale={7} position={[0, -18, 0]}/>
        </>
    )
})