export default (object) => {
    //actualiza em todos os lugares em que ela for um valor da input
    const elements_input = document.querySelectorAll("."+config_rosaura_input_bind+object.props.index) 
    elements_input?.forEach(
        element => {
            element.value = object.value
        }
    )
}