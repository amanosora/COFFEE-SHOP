import React from 'react';
import "./style.scss"

const Faq = () => {
    const data = [
        {
            question: 'How does the card work?',
            answer: 'This is the answer to "How does the card work?"'
        },
        {
            question: 'Where is the card available?',
            answer: 'This is the answer to "Where is the card available?"'
        },
        {
            question: 'What is the difference between plastic and virtual cards?',
            answer: 'This is the answer to "What is the difference between plastic and virtual cards?"'
        },
        {
            question: 'How many days will it take to issue my card?',
            answer: 'This is the answer to "How many days will it take to issue my card?"'
        },
        {
            question: 'Are there any fees?',
            answer: 'This is the answer to "Are there any fees?"'
        }
    ];
    return (
        <div id="faq" className="faq">
            <ul className="list-group list-group-flush">
                {data.map((item, index) => (
                    <li className="list-group-item py-4" key={index}>
                        <div
                            className="d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse"
                            href={`#collapse${index}`}
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            {item.question}
                            <div className="circle">
                            </div>
                        </div>
                        <div className="collapse mt-2" id={`collapse${index}`}>
                            <div className="p-3">
                                {item.answer}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Faq

