import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../../QZone/Qzone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google </Button> <br />
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>

            <div className='my-4'>
                <h4>Find On Us</h4>
                <ListGroup >
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>

            <Qzone></Qzone>

            <div>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;