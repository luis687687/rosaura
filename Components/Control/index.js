import BuildComponent from "../../modules/BuildComponent/index.js"

export default (props={}) => {
    const {setControl = null} = props
    return(
        BuildComponent(
            {
                type: "input",
                attributes: {
                    type: 'range',
                    class: "el"
                },
                events: {
                    change: _ => setControl(_.target.value)
                }
            }
        )
    )
}