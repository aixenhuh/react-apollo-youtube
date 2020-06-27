import React from 'react';
import '../css/App.css';
export function CardComponent (props) {
    var playlist = props.playlist;

    if(typeof playlist == "undefined") return (
        <div className="wrap_main_content">
            <article class="article">
                <p class="text-lead"> Hi Nice to meet you. 
                    I made this site to study graphQL + Apollo. (And a little bit css..?)<br/>
                    I also made a <a href="https://us-central1-vuewebserver-88b2a.cloudfunctions.net/graphYoutubeServer"><span class="text-secondary">server page</span></a> using ApolloServer and GraphQL. I'm running on Firebase Function and calling this site.<br/>
                    
                </p>
                <iframe title="server" src="https://us-central1-vuewebserver-88b2a.cloudfunctions.net/graphYoutubeServer" width="80%" height="800px"></iframe>
                <p class="text-lead">
                I used the following techniques. Also use <a href="https://www.getpapercss.com/"><span class="text-secondary">page css</span></a>.<br/>
                Thank you. ssong
                </p>
                </article>
            <div className="wrap_main_item1">
                <div class="card" style={{width: '10rem'}}>
                    <img className="card-img" src="img/react.svg" alt="Card example image"/>
                    <div class="card-body">
                        <h4 class="card-title">React</h4>
                        <h5 class="card-subtitle">Nice looking subtitle.</h5>
                        <p class="card-text">Good Framework! Also I use React-Hooks.</p>
                        <a href='https://ko.reactjs.org/'><button>Let me go here!</button></a>
                    </div>
                </div>
                <div class="card" style={{width: '10rem'}}>
                    <img className="card-img" src="img/graphql.svg" alt="Card example image"/>
                    <div class="card-body">
                        <h4 class="card-title">GraphQL</h4>
                        <h5 class="card-subtitle">Nice looking subtitle.</h5>
                        <p class="card-text">Good Framework!</p>
                        <a href='https://graphql.org/'><button>Let me go here!</button></a>
                    </div>
                </div>
                <div class="card" style={{width: '10rem'}}>
                    <img className="card-img" className="card-img" src="img/apollo-graphql-compact.svg" alt="Card example image"/>
                    <div class="card-body">
                        <h4 class="card-title">APOLLO</h4>
                        <h5 class="card-subtitle">Nice looking subtitle.</h5>
                        <p class="card-text">Good Framework!</p>
                        <a href='https://www.apollographql.com/'><button>Let me go here!</button></a>
                    </div>
                </div>
                <div class="card" style={{width: '10rem'}}>
                    <img className="card-img"src="img/firebase.svg" alt="Card example image"/>
                    <div class="card-body">
                        <h4 class="card-title">FIREBASE</h4>
                        <h5 class="card-subtitle">Nice looking subtitle.</h5>
                        <p class="card-text">Good Framework!</p>
                        <a href='https://firebase.google.com/?hl=ko'><button>Let me go here!</button></a>
                    </div>
                </div>
                <div className="card-img" class="card" style={{width: '10rem'}}>
                    <img className="card-img" src="img/webpack-icon.svg" alt="Card example image"/>
                    <div class="card-body">
                        <h4 class="card-title">WEBPACK</h4>
                        <h5 class="card-subtitle">Nice looking subtitle.</h5>
                        <p class="card-text">Good Framework!</p>
                        <a href='https://webpack.js.org/'><button>Let me go here!</button></a>
                    </div>
                </div>
                <div className="card-img" class="card" style={{width: '10rem'}}>
                    <img className="card-img" src="img/es6.svg" alt="Card example image"/>
                    <div class="card-body">
                        <h4 class="card-title">ES6</h4>
                        <h5 class="card-subtitle">Nice looking subtitle.</h5>
                        <p class="card-text">Good Framework!</p>
                        <a href='https://www.w3schools.com/Js/js_es6.asp'><button>Let me go here!</button></a>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row flex-spaces">
            <div class="alert alert-danger">
            It works well for chrome.</div>
            </div>
        </div>
        
    );
    var playlistcard = playlist.playlist;
    var cardlist = playlistcard.map((item) => {
        return(
            <li className='list_article_item'>
                <a href={`https://www.youtube.com/watch?v=${item.videoId}`} class="link_post">
                    <div class="post_title has_image">
                        <strong class="tit_subject">{item.title}</strong>
                        <div class="wrap_sub_content">
                            {/* <em class="tit_sub">{item.description}</em> <span class="ico_bar"></span> */}
                            <span class="article_content">{item.description}</span>
                        </div>
                        <span class="mobile_d_n post_append">
                            <span class="name_txt">공유</span>
                            <span class="num_txt">0</span>
                            <span class="ico_dot"></span>
                            <span class="name_txt">댓글</span>
                            <span class="num_txt">0</span>
                            <span class="ico_dot"></span>
                            <span class="publish_time">5분전</span>
                            <span class="ico_dot"></span>
                            <span class="ico_by">by</span>
                            <span class="name_txt">Alicia</span>
                        </span>
                    </div>
                    <div class="post_thumb">
                        <img src={item.thumbnails.high.url} width="120" height="120" class="img_thumb" alt="" />
                    </div>
                </a>
            </li>
        )
    })

    return (
        <main>
            <div className="wrap_contents">
                <div className="wrap_article">
                    <div className="wrap_article_list #keyword_related_contents">
                        <ul class="list_article list_common">
                            {cardlist}
                        </ul>
                        </div>
                </div>
            </div>
        </main>
    ) ;
}