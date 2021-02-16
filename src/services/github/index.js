/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/
import axios from 'axios';

/*****************************************************************************/

/**
 * Retrieves public GitHub user info by username
 * 
 * @param {*} username 
 */
export const requestForGettingProfile = async (username) => {
  return await axios.get(
    `https://api.github.com/users/${username}`,
    null,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

/***********/
/* EXPORTS */
/***********/

export default {
  requestForGettingProfile,
}