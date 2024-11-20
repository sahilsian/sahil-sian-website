const Image = ({alt, src, width="100px", height="100px"}) => {
    return (
        <div>
            <img alt={alt} src={src} width={width} height={height}></img>
        </div>
    )
}

export default Image