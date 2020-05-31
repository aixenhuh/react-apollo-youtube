import React, {useState, useRef} from 'react';
import { Container, Row, Col, Form,FormGroup, Label, Input, ButtonToggle  } from 'reactstrap';
import {CardComponent} from './CardComponent'
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_PLAYLIST = gql`
    query getPlayList($title: String!) {
        playlist(title:$title) {
            channelId,
            title,
            description,
            thumbnails {
                high {
                    url
                }
            }
        }
    }
`;

export function SearchComponent () {
    const [title, setTitle] = useState("");
    const [getYoutube, {loading, data}] = useLazyQuery(GET_PLAYLIST, {
        variables : {title}
    });
    const titleForm = useRef(null);

    const searchYoutube = () => {
        const form = titleForm.current;
        console.log(form['title'].value);
        setTitle(form['title'].value);
        getYoutube();
    }

    if(loading) return <p>Loading...</p>;
    return (
        <Container className="themed-container">
            <Row>
            <Col>
                <Form>
                <FormGroup>
                    <Label for="search">Search Title</Label>
                    <form ref={titleForm}>
                        <Input type="value" name='title' placeholder="place searchName" />
                    </form>
                    </FormGroup>
                </Form>
            </Col>
            <Col>
            <div>
                <ButtonToggle color="primary" onClick={(e)=>searchYoutube()}>primary</ButtonToggle>{' '}
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
                <CardComponent playlist={data} />
            </Col>
            </Row>
        </Container>
    )
}