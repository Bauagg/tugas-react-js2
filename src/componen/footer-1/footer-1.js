import "./modul-fot.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaWhatsapp as FaWhatsapp } from 'react-icons/fa';
import { FiYoutube, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";


function BasicExample() {
    return (
        <div>
            <Container>
                <Row md={3}>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://katasumbar.com/wp-content/uploads/2022/06/043061400_1600750232-shutterstock_1786027046-1024x576.webp" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://akcdn.detik.net.id/visual/2020/11/26/ilustrasi-nasi-goreng-1_169.jpeg?w=650&q=90" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://chemilan.com.my/wp-content/uploads/2020/03/nasi-lemak-featured-1024x576.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://navahoteltawangmangu.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-28-at-5.26.43-PM-1024x576.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://dmm0a91a1r04e.cloudfront.net/RDqr2sSIk78oW6oAoiwARv0Rx6w=/1024x576/https%3A%2F%2Fkompas.id%2Fwp-content%2Fuploads%2F2018%2F10%2F71885960_1540651106.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.gresiksatu.com/wp-content/uploads/2022/08/8C3FD071-167E-42AC-AA3D-23627B9455DD-1024x576.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeGNb2g9p4e7UGuPqoCYH0x0vEYDR-liWPg&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://hariane.com/file/2022/07/4-makanan-rendah-kalori-untuk-diet-tak-disangka-mi-ini-salah-satunya.-Foto-Pexels-Lisa-1024x576.webp" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://ceknricek.tv/wp-content/uploads/2023/02/mieayam-1024x576.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Buy Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
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