import React from "react"
import SingleFaq from "./single-faq"

// faq items
const faq_items = [
  {
    id: "One",
    title: "What services does Legal Niti offer?",
    desc: "Legal Niti offers a range of services to assist with business compliance, including registrations, tax filings, bookkeeping, and other legal matters. Additionally, Legal Niti offers assistance with pitch preparation and funding.",
    show: true,
    parent: "accordionFaq",
  },
  {
    id: "Two",
    title: "How does Legal Niti's AI technology help with compliance?",
    desc: "Legal Niti's AI technology ensures reliable and accurate calculations, eliminating any chance of errors in bookkeeping or tax return preparation. This helps to streamline the compliance process and save time and money in the long run.",
    parent: "accordionFaq",
  },
  {
    id: "Three",
    title: "Who can benefit from Legal Niti's services?",
    desc: "Legal Niti's services are primarily aimed at startups and entrepreneurs who need help with compliance requirements, but any business can benefit from Legal Niti's services.",
    parent: "accordionFaq",
  },
  {
    id: "Four",
    title: "How much does Legal Niti's platform cost?",
    desc: "The cost of E-COPR's platform depends on the specific services that are needed. Legal Niti offers various pricing plans to fit different business needs and budgets.",
    parent: "accordionFaq",
  },
  {
    id: "Five",
    title: "Is Legal Niti's platform easy to use?",
    desc: "Yes, Legal Niti's platform is designed to be user-friendly and easy to navigate, even for those who are not familiar with compliance requirements.",
    parent: "accordionFaq",
  },
  {
    id: "Six",
    title: "What sets Legal Niti apart from other compliance platforms?",
    desc: "Legal Niti's AI technology provides reliable and accurate calculations, and the platform offers a range of services to assist with compliance requirements, as well as assistance with pitch preparation and funding. Additionally, Legal Niti's platform is designed to be user-friendly and easy to use.",
    parent: "accordionFaq",
  },
]

const FaqArea = ({ spacing, style_2 = false }) => {
  return (
    <section
      className={`faq-area ${style_2 ? "faq-style-two" : ""} ${
        spacing ? spacing : "section-py-80"
      }`}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="faq__wrapper"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <div className="accordion" id="accordionFaq">
                {faq_items.map(item => (
                  <SingleFaq key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea
