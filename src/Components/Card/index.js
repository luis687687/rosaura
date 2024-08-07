import Rosaura, { useCss } from "../../../rosaura/rozaura/index.js"
export default (props = {text}) => {

    const {text, path = ""} = props


    return(
        Rosaura.BuildComponent(
            {
                text: text,
                css: useCss("/Components/Card"),
                attributes: {
                    class: "card"
                },
                
                style: {
                    padding: '20px',
                    borderRadius: '8px',
                    fontSize: '30px',
                    width: 'fit-content',
                    boxShadow: '#1c715263 1px 0px 15px',
                    cursor: "pointer"
                },
                events: {
                    click: _=> {
                        document.querySelector(path.replace("/", ".")).click()
                    }
                },
                childElements: [
                    Rosaura.BuildComponent({
                        type: "a",
                        
                        attributes: {
                            href: path,
                            class: path.replace("/",""),
                        }
                    })
                ]
            }
        )
    )
}