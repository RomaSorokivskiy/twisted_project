import LoginForm from "../components/loginForm.tsx";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import ModelAuthForm from "../components/auth3DComponents/modelAuthForm.tsx";


import "../stylesheets/authPage.scss"
const AuthPage = () => {
    const [authType, setAuthType] = useState<boolean>(false)
    if(!authType) {
        return(
            <div className="auth">
                <Suspense>
                    <Canvas shadows style={{height:500}} className="model_canvas">
                        <ambientLight intensity={0.5} />
                        <spotLight intensity={0.6} position={[4, 4, 4]} angle={0.5} penumbra={1} />
                        <PerspectiveCamera makeDefault position={[-0.15,-0.6,3.5]}/>
                        <ModelAuthForm/>
                    </Canvas>
                    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <LoginForm/>
                        <button onClick={e => {
                            e.preventDefault()
                            setAuthType(!authType)
                        }}
                                className="auth__button"
                        >Реєстрація</button>
                    </div>
                </Suspense>
            </div>
        )
    }else {
        return(
            <div className="auth">
                {/*TODO 3D model*/}
                {/*TODO REGISTER FORM*/}
                <button onClick={e => {
                    e.preventDefault()
                    setAuthType(!authType)
                }}>Авторизація</button>
            </div>
        )
    }
}
export default AuthPage;
