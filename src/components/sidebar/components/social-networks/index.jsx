/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Styles */
import socialNetworkStyles from 'styles/components/social-network.module.scss';

/* Settings */
import AppSettings from 'settings/app';
import { route } from 'next/dist/next-server/server/router';

/*****************************************************************************/

/**
 * Component: Social networks
 */
export const SocialNetworks = ({ data }) => {
  const router = useRouter();

  return (
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
                <Link href={socialNetwork.url} passHref={true}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    onClick={() => router.push(socialNetwork.url)}
                    className={socialNetworkStyles['social-networks__link']}
                  >
                    <div className={socialNetworkStyles['social-networks__img-wrapper']}>
                      <img
                        src={AppSettings.prefix + socialNetwork.iconUrl}
                        alt={socialNetwork.name}
                        loading='lazy'/>
                    </div>
                    
                    {socialNetwork.name}
                  </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

/***********/
/* EXPORTS */
/***********/

export default SocialNetworks;