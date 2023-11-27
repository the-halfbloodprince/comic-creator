import GenerateWithAIIcon from '@/icons/GenerateWithAI';
import RegenerateIcon from '@/icons/RegenerateIcon';
import React, {FC, MouseEventHandler, useState} from 'react'

type Props = {
    buttonOnClick: Function;
    requestState: number;
}

const Input: FC<Props> = ({ buttonOnClick, requestState }) => {
  
    const [inputText, setInputText] = useState('')

    const handleClick = () => {
        console.log('clicked')
        console.log('inputText', inputText)
        buttonOnClick(inputText)
    }
  
    return (
        <div
            className='
                flex flex-col
                items-center
                justify-center
                gap-10
                w-full
            '
        >
            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') buttonOnClick(inputText)
                }}
                className='
                    text-black
                    w-5/6
                    px-3 py-2
                    outline-none
                    border-2 rounded-xl
                '
            />
            <div
                className='flex gap-6 w-5/6 flex-wrap justify-center'
            >
                <button 
                    title="Generate with AI"
                    onClick={handleClick}
                >
                    <div className='flex items-center text-xl gap-4 font-bold text-white'>
                        <GenerateWithAIIcon 
                            // color='#B5FF00' 
                            color='#42FF00' 
                        /> 
                        <p>Generate</p>
                    </div>
                </button>
                
                <button 
                    onClick={handleClick}
                    className={`${(requestState === 1 || requestState === 3) ? 'block' : 'block'}`}
                >
                    <div className='flex items-center text-xl gap-4 font-bold text-white'>
                        <RegenerateIcon
                            color='#B5FF00'
                        />
                        <p>
                            Regenerate
                        </p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Input