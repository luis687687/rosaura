import {BuildComponent} from '../../../node_modules/rozaura/index.js';
import Card from '../../Components/Card/index.js';


export default (props = {Child : null}) => {



    return(
        BuildComponent({
            style: {
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                gap: '20px',
                height: 'fit-content'
            },
            childElements: [
                props?.Child,
                BuildComponent({
                    text: "Rosaura Framework",
                    type: 'span',
                    style: {
                        fontSize: '50px',
                        fontWeight: "1000"
                    }
                    
                }),
                BuildComponent({
                    style: {
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: 'row',
                        gap: '20px'
                    },

                    childElements: [
                        Card({text: "😎", path: "/page1"}),
                        Card({text: "🌓", path: "/page2"})
                    ]
                })
            ]
        })
    )
}