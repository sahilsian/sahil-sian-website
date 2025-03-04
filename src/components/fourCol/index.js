import ImageText from "../imageText"

const FourCol = ({arr, start=0, end=4}) => {
    return (
        <div className="flex flex-wrap gap-4">
            {arr.slice(start, end).map((item) => {
                return (
                    <div className="flex-1">
                    <ImageText source={item.image} title={item.name} description={item.description} alt={item.alt}></ImageText>
                    </div>
                )
            })}
        </div>
    )
}

export default FourCol