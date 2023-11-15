const themes: any = {
    default:{
        textColor: 'text-pinky',
        bgColor: 'bg-white',
        bgColorHard: 'bg-black',
        borderColor: 'border-pinky',
        inputBorder: 'border-black focus:border-pinky',
        inputTextColor: 'text-pinky',
        inputBgColor: 'bg-white',
        caret: 'caret-pinky ',
        bgCheckboxColor: 'bg-pinky',
        highlightedKey: '!border-pinky !bg-pink-300',
        borderKey: '[&>div]:border-pink-300 [&>div]:text-white',
        keyPressed: '!border-orange-900 !bg-orange-300',
        glyphExpositor: 'border-pinky hover:bg-pinky hover:text-white',
        glyphFilter: 'pink-filter',
        rangeStyle: 'bg-black accent-pinky',
        hamburguerStyle: 'bg-pinky'
    },
    dark:{
        textColor: 'text-white',
        bgColor: 'bg-black',
        bgColorHard: 'bg-black',
        borderColor: 'border-white',
        inputBorder: 'border-pinky focus:border-white',
        inputTextColor: 'text-pinky',
        inputBgColor: 'bg-black',
        caret: 'caret-white',
        bgCheckboxColor: 'bg-white',
        highlightedKey: '!border-white bg-pink-800 [&>div]:text-white',
        borderKey: '[&>div]:border-white [&>div]:text-black',
        keyPressed: '!border-orange-900 !bg-orange-300 [&>div]:text-white',
        glyphExpositor: 'border-white hover:bg-white hover:text-pinky',
        glyphFilter: 'white-filter',
        rangeStyle: 'bg-white accent-pinky',
        hamburguerStyle: 'bg-white'
    },
}

export default themes