import React, { FC } from 'react';
import Image from 'next/image'

type Props = {
    generated_image_src: string;
	generated_image_description: string;
}

const DataView: FC<Props> = ({
	generated_image_src,
    generated_image_description
}) => {
	
	return (
		<div>
            <Image 
                src={generated_image_src}
                alt={generated_image_description ? generated_image_description : "AI generated image"}
                width={512}
                height={512}
            />
		</div>
	);
};

export default DataView