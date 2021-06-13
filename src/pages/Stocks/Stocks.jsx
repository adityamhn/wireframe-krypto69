import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Loader from '../../components/Loader';
import './Stocks.scss'
import { GetAllCompanies } from '../../services/users.service';
import click_basic from '../../audio/click_basic.wav'


const Stocks = () => {
    const navigate = useNavigate()
    const [searchfield, setSearchfield] = useState("");
    const [companies, setCompanies] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetAllCompanies()
            console.log(res)
            setCompanies(res.data)
        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)
    }, [])



    const filteredStocks = companies.filter((stock) => {

        return (
            stock["Name"].toLowerCase().includes(searchfield.toLowerCase()) ||
            stock["Symbol"].toLowerCase().includes(searchfield.toLowerCase()) ||
            stock["CIK"].toLowerCase().includes(searchfield.toLowerCase()) ||
            stock['Exchange'].toLowerCase().includes(searchfield.toLowerCase()) ||
            stock['Country'].toLowerCase().includes(searchfield.toLowerCase()) ||
            stock['Sector'].toLowerCase().includes(searchfield.toLowerCase()) ||
            stock['Industry'].toLowerCase().includes(searchfield.toLowerCase()) ||
            stock['Currency'].toLowerCase().includes(searchfield.toLowerCase())





        );
    });


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
            <Loader />
        )
    }
    return (
        <Container fluid className='company-stocks-cont'>
            <div className="posts-header">
                <div className="back-cont">
                    <div className="back" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate(-1)}>BACK</div>
                </div>
                <div className="search-cont">
                    <FormControl className="search-field" placeholder='SEARCH' onChange={(e) => setSearchfield(e.target.value)} />
                </div>
            </div>
            <div className="wrapper-header">
                <div className="header-col">
                    <h3 className="title">COMPANY STOCKS</h3>
                </div>
            </div>
            <div className="p-0">
                <Table responsive borderless className="stocks-table">
                    <thead>
                        <tr>
                            <th><div className="d-flex">NAME</div></th>
                            <th><div className="d-flex justify-content-center">MKT CAP</div></th>
                            <th><div className="d-flex justify-content-center">P/E</div></th>
                            <th><div className="d-flex justify-content-center">EMPLOYEES</div></th>
                            <th><div className="d-flex justify-content-center">SECTOR</div></th>
                            <th><div className="d-flex justify-content-center">COUNTRY</div></th>
                            <th><div className="d-flex justify-content-center">EXCHANGE</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStocks.map((stock, index) => {
                            return (
                                <tr className="table-tr " key={index} >
                                    <td className="d-flex"><div onMouseEnter={playClick} onMouseLeave={stopClick} className="d-flex flex-column" onClick={() => navigate(`/companies/${stock._id}`)} ><span className="symbol">{stock.Symbol}</span><span className="name">{stock.Name}</span></div></td>
                                    <td><div className="d-flex justify-content-center">{(Number(stock.MarketCapitalization) / 1000000000).toFixed(2)}B</div></td>
                                    <td><div className="d-flex justify-content-center">{Number(stock.PERatio).toFixed(2)}</div></td>
                                    <td><div className="d-flex justify-content-center">{(Number(stock.FullTimeEmployees) / 1000).toFixed(2)}K</div></td>
                                    <td><div className="d-flex justify-content-center">{stock.Sector}</div></td>
                                    <td><div className="d-flex justify-content-center">{stock.Country}</div></td>
                                    <td><div className="d-flex justify-content-center">{stock.Exchange}</div></td>



                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <audio preload="auto" id="click-audio">
                <source src={click_basic}></source>
            </audio>
        </Container>
    )
}

export default Stocks
