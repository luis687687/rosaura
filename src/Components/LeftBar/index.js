import Rosaura, {BuildComponent, varPrint, useCss, useFile} from "../../../node_modules/rozaura/index.js"
export default (props = {}) => {


    return (
        BuildComponent({
            style: { 
                backgroundColor: "#F5F5FA",
                width: 'fit-content',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 40px 0 40px'
            },
            childElements: [
                BuildComponent({
                   
                    style: {
                        backgroundColor: 'white',
                        width: 'fit-content',
                        padding: '45px',
                        borderRadius: '8px',
                        boxShadow: '#dbdbdb 9px 5px 17px 0px',
                        userSelect: 'none',
                        transition: '5s',
                        boxSizing: "initial"
                        
                    },
                    attributes: {
                        class: 'card'
                    },
                    childElements: [ 
                        BuildComponent({
                            type: 'img',
                            attributes: {
                                src: useFile("public/logo.png")
                            }
                        }),
                    ],   
                }),
                BuildComponent({
                    type: 'span',
                    text: 'Rosaura js',
                    style: {
                         cursor: 'pointer',
                        fontSize: '26px',
                        marginTop: '30px',
                        fontWeight: '900'
                    }
                }),
    
                BuildComponent( {
                    type: 'span',
                    style: {
                        fontSize: '14px',
                        marginTop: '10px',
                        fontWeight: '600'
                    },
                    text: varPrint("Comece editando o arquivo das rotas em <span style='font-weight: 1000'>routes/index.js</span>")
                })
            ]
           })
    )
}