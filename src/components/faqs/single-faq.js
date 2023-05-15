import React, { useEffect, useState } from "react"
import "./faq.css"
const SingleFaq = ({ item }) => {
  const { title, desc, id, parent, desc_2 } = item || {}
  const [scrollPos, setScrollPos] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [show, setShow] = useState(false) // Set the initial state to false for the accordion to remain closed

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setIsScrolling(currentScrollPos > scrollPos)
      setScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPos])

  useEffect(() => {
    const handleAccordionClose = () => {
      // Close the accordion by updating the 'show' state to false
      setShow(false)
      // You can implement your own logic here to close the accordion
      // For example, you can set 'show' to false or update your state management system accordingly
    }

    const ACCORDION_HEIGHT = 300 // Adjust this value based on your needs

    if (isScrolling) {
      // Close the accordion when scrolling down and the bottom of the accordion is outside the viewport
      const accordionElement = document.getElementById(`collapse${id}`)
      if (accordionElement) {
        const accordionRect = accordionElement.getBoundingClientRect()
        const accordionBottom = accordionRect.bottom

        const isBelowViewport =
          accordionBottom > window.innerHeight + ACCORDION_HEIGHT

        if (isBelowViewport) {
          handleAccordionClose()
        }
      }
    } else {
      // Close the accordion when scrolling up and the top of the accordion is outside the viewport
      const accordionElement = document.getElementById(`collapse${id}`)
      if (accordionElement) {
        const accordionRect = accordionElement.getBoundingClientRect()
        const accordionTop = accordionRect.top

        const isAboveViewport = accordionTop < -ACCORDION_HEIGHT

        if (isAboveViewport) {
          handleAccordionClose()
        }
      }
    }
  }, [isScrolling, id])

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${show ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={show ? "true" : "false"}
          aria-controls={`collapse${id}`}
          onClick={() => setShow(!show)} // Toggle the 'show' state on button click
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${show ? "show" : ""}`}
        aria-labelledby={`heading${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          <p>{desc}</p>
          {desc && <p>{desc_2}</p>}
        </div>
      </div>
    </div>
  )
}

export default SingleFaq
