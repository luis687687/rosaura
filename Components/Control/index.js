import BuildComponent from "../../Rosaura/BuildComponent/index.js"

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
                    durationchange: _ => setControl(_.target.value)
                }
            }
        )
    )
}