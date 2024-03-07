'use client'
import React, { useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

export default function Diff() {

    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [input3, setInput3] = useState();
    const [input4, setInput4] = useState();
    const [input5, setInput5] = useState();
    const [mode, setMode] = useState(1);

    const [result1, setResult1] = useState();
    const [result2, setResult2] = useState();
    const [result3, setResult3] = useState();

    function calculate(){
        let temp1 = input1/2/input3*100;
        setResult1(temp1.toFixed(3) + '%');
        let temp2 = 0;
        if(mode === 1){
            //1. 청약 금액 / (경쟁률 * 공모가 )
            temp2 = input5 / (input2 * input4);
        }else if(mode === 2){
            //2. 청약 금액 / (신청 수량 / 당사 배정수량 * 공모가)
            temp2 = input5 / (input2 / input1 * input4);
        }
        setResult2(temp2.toLocaleString('ko-KR', 3) + '개');
        let temp3 = 0;
        if(mode === 1){
            //1. 경쟁률 * 공모가
            temp3 = input2 * input4;
        }else if(mode === 2){
            //2. 신청 수량 / 당사 배정수량 * 공모가
            temp3 = input2 / input1 * input4;
        }
        setResult3(temp3.toLocaleString('ko-KR', 0) + '원');
    }

    return (
        <div className="container mt-5 col-md-7 mb-5">
            <div className="row">
                <article>
                    <header className="mb-1">
                        <h1 className="fw-bolder mb-1">공모주 계산기</h1>
                        <div className="mb-4">균등, 비례 경쟁률 및 비례 배정에 필요한 금액을 계산합니다.<br/>
                                              조건: 균등, 비례 배정 각 50%, 증거금 50%</div>
                    </header>
                    <div className="text-container">
                        <Table hideHeader className="public-stock">
                            <TableHeader>
                                <TableColumn width={100}></TableColumn>
                                <TableColumn width={200}></TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>당사 배정 수량</TableCell>
                                    <TableCell><input type="number" value={input1} onChange={e => setInput1(e.target.value)} style={{width:130}}></input></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <select value={mode} onChange={e => setMode(e.target.value)}>
                                            <option value={1}>당사 경쟁률</option>
                                            <option value={2}>당사 청약 신청 수량</option>
                                        </select>
                                    </TableCell>
                                    <TableCell><input type="number" value={input2} onChange={e => setInput2(e.target.value)} style={{width:130}}></input></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>당사 청약 신청 건수</TableCell>
                                    <TableCell><input type="number" value={input3} onChange={e => setInput3(e.target.value)} style={{width:130}}></input></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>확정 공모가</TableCell>
                                    <TableCell><input type="number" value={input4} onChange={e => setInput4(e.target.value)} style={{width:130}}></input></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>청약 금액</TableCell>
                                    <TableCell><input type="number" value={input5} onChange={e => setInput5(e.target.value)} style={{width:130}}></input></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><button className="btn-custom-dark mb-2" type="button" onClick={calculate}>계산</button></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>균등 %</TableCell>
                                    <TableCell>{result1}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>비례 배정 수량</TableCell>
                                    <TableCell>{result2}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>주당 비례 필요 금액</TableCell>
                                    <TableCell>{result3}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        
                    </div>
                </article>
            </div>
        </div>
    );
}