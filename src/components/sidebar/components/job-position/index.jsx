/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import React from 'react';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Styles */
import seriesStyles from '../../../../styles/components/series.module.scss';

/*****************************************************************************/

/**
 * Component: Job position
 */
export const JobPosition = ({ data }) => (
  <>
    {/* Headline */}
    <div className="headline headline--labeled">
      <h2 className="headline__title">Job Position</h2>
      <p className="headline__description">{data.name}</p>
    </div>

    <ul className={seriesStyles['series']}>
      {
          data.levels.map((level, index) => {
            return (
              <li key={index} className={[level.isActive ? seriesStyles['series__item--active'] : null, seriesStyles['series__item']].join(' ')}>{level.name}</li>
            )
          })
        }
    </ul>
  </>
)

/***********/
/* EXPORTS */
/***********/

export default JobPosition;