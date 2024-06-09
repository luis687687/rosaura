export default (object) => { //object deve ser do tipo do defVariable
    //actualiza em todos os lugares em que ela for um valor da input
    const elements_ = document.querySelectorAll(".style-bind-"+object.props.index) 
    
    elements_?.forEach(
        element => {
            element.classList.forEach( clas => {
                clas = clas.replace("-bind", "")
               
                element.style[clas] = object.value
            })
        }
    )
}