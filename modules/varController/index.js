let lasvalue = [];
export default (element=Node, event = function(){}, vars = []) => {

    setInterval(
        _ => {
           
            if(vars[0].value == lasvalue[0])
                return
            event(vars[0])
            lasvalue[0] = vars[0].value
            if(!element)
                return
        
        const father = element.parentNode
       
        father?.replaceChild(element, element)
      
        }, 1000
    )
    return element;
    
}