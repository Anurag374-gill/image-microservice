const gf = require('../../helpers/GeneralizedFunctions.js');

module.exports = {

    /**
     * generates the image.
     * @param image_url the user's image
     * @param buffer our buffer image
     * @returns {Promise<void>}
     */
    execute: async function(image_url, buffer) {
        return await gf.modifyOverImage(image_url, buffer, 934, 720, 0, 0, 0);
    }
};