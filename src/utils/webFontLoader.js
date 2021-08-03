/**
 * Web Font Loader takes care of Spin Design System’s font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: [
            // Used only for headers (H1, H2) and for documentation
            'Fira+Sans:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,400',
            // Used for other headers (H3-H6) and text
            'Roboto:ital,wght@0,300;0,400;0,700;1,700'
        ],
    },
});
