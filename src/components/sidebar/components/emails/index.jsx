/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import React from 'react';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Styles */
import twoLinedTextStyles from '../../../../styles/components/two-lined-text.module.scss';

/*****************************************************************************/

/**
 * Component: Emails
 */
export const Emails = ({ data }) => (
  <>
    {/* Headline */}
    <div className="headline headline--labeled">
      <h2 className="headline__title">Email<span className="badge badge--primary">{data.length}</span></h2>
      <p className="headline__description">Don't feel hesitate to contact me</p>
    </div>

    <ul>
      {
        data.map((email, index) => {
          return (
            <li key={index}>
              <div className={twoLinedTextStyles['two-lined-text']}>
                <p className={twoLinedTextStyles['two-lined-text__chain']}>{email.isPrimary ? 'Primary' : 'Secondary'}</p>
                <h6 className={twoLinedTextStyles['two-lined-text__anchor']}>{email.address}</h6>
              </div>
            </li>
          )
        })
      }
    </ul>
  </>
)

/***********/
/* EXPORTS */
/***********/

export default Emails;