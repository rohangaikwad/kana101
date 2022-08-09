const Icons = {
    check: {
        path: "m438.6 9.4c12.5 12.5 12.5 32.7 0 45.2l-256 256c-12.5 12.5-32.7 12.5-45.2 0l-128.028-128c-12.496-12.5-12.496-32.7 0-45.2 12.498-12.5 32.758-12.5 45.258 0l104.47 105.3 234.3-233.3c12.5-12.52 32.7-12.52 45.2 0h0z",
        width: 450,
        height: 320
    }
}

export default function Icon ({name}) {
    const {width,height,path} = Icons[name];
    return <svg viewBox={`0 0 ${width} ${height}`}>
        <path fill="black" d={path} />
    </svg>
}