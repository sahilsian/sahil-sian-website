import { useContext } from "react";
import { Context } from "../../lib/context_provider";

const Text = ({level, text, color, align}) => {
    const { theme } = useContext(Context);
    const TextMap = {
        "1": "font-semibold text-[2rem] mb-2",
        "2": "font-semibold text-[1.7rem] mb-2",
        "3": "font-semibold text-[1.5rem] mb-2",
        "4": "font-medium text-[1.3rem]",
        "p": "text-[1rem] mb-2"
    }

    const AlignMap = {
        "center": "text-center",
        "left": "text-left",
        "right": "text-right"
    }

    return (
        <div style={{color: theme.text}} className={`${ TextMap[level]} ${AlignMap[align]}`}>{text}</div>
    )
}

export default Text