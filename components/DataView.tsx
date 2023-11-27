import React, { FC, useRef } from 'react';
import Image from 'next/image'

type Props = {
    generated_image_src: string;
	generated_image_description: string;
}

const DataView: FC<Props> = ({
	generated_image_src,
    generated_image_description
}) => {
	const imageRef = useRef<HTMLImageElement>(null);

	return (
		<div>
            <Image 
                src={generated_image_src}
                alt={generated_image_description ? generated_image_description : "AI generated image"}
                width={512}
                height={512}
            />
			{/* <img
				ref={imageRef}
				id="generated-image"
				src={generated_image_src}
				alt=""
			/> */}
			{/* <Input buttonOnClick={fetchData} /> */}
		</div>
	);
};

export default DataView