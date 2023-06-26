import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import {AnimationMixer} from "three";
import * as THREE from "three"
export const ModelAuthForm = () => {
    const gltf = useLoader(
        GLTFLoader,
        "models/mainPage/scene.gltf"
    )
    const renderer = new THREE.WebGLRenderer();
    gltf.scene.scale.set(0.55, 0.55, 0.55)
    gltf.scene.position.set(0, -1.3, -.75)
    gltf.scene.traverse((object:any) => {
        object.castShadow = true;
        object.reciveShadow = true;
    })
    const mixer = new AnimationMixer(gltf.scene);
    const clip = gltf.animations[0]
    const action = mixer.clipAction(clip)

    const clock = new THREE.Clock();
    function animate() {
        if(mixer)
            mixer.update(clock.getDelta());
    }

    renderer.setAnimationLoop(animate);
    action.play()


    return <primitive object={gltf.scene}/>
}
export default ModelAuthForm
