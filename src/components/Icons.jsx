// Ícones SVG inline (sem bibliotecas externas). stroke = currentColor.
const S = (props) => ({ width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', ...props })

export const IconWhats = (p) => (
  <svg {...S(p)} fill="currentColor" stroke="none"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
)
export const IconInstagram = (p) => (
  <svg {...S(p)}><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
)
export const IconMail = (p) => (<svg {...S(p)}><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 6 9-6"/></svg>)
export const IconCheck = (p) => (<svg {...S(p)}><path d="M20 6 9 17l-5-5"/></svg>)
export const IconArrow = (p) => (<svg {...S(p)}><path d="M5 12h14m-6-7 7 7-7 7"/></svg>)
export const IconPlus = (p) => (<svg {...S(p)}><path d="M12 5v14M5 12h14"/></svg>)
export const IconMenu = (p) => (<svg {...S(p)}><path d="M4 7h16M4 12h16M4 17h16"/></svg>)
export const IconClose = (p) => (<svg {...S(p)}><path d="M6 6l12 12M18 6 6 18"/></svg>)

export const IconScale = (p) => (<svg {...S(p)}><path d="M12 3v18M7 21h10"/><path d="M5 7h14l-3.5 7a3 3 0 0 1-7 0L5 7Z"/><circle cx="12" cy="5" r="1.5"/></svg>)
export const IconApple = (p) => (<svg {...S(p)}><path d="M9 7.2C7.2 6.2 4.8 7 4.2 9.4c-.6 2.6.4 6 2.4 8.4.9 1.1 1.9 1.9 3.2 1.9 1 0 1.6-.5 2.2-.5s1.2.5 2.2.5c1.3 0 2.3-.8 3.2-1.9 2-2.4 3-5.8 2.4-8.4C19.2 7 16.8 6.2 15 7.2c-1 .6-1.7 1.1-3 1.1s-2-.5-3-1.1Z"/><path d="M12 8.3c0-2 1.3-3.8 3.4-4"/></svg>)
export const IconGut = (p) => (<svg {...S(p)}><path d="M8 3v3a3 3 0 0 0 3 3 3 3 0 0 1 3 3 3 3 0 0 0 3 3v3"/><path d="M5 8a4 4 0 0 0 4 4 4 4 0 0 1 4 4 4 4 0 0 0 4 4"/></svg>)
export const IconHeart = (p) => (<svg {...S(p)}><path d="M12 20s-7-4.5-9.5-9C1 8 2.5 4.5 6 4.5c2 0 3 1 4 2.5 1-1.5 2-2.5 4-2.5 3.5 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20Z"/></svg>)
export const IconPulse = (p) => (<svg {...S(p)}><path d="M3 12h4l2.5-7 5 14L17 12h4"/></svg>)
export const IconLeaf = (p) => (<svg {...S(p)}><path d="M4 20c0-9 6-14 16-14 0 10-6 14-14 14"/><path d="M4 20c2-5 5-8 10-10"/></svg>)
export const IconFemale = (p) => (<svg {...S(p)}><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>)

export const IconMonitor = (p) => (<svg {...S(p)}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>)
export const IconPin = (p) => (<svg {...S(p)}><path d="M12 21s-6.5-5.5-6.5-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.5C18.5 15.5 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.4"/></svg>)
export const IconClock = (p) => (<svg {...S(p)}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>)
export const IconChat = (p) => (<svg {...S(p)}><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z"/></svg>)
export const IconClipboard = (p) => (<svg {...S(p)}><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h4"/></svg>)
export const IconShield = (p) => (<svg {...S(p)}><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>)
export const IconUser = (p) => (<svg {...S(p)}><circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>)
