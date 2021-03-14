import Alert from '../components/Alert';
import Button from '../components/Button';
import Card from '../components/Card';
import MediaCard from '../components/MediaCard';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <>
            <Nav />
            <div className="container mt-5">
                {/* Component using React */}
                <Button>Hello</Button>
                {/* Component with css */}
                <button className="btn btn-blue">Hello</button>
                {/* Alert */}
                <Alert alertTitle="Attention!">Please update your password!</Alert>
            </div>
            {/* Card */}
            <Card
                imgSrc="https://conceptdraw.com/a155c4/p60/preview/640/pict--code-cloud-round-icons-vector-stencils-library"
                imgAlt="An image"
                title="Hello"
            >
                Hello, world!
            </Card>
            <div className="container mt-5 mx-auto px-2 md:flex">
                <MediaCard
                    title="Testing"
                    imgSrc="https://i.ibb.co/mJJNkTJ/img2.jpg"
                    imgAlt=""
                    desc="Helping in spotting unseen bugs and peculiarities"
                />
                <MediaCard
                    title="Analytics"
                    desc="Figuring out how well your app is doing"
                    imgSrc="https://i.ibb.co/w4wGYvQ/img1.jpg"
                    imgAlt=""
                />
            </div>
        </>
    );
};

export default Home;
