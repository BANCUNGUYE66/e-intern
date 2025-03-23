import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to e-Intern</h1>
      <p>Your gateway to internship opportunities</p>
      <div className="features">
        <h2>What we offer:</h2>
        <ul>
          <li>Find internship opportunities</li>
          <li>Connect with companies</li>
          <li>Track your applications</li>
          <li>Build your professional profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;