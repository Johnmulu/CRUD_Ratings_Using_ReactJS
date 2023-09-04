import Card from "../components/shared/Card";
import { Link } from 'react-router-dom';
function AboutPage() {
  return (
    <Card>
      This is for you to remember.
      <p><Link to='/'>Back to home</Link></p>  
    </Card>
  )
}

export default AboutPage