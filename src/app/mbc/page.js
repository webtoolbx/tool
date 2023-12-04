'use client'
import React, { useState } from "react";

export default function Mbc() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [func, setFunc] = useState("func1");

    const changeInput = e => {
        setInput(e.target.value);
    }

    const changeOutput = e => {
        setOutput(e.target.value);
    }

    const convert = () => {
        if(func === 'func1'){
            setOutput(input.replaceAll('#{',':').replaceAll('}',''));
        } else {
            setOutput(input.replaceAll(/:\w+/gi,'#{$&}').replaceAll(':',''));
        }
    }

    const changeFunc = e => {
        setFunc(e.target.id);
    }

    return(
        <>
            <div className="container mt-5 col-md-7 mb-5">
                <div className="row">
                    <article>
                        <header className="mb-1">
                            <h1 className="fw-bolder mb-1">Mybatis/Colon</h1>
                            <div className="mb-5">Mybatis 변수 Binding 에서 Colon 으로 변경</div>
                            <div className="radio">
                                <input type="radio" id="func1" name="mbRadio" checked={func === 'func1'} onChange={changeFunc}></input><label htmlFor="func1">Colon 으로 변경</label>
                                <input type="radio" id="func2" name="mbRadio" checked={func === 'func2'} onChange={changeFunc}></input><label htmlFor="func2">MyBatis 로 변경</label>
                            </div>
                        </header>
                        <div className="mb-2">
                            <textarea className="form-control-xlg" value={input} onChange={changeInput}></textarea>
                        </div>
                        <div className="ml-1 mb-1">
                            <button className="btn-custom-dark mb-2" type="button" onClick={convert}>변경</button>
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control-xlg" value={output} onChange={changeOutput}></textarea>
                        </div>
                    </article>
                </div>
            </div>
        </>

    )
}