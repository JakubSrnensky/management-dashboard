import { useRef } from "react";

export default function WebCamStepFirst () {


    const videoRef = useRef(null);
            /*
            const getUserMedia = async () => {
                try {
                    
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: { width: 550, height: 450 },
                    });

                    videoRef.current.srcObject = stream;
                   
                } catch (err) {
                    //console.log(err);
                }
            };
            getUserMedia();
            */
    const photo = () => {
            //canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
           //let image_data_url = canvas.toDataURL('image/jpeg');
    }

    return (
        <div className="webCam-stepFirst">
            <video 
                ref={videoRef}
                autoPlay
            />
        </div>
    )
}