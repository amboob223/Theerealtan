// okay we make the stuff that will go in yhe vard and we will map through in the scroller and set it up in the card compioinent

import gh from "../images/geechie.jpg"
import kr from "../images/kreyol.jpg"
import ki from "../images/Krio.jpg"

import wf from "../images/wolof.jpg"
import yr from "../images/yoruba.jpg"
const cardData = [
    {
        name:"Krio",
        path:"/krio",
        img:ki,
        cname:"carditem",
        des:"this is the language of the people of sierra leone"

    },
    {
        name:"Gullah",
        path:"/gullah",
        img:gh,
        cname:"carditem",
        des:"this language of the Gullah people"
    },
    {
        name:"Kreyol",
        path:"/kreyol",
        img:kr,
        cname:"carditem",
        des:"this is the language of the haitian people"

    },
    {
        name:"Yoruba",
        path:"/yoruba",
        img:yr,
        cname:"carditem",
        des:"this is the language of the Yoruba People"
    },
    {
        name:"Wolof",
        path:"/wolof",
        img:wf,
        cname:"carditem",
        des:"this is the language of the wolof people"
    }
]

export default cardData;