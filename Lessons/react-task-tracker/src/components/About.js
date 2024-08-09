import { Link } from 'react-router-dom' // use Link rahter than a -> no reaload

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
