import React, { useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

const MenuCard = (props) => {
    const [currentImage , setCurrentImage] = useState(0);
    const [isImageOpen,setIsImageOpen] = useState(false);
    const closeImageViewer = () => setIsImageOpen((prev) => !prev);
    const OpenImageViewer = () => setIsImageOpen(true);
    return(
        <>
            {
                isImageOpen && (
                    <div className="z-50">
                        <ImageViewer
                src={ props.image }
                currentIndex={ currentImage }
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
            />
                    </div>
                )
            }
            <div>
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-lg " onClick={OpenImageViewer}>
                    <img className="w-full h-full rounded-lg hover:scale-110 transform ease-in-out  duration-500" src={props.image}/>
                </div>
                <h3 className="text-md ">{props.title}</h3>
                <p className="text-sm font-light text-gray-500">{props.image.length} pages</p>
            </div>
       
        </>
    );
};

export default MenuCard;