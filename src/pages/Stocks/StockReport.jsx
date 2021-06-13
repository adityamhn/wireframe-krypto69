import React, { useEffect, useState } from 'react'
import { Container,Image } from 'react-bootstrap'
import './StockReport.scss'
import { useNavigate, useParams } from 'react-router'
import click_basic from '../../audio/click_basic.wav'
import Loader from '../../components/Loader'
import { GetStockReport } from '../../services/users.service'

const StockReport = () => {
    const {stockid} = useParams()
    const navigate = useNavigate()
    const [stock,setStock] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetStockReport(stockid)
            console.log(res)
            setStock(res.data)
        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)
    }, [])




    const playClick = () => {
        const audio = document.getElementById('click-audio')
        audio.play()
    }



    const stopClick = () => {
        const audio = document.getElementById('click-audio')
        audio.pause()
        audio.currentTime = 0;
    }

    if (loading) {
        return (
            <Loader/>
        )
    }
    return (
        <Container fluid className="stock-report-cont">
              <div className="posts-header">
                <div className="back-cont">
                    <div className="back" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate('/companies', { replace: true })}>BACK</div>
                </div>
            </div>
            <div className='wrapper'>
                    <div className="heading">
                        <h3 className="title">STOCK REPORT</h3>
                    </div>
                    <div className="info">
                        <div className="top">
                        <div className="names">
                        <h5 className="sym">{stock.Symbol}</h5>
                            <h6 className="name">{stock.Name}</h6>
                        </div>
                        <div className="main">
                        <div className="topic">
                        <div className="det">{stock.CIK}</div>
                                <div className="lab">CIK</div>
                            </div>
                            <div className="topic">

                                <div className="det">{stock.Exchange}</div>
                                <div className="lab">Exchange</div>
                            </div>
                            <div className="topic">
                                <div className="det">{stock.Currency}</div>
                                <div className="lab">Currency</div>
                            </div>
                            <div className="topic">
                                <div className="det">{Number(stock.EPS).toFixed(2)}</div>
                                <div className="lab">EPS</div>
                            </div>
                            <div className="topic">
                                <div className="det">{Number(stock.PERatio).toFixed(2)}</div>
                                <div className="lab">P/E</div>
                            </div>
                            <div className="topic">
                                <div className="det">{(Number(stock.MarketCapitalization) / 1000000000).toFixed(2)}B</div>
                                <div className="lab">MARKET CAP</div>
                            </div>
                            <div className="topic">
                                <div className="det">{Number(stock.DividendYield)}%</div>
                                <div className="lab">DIV YIELD</div>
                            </div>
                        </div>
                           
                        </div>
                        <div className="second">
                        <div className="left">
                            <h5 className="title">PROFILE</h5>
                            <div className="sector">Asset Type: <span className="det">{stock.AssetType}</span> </div>
                            <div className="sector">Sector: <span className="det">{stock.Sector}</span> </div>
                            <div className="sector">Industry: <span className="det">{stock.Industry}</span> </div>
                            <div className="sector">Country: <span className="det">{stock.Country}</span> </div>
                            <div className="sector">Address: <span className="det">{stock.Address}</span> </div>
                            <div className="desc">
                                {stock.Description}
                            </div>

                        </div>
                        <div className="right">
                            <h5 className="title">Financials</h5>
                            <div className="fin-info-1">
                            <div className="group">
                                <div className="head">Valuation</div>
                                <div className="grp-info">
                                    <div className="lab">Market Capitalization</div>
                                    <div className="det">{(Number(stock.MarketCapitalization) / 1000000000).toFixed(2)}B</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">EBITDA</div>
                                    <div className="det">{(Number(stock.EBITDA) / 1000000000000).toFixed(2)}T</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">Shares Outstanding</div>
                                    <div className="det">{(Number(stock.SharesOutstanding) / 1000000000).toFixed(2)}B</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">Number of Employees</div>
                                    <div className="det">{(Number(stock.FullTimeEmployees) / 1000).toFixed(2)}K</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">Price to sales ratio TTM</div>
                                    <div className="det">{(Number(stock.PriceToSalesRatioTTM)).toFixed(2)}T</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">Price to Earning ratio TTM</div>
                                    <div className="det">{Number(stock.PERatio).toFixed(2)}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">PEG ratio TTM</div>
                                    <div className="det">{Number(stock.PEGRatio).toFixed(2)}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">PriceToBookRatio</div>
                                    <div className="det">{Number(stock.PriceToBookRatio).toFixed(2)}</div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="head">Dividends</div>
                                <div className="grp-info">
                                    <div className="lab">Dividends per Share (FY)</div>
                                    <div className="det">{(Number(stock.DividendPerShare)).toFixed(2)}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">Dividend Yield (FY)</div>
                                    <div className="det">{(Number(stock.DividendYield)).toFixed(2)}</div>
                                </div>
                               
                            </div>
                            </div>

                            <div className="fin-info-1">
                            <div className="group">
                                <div className="head">Operating Metrics</div>
                                <div className="grp-info">
                                    <div className="lab">Revenue Per Share (TTM)</div>
                                    <div className="det">{(Number(stock.RevenuePerShareTTM)).toFixed(2)}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">ReturnOnAssetsTTM</div>
                                    <div className="det">{(Number(stock.ReturnOnAssetsTTM))}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">ReturnOnEquityTTM</div>
                                    <div className="det">{(Number(stock.ReturnOnEquityTTM))}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">RevenueTTM</div>
                                    <div className="det">{(Number(stock.RevenueTTM) / 1000000000).toFixed(2)}B</div>
                                </div>
                               
                            </div>
                            <div className="group">
                                <div className="head">Income Statement</div>
                                <div className="grp-info">
                                    <div className="lab">EPS</div>
                                    <div className="det">{(Number(stock.EPS)).toFixed(2)}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">DilutedEPSTTM</div>
                                    <div className="det">{(Number(stock.DilutedEPSTTM)).toFixed(2)}</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">EBITDA</div>
                                    <div className="det">{(Number(stock.EBITDA) / 1000000000000).toFixed(2)}T</div>
                                </div>
                                <div className="grp-info">
                                    <div className="lab">GrossProfitTTM</div>
                                    <div className="det">{(Number(stock.GrossProfitTTM) / 1000000000).toFixed(2)}B</div>
                                </div>
                              
                            </div>
                            </div>

                            <div className="fin-info-2">
                            <div className="group">
                                <div className="head">Other Details</div>
                                {Object.keys(stock).map((key,index) => (
                                    <>
                                    {index > 12 ?  <div className="grp-info">
                                    <div className="lab">{key}</div>
                                    <div className="det">{stock[key]}</div>
                                </div> : null}
                                </>
                                ))}
                               
                              
                               
                            </div>
                       
                            </div>

                   
                            
                        </div>
                        </div>
                        
                    </div>
                </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </Container>
    )
}

export default StockReport
