'use client'
import React, { useState } from "react";
import ReactDiffViewer from 'react-diff-viewer-continued';

export default function Diff() {

    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [splitView, setSplitView] = useState(true);

    return (
        <div className="container mt-5 col-md-7 mb-5">
            <div className="row">
                <article>
                    <header className="mb-1">
                        <h1 className="fw-bolder mb-1">텍스트 비교</h1>
                        <div className="mb-4">2개의 텍스트 비교</div>
                    </header>
                    <div className="ml-1 mb-3">
                        <button className="btn-custom-dark-long mb-2" type="button" onClick={() => setSplitView(!splitView)}>모드 변경</button>
                    </div>
                    <div className="text-container">
                        <textarea className="left-text" onChange={e => setText1(e.target.value)}>{text1}</textarea>
                        <textarea className="right-text" onChange={e => setText2(e.target.value)}>{text2}</textarea>
                    </div>
                    <ReactDiffViewer oldValue={text1} newValue={text2} splitView={splitView} />
                </article>
            </div>
        </div>
    );
}