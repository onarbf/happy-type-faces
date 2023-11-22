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
        highlightedKey: '!bg-pink-100 !text-pinky',
        borderKey: '[&>div]:border-pinky [&>div]:text-white',
        keyPressed: '!border-pinky !bg-pinky-300 !text-pinky',
        glyphExpositor: 'border-pinky hover:bg-pinky hover:text-white ',
        glyphFilter: 'pink-filter',
        rangeStyle: 'bg-black accent-pinky',
        hamburguerStyle: 'bg-pinky',
        shiftKey: 'white-filter',
        placeHolderColor: 'placeholder:text-pinky-300'
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
        highlightedKey: '!border-white bg-pinky-100 [&>div]:text-pinky',
        borderKey: '[&>div]:border-white [&>div]:text-black',
        keyPressed: '!border-pinky !bg-pinky [&>div]:text-white',
        glyphExpositor: 'border-white hover:bg-white hover:text-pinky',
        glyphFilter: 'white-filter',
        rangeStyle: 'bg-white accent-pinky',
        hamburguerStyle: 'bg-white',
        shiftKey: 'white-filter',
        placeHolderColor: ''
    },
}

export default themes