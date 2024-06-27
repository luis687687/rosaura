import {BuildComponent} from "../../../node_modules/rozaura/index.js"
export default (props = {text}) => {
    const {text} = props

    return(
        BuildComponent({
            type: 'span',
            text,
            style: {
                fontSize: '30px',
                fontWeight: '1000'
            },
            ...props
        })
    )
}