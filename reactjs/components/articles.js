let template = `
<ul className="posts">
    {posts.map(post => (
        <li key={post.id}>{post.title}</li>
    ))}
</ul>
`;

export default function Articles() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => {
                const top3 = response.data.slice(0, 3);
                let merged = [];
                if(top3 && top3.length>0) {
                    top3.forEach(article => {
                        axios.get(`https://hacker-news.firebaseio.com/v0/item/${article}.json`)
                        .then(response => {
                            merged.push(response.data);
                            if(merged.length === top3.length)setPosts(merged);
                        })
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};