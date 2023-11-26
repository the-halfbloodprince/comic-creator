import React, {MouseEventHandler, useState} from 'react'

type Props = {
    buttonOnClick: Function;
}

const Input = ({ buttonOnClick }: Props) => {
  
    const [inputText, setInputText] = useState('')

    const handleClick = () => {
        console.log('clicked')
        console.log('inputText', inputText)
        buttonOnClick(inputText)
    }
  
    return (
        <div>
            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
                className='text-black'
            />
            <button 
                onClick={handleClick}
            >
                Generate with AI
            </button>
        </div>
    )
}

export default Input