
export default (object) => {
    const elements_area = document.querySelectorAll(".updatable-"+object.props.index) //actualiza em todos os lugares onde a variável é impressa
    elements_area.forEach(
        element => {
            element.textContent = object.value
        }
    )
}
