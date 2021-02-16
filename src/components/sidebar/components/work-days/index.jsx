/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import React from 'react';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Styles */
import seriesStyles from 'styles/components/series.module.scss';

/*****************************************************************************/

/**
 * Component: Work days
 */
export const WorkDays = ({ data }) => (
  <>
    {/* Headline */}
    <div className="headline headline--labeled">
      <h2 className="headline__title">Employment</h2>
      <p className="headline__description">Full-time and 5 days a week</p>
    </div>

    <ul className={seriesStyles['series']}>
      {
          data.map((workday, index) => {
            return (
              <li key={index} className={[workday.isActive ? seriesStyles['series__item--active'] : null, seriesStyles['series__item']].join(' ')}>{workday.shortName}</li>
            )
          })
        }
    </ul>
  </>
)

/***********/
/* EXPORTS */
/***********/

export default WorkDays;