import React from 'react'

const Loader = ({ className = "" }) => {
    return (
        <div class={`flex items-center justify-center space-x-2 ${className} mt-10 `}>
            <div class="w-3 h-3 bg-primary-dark rounded-full animate-bounce"></div>
            <div class="w-3 h-3 bg-primary-dark rounded-full animate-bounce [animation-delay:0.1s]"></div>
            <div class="w-3 h-3 bg-primary-dark rounded-full animate-bounce [animation-delay:0.2s]"></div>
        </div>
    )
}

export default Loader