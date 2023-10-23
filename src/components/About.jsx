import fast from "./images/icon-snappy-process.svg";
import prices from "./images/icon-affordable-prices.svg"
import people from "./images/icon-people-first.svg"
import FindOutMore from "./FindOutMore";

const About = () => {
  const iterate = [
    {id:1,title:"Snappy Process", imgsrc:fast, body:"Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."},
    {id:2,title:"Affordable Prices", imgsrc:prices, body:"We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."},
    {id:3,title:"People First", imgsrc:people, body:"Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."}
  ]
  return (
    <main>
        <section className="about">
        <h1>We&apos;re different</h1>
        <div className="container" >
        { iterate.map((items)=>(
          <div className="feature" key={items.id}>
              <img src={items.imgsrc} alt='Logo' />
              <h3 className="title">{items.title}</h3>
                <p className="about-text">{items.body}</p>
            </div>
        ))
           
        }
            </div>
        </section>
        <FindOutMore/>
    </main>
  )
}

export default About