import Image from 'next/image'
import { prefix } from "../../conifg/config";

export default function Home() {
  return (
      <>
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Web Tool Box</h1>
              <p className="lead fw-normal text-white-50 mb-0">Catalog</p>
            </div>
          </div>
        </header>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Mybatis / Colon</h5>
                      Mybatis 바인딩과 Colon 변경
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={`${prefix}/mbc`}>View</a></div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">텍스트 비교</h5>
                      2 개의 텍스트 비교
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={`${prefix}/diff`}>View</a></div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">공모주 계산기</h5>
                      공모주 균등/비례 배정 계산기
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href={`${prefix}/cal/publicStock`}>View</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}
