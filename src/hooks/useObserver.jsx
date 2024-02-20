import { useEffect, useState } from "react"

const useObserver = ({parentId}) => {
    const [visibleElement, setVisibleElement] = useState("hero")
    useEffect(() => {
      if(!parentId) {
        console.log('parent is null')
        return
      }
      const parent = document.getElementById(parentId)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            setVisibleElement(entry.target )
          }
        })
      }, {threshold:0.3, root: null, rootMargin: '0px'});
  
      const children = Array.from(parent?.children || []);
      children.forEach(child=>observer.observe(child))
      return ()=>{
        children.forEach(child=>observer.unobserve(child))
      }
    },[parentId])
    return { visibleElement,setVisibleElement }
  }

export default useObserver