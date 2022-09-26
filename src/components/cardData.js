// okay we make the stuff that will go in yhe vard and we will map through in the scroller and set it up in the card compioinent

import gh from "../images/geechie.jpg"
import kr from "../images/kreyol.jpg"
import ki from "../images/Krio.jpg"
import ti from "../images/twi.jpg"
import wf from "../images/wolof.jpg"

const cardData = [
    {
        name:"Geechie",
        path:"/geechie",
        img:gh,
        cname:"carditem",
        des:"this is a description of the Geechie language"
    },
    {
        name:"Kreyol",
        path:"/kreyol",
        img:kr,
        cname:"carditem",
        des:"this is the language of the haitian people"

    },
    {
        name:"Krio",
        path:"/krio",
        img:ki,
        cname:"carditem",
        des:"this is the language of the people of sierra leone"

    },
    {
        name:"Twi",
        path:"/twi",
        img:ti,
        cname:"carditem",
        des:"this is the language of the Ashanti People"
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