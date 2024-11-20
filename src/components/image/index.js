const Image = ({src, width="100px", height="100px"}) => {
    return (
        <div>
            <img src={src} width={width} height={height}></img>
        </div>
    )
}

export default Image