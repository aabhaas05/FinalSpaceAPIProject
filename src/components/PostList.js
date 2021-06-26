import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://finalspaceapi.com/api/v0/character/';
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({ posts: posts })
    }

    render() {
        const { posts } = this.state;

        return (
            <>
                <h1>List of Final Space Characters</h1>
                {posts && posts.length && posts.map(post =>
                    <div key={post.id}>

                        <label><b>  Name: </b> </label>{post.name}
                        <label><b>  Status: </b> </label>{post.status}
                        <label><b>  Species: </b> </label>{post.species}
                        <label><b>  Hair: </b> </label>{post.hair}
                        <label><b>  Origin: </b> </label>{post.origin}
                        <label><b>  Image: </b></label><img className="char_image" src={post.img_url}></img>
                        <style>{"\
                            .char_image{\
                                width: 2%;\
                                height: 2%;\
                                }\
                        "}</style>
                    </div>)}
            </>
        )
    }
}

export default PostList
