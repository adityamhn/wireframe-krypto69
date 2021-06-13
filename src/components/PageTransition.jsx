import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import teleport from '../audio/teleport.wav'


export default function PageTransition() {
    const { pathname } = useLocation();

    const playTeleport = () => {
        const audio = document.getElementById('teleport-audio')
        audio.play()
    }

    useEffect(() => {
        playTeleport()
    }, [pathname]);

    return (<audio preload="auto" id="teleport-audio">
        <source src={teleport}></source>
    </audio>);
}