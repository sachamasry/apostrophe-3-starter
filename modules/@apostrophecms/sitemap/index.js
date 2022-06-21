// modules/@apostrophecms/sitemap/index.js
module.exports = {
    // 👇 Module options
    options: {
        cacheLifetime: 60 * 60 * 24,
        excludeTypes: [
            '@apostrophecms/global',
            '@apostrophecms/user',
            '@apostrophecms/image',
            '@apostrophecms/image-tag',
            '@apostrophecms/file',
            '@apostrophecms/file-tag',
            'private-page',
            'notifications',
            'notifications-page',
            'reusable-content',
            'reusable-content-page',
            'website-section',
            'website-section-page',
        ],
        piecesPerBatch: 500
    }
};
