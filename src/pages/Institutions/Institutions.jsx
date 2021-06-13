import React, { useEffect, useState } from 'react'
import { Container, FormControl, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Loader from '../../components/Loader'
import { GetAllGovtInst } from '../../services/users.service'
import './Institutions.scss'
import click_basic from '../../audio/click_basic.wav'


const Institutions = () => {
    const navigate = useNavigate()
    const [searchfield, setSearchfield] = useState("");
    const [institutions, setInstitutions] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(async () => {
        setLoading(true)
        try {
            const res = await GetAllGovtInst()
            console.log(res)
            setInstitutions(res.data)
        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)
    }, [])



    const filteredInst = institutions.filter((inst) => {

        return (
            inst.variable.toLowerCase().includes(searchfield.toLowerCase()) ||
            inst.area_name.toLowerCase().includes(searchfield.toLowerCase()) ||
            inst.type.toLowerCase().includes(searchfield.toLowerCase()) ||
            inst.year.toString().toLowerCase().includes(searchfield.toLowerCase()) ||
            inst.value.toString().toLowerCase().includes(searchfield.toLowerCase())





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
        <Container fluid className="govt-inst-cont">
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
                    <h3 className="title">GOVERNMENT INSTITUTIONS</h3>
                </div>
            </div>
            <div className="p-0">
                <Table responsive borderless className="stocks-table">
                    <thead>
                        <tr>
                            <th><div className="d-flex" >VARIABLE</div></th>
                            <th><div className="d-flex justify-content-center">TYPE</div></th>
                            <th><div className="d-flex justify-content-center">AREA</div></th>
                            <th><div className="d-flex justify-content-center">YEAR</div></th>
                            <th><div className="d-flex justify-content-center">VALUE</div></th>

                        </tr>
                    </thead>
                    <tbody>
                        {filteredInst.map((inst, index) => {
                            return (
                                <tr className="table-tr " key={index} >
                                    <td className="d-flex"><div className="d-flex flex-column" onMouseEnter={playClick} onMouseLeave={stopClick} onClick={() => navigate(`/govt-institutions/${inst._id}`)} >{inst.variable}</div></td>
                                    <td><div className="d-flex justify-content-center">{inst.type}</div></td>
                                    <td><div className="d-flex justify-content-center">{inst.area_name}</div></td>
                                    <td><div className="d-flex justify-content-center">{inst.year}</div></td>
                                    <td><div className="d-flex justify-content-center">{inst.value}</div></td>



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

export default Institutions
