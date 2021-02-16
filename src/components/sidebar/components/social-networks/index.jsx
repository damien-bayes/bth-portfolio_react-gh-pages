/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import React from 'react';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Styles */
import socialNetworkStyles from '../../../../styles/components/social-network.module.scss';

/* Settings */
import AppSettings from '../../../../settings/app';

/*****************************************************************************/

/**
 * Component: Social networks
 */
export const SocialNetworks = ({ data }) => (
  <>
    {/* Headline */}
    <div className="headline headline--labeled">
      <h2 className="headline__title">Social Networks<span className="badge badge--primary">{data.length}</span></h2>
    </div>

    {/* Social network list */}
    <ul className={socialNetworkStyles['social-networks']}>
      {
        data.map((socialNetwork, index) => {
          return (
            <li className={socialNetworkStyles['social-networks__item']} key={index}>
              <a href={socialNetwork.url} rel="noreferrer" target="_blank" className={socialNetworkStyles['social-networks__link']}>
                <div className={socialNetworkStyles['social-networks__img-wrapper']}>
                  <img
                    src={AppSettings.prefix + socialNetwork.iconUrl}
                    alt={socialNetwork.name}
                    loading='lazy'/>
                </div>
                
                {socialNetwork.name}
              </a>
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

export default SocialNetworks;