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
 * Component: Languages
 */
export const Languages = ({ data }) => (
  <>
    {/* Headline */}
    <div className="headline headline--labeled">
      <h2 className="headline__title">Language Skills<span className="badge badge--primary">{data.length}</span></h2>
    </div>

    <ul>
      {
        data.map((language, index) => {
          return (
            <li key={index}>
              <div className={twoLinedTextStyles['two-lined-text']}>
                <p className={twoLinedTextStyles['two-lined-text__chain']}>{language.level}</p>
                <h6 className={twoLinedTextStyles['two-lined-text__anchor']}>{language.name}</h6>
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

export default Languages;