import "./modul-fot.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaWhatsapp as FaWhatsapp } from 'react-icons/fa';
import { FiYoutube, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { ApiBrita } from "./api";
import { useEffect, useState } from "react";


function BasicExample() {
    const [datas, setDatas] = useState([])
    const [user, setUser] = useState(" ")

    useEffect(() => {
        ApiBrita()
            .then((e) => setDatas(e))
    }, [])


    const hendelForm = async () => {
        setDatas(await ApiBrita(user))
    }


    return (
        <div>

            <div className="Form-search">
                <div className="input-group">
                    <input type="search" className="form-control" placeholder="search" aria-label="Username"
                        aria-describedby="basic-addon " name="user" onChange={(e) => setUser(e.target.value)} />
                    <button type="submit" className="btn-sum" onClick={hendelForm}>Submit</button>
                </div>
            </div >
            <Container>
                <h2>Mencari Brita</h2>
                <Row md={2}>

                    {
                        datas.map((index) => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" key={index.id} src={index.urlToImage} />
                                    <Card.Body>
                                        <Card.Title key={index.id}>{index.title}</Card.Title>
                                        <Card.Text key={index.id}>
                                            {index.description}
                                        </Card.Text>
                                        <Button variant="primary">Buy Food</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    );
}

const Date = () => {
    return (
        <div>
            <h3 className="h3">informasi</h3>
            <h4>Tentang Kami</h4>
            <table className="tabel">
                <tbody>
                    <tr>
                        <td className="td">Nama</td>
                        <td>: hdfgh</td>
                    </tr>
                    <tr>
                        <td className="td-alamat">Alamat</td>
                        <td> : Bangeran, Dukun, Gresik, Jawa Timur, Indonesia</td>
                    </tr>
                    <tr>
                        <td className="td">Jenis</td>
                        <td>: delivery / cetryn</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><h4 className="h4">Customer Service</h4></td>
                    </tr>
                    <tr>
                        <td><a href="" className="icon-link"><BsFillEnvelopeFill className="email" /></a></td>
                        <td>: eduwork@gmail.com</td>
                    </tr>
                    <tr>
                        <td><a href="" className="icon-link"><FaWhatsapp className="iconsts" /></a></td>
                        <td>: 0853784898</td>
                    </tr>
                </tbody>
            </table>
            <h4 className="p-1">Description</h4>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil,</p>
            <h4 className="media">Media Sosial</h4>
            <div className="sosial">
                <a href="" className="a-link"><FiYoutube /></a>
                <a href="" className="a-link"><FiInstagram /></a>
            </div>
            <div className="sosial">
                <a href="" className="a-link"><FiFacebook /></a>
                <a href="" className="a-link"><FiTwitter /></a>
            </div>
            <img src="https://png.pngtree.com/png-clipart/20221014/ourmid/pngtree-handsome-pizza-delivery-man-delivering-food-png-image_6150767.png" className="img" />
        </div>
    )
}


export { BasicExample, Date };