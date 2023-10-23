import rightSquiggle from "./images/bg-pattern-how-we-work-desktop.svg"

const FindOutMore = () => {
  return (
    <section className="find">
    <div className="tag">
        <h2>Find out more <br/> about how we work</h2>
        <button>How we work</button>
        </div>
        <img src={rightSquiggle} className="howWe"/>
    </section>
  )
}

export default FindOutMore