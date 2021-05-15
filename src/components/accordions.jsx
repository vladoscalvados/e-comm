import React, { useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import Questions from "../data/questions"
import './../App.css';
import AccordItem from './accordItem';


function Accordions() {

    const [questions, setQuestions] = useState(Questions)
    const [open, setOpen] = useState(false)

    console.log(questions);

    return (
        <div>
            {
                questions.map((q) => <AccordItem key={q.id} {...q} />)
            }

        </div>

    );
}

export default Accordions;