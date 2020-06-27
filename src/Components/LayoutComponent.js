import React, {useState, useRef} from 'react';
import {CardComponent} from './CardComponent'
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Input, ButtonToggle  } from 'reactstrap';

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
            },
            videoId
        }

    }
`;

export function LayoutComponent () {
    const [title, setTitle] = useState("");
    const [getYoutube, {loading, data}] = useLazyQuery(GET_PLAYLIST, {
        variables : {title}
    });
    const titleForm = useRef(null);

    const searchYoutube = () => {
        const form = titleForm.current;
        setTitle(form['title'].value);
        getYoutube();
    }

    if(loading) return (
    <div class="progressBar">
        <div class="progressItem">
            <div class="row">
                <div class="progress margin-bottom">
                    <div class="bar muted w-100">100%</div>
                </div>
            </div>
        </div>
    </div>);
    return (
            <div class="main">
                    <div className="wrap_keyword_name">
                        <div className="wrap_content">        
                            <div className="wrap_item1">
                                <form ref={titleForm}>
                                    <div class="col sm-12">
                                        <div class="form-group">
                                            <label for="paperInputs3">Please Input Something</label>
                                            <input class="input-block" name='title' type="text" id="paperInputs3"  placeholder="place searchName"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="wrap_item2">
                                <ButtonToggle color="primary" onClick={(e)=>searchYoutube()} >Search</ButtonToggle>{' '}
                            </div>
                        </div>
                    </div>
                    <CardComponent playlist={data} />
            </div>
    )
}