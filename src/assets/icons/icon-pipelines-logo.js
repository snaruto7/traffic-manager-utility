import React from "react"

export default() => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="32px" height="32px">
        <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96">
            <path d="M14 64.416l4.83-5.165 6.002 6.002-4.88 4.88 5.914 5.915 4.88-4.88 6.043 6.043L32 82l14 14h22a4 4 0 004-4V60.023l20.442-13.648A7.999 7.999 0 0096 39.722V4a4 4 0 00-4-4H56.278a8 8 0 00-6.653 3.558L35.977 24H4a4 4 0 00-4 4v22l14 14.416zM8 88V72H0v24h24v-8H8z" fill="#fff"/>
        </mask>
        <g mask="url(#a)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 72h8v16h16v8H0V72z" fill="#91B0F2"/>
            <path d="M0 28v22l14 14.416L20 58l18 18-6 6 14 14h22a4 4 0 004-4V60L36 24H4a4 4 0 00-4 4z" fill="#0F46BD"/>
            <g filter="url(#filter0_f)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 55.421L52 0h44v44L40.579 81 15 55.421z" fill="#062AA9"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.32 57.742a4 4 0 01-.498-5.05L49.625 3.558A8 8 0 0156.278 0H92a4 4 0 014 4v35.722a8 8 0 01-3.558 6.654L43.308 79.178a4 4 0 01-5.05-.498L17.32 57.742z" fill="#2560E0"/>
            <g filter="url(#filter1_f)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.952 70.134l30.54-30.54 5.914 5.914-30.54 30.54-5.914-5.914z" fill="#0A44C2"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.952 70.134l30.54-30.54 5.914 5.914-30.54 30.54-5.914-5.914z" fill="#729AF2"/>
            <path d="M30.746 71.167l-5.914-5.914 25.66-25.66 5.914 5.915-25.66 25.659z" fill="#4C80F0"/>
            <g filter="url(#filter2_f)">
                <path d="M70 38c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12z" fill="#0A44C2"/>
            </g>
            <path d="M70 38c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12z" fill="#91B0F2"/>
            <g opacity=".2">
                <path d="M14 64.416l4.83-5.165 6.002 6.002-4.88 4.88 5.914 5.915 4.88-4.88 6.043 6.043L32 82l14 14h22a4 4 0 004-4V60.023l20.442-13.648A7.999 7.999 0 0096 39.722V4a4 4 0 00-4-4H56.278a8 8 0 00-6.653 3.558L35.977 24H4a4 4 0 00-4 4v22l14 14.416z" fill="url(#paint0_linear)"/>
                <path d="M8 88V72H0v24h24v-8H8z" fill="url(#paint1_linear)"/>
            </g>
        </g>
        <defs>
            <filter id="filter0_f" x="7" y="-8" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter1_f" x="6.295" y="25.936" width="63.768" height="63.768" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter2_f" x="50" y="6" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient id="paint0_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 48 48) scale(95.9999)">
                <stop stop-color="#fff"/>
                <stop offset="1" stop-color="#fff" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 48 48) scale(95.9999)">
                <stop stop-color="#fff"/>
                <stop offset="1" stop-color="#fff" stop-opacity="0"/>
            </linearGradient>
        </defs>
    </svg>
);