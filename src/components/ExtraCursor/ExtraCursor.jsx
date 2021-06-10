import React,{useRef,useEffect} from 'react'
import './ExtraCursor.scss'

const ExtraCursor = () => {

    // const { type } = useContext(CustomCursorContext);
    const cursorRef = useRef(null)
    const secondaryCursorRef = useRef(null)

    const positionRef = useRef({
        mouseX:0,
        mouseY:0,
        destinationX:0,
        destinationY:0,
        distanceX:0,
        distanceY:0,
        key:-1
    })

    useEffect(() => {
        document.addEventListener('mousemove',(event) => {
            const {clientX,clientY} = event;

            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientWidth / 2;

            positionRef.current.mouseX = mouseX - secondaryCursorRef.current.clientWidth / 2;
            positionRef.current.mouseY = mouseY - secondaryCursorRef.current.clientWidth / 2;

            cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;

        })

    },[])

    useEffect(() => {
        const followMouse = () => {

            positionRef.current.key = requestAnimationFrame(followMouse);

            const {mouseX,mouseY,destinationX,destinationY,distanceX,distanceY} = positionRef.current;

            if (!destinationX | !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

                if (Math.abs(positionRef.current.destinationX) + Math.abs(positionRef.current.destinationY) < 0.1) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }

            secondaryCursorRef.current.style.transform = `translate3d(${destinationX}px,${destinationY}px,0px)`
        }
        followMouse();

    },[])


    return (
        <div className={`cursor-wrapper`}>
        <div className="main-cursor " ref={cursorRef}>
          <div className="main-cursor-background"></div>
        </div>
        <div className="secondary-cursor" ref={secondaryCursorRef}>
          <div className="cursor-background"></div>
        </div>
      </div>
    )
}

export default ExtraCursor
