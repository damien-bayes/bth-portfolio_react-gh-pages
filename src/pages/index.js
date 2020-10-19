/**
 * Route: Home
 */

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page 1</h1>
      <p>Description</p>

      <Link href="/work-experience">
        <a>Work Experience</a>
      </Link>
    </div>
  )
}

export default Home;