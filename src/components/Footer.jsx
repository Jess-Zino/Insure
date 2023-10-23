import logo from './images/logo.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import ig from './images/icon-instagram.svg'

const iterate = [
    {id:1,title:"Our company", arr:["How we work","Why Insure?","View plans","Reviews"]},
    {id:2,title: "Help me", arr:["FAQ","Terms of use","Privacy policy","Cookies"]},
    {id:3,title:" Contact", arr: ["Sales","Support","Live chat"]},
    {id:4,title:"Others", arr:["Careers","Press","Licenses"]},
]

const Footer = () => {
  return (
    <footer>
        <div className="media">
           <div className="logo">
                <img src={logo}/>
           </div>
           <div className="handles">
                <img src={facebook} />
                <img  src={twitter} />
                <img  src={pinterest} />
                <img  src={ig} />
           </div>
        </div>
        <div className='links'>
        {
            iterate.map((items)=>(
                <div key={items.id}>
            <h3 className='linkTitle'>{items.title}</h3>
            <ul>
                {items.arr.map((comp)=> <li key={comp}>{comp}</li>)}
            </ul>
        </div>
            ))
        }
        
        
        </div>
    </footer>
  )
}

export default Footer