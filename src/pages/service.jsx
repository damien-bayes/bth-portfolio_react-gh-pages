/**
 * Route: Service
 * 
 * File: /src/pages/service.jsx
 */

'use strict';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Layouts */
import Layout from '../components/layouts/base';

/*****************************************************************************/

const services = [
  {
    id: 1,
    name: 'Web Development',
    description: 'Offer reliable web development services worldwide to generate the most remarkable results and strengthen your business',
  },
  {
    id: 2,
    name: 'Database Design',
    description: 'Offer fast and secure database solutions to help you to streamline your workflows and grow your business by effective data management and storage',
  },
];

const Service = () => {
  return (
    <Layout title="Services">
      <div>
        <h1>Service Page</h1>
        <p>Description</p>
      </div>
    </Layout>
  )
}

export default Service;