import Image from "../image"
import Spacer from "../spacer"
import Text from "../text"

const ImageText = ({source="https://placehold.co/600x400/png", title='Art Piece', description="This is a description.", link=""}) => {
    return (
        <div>
            <div>
                <Image src={source} width="300" height="200"></Image>
            </div>
            <div>
                <Spacer height="12px"></Spacer>
                <Text underline={!!link} level={4} text={title}></Text>
                <Text level={"p"} text={description}></Text>
            </div>
        </div>
    )
}

export default ImageText