import React from "react";
import "../css/BannerComponent.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BannerComponent = () => {
    return (
        <div id="banner">
            <Row style={{ padding: '0px', margin: '0px' }}>
                <Col sm={6}>
                    <div id="banner-section">
                        <h1 id="banner-title">Taste the Fresh, Love the Flavor</h1>
                        <h3>Serving Coffee, Fresh Boba Tea, Fresh Fruit Smoothies, and Acai Bowls</h3>
                    </div>
                </Col>
                <Col id="banner-image-container" >
                    <div>
                        {/* <Image className="loc-img" src={locationIMG} alt="locationIMG" /> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BannerComponent;