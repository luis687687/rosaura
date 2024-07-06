import { defVariable } from "../../../rosaura/rozaura/index.js"

export default props => {

    const [value, setValue] = defVariable();

    window.onresize = () => {

        setValue(window.innerWidth)
    }

    return value;
}