<>
   <Canvas>
      <World project={project}/>
      <Suspense fallback={null}>
         <Environment preset="studio" blur={0}/>
      </Suspense>
      <Sparkles count={50} 
         size={15} speed={0.3} scale={15} 
         color="#545454"  opacity={0.1} 
      />
      <EffectComposer>
        <Noise opacity={0.8} premultiply 
           blendFunction={BlendFunction.HARD_LIGHT}/>    
      </EffectComposer>
    </Canvas>
</>


import { editable as e } from "@theatre/r3f"

export function Batman(props) {
  ...
  
  useEffect(()=>{
    actions.stand.setEffectiveTimeScale(0.4)
    actions.stand.reset().fadeIn(0.5).play()
  },[])

  return (
    <e.group ref={group} theatreKey='batman' {...props} dispose={null}>
      ...
    </e.group>
  ) 
}